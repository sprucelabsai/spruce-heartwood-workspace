import cx from 'classnames'
import React from 'react'
import SkillViewContent from './components/SkillViewContent/SkillViewContent'
import SkillViewHeader from './components/SkillViewHeader/SkillViewHeader'
import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'

const defaults = {} // DefaultProps(SpruceSchemas.Local.SkillView.definition)

export const SkillView = (props: SpruceSchemas.Local.ISkillView) => {
	const {
		children,
		isCentered,
		className,
		header,
		isSidebarCollapsed,
		sidebarChildren,
		isHeaderCollapsed
	} = props
	return (
		<div
			className={cx('page', className, {
				'page--centered': isCentered,
				'page--no-header': isHeaderCollapsed,
				'page--sidebar-is-collapsed': isSidebarCollapsed
			})}
		>
			<div className={'page__content-container'}>
				{header && <SkillViewHeader {...header} />}
				{children && <SkillViewContent>{children}</SkillViewContent>}
			</div>
			{sidebarChildren && (
				<div className={'page__sidebar'}>{sidebarChildren}</div>
			)}
		</div>
	)
}

SkillView.Header = SkillViewHeader
SkillView.Content = SkillViewContent
SkillView.defaultProps = defaults

export default SkillView
