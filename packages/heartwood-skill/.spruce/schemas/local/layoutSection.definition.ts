import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import layoutBuilderDefinitionLocal from '#spruce/schemas/local/layoutBuilder.definition'

const layoutSectionDefinition: SpruceSchemas.Local.LayoutSection.IDefinition  = {
	id: 'layoutSection',
	name: 'Layout section',
	description: 'A section that makes up a layout',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Children. */
	            'children': {
	                label: 'Children',
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** Classname. */
	            'className': {
	                label: 'Classname',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Is secondary. Makes this section thinner */
	            'isSecondary': {
	                label: 'Is secondary',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Makes this section thinner',
	                options: undefined
	            },
	            /** Layout builder. */
	            'layoutBuilder': {
	                label: 'Layout builder',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [layoutBuilderDefinitionLocal],}
	            },
	    }
}

export default layoutSectionDefinition
