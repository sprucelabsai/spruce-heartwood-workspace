import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'

const textareaDefinition: SpruceSchemas.Local.Textarea.IDefinition  = {
	id: 'textarea',
	name: 'Textarea',
	description: 'Big box to type lots of text (with voice support)',
	    fields: {
	            /** id. */
	            'id': {
	                label: 'id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [labelDefinitionLocal],}
	            },
	            /** Helper. */
	            'helper': {
	                label: 'Helper',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [inputHelperDefinitionLocal],}
	            },
	            /** Resize'able. */
	            'isResizeable': {
	                label: 'Resize\'able',
	                type: SpruceSchema.FieldType.Boolean,
	                defaultValue: false,
	                options: undefined
	            },
	            /** Placeholder. */
	            'placeholder': {
	                label: 'Placeholder',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Rows (height). Number of rows of text that will show before scrolling */
	            'rows': {
	                label: 'Rows (height)',
	                type: SpruceSchema.FieldType.Number,
	                hint: 'Number of rows of text that will show before scrolling',
	                options: undefined
	            },
	    }
}

export default textareaDefinition
