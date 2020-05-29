import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import sidebarItemDefinitionLocal from '#spruce/schemas/local/sidebarItem.definition'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const sidebarItemDefinition: SpruceSchemas.Local.SidebarItem.IDefinition  = {
	id: 'sidebarItem',
	name: 'Sidebar item',
	description: 'An element that makes up the sidebar',
	    fields: {
	            /** Subitems. Rendered under the text as subitems */
	            'items': {
	                label: 'Subitems',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Rendered under the text as subitems',
	                isArray: true,
	                options: {schemas: [sidebarItemDefinitionLocal],}
	            },
	            /** Icon. */
	            'icon': {
	                label: 'Icon',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Button. */
	            'button': {
	                label: 'Button',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Text. Rendered in the body of this item */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Rendered in the body of this item',
	                options: undefined
	            },
	            /** href. */
	            'href': {
	                label: 'href',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Current. If this item is the current one, it is rendered differently to call it out */
	            'isCurrent': {
	                label: 'Current',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'If this item is the current one, it is rendered differently to call it out',
	                options: undefined
	            },
	    }
}

export default sidebarItemDefinition
