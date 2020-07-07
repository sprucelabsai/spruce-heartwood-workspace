import { buildSchemaDefinition } from '@sprucelabs/schema'
import avatarDefinition from './avatar.builder'
import FieldType from '#spruce:schema/fields/fieldType'

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
				schemaId: 'user',
			},
		},
		...avatarDefinition.fields,
	},
})

export default userAvatarDefinition
