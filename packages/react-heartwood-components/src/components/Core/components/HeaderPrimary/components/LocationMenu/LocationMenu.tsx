import React, { Component } from 'react'
import cx from 'classnames'
import { VelocityTransitionGroup } from 'velocity-react'
import Card from '../../../../../Card/Card'
import List from '../../../../../List/List'
import Button from '../../../../../Button/Button'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

interface ILocationMenuProps {
	isMenuVisible: boolean
	onClick: SpruceSchemas.Local.IButton['onClick']
	locationManagementHref?: string
	locationName: string
	locationAddress: string
}

interface ILocationMenuState {
	menuPosX: number
}

export default class LocationMenu extends Component<
	ILocationMenuProps,
	ILocationMenuState
> {
	public state = {
		menuPosX: 0
	}
	public menuWrapper: any

	public componentDidMount = () => {
		this.updateMenuPosition()

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', this.updateMenuPosition, false)
		}
	}

	public componentWillUnmount = () => {
		this.updateMenuPosition()

		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', this.updateMenuPosition, false)
		}
	}

	public updateMenuPosition = () => {
		const { menuPosX } = this.state
		const menuWidth = 256
		const minMargin = 2
		const menuOffsetLeft = this.menuWrapper.offsetLeft
		let diffX = 0
		if (typeof window !== 'undefined') {
			diffX = menuOffsetLeft + menuWidth + minMargin - window.innerWidth
		}
		if (diffX > 0) {
			this.setState({
				menuPosX: diffX
			})
		} else if (menuPosX > 0) {
			this.setState({
				menuPosX: 0
			})
		}
	}

	public render() {
		const {
			isMenuVisible,
			onClick,
			locationManagementHref,
			locationName,
			locationAddress
		} = this.props
		const { menuPosX } = this.state
		return (
			<div
				className="header-primary__shortcut-btn-wrapper"
				ref={ref => (this.menuWrapper = ref)}
			>
				<Button
					onClick={onClick}
					className={cx('header-primary__shortcut-btn', {
						'header-primary__shortcut-btn--is-active': isMenuVisible
					})}
					icon={{ name: 'location' }}
					text="Location"
					isIconOnly
				/>
				<VelocityTransitionGroup
					enter={{
						animation: {
							opacity: 1,
							translateY: '0px'
						},
						duration: 200
					}}
					leave={{
						animation: {
							opacity: 0,
							translateY: '4px'
						},
						duration: 0
					}}
				>
					{isMenuVisible && (
						<div className="header-primary__location-menu-wrapper">
							<div
								className="header-primary__location-menu-position"
								style={{
									transform: `translate(${-menuPosX}px, 0)`
								}}
							>
								<Card className="header-primary__location-menu">
									<List
										className="header-primary__location-info"
										items={[
											{
												title: locationName,
												subtitle: locationAddress,
												icon: {
													name: 'location',
													isLineIcon: true
												}
											}
										]}
									/>
									<Button
										kind={'simple'}
										className="header-primary__location-management-btn"
										text="Manage locations"
										href={locationManagementHref}
									/>
								</Card>
							</div>
						</div>
					)}
				</VelocityTransitionGroup>
			</div>
		)
	}
}
