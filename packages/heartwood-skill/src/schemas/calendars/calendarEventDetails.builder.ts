import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

/** So we can point to anything consider and event details item */
export const calendarEventDetailItems: [
	'list',
	'button',
	'splitButton',
	'cardBuilder',
	'toast',
	'text',
	'markdown'
] = [
	'list',
	'button',
	'splitButton',
	'cardBuilder',
	'toast',
	'text',
	'markdown'
]

const calendarEventDetailsDefinition = buildSchemaDefinition({
	id: 'calendarEventDetails',
	name: 'Calendar event details',
	description:
		'All the details attached to an event. Shown on click of the event.',
	fields: {
		id: {
			type: FieldType.Text,
			label: 'Id',
			hint:
				'An optional ID for this item; used to allow association with UI Enhancements'
		},
		isLoading: {
			type: FieldType.Boolean,
			label: 'Loading',
			hint: 'Hides everything while loading'
		},
		items: {
			type: FieldType.Schema,
			label: 'Items',
			isRequired: true,
			isArray: true,
			hint: 'The items that make up the event details',
			options: {
				schemaIds: calendarEventDetailItems
			}
		}
	}
})

export default calendarEventDetailsDefinition
