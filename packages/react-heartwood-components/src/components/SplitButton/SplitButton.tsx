import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Component, Fragment } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button/Button'
import ButtonGroup from '../ButtonGroup/ButtonGroup'

const splitButtonDefaultProps = defaultProps(
	SpruceSchemas.Local.SplitButton.definition
)

interface ISplitButtonState {
	/** Controls whether the actions are visible */
	isVisible: boolean

	/** Where the menu should be positioned */
	menuPosition: {
		top: number
		left: number
		width: number
	}

	/** Which suggestion is highlighted by arrow key navigation */
	highlightedActionIndex: number
}

export default class SplitButton extends Component<
	SpruceSchemas.Local.ISplitButton & typeof splitButtonDefaultProps,
	ISplitButtonState
> {
	public static defaultProps = {
		isFullWidth: false,
		isSmall: false
	}
	public ref = React.createRef<HTMLDivElement>()
	public menuRef = React.createRef<HTMLDivElement>()

	public state = {
		isVisible: false,
		menuPosition: {
			top: 0,
			left: 0,
			width: 0
		},
		highlightedActionIndex: -1
	}

	public componentWillUnmount = () => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('click', this.handleClickOutside, false)
			document.removeEventListener('keyup', this.onKeyUp, false)
		}
	}

	public handleClickOutside = (e: any) => {
		if (
			this.ref.current &&
			this.menuRef.current &&
			!this.ref.current.contains(e.target) &&
			!this.menuRef.current.contains(e.target)
		) {
			this.setState(
				{
					isVisible: false,
					highlightedActionIndex: -1
				},
				() => this.manageListeners()
			)
		}
	}

	public onKeyUp = (e: any) => {
		const { buttons = [] } = this.props
		const { highlightedActionIndex } = this.state
		// Down arrow
		if (e.keyCode === 40) {
			// Update the highlighted suggestion
			this.setState(prevState => ({
				highlightedActionIndex:
					prevState.highlightedActionIndex === buttons.length - 1
						? 0
						: prevState.highlightedActionIndex + 1
			}))
		}

		// Up arrow
		if (e.keyCode === 38) {
			// Update the highlighted suggestion
			this.setState(prevState => ({
				highlightedActionIndex:
					prevState.highlightedActionIndex <= 0
						? buttons.length - 1
						: prevState.highlightedActionIndex - 1
			}))
		}

		// Escape
		if (e.key === 'Escape') {
			this.setState(
				{
					isVisible: false,
					highlightedActionIndex: -1
				},
				() => this.manageListeners()
			)
		}

		// Enter
		if (e.keyCode === 13) {
			// Check if an action is highlighted
			if (highlightedActionIndex > -1) {
				const handler = buttons[highlightedActionIndex].onClick
				// Trigger it if so
				if (handler) {
					handler(e)
				}
				this.toggleActionsVisibility()
			}
		}
	}

	public manageListeners = () => {
		if (typeof document !== 'undefined') {
			if (this.state.isVisible) {
				document.addEventListener('click', this.handleClickOutside, false)
				document.addEventListener('keyup', this.onKeyUp, false)
			} else {
				document.removeEventListener('click', this.handleClickOutside, false)
				document.removeEventListener('keyup', this.onKeyUp, false)
			}
		}
	}

	public getButtonPosition = () => {
		const buttonPosition =
			this.ref.current && this.ref.current.getBoundingClientRect()

		if (buttonPosition) {
			return buttonPosition
		}

		return null
	}

	public getMenuPosition = () => {
		const buttonPosition = this.getButtonPosition()
		const scrollTop =
			typeof document !== 'undefined' &&
			document.documentElement &&
			document.documentElement.scrollTop
				? document.documentElement.scrollTop
				: 0

		if (!buttonPosition) {
			return
		}
		const menuPosition = {
			left: buttonPosition.left,
			top: buttonPosition.bottom + scrollTop + 2,
			width: buttonPosition.width
		}

		this.setState({
			menuPosition
		})
	}

	public toggleActionsVisibility = () => {
		this.getMenuPosition()
		this.setState(
			prevState => ({
				isVisible: !prevState.isVisible,
				highlightedActionIndex: prevState.isVisible
					? -1
					: prevState.highlightedActionIndex
			}),
			() => this.manageListeners()
		)
	}

	public handleClick(e: React.MouseEvent<Element>) {
		const { onClick } = this.props

		this.setState(
			{
				isVisible: false,
				highlightedActionIndex: -1
			},
			() => onClick && onClick(e)
		)
	}

	public render(): React.ReactElement {
		const {
			defaultButton,
			buttons,
			kind,
			isFullWidth,
			isSmall,
			usePortal
		} = this.props
		const { isVisible, menuPosition, highlightedActionIndex } = this.state

		if (!buttons || (buttons && buttons.length === 0)) {
			// TODO: Warn dev if not in production environment; they might wanna use a different component
			return (
				<Button
					isFullWidth={isFullWidth}
					isSmall={isSmall}
					{...defaultButton}
					kind={defaultButton.kind || kind}
					onClick={this.handleClick}
				/>
			)
		}

		return (
			<div
				className={cx('split-button', {
					'split-button--is-full-width': isFullWidth
				})}
				ref={this.ref}
			>
				<div className="split-button__button">
					<Button
						isSmall={isSmall}
						className="split-button__default"
						{...defaultButton}
						kind={defaultButton.kind || kind}
						isFullWidth={false}
						onClick={this.handleClick}
					/>
					<Button
						isSmall={isSmall}
						className="split-button__actions"
						icon={{ name: 'keyboard_arrow_down' }}
						kind={kind}
						onClick={this.toggleActionsVisibility}
					/>
				</div>
				{isVisible && (
					<Fragment>
						{typeof document !== 'undefined' && document.body && usePortal ? (
							createPortal(
								<div
									ref={this.menuRef}
									style={{
										position: 'absolute',
										top: `${menuPosition.top}px`,
										left: `${menuPosition.left}px`,
										width: `${menuPosition.width}px`
									}}
								>
									<ButtonGroup
										kind={'floating'}
										isFullWidth
										buttons={buttons}
										highlightedIndex={highlightedActionIndex}
										onClick={this.handleClick}
									/>
								</div>,
								document.body
							)
						) : (
							<div
								ref={this.menuRef}
								style={{
									position: 'relative',
									top: '2px',
									left: '0',
									width: `${menuPosition.width}px`
								}}
							>
								<ButtonGroup
									kind={'floating'}
									isFullWidth
									buttons={buttons}
									highlightedIndex={highlightedActionIndex}
									onClick={this.handleClick}
								/>
							</div>
						)}
					</Fragment>
				)}
			</div>
		)
	}
}
