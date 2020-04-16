import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import calendarEventDefinition from '../../src/schemas/calendar/calendarEvent.definition'

type CalendarEventDefinition = typeof calendarEventDefinition
export interface ICalendarEventDefinition extends CalendarEventDefinition {}

// How an event will be rendered in the calendar.
export interface ICalendarEvent extends SchemaDefinitionValues<ICalendarEventDefinition> {}
export interface ICalendarEventInstance extends Schema<ICalendarEventDefinition> {}
