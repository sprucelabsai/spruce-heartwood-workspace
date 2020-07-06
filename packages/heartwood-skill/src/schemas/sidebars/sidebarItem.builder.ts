import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import buttonDefinition from '../forms/button.builder'

const sidebarDefinition = buildSchemaDefinition({
	id: 'sidebarItem',
	name: 'Sidebar item',
	description: 'An element that makes up the sidebar',
	fields: {
		items: {
			type: FieldType.Schema,
			label: 'Subitems',
			hint: 'Rendered under the text as subitems',
			isArray: true,
			options: {
				schemaId: 'sidebarItem'
			}
		},
		icon: {
			type: FieldType.Schema,
			label: 'Icon',
			options: {
				schemaId: 'icon'
			}
		},
		button: {
			type: FieldType.Schema,
			label: 'Button',
			options: {
				schema: buttonDefinition
			}
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'Rendered in the body of this item'
		},
		href: {
			type: FieldType.Text,
			isPrivate: true,
			label: 'href'
		},
		isCurrent: {
			type: FieldType.Boolean,
			label: 'Current',
			hint:
				'If this item is the current one, it is rendered differently to call it out'
		}
	}
})

export default sidebarDefinition
