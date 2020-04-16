import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

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
		fieldName2: {
			type: FieldType.Number,
			label: 'Second Field',
			isRequired: true,
			hint: 'A hint'
		}
	}
})

export default userAvatarDefinition
