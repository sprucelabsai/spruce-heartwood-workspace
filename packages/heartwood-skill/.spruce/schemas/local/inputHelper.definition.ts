import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const inputHelperDefinition: SpruceSchemas.Local.InputHelper.IDefinition  = {
	id: 'inputHelper',
	name: 'Input helper',
	description: 'For hints and error messages after inputs (if both set, only error shows)',
	    fields: {
	            /** Hint. */
	            'hint': {
	                label: 'Hint',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Error message. */
	            'error': {
	                label: 'Error message',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** . */
	            'htmlFor': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** . */
	            'ElementTag': {
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "p",
	                options: {choices: [{"value":"p","label":"<p/>"},{"value":"label","label":"<label/>"}],}
	            },
	    }
}

export default inputHelperDefinition
