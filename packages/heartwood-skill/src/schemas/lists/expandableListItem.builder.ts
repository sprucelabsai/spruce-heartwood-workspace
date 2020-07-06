import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import listItemDefinition from './listItem.builder'
import iconDefinition from '../icon.builder'

const expandableListItemDefinition = buildSchemaDefinition({
	id: 'expandableListItem',
	name: 'Expandable list item',
	fields: {
		...listItemDefinition.fields,
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		isExpandable: {
			type: FieldType.Boolean,
			label: 'Expandable',
			hint: 'Enables a little disclosure triangle to hide/show the item'
		},
		isExpanded: {
			type: FieldType.Boolean,
			label: 'Expanded',
			hint: 'If Expandable is true, will open or close the item'
		},
		collapsedIcon: {
			type: FieldType.Schema,
			label: 'Collapsed icon',
			options: {
				schema: iconDefinition
			}
		},
		expandedIcon: {
			type: FieldType.Schema,
			label: 'Expanded icon',
			options: {
				schema: iconDefinition
			}
		},
		onClick: {
			type: FieldType.EventCallback,
			options: {
				event: 'React.MouseEvent<...>',
				element: 'HTMLDivElement'
			}
		}
	}
})

export default expandableListItemDefinition
