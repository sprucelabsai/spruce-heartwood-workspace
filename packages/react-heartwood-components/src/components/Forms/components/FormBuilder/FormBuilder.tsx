import React from 'react'
import {
	SpruceSchemas,
	defaultProps,
	formBuilderDefinition
} from '@sprucelabs/heartwood-skill'

const defaults = defaultProps(formBuilderDefinition)

class FormBuilder extends React.Component<
	SpruceSchemas.Local.IFormBuilder & typeof defaults
> {
	public static defaultProps = defaults

	public render(): React.ReactElement {
		return <div>form builder coming soon</div>
	}
}

export default FormBuilder
