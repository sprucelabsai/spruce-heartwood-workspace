import React from 'react'
import { LayoutBuilder } from '../../../LayoutBuilder/LayoutBuilder'
import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import SkillView from '../../SkillView'

const defaults = defaultProps(SpruceSchemas.Local.SkillViewBuilder.definition)

export const SkillViewBuilder = (
	props: SpruceSchemas.Local.ISkillViewBuilder
) => {
	const { contentLayout, sidebarLayout, ...skillView } = props

	const children = contentLayout ? (
		<LayoutBuilder {...contentLayout} />
	) : (
		skillView.children
	)
	const sidebarChildren = sidebarLayout ? (
		<LayoutBuilder {...sidebarLayout} />
	) : (
		skillView.sidebarChildren
	)

	return (
		<SkillView {...skillView} sidebarChildren={sidebarChildren}>
			{children}
		</SkillView>
	)
}

SkillViewBuilder.defaultProps = defaults
export default SkillViewBuilder
