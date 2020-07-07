import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import LayoutBuilder from '../../../LayoutBuilder/LayoutBuilder'

const LayoutSection = (props: SpruceSchemas.Local.ILayoutSection) => {
	const { className, isSecondary, children, layoutBuilder } = props

	return (
		<div
			className={cx('layout__section', className, {
				'layout__section--secondary': isSecondary,
			})}
		>
			{children}
			{layoutBuilder && <LayoutBuilder {...layoutBuilder} />}
		</div>
	)
}

LayoutSection.displayName = 'Layout.Section'
LayoutSection.defaultProps = {
	isSecondary: false,
}

export default LayoutSection
