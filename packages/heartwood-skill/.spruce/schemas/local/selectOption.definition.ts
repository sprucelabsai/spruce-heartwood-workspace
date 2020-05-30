import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'


const selectOptionDefinition: SpruceSchemas.Local.SelectOption.IDefinition  = {
	id: 'selectOption',
	name: 'Select option',
	    fields: {
	            /** Value. */
	            'value': {
	                label: 'Value',
	                type: FieldType.Text,
	                isRequired: true,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: FieldType.Text,
	                isRequired: true,
	                options: undefined
	            },
	    }
}

export default selectOptionDefinition
