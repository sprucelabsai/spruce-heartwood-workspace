import React from 'react'
import cx from 'classnames'

interface ISidebarSectionProps {
	/** Children to show in the sidebar section */
	children: Node

	/** Optional classname to add to the section */
	className?: string

	/** Set true to center align horizontally */
	isCentered?: boolean

	isOnlyForMobile?: boolean

	/** Horizontal Spacing options */
	horizontalSpacing?: 'base' | 'loose'

	/** Vertical Spacing options */
	verticalSpacing?: 'base' | 'loose'
}

const SidebarSection = (props: ISidebarSectionProps) => {
	const {
		children,
		className,
		isCentered,
		isOnlyForMobile,
		horizontalSpacing,
		verticalSpacing
	} = props
	return (
		<div
			className={cx('sidebar-section', className, {
				'sidebar-section--show-only-on-mobile': isOnlyForMobile,
				'sidebar-section--centered': isCentered,
				'sidebar-section--horizontal-loose': horizontalSpacing === 'loose',
				'sidebar-section--vertical-loose': verticalSpacing === 'loose'
			})}
		>
			{children}
		</div>
	)
}

SidebarSection.defaultProps = {
	className: '',
	isCentered: false,
	spacing: 'base'
}

export default SidebarSection
