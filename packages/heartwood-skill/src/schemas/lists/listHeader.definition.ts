import { FieldType, buildSchemaDefinition } from '@sprucelabs/schema'

const listHeaderDefinition = buildSchemaDefinition({
	id: 'ListHeader',
	name: 'ListHeader',
	description: '**missing description**',
	fields: {
		title: {
			type: FieldType.Text,
			label: 'Title',
			isRequired: true,
			hint: 'Title to render in the header'
		},
		subtitle: {
			type: FieldType.Text,
			label: 'Subtitle',
			hint: 'Optional subtitle text'
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Is small',
			hint: 'Set true for small lists'
		},
		actions: {
			type: FieldType.Schema,
			label: 'Actions',
			isRequired: true,
			isArray: true,
			hint: 'Buttons to associate with the list header',
			options: {
				schemaId: 'Button'
			}
		}
	}
})

export default listHeaderDefinition
