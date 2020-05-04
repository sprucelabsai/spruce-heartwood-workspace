import { SpruceSchemas } from '#spruce/schemas/schemas.types'

type DetailsUnion = SpruceSchemas.Local.ICalendarEventDetails['items'][number]
type Details<T extends DetailsUnion['schemaId']> = DetailsUnion & {
	schemaId: T
}
type DetailValues<T extends DetailsUnion['schemaId']> = Details<T>['values']

export default function buildEventDetailsItem<
	T extends DetailsUnion['schemaId'],
	V extends DetailValues<T>
>(_: T, values: V) {
	return values
}
