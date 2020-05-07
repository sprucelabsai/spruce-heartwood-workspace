import React from 'react'
import LayoutBuilder from '../../../LayoutBuilder/LayoutBuilder'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

const LayoutSpacing = (props: SpruceSchemas.Local.ILayoutSpacing) => {
	const { direction, amount, children, layoutBuilder } = props

	const prefixes: Record<
		Extract<SpruceSchemas.Local.ILayoutSpacing['direction'], string>,
		string
	> = {
		all: '',
		horizontal: 'x',
		vertical: 'y',
		top: 't',
		right: 'r',
		bottom: 'b',
		left: 'l'
	}

	if (amount < 0 || amount > 12) {
		throw new Error('LayoutSpacing: Invalid spacing amount. Only use 0-12.')
	}

	return (
		<div className={`p${prefixes[direction ?? 'all']}-${amount}`}>
			{children}
			{layoutBuilder && <LayoutBuilder {...layoutBuilder} />}
		</div>
	)
}

export default LayoutSpacing
