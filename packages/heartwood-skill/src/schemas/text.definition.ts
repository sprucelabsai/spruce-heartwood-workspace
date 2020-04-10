import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const textDefinition = buildSchemaDefinition({
	id: 'Text',
	name: 'Text',
	description: 'Basic text to be rendered',
	fields: {
		id: {
			type: FieldType.Text,
			label: 'Id',
			isRequired: true,
			hint: 'Unique id for UI caching'
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'the text to render'
		}
	}
})

export default textDefinition
