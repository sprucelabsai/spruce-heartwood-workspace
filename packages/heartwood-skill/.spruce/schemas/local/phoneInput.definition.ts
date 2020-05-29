import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'

const phoneInputDefinition: SpruceSchemas.Local.PhoneInput.IDefinition  = {
	id: 'phoneInput',
	name: 'Phone input',
	description: 'Collect a phone number with area and country codes',
	    fields: {
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                options: {schemas: [labelDefinitionLocal],}
	            },
	            /** Small. Render a small variation of the phone input */
	            'isSmall': {
	                label: 'Small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Render a small variation of the phone input',
	                options: undefined
	            },
	            /** Helper. */
	            'helper': {
	                label: 'Helper',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [inputHelperDefinitionLocal],}
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
	            /** Autofocus. Focus when paid loads */
	            'autoFocus': {
	                label: 'Autofocus',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Focus when paid loads',
	                options: undefined
	            },
	    }
}

export default phoneInputDefinition
