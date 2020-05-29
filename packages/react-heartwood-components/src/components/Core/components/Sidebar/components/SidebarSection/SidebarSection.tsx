import cx from 'classnames'
import React from 'react'
import LayoutBuilder from '../../../../../LayoutBuilder/LayoutBuilder'
import {
	defaultProps,
	SpruceSchemas,
	sidebarSectionDefinition
} from '@sprucelabs/heartwood-skill'

const defaults = defaultProps(sidebarSectionDefinition)

const SidebarSection = (props: SpruceSchemas.Local.ISidebarSection) => {
	const {
		children,
		className,
		isCentered,
		isOnlyForMobile,
		horizontalSpacing,
		verticalSpacing,
		items
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
			{items && <LayoutBuilder items={items} />}
		</div>
	)
}

SidebarSection.defaultProps = defaults

export default SidebarSection
