import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default function buildEventDetails<
	T extends SpruceSchemas.Local.ICalendarEventDetails
>(eventDetails: T) {
	return eventDetails
}
