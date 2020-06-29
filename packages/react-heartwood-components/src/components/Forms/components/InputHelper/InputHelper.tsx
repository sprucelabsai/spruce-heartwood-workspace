import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import React from 'react'

const defaults = defaultProps(SpruceSchemas.Local.InputHelper.definition)

const InputHelper = (props: SpruceSchemas.Local.IInputHelper) => {
	const { error, hint, ElementTag } = props
	const Tag = ElementTag ?? defaults.ElementTag
	return <Tag className="input__helper"> {error || hint}</Tag>
}

InputHelper.defaultProps = defaults

export default InputHelper
