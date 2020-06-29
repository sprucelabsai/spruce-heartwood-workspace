import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import inputEventsDefinition from './inputEvents.definition'
import labelDefinition from './label.definition'

const sliderDefinition = buildSchemaDefinition({
	id: 'slider',
	name: 'Slider',
	description: 'A simple sliding control',
	fields: {
		...inputEventsDefinition.fields,
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		label: {
			type: FieldType.Schema,
			label: 'Label',
			options: {
				schema: labelDefinition
			}
		},
		name: {
			type: FieldType.Text,
			label: 'Name'
		},
		min: {
			type: FieldType.Number,
			label: 'Minimum',
			hint: 'The left most value of the slider',
			isRequired: true
		},
		max: {
			type: FieldType.Number,
			label: 'Maximum',
			hint: 'The right most value of the slider',
			isRequired: true
		},
		value: {
			type: FieldType.Number,
			label: 'Value',
			hint: 'The value of the slider',
			isRequired: true
		},
		isDisabled: {
			type: FieldType.Boolean,
			label: 'Disabled'
		}
	}
})

export default sliderDefinition
