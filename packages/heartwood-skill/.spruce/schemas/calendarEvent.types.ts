import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import calendarEventDefinition from '../../src/schemas/calendars/calendarEvent.definition'

type CalendarEventDefinition = typeof calendarEventDefinition
export interface ICalendarEventDefinition extends CalendarEventDefinition {}

// How an event will be rendered in the calendar. Each time represents a standard state of an event.
export interface ICalendarEvent extends SchemaDefinitionValues<ICalendarEventDefinition> {}
export interface ICalendarEventInstance extends Schema<ICalendarEventDefinition> {}
