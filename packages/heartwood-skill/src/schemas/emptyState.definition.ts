import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const emptyStateDefinition = buildSchemaDefinition({
	id: 'emptyState',
	name: 'Empty state',
	description: 'Used for the empty state of lists',
	fields: {
		fieldName1: {
			type: FieldType.Boolean,
			label: 'First Field',
			isRequired: true
		},
		fieldName2: {
			type: FieldType.Number,
			label: 'Second Field',
			isRequired: true,
			hint: 'A hint'
		}
	}
})

export default emptyStateDefinition
