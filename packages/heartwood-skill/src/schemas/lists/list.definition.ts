import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const listDefinition = buildSchemaDefinition({
	id: 'list',
	name: 'List',
	description: 'A list of information or inputs',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint: 'Unique id for UI caching'
		},
		header: {
			type: FieldType.Schema,
			label: 'Header',
			hint: 'List Header',
			options: {
				schemaId: 'ListHeader'
			}
		},
		items: {
			type: FieldType.Schema,
			label: 'Items',
			isRequired: true,
			isArray: true,
			hint: 'List items',
			options: {
				schemaId: 'listItem'
			}
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Is small',
			hint: 'Set true to make the list smaller'
		},
		areSeparatorsVisible: {
			type: FieldType.Boolean,
			label: 'Are separators visible',
			hint: 'Set to true to show separators between list items'
		},
		selectableType: {
			type: FieldType.Select,
			label: 'Selectable type',
			hint:
				'Optional: set whether to use checkbox or radio for selectable list items',
			options: {
				choices: [
					{
						label: 'Checkbox',
						value: 'checkbox'
					},
					{
						label: 'Radio',
						value: 'radio'
					}
				]
			}
		}
	}
})

export default listDefinition
