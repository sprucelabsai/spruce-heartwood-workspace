import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import listItemDefinition from './listItem.definition'
import iconDefinition from '../icon.definition'

const expandableListItemDefinition = buildSchemaDefinition({
	id: 'expandableListItem',
	name: 'Expandable list item',
	fields: {
		item: {
			type: FieldType.Schema,
			label: 'List item',
			isRequired: true,
			options: {
				schema: listItemDefinition
			}
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
			type: FieldType.OnClick
		}
	}
})

export default expandableListItemDefinition
