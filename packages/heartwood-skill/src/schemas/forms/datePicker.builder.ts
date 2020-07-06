import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const datePickerDefinition = buildSchemaDefinition({
	id: 'datePicker',
	name: 'Date picker',
	description: 'Pick a date, any date! wrapper for react-dates',
	fields: {
		kind: {
			type: FieldType.Select,
			options: {
				label: 'Singe or range',
				defaultValue: 'singleDate',
				choices: [
					{ value: 'singleDate', label: 'Single date' },
					{ value: 'dateRange', label: 'Date range' }
				]
			}
		},
		onSelectDate: {
			type: FieldType.Raw,
			label: 'Date selection callback',
			options: {
				valueType: '(date: Date) => Promise<void> | void'
			}
		},
		onSelectDateRange: {
			type: FieldType.Raw,
			label: 'Date range selection callback',
			options: {
				valueType:
					'(range: { startDate: Date, endDate: Date }) => Promise<void> | void'
			}
		},
		date: {
			type: FieldType.Date,
			label: 'Selected date',
			hint: 'Use this when kind is "Single date"'
		},
		startDate: {
			type: FieldType.Date,
			label: 'Start date',
			hint: 'Used this when kind is "Date range"'
		},
		endDate: {
			type: FieldType.Date,
			label: 'End date',
			hint: 'Used when kind is "Date range"'
		},
		daySize: {
			type: FieldType.Number,
			label: 'Day size',
			hint: 'The size of the cell for each day',
			defaultValue: 40
		},
		numberOfMonths: {
			type: FieldType.Number,
			label: 'Number of months',
			hint: 'Number of months to show'
		},
		isDayBlocked: {
			type: FieldType.Raw,
			label: 'Day blocker',
			options: {
				valueType: '(day: Date) => boolean'
			}
		}
	}
})

export default datePickerDefinition
