import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const textDefinition = buildSchemaDefinition({
	id: 'Text',
	name: 'Text',
	description: 'Basic text to be rendered',
	fields: {
		id: {
			type: FieldType.Text,
			label: 'Id'
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint:
				'the text to render, supports {{handlebars}} and pulls off {{context}}'
		},
		className: {
			type: FieldType.Text
		},
		isInline: {
			type: FieldType.Boolean,
			label: 'Inline',
			defaultValue: false,
			hint: 'If true, renders text in a <span /> vs a <p />'
		},
		context: {
			type: FieldType.Raw,
			label: 'Context',
			hint:
				'A key/value pair used to populate the {{handlebars}} placeholders of the text prop',
			options: {
				valueType: 'Record<string, any>'
			}
		},
		children: {
			type: FieldType.Node,
			isPrivate: true
		}
	}
})

export default textDefinition
