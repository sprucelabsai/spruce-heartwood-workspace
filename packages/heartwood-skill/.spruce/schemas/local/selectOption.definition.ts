import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const selectOptionDefinition: SpruceSchemas.Local.SelectOption.IDefinition  = {
	id: 'selectOption',
	name: 'Select option',
	    fields: {
	            /** Value. */
	            'value': {
	                label: 'Value',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                options: undefined
	            },
	    }
}

export default selectOptionDefinition
