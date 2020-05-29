import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const datePickerDefinition: SpruceSchemas.Local.DatePicker.IDefinition  = {
	id: 'datePicker',
	name: 'Date picker',
	description: 'Pick a date, any date! wrapper for react-dates',
	    fields: {
	            /** . */
	            'kind': {
	                type: SpruceSchema.FieldType.Select,
	                options: {label: `Singe or range`,defaultValue: `singleDate`,choices: [{"value":"singleDate","label":"Single date"},{"value":"dateRange","label":"Date range"}],}
	            },
	            /** Date selection callback. */
	            'onSelectDate': {
	                label: 'Date selection callback',
	                type: SpruceSchema.FieldType.Raw,
	                options: {valueType: `(date: Date) => Promise<void> | void`,}
	            },
	            /** Date range selection callback. */
	            'onSelectDateRange': {
	                label: 'Date range selection callback',
	                type: SpruceSchema.FieldType.Raw,
	                options: {valueType: `(range: { startDate: Date, endDate: Date }) => Promise<void> | void`,}
	            },
	            /** Selected date. Use this when kind is "Single date" */
	            'date': {
	                label: 'Selected date',
	                type: SpruceSchema.FieldType.Date,
	                hint: 'Use this when kind is "Single date"',
	                options: undefined
	            },
	            /** Start date. Used this when kind is "Date range" */
	            'startDate': {
	                label: 'Start date',
	                type: SpruceSchema.FieldType.Date,
	                hint: 'Used this when kind is "Date range"',
	                options: undefined
	            },
	            /** End date. Used when kind is "Date range" */
	            'endDate': {
	                label: 'End date',
	                type: SpruceSchema.FieldType.Date,
	                hint: 'Used when kind is "Date range"',
	                options: undefined
	            },
	            /** Day size. The size of the cell for each day */
	            'daySize': {
	                label: 'Day size',
	                type: SpruceSchema.FieldType.Number,
	                hint: 'The size of the cell for each day',
	                defaultValue: 40,
	                options: undefined
	            },
	            /** Number of months. Number of months to show */
	            'numberOfMonths': {
	                label: 'Number of months',
	                type: SpruceSchema.FieldType.Number,
	                hint: 'Number of months to show',
	                options: undefined
	            },
	            /** Day blocker. */
	            'isDayBlocked': {
	                label: 'Day blocker',
	                type: SpruceSchema.FieldType.Raw,
	                options: {valueType: `(day: Date) => boolean`,}
	            },
	    }
}

export default datePickerDefinition
