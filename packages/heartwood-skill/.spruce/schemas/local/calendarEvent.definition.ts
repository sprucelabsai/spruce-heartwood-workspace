import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import calendarEventBlockDefinitionLocal from '#spruce/schemas/local/calendarEventBlock.definition'
import calendarEventDetailsDefinitionLocal from '#spruce/schemas/local/calendarEventDetails.definition'

const calendarEventDefinition: SpruceSchemas.Local.CalendarEvent.IDefinition  = {
	id: 'CalendarEvent',
	name: 'CalendarEvent',
	description: 'How an event will be rendered in the calendar. Each time represents a standard state of an event.',
	    fields: {
	            /** Id. Id of the calendar event */
	            'id': {
	                label: 'Id',
	                type: FieldType.Id,
	                hint: 'Id of the calendar event',
	                options: undefined
	            },
	            /** Starts at. */
	            'startAt': {
	                label: 'Starts at',
	                type: FieldType.DateTime,
	                isRequired: true,
	                options: undefined
	            },
	            /** Collection. A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar */
	            'collection': {
	                label: 'Collection',
	                type: FieldType.Text,
	                hint: 'A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar',
	                options: undefined
	            },
	            /** Is resizable. Can this event be resized on the calendar? */
	            'isResizable': {
	                label: 'Is resizable',
	                type: FieldType.Boolean,
	                hint: 'Can this event be resized on the calendar?',
	                options: undefined
	            },
	            /** Kind. The kind on an event impacts it's visual representation */
	            'kind': {
	                label: 'Kind',
	                type: FieldType.Select,
	                hint: 'The kind on an event impacts it\'s visual representation',
	                options: {choices: [{"label":"How a calendar event renders by default.","value":"default"},{"label":"If an event is not confirmed.","value":"tentative"},{"label":"When an event is happening right now","value":"active"},{"label":"If the event represents a time when the person is not available for additional events (usually matches isBusy)","value":"unavailable"},{"label":"If the event represents a time where the user us unavailable (break or block)","value":"blocked"},{"label":"The event is ready to go, everyone has confirmed, it just hasn't happened yet","value":"upcoming"},{"label":"If the event is in the past","value":"past"},{"label":"The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)","value":"warn"},{"label":"Renders the event in red (the event could have already started but attendees have not confirmed)","value":"critical"}],}
	            },
	            /** Blocks. A calendar is comprised of blocks of time. You need at least 1 block to have a valid event. */
	            'blocks': {
	                label: 'Blocks',
	                type: FieldType.Schema,
	                isRequired: true,
	                hint: 'A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.',
	                isArray: true,
	                options: {schemas: [calendarEventBlockDefinitionLocal],}
	            },
	            /** Details. Additional details shown after someone taps on an event */
	            'details': {
	                label: 'Details',
	                type: FieldType.Schema,
	                hint: 'Additional details shown after someone taps on an event',
	                options: {schemas: [calendarEventDetailsDefinitionLocal],}
	            },
	            /** User id. The ID of the user this event will render under */
	            'userId': {
	                label: 'User id',
	                type: FieldType.Id,
	                isRequired: true,
	                hint: 'The ID of the user this event will render under',
	                options: undefined
	            },
	            /** Is draft. If this is a draft event (meaning it's not booked, but being setup) */
	            'isDraft': {
	                label: 'Is draft',
	                type: FieldType.Boolean,
	                hint: 'If this is a draft event (meaning it\'s not booked, but being setup)',
	                options: undefined
	            },
	            /** Has border. Should I render a border for this event? */
	            'hasBorder': {
	                label: 'Has border',
	                type: FieldType.Boolean,
	                hint: 'Should I render a border for this event?',
	                options: undefined
	            },
	    }
}

export default calendarEventDefinition
