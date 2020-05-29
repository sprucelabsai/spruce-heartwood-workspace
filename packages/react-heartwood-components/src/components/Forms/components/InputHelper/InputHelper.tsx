import React from 'react'
import {
	SpruceSchemas,
	defaultProps,
	inputHelperDefinition
} from '@sprucelabs/heartwood-skill'

const defaults = defaultProps(inputHelperDefinition)

const InputHelper = (props: SpruceSchemas.Local.IInputHelper) => {
	const { error, hint, ElementTag } = props
	const Tag = ElementTag ?? defaults.ElementTag
	return <Tag className="input__helper"> {error || hint}</Tag>
}

InputHelper.defaultProps = defaults

export default InputHelper
