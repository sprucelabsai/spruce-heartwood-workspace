import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React from 'react'

const Label = (props: SpruceSchemas.Local.ILabel) => {
	const { id, text, postLabel } = props
	return (
		<div className="text-input__pre">
			<label htmlFor={id ?? undefined} className="text-input__label">
				{text}
			</label>
			{postLabel && <span className="text-input__post-label">{postLabel}</span>}
		</div>
	)
}

export default Label
