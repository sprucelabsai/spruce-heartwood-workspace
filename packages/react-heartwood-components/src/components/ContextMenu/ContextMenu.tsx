import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import { debounce } from 'lodash'
import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button/Button'
import ButtonGroup from '../ButtonGroup/ButtonGroup'

interface IContextMenuState {
	/** Show the menu */
	isVisible: boolean

	/** Where the menu should be positioned when visible */
	menuPosition: {
		top: number | null
		left: number | null
	}

	overflowBottom: boolean
	overflowLeft: boolean
}

export default class ContextMenu extends Component<
	SpruceSchemas.Local.IContextMenu,
	IContextMenuState
> {
	public static defaultProps = {
		isRightAligned: false,
		isBottomAligned: false,
		isTextOnly: false,
		isSmall: false,
		className: ''
	}

	public ref: React.RefObject<HTMLDivElement> = React.createRef()
	public menuRef: React.RefObject<HTMLDivElement> = React.createRef()
	public portalEl?: HTMLElement

	public debouncedWindowResize = debounce(() => this.handleWindowResize(), 200)
	public state = {
		isVisible: false,
		overflowBottom: false,
		overflowLeft: false,
		menuPosition: {
			top: null,
			left: null
		}
	}

	public constructor(props: SpruceSchemas.Local.IContextMenu) {
		super(props)

		this.portalEl =
			typeof document !== 'undefined' && document && document.body
				? document.body
				: undefined
	}

	public componentDidMount = () => {
		this.getMenuPlacement()
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', this.debouncedWindowResize, false)
		}
	}

	public componentWillUnmount = () => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('click', this.handleClickOutside, false)
			document.removeEventListener('keyup', this.handleEscape, false)
		}
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', this.debouncedWindowResize, false)
		}
	}

	public handleWindowResize = () => {
		const { isVisible } = this.state
		if (isVisible) {
			this.updateMenuPlacement()
		}
	}

	public getTriggerPlacement = (): DOMRect | null => {
		const triggerPosition =
			this.ref.current && this.ref.current.getBoundingClientRect()

		if (triggerPosition && 'x' in triggerPosition) {
			return triggerPosition
		}

		return null
	}

	public getMenuPlacement = () => {
		const triggerPosition = this.getTriggerPlacement()

		if (!triggerPosition) {
			return
		}

		// TODO position this menu based on screen size
		const isBottomAligned = true
		const isRightAligned = false

		const menuPosition = {
			top: isBottomAligned
				? triggerPosition.y
				: triggerPosition.y + triggerPosition.height,
			left: isRightAligned
				? triggerPosition.x + triggerPosition.width
				: triggerPosition.x
		}

		this.setState({
			menuPosition
		})
	}

	public updateMenuPlacement = () => {
		const scrollTop =
			typeof document !== 'undefined' &&
			document &&
			document.documentElement &&
			document.documentElement.scrollTop
				? document.documentElement.scrollTop
				: 0
		const triggerPosition = this.getTriggerPlacement()
		const menuBox =
			this.menuRef &&
			this.menuRef.current &&
			this.menuRef.current.getBoundingClientRect()
		const portalBox = this.portalEl && this.portalEl.getBoundingClientRect()
		let overflowLeft = false
		let overflowBottom = false
		let newTop: number | null = null
		let newLeft: number | null = null

		if (menuBox && portalBox && triggerPosition) {
			if (
				triggerPosition.x + triggerPosition.width + menuBox.width >
				portalBox.width
			) {
				newLeft = triggerPosition.x + triggerPosition.width
				overflowLeft = true
			} else {
				newLeft = triggerPosition.x
			}

			if (
				scrollTop +
					triggerPosition.y +
					triggerPosition.height +
					menuBox.height >
				scrollTop + portalBox.height
			) {
				newTop = scrollTop + triggerPosition.y
				overflowBottom = true
			} else {
				newTop = scrollTop + triggerPosition.y + triggerPosition.height
			}
		}

		this.setState(prevState => ({
			overflowLeft,
			overflowBottom,
			menuPosition: {
				top: newTop || prevState.menuPosition.top,
				left: newLeft || prevState.menuPosition.left
			}
		}))
	}

	public handleClickOutside = (): void => {
		this.setState(
			{
				isVisible: false
			},
			() => this.manageListeners()
		)
	}

	public handleEscape = (e: any): void => {
		if (e.key === 'Escape') {
			this.setState(
				{
					isVisible: false
				},
				() => this.manageListeners()
			)
		}
	}

	public handleToggle = (): void => {
		// Const { onToggleContextMenuVisible } = this.props

		this.setState(
			prevState => ({
				isVisible: !prevState.isVisible
			}),
			() => {
				this.manageListeners()

				// If (onToggleContextMenuVisible) {
				// 	onToggleContextMenuVisible(this.state.isVisible)
				// }

				if (this.state.isVisible) {
					this.updateMenuPlacement()
				}
			}
		)
	}

	public manageListeners = () => {
		if (typeof document !== 'undefined') {
			if (this.state.isVisible) {
				document.addEventListener('click', this.handleClickOutside, false)
				document.addEventListener('keyup', this.handleEscape, false)
			} else {
				document.removeEventListener('click', this.handleClickOutside, false)
				document.removeEventListener('keyup', this.handleEscape, false)
			}
		}
	}

	public handleClickAction = callback => {
		if (this.props.closeOnSelect) {
			this.handleToggle()
		}
		callback && callback()
	}

	public render(): React.ReactElement {
		const { isVisible, overflowBottom, overflowLeft, menuPosition } = this.state
		const {
			icon,
			isSimple,
			isSmall,
			size,
			text,
			onClick,
			buttons,
			className
		} = this.props
		const buttonClass = cx('context-menu', className, {
			'context-menu--is-visible': isVisible
		})

		// TODO calculate position to know how to align
		const isBottomAligned = true
		const isRightAligned = false

		const menuClass = cx('context-menu__menu', {
			'context-menu__menu-left': isRightAligned || overflowLeft,
			'context-menu__menu-large': size === 'large',
			'context-menu__menu-top': isBottomAligned || overflowBottom
		})

		return (
			<div className={buttonClass} ref={this.ref}>
				<Button
					id="context-menu-button"
					kind={isSimple ? 'simple' : undefined}
					className="context-menu__button"
					onClick={this.handleToggle}
					icon={icon}
					text={text}
					isSmall={isSmall}
				/>
				{isVisible &&
					this.portalEl &&
					createPortal(
						<div
							className={menuClass}
							ref={this.menuRef}
							style={{
								position: 'absolute',
								top:
									typeof menuPosition.top === 'number'
										? `${(menuPosition.top || 0) + 4}px`
										: 'auto',
								left:
									typeof menuPosition.left === 'number'
										? `${(menuPosition.left || 0) + 4}px`
										: 'auto'
							}}
						>
							<ButtonGroup
								kind={'floating'}
								buttons={buttons.map(button => {
									const btnAction = { ...button }
									const oldOnclick = btnAction.onClick
									btnAction.onClick = () => {
										this.handleClickAction(oldOnclick)
									}
									btnAction.className = 'context-menu__item-btn'
									return btnAction
								})}
								onClick={onClick}
							/>
						</div>,
						this.portalEl
					)}
			</div>
		)
	}
}
