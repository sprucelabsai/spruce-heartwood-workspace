// @flow
import React from 'react'
import Button from '../../../../../Button/Button'
import ToggleCollapseIcon from '../../../../../../../static/assets/icons/ic_keyboard_arrow_right.svg'

type Props = {
	/** Set true to expand the sidebar */
	isExpanded?: boolean | null

	/** Handler to toggle sidebar visibility (large screens only) */
	toggleExpanded?: (() => void) | null

	/** Handler to force the sidebar closed */
	forceCloseSidebar?: (() => void) | null
}

const SidebarExpander = (props: Props) => {
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
