import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default function buildCard<T extends SpruceSchemas.Local.ICardBuilder>(
	cardBuilder: T
) {
	return cardBuilder
}
