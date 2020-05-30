import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
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
	                type: FieldType.Id,
	                options: undefined
	            },
	            /** Simple. Render a simpler variation */
	            'isSimple': {
	                label: 'Simple',
	                type: FieldType.Boolean,
	                hint: 'Render a simpler variation',
	                options: undefined
	            },
	            /** Disabled. */
	            'isDisabled': {
	                label: 'Disabled',
	                type: FieldType.Boolean,
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: FieldType.Text,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: FieldType.Schema,
	                options: {schemas: [labelDefinitionLocal],}
	            },
	            /** Value. */
	            'value': {
	                label: 'Value',
	                type: FieldType.Text,
	                options: undefined
	            },
	            /** Placeholder. */
	            'placeholder': {
	                label: 'Placeholder',
	                type: FieldType.Text,
	                options: undefined
	            },
	            /** Helper. */
	            'helper': {
	                label: 'Helper',
	                type: FieldType.Schema,
	                options: {schemas: [inputHelperDefinitionLocal],}
	            },
	            /** Options. */
	            'options': {
	                label: 'Options',
	                type: FieldType.Schema,
	                isRequired: true,
	                options: {schemas: [selectOptionDefinitionLocal],}
	            },
	    }
}

export default selectDefinition
