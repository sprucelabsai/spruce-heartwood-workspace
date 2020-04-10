import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import calendarEventDetailsItemDefinition from '../../src/schemas/calendars/calendarEventDetails.definition'

type CalendarEventDetailsItemDefinition = typeof calendarEventDetailsItemDefinition
export interface ICalendarEventDetailsItemDefinition extends CalendarEventDetailsItemDefinition {}

// All the details attached to an event. Shown on click of the event.
export interface ICalendarEventDetailsItem extends SchemaDefinitionValues<ICalendarEventDetailsItemDefinition> {}
export interface ICalendarEventDetailsItemInstance extends Schema<ICalendarEventDetailsItemDefinition> {}
