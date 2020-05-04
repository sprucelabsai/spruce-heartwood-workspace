import React from 'react'
import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import Form from '../../Form'
import FormLayout from '../FormLayout'

const defaults = defaultProps(SpruceSchemas.Local.FormBuilder.definition)

class FormBuilder extends React.Component<
	SpruceSchemas.Local.IFormBuilder & typeof defaults
> {
	public static defaultProps = defaults

	public render(): React.ReactElement {
		const { schema, sections, ...form } = this.props
		console.log(schema)
		return (
			<Form {...form}>
				{sections.map(section => {
					// Const { title, spacing, fields } = section
					return <FormLayout key={'new id'}>{section}</FormLayout>
				})}
			</Form>
		)
	}
}

export default FormBuilder
