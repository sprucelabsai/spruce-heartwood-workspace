import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import React from 'react'

const defaults = defaultProps(SpruceSchemas.Local.FormBuilder.definition)

class FormBuilder extends React.Component<
	SpruceSchemas.Local.IFormBuilder & typeof defaults
> {
	public static defaultProps = defaults

	public render(): React.ReactElement {
		return <div>form builder coming soon</div>
	}
}

export default FormBuilder
