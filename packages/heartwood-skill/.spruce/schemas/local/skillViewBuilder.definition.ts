import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import skillViewHeaderDefinitionLocal from '#spruce/schemas/local/skillViewHeader.definition'
import layoutBuilderDefinitionLocal from '#spruce/schemas/local/layoutBuilder.definition'

const skillViewBuilderDefinition: SpruceSchemas.Local.SkillViewBuilder.IDefinition  = {
	id: 'skillViewBuilder',
	name: 'Skill view builder',
	description: 'A view you\'re presenting to a person on an unknown set of devices',
	    fields: {
	            /** Centered. Is all content centered? */
	            'isCentered': {
	                label: 'Centered',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is all content centered?',
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** . */
	            'sidebarChildren': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** Header. */
	            'header': {
	                label: 'Header',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [skillViewHeaderDefinitionLocal],}
	            },
	            /** Collapse sidebar. Will hide the sidebar */
	            'isSidebarCollapsed': {
	                label: 'Collapse sidebar',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Will hide the sidebar',
	                options: undefined
	            },
	            /** Collapse header. Will hide the header */
	            'isHeaderCollapsed': {
	                label: 'Collapse header',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Will hide the header',
	                options: undefined
	            },
	            /** Content layout. */
	            'contentLayout': {
	                label: 'Content layout',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [layoutBuilderDefinitionLocal],}
	            },
	            /** Content layout. */
	            'sidebarLayout': {
	                label: 'Content layout',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [layoutBuilderDefinitionLocal],}
	            },
	    }
}

export default skillViewBuilderDefinition
