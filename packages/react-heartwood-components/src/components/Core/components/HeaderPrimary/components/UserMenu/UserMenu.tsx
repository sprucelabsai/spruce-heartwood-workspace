import React from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import Avatar from '../../../../../Avatar/Avatar'

interface IUserMenuProps {
	/** User image to show in the avatar */
	image?: string | null

	/** User name */
	name?: string | null

	/** Set true to show the menu */
	menuIsVisible: boolean

	/** Handler to toggle menu visibility */
	toggleMenu: (event: React.MouseEvent) => void

	/** Menu children (<ListItem> or <li>) */
	userMenuItems: React.ReactNode

	/** Optional ref used to access UserMenu element */
	userMenuRef?: any
}

const UserMenu = (props: IUserMenuProps) => {
	const {
		image,
		name,
		menuIsVisible,
		toggleMenu,
		userMenuItems,
		userMenuRef
	} = props

	return (
		<div className="user-menu">
			<button
				className="btn header-primary__user-btn"
				onClick={toggleMenu}
				ref={userMenuRef}
			>
				<span className="btn__inner">
					{image && name && (
						<Avatar src={image} alt={name} width={32} height={32} />
					)}
				</span>
			</button>
			<VelocityTransitionGroup
				enter={{
					animation: { opacity: 1, translateY: '4px' },
					duration: 200
				}}
				leave={{
					animation: { opacity: 0, translateY: '8px' },
					duration: 0
				}}
			>
				{menuIsVisible && (
					<ul className="user-menu__menu list card">{userMenuItems}</ul>
				)}
			</VelocityTransitionGroup>
		</div>
	)
}

export default UserMenu
