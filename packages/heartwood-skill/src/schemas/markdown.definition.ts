import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const markdownDefinition = buildSchemaDefinition({
	id: 'markdown',
	name: 'Markdown',
	description: 'Render markdown beautifully',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			hint: 'Unique ID for view caching.'
		},
		source: {
			type: FieldType.Text,
			label: 'Source',
			isRequired: true,
			hint: 'Markdown text to be rendered'
		}
	}
})

export default markdownDefinition
