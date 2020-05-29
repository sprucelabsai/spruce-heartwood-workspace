import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'
import selectOptionDefinitionLocal from '#spruce/schemas/local/selectOption.definition'

const selectDefinition: SpruceSchemas.Local.Select.IDefinition  = {
	id: 'select',
	name: 'Select',
	description: 'A form select',
	    fields: {
	            /** . */
	            'id': {
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Simple. Render a simpler variation */
	            'isSimple': {
	                label: 'Simple',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Render a simpler variation',
	                options: undefined
	            },
	            /** Disabled. */
	            'isDisabled': {
	                label: 'Disabled',
	                type: SpruceSchema.FieldType.Boolean,
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
	            /** Value. */
	            'value': {
	                label: 'Value',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Placeholder. */
	            'placeholder': {
	                label: 'Placeholder',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Helper. */
	            'helper': {
	                label: 'Helper',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [inputHelperDefinitionLocal],}
	            },
	            /** Options. */
	            'options': {
	                label: 'Options',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                options: {schemas: [selectOptionDefinitionLocal],}
	            },
	    }
}

export default selectDefinition
