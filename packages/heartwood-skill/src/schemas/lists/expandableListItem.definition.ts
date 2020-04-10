import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const expandableListItemDefinition = buildSchemaDefinition({
	id: 'expandableListItem',
	name: 'Expandable list item',
	description: 'Wraps a list item to make it expandable',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true
		},
		item: {
			type: FieldType.Schema,
			label: 'Item',
			isRequired: true,
			hint: 'Base list item props',
			options: {
				schemaId: 'listItem'
			}
		},
		list: {
			type: FieldType.Schema,
			label: 'List',
			hint: 'Optional; adds a nested list',
			options: {
				schemaId: 'List'
			}
		},
		lists: {
			type: FieldType.Schema,
			label: 'Lists',
			isRequired: true,
			isArray: true,
			hint: 'Adds multiple lists nested at the same level',
			options: {
				schemaId: 'list'
			}
		},
		collapsedIconName: {
			type: FieldType.Text,
			label: 'Collapsed icon name',
			hint: 'Optional icon for collapsed state'
		},
		expandedIconName: {
			type: FieldType.Text,
			label: 'Expanded icon name',
			hint: 'Optional icon for expanded state'
		}
	}
})

export default expandableListItemDefinition
