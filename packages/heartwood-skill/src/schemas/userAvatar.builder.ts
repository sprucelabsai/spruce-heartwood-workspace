import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import avatarDefinition from './avatar.builder'

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
				schemaId: 'user'
			}
		},
		...avatarDefinition.fields
	}
})

export default userAvatarDefinition
