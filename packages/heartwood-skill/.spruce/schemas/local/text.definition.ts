import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const textDefinition: SpruceSchemas.Local.Text.IDefinition = {
	id: 'text',
	name: 'Text',
	description: 'Basic text to be rendered',
	fields: {
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Text,
			options: undefined
		},
		/** Text. the text to render, supports {{handlebars}} and pulls off {{context}} */
		text: {
			label: 'Text',
			type: FieldType.Text,
			hint:
				'the text to render, supports {{handlebars}} and pulls off {{context}}',
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Inline. If true, renders text in a <span /> vs a <p /> */
		isInline: {
			label: 'Inline',
			type: FieldType.Boolean,
			hint: 'If true, renders text in a <span /> vs a <p />',
			defaultValue: false,
			options: undefined
		},
		/** Context. A key/value pair used to populate the {{handlebars}} placeholders of the text prop */
		context: {
			label: 'Context',
			type: FieldType.Raw,
			hint:
				'A key/value pair used to populate the {{handlebars}} placeholders of the text prop',
			options: { valueType: `Record<string, any>` }
		},
		/** . */
		children: {
			type: FieldType.Node,
			options: undefined
		}
	}
}

export default textDefinition
