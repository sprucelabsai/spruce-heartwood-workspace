import React from 'react'
import cx from 'classnames'
import {
	SpruceSchemas,
	defaultProps,
	stripNulls
} from '@sprucelabs/heartwood-skill'
import Label from '../Label/Label'
import InputHelper from '../InputHelper/InputHelper'

const defaults = {} // defaultProps(SpruceSchemas.Local.Textarea.definition)

const TextArea = (props: SpruceSchemas.Local.ITextarea & typeof defaults) => {
	const { id, className, label, helper, isResizeable, ...textareaProps } = props

	const parentClass = cx('text-input', {
		className,
		'text-input--has-error': !!helper?.error
	})

	const inputClass = cx('text-area__input', {
		'text-area__input-no-resize': !isResizeable
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
