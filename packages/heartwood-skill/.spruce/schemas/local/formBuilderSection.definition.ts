import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const formBuilderSectionDefinition: SpruceSchemas.Local.FormBuilderSection.IDefinition  = {
	id: 'formBuilderSection',
	name: 'Form builder section',
	    fields: {
	            /** Title. */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Spacing. */
	            'spacing': {
	                label: 'Spacing',
	                type: SpruceSchema.FieldType.Select,
	                options: {choices: [{"value":"tight","label":"Tight"},{"value":"base","label":"Base"}],}
	            },
	            /** . */
	            'fields': {
	                type: SpruceSchema.FieldType.Boolean,
	                isArray: true,
	                options: undefined
	            },
	    }
}

export default formBuilderSectionDefinition
