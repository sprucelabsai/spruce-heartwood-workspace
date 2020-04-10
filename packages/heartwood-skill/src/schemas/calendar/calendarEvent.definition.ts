import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const calendarEventDefinition = buildSchemaDefinition({
	id: 'calendarEvent',
	name: 'Calendar event',
	description: 'How an event will be rendered in the calendar.',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint: 'Id of the calendar event'
		},
		startAt: {
			type: FieldType.DateTime,
			label: 'Starts at',
			isRequired: true
		},
		collection: {
			type: FieldType.Text,
			label: 'Collection',
			hint:
				'A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar'
		},
		isResizable: {
			type: FieldType.Boolean,
			label: 'Is resizable',
			hint: 'Can this event be resized on the calendar?'
		},
		kind: {
			type: FieldType.Select,
			label: 'Kind',
			hint: "The kind on an event impacts it's visual representation",
			options: {
				choices: [
					{
						label: 'How a calendar event renders by default.',
						value: 'default'
					},
					{
						label: 'If an event is not confirmed.',
						value: 'tentative'
					},
					{
						label: 'When an event is happening right now',
						value: 'active'
					},
					{
						label:
							'If the event represents a time when the person is not available for additional events (usually matches isBusy)',
						value: 'unavailable'
					},
					{
						label:
							'If the event represents a time where the user us unavailable (break or block)',
						value: 'blocked'
					},
					{
						label:
							"The event is ready to go, everyone has confirmed, it just hasn't happened yet",
						value: 'upcoming'
					},
					{
						label: 'If the event is in the past',
						value: 'past'
					},
					{
						label:
							'The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)',
						value: 'warn'
					},
					{
						label:
							'Renders the event in red (the event could have already started but attendees have not confirmed)',
						value: 'critical'
					}
				]
			}
		},
		blocks: {
			type: FieldType.Schema,
			label: 'Blocks',
			isRequired: true,
			isArray: true,
			hint:
				'A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.',
			options: {
				schemaId: 'calendarEventBlock'
			}
		},
		details: {
			type: FieldType.Schema,
			label: 'Details',
			hint: 'Additional details shown after someone taps on an event',
			options: {
				schemaId: 'calendarEventDetails'
			}
		},
		userId: {
			type: FieldType.Id,
			label: 'User id',
			isRequired: true,
			hint: 'The ID of the user this event will render under'
		},
		isDraft: {
			type: FieldType.Boolean,
			label: 'Is draft',
			hint:
				"If this is a draft event (meaning it's not booked, but being setup)"
		},
		hasBorder: {
			type: FieldType.Boolean,
			label: 'Has border',
			hint: 'Should I render a border for this event?'
		}
	}
})

export default calendarEventDefinition
