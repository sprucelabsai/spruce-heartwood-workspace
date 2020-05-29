import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'

const sliderDefinition: SpruceSchemas.Local.Slider.IDefinition  = {
	id: 'slider',
	name: 'Slider',
	description: 'A simple sliding control',
	    fields: {
	            /** Change handler. */
	            'onChange': {
	                label: 'Change handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.ChangeEvent<...>`,element: `HTMLInputElement`,}
	            },
	            /** Blur handler. */
	            'onBlur': {
	                label: 'Blur handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.FocusEvent<...>`,element: `HTMLInputElement`,}
	            },
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [labelDefinitionLocal],}
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Minimum. The left most value of the slider */
	            'min': {
	                label: 'Minimum',
	                type: SpruceSchema.FieldType.Number,
	                isRequired: true,
	                hint: 'The left most value of the slider',
	                options: undefined
	            },
	            /** Maximum. The right most value of the slider */
	            'max': {
	                label: 'Maximum',
	                type: SpruceSchema.FieldType.Number,
	                isRequired: true,
	                hint: 'The right most value of the slider',
	                options: undefined
	            },
	            /** Value. The value of the slider */
	            'value': {
	                label: 'Value',
	                type: SpruceSchema.FieldType.Number,
	                isRequired: true,
	                hint: 'The value of the slider',
	                options: undefined
	            },
	            /** Disabled. */
	            'isDisabled': {
	                label: 'Disabled',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	    }
}

export default sliderDefinition
