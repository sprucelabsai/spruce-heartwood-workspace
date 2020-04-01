import React from 'react'
import Button from '../../../../../Button/Button'
import ToggleCollapseIcon from '../../../../../../../static/assets/icons/ic_keyboard_arrow_right.svg'

interface ISidebarExpanderProps {
	/** Set true to expand the sidebar */
	isExpanded?: boolean

	/** Handler to toggle sidebar visibility (large screens only) */
	toggleExpanded?: () => void

	/** Handler to force the sidebar closed */
	forceCloseSidebar?: () => void
}

const SidebarExpander = (props: ISidebarExpanderProps) => {
	const { toggleExpanded, forceCloseSidebar } = props
	return (
		<div className="sidebar-collapse">
			<Button
				icon={{
					customIcon: ToggleCollapseIcon
				}}
				onClick={() => {
					toggleExpanded && toggleExpanded()
					forceCloseSidebar && forceCloseSidebar()
				}}
				isSmall
			/>
		</div>
	)
}

export default SidebarExpander
