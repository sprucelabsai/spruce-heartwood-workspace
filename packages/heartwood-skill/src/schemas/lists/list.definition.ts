import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import listHeaderDefinition from './listHeader.definition'
import radioDefinition from '../forms/radio.definition'
import checkboxDefinition from '../checkbox.definition'

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
				schema: listHeaderDefinition
			}
		},
		items: {
			type: FieldType.Schema,
			label: 'Items',
			isRequired: true,
			isArray: true,
			hint: 'List items',
			options: {
				schemasIds: ['listItem', 'expandableListItem']
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
		className: {
			type: FieldType.Text,
			label: 'Class name',
			isPrivate: true
		},
		children: {
			type: FieldType.Node,
			isPrivate: true
		},
		isLoading: {
			type: FieldType.Boolean,
			label: 'Is loading',
			hint: 'Show loading'
		},
		selectable: {
			type: FieldType.Schema,
			label: 'Selectable',
			hint:
				'Optional: set whether to use checkbox or radio for selectable list items',
			options: {
				schemas: [checkboxDefinition, radioDefinition]
			}
		}
	}
})

export default listDefinition
