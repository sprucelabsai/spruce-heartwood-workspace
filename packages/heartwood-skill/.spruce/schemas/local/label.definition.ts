import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const labelDefinition: SpruceSchemas.Local.Label.IDefinition  = {
	id: 'label',
	name: 'Label',
	description: 'The label for any input',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Label. */
	            'text': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                options: undefined
	            },
	            /** Post label text. */
	            'postLabel': {
	                label: 'Post label text',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	    }
}

export default labelDefinition
