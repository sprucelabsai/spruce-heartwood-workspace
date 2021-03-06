import React from 'react'
import CloseIcon from '../../../../../../../static/assets/icons/ic_close.svg'
import MenuIcon from '../../../../../../../static/assets/icons/ic_menu.svg'

interface IHamburgerProps {
	/** Set true when the sidebar is visible */
	isSidebarVisible?: boolean

	/** Click handler to toggle sidebar visibility */
	onClick?: (event?: React.MouseEvent) => void
}

const Hamburger = (props: IHamburgerProps) => {
	const { isSidebarVisible, onClick } = props
	return (
		<button className="hamburger btn" type="button" onClick={onClick}>
			{isSidebarVisible ? (
				<CloseIcon className="hamburger__icon" />
			) : (
				<MenuIcon className="hamburger__icon" />
			)}
		</button>
	)
}

export default Hamburger
