import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import avatarDefinition from './avatar.definition'

const userAvatarDefinition = buildSchemaDefinition({
	id: 'userAvatar',
	name: 'User avatar',
	description: 'Avatar tied to a core user',
	fields: {
		user: {
			type: FieldType.Schema,
			label: 'User',
			isRequired: true,
			options: {
				schema: SpruceSchemas.core.User.definition
			}
		},
		...avatarDefinition.fields
	}
})

export default userAvatarDefinition
