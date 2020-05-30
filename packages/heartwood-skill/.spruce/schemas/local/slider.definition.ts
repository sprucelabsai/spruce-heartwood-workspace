import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'

const sliderDefinition: SpruceSchemas.Local.Slider.IDefinition  = {
	id: 'slider',
	name: 'Slider',
	description: 'A simple sliding control',
	    fields: {
	            /** Change handler. */
	            'onChange': {
	                label: 'Change handler',
	                type: FieldType.EventCallback,
	                options: {event: `React.ChangeEvent<...>`,element: `HTMLInputElement`,}
	            },
	            /** Blur handler. */
	            'onBlur': {
	                label: 'Blur handler',
	                type: FieldType.EventCallback,
	                options: {event: `React.FocusEvent<...>`,element: `HTMLInputElement`,}
	            },
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: FieldType.Id,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: FieldType.Schema,
	                options: {schemas: [labelDefinitionLocal],}
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: FieldType.Text,
	                options: undefined
	            },
	            /** Minimum. The left most value of the slider */
	            'min': {
	                label: 'Minimum',
	                type: FieldType.Number,
	                isRequired: true,
	                hint: 'The left most value of the slider',
	                options: undefined
	            },
	            /** Maximum. The right most value of the slider */
	            'max': {
	                label: 'Maximum',
	                type: FieldType.Number,
	                isRequired: true,
	                hint: 'The right most value of the slider',
	                options: undefined
	            },
	            /** Value. The value of the slider */
	            'value': {
	                label: 'Value',
	                type: FieldType.Number,
	                isRequired: true,
	                hint: 'The value of the slider',
	                options: undefined
	            },
	            /** Disabled. */
	            'isDisabled': {
	                label: 'Disabled',
	                type: FieldType.Boolean,
	                options: undefined
	            },
	    }
}

export default sliderDefinition
