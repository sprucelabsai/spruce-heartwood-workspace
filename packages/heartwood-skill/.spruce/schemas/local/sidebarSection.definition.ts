import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import cardBuilderDefinitionLocal from '#spruce/schemas/local/cardBuilder.definition'
import layoutDefinitionLocal from '#spruce/schemas/local/layout.definition'
import layoutSpacingDefinitionLocal from '#spruce/schemas/local/layoutSpacing.definition'
import sidebarHeaderDefinitionLocal from '#spruce/schemas/local/sidebarHeader.definition'
import sidebarSectionDefinitionLocal from '#spruce/schemas/local/sidebarSection.definition'

const sidebarSectionDefinition: SpruceSchemas.Local.SidebarSection.IDefinition  = {
	id: 'sidebarSection',
	name: 'Sidebar item',
	description: 'An element that makes up the sidebar',
	    fields: {
	            /** items. */
	            'items': {
	                label: 'items',
	                type: SpruceSchema.FieldType.Schema,
	                isArray: true,
	                options: {schemas: [buttonDefinitionLocal, cardBuilderDefinitionLocal, layoutDefinitionLocal, layoutSpacingDefinitionLocal, sidebarHeaderDefinitionLocal, sidebarSectionDefinitionLocal],}
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Centered. Center everything horizontally */
	            'isCentered': {
	                label: 'Centered',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Center everything horizontally',
	                defaultValue: false,
	                options: undefined
	            },
	            /** Mobile only. Will hide on desktop if true */
	            'isOnlyForMobile': {
	                label: 'Mobile only',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Will hide on desktop if true',
	                defaultValue: false,
	                options: undefined
	            },
	            /** . */
	            'horizontalSpacing': {
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "base",
	                options: {choices: [{"value":"base","label":"Base"},{"value":"loose","label":"Loose"}],}
	            },
	            /** . */
	            'verticalSpacing': {
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "base",
	                options: {choices: [{"value":"base","label":"Base"},{"value":"loose","label":"Loose"}],}
	            },
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	    }
}

export default sidebarSectionDefinition
