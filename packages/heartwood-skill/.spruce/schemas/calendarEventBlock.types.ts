import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import calendarEventBlockDefinition from '../../src/schemas/calendars/calendarEventBlock.definition'

type CalendarEventBlockDefinition = typeof calendarEventBlockDefinition
export interface ICalendarEventBlockDefinition extends CalendarEventBlockDefinition {}

// A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks.
export interface ICalendarEventBlock extends SchemaDefinitionValues<ICalendarEventBlockDefinition> {}
export interface ICalendarEventBlockInstance extends Schema<ICalendarEventBlockDefinition> {}
