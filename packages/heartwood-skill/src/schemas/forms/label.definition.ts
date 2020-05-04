import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const labelDefinition = buildSchemaDefinition({
	id: 'label',
	name: 'Label',
	description: 'The label for any input',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		text: {
			type: FieldType.Text,
			label: 'Label',
			isRequired: true
		},
		postLabel: {
			type: FieldType.Text,
			label: 'Post label text'
		}
	}
})

export default labelDefinition
