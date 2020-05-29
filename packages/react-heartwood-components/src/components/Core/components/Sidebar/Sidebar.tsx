import cx from 'classnames'
import React from 'react'
import Button from '../../../Button/Button'
import Text from '../../../Text/Text'
import SidebarExpander from './components/SidebarExpander/SidebarExpander'
import SidebarItem from './components/SidebarItem/SidebarItem'
import SidebarSection from './components/SidebarSection/SidebarSection'
import {
	SpruceSchemas,
	defaultProps,
	sidebarDefinition
} from '@sprucelabs/heartwood-skill'

const defaults = defaultProps(sidebarDefinition)

const Sidebar = (props: SpruceSchemas.Local.ISidebar) => {
	const {
		items,
		sections,
		backLink,
		children,
		footerChildren,
		isExpanded,
		isLarge,
		isCollapsible,
		isMobileExpanded,
		side,
		mobileHeader,
		onToggleExpanded,
		onForceCollapse
	} = props

	return (
		<aside
			className={cx('sidebar', {
				'sidebar--left': side === 'left',
				'sidebar--right': side === 'right',
				'sidebar--large': isLarge,
				'sidebar--is-collapsed': !isExpanded,
				'sidebar--is-mobile-expanded': isMobileExpanded
			})}
		>
			{mobileHeader && (
				<SidebarSection className="sidebar-header sidebar-header--mobile">
					<Text className="sidebar-header__title">{mobileHeader.title}</Text>
					{mobileHeader.button && <Button {...mobileHeader.button} />}
				</SidebarSection>
			)}
			<div className="sidebar__inner">
				{items && items.length > 0 && (
					<ul className="sidebar__items">
						{items.map((item, idx) => (
							<SidebarItem key={idx} {...item} />
						))}
						{backLink && (
							<SidebarItem
								key="sidebar-back-link"
								className="sidebar-item__back-link"
								icon={
									backLink.icon || {
										name: 'arrow_back',
										className: 'sidebar-item__icon--fill'
									}
								}
								{...backLink}
							/>
						)}
						``
					</ul>
				)}
				<div className="sidebar__content">
					{children}
					{sections &&
						sections.map((section, idx) => (
							<SidebarSection key={`sidebar-section-${idx}`} {...section} />
						))}
				</div>
			</div>
			{footerChildren && footerChildren}
			{isCollapsible && (
				<SidebarExpander
					toggleExpanded={onToggleExpanded}
					isExpanded={isExpanded}
					forceCloseSidebar={onForceCollapse}
				/>
			)}
		</aside>
	)
}

Sidebar.defaultProps = defaults

export default Sidebar
