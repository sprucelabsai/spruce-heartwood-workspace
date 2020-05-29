import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import iconDefinitionLocal from '#spruce/schemas/local/icon.definition'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const emptyStateDefinition: SpruceSchemas.Local.EmptyState.IDefinition  = {
	id: 'emptyState',
	name: 'Empty state',
	description: 'Used for the empty state of lists',
	    fields: {
	            /** Heading. */
	            'heading': {
	                label: 'Heading',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                defaultValue: "Nothing to see here",
	                options: undefined
	            },
	            /** Subheading. */
	            'subheading': {
	                label: 'Subheading',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Icon. */
	            'icon': {
	                label: 'Icon',
	                type: SpruceSchema.FieldType.Schema,
	                defaultValue: {"name":"empty_box","isLineIcon":true},
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Primary button. */
	            'primaryButton': {
	                label: 'Primary button',
	                type: SpruceSchema.FieldType.Schema,
	                defaultValue: {"kind":"simple"},
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	    }
}

export default emptyStateDefinition
