import {
	SpruceSchemas,
	defaultProps,
	stripNulls,
	textAreaDefinition,
} from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import InputHelper from '../InputHelper/InputHelper'
import Label from '../Label/Label'

const defaults = defaultProps(textAreaDefinition)

const TextArea = (props: SpruceSchemas.Local.ITextarea & typeof defaults) => {
	const { id, className, label, helper, isResizeable, ...textareaProps } = props

	const parentClass = cx('text-input', {
		className,
		'text-input--has-error': !!helper?.error,
	})

	const inputClass = cx('text-area__input', {
		'text-area__input-no-resize': !isResizeable,
	})

	return (
		<div className={parentClass}>
			{label && <Label {...label} />}
			<textarea
				id={id ?? undefined}
				className={inputClass}
				{...stripNulls(textareaProps)}
			/>
			{helper && <InputHelper {...helper} />}
		</div>
	)
}

TextArea.defaultProps = defaults

export default TextArea
