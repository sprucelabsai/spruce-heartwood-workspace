import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const sprucebotAvatarDefinition: SpruceSchemas.Local.SprucebotAvatar.IDefinition = {
	id: 'sprucebotAvatar',
	name: 'SprucebotAvatar',
	description: 'Make it great!',
	fields: {
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Id,
			options: undefined
		},
		/** Second Field. A hint */
		stateOfMind: {
			label: 'Second Field',
			type: FieldType.Select,
			isRequired: true,
			hint: 'A hint',
			defaultValue: 'medium',
			options: {
				choices: [
					{
						value: 'chill',
						label:
							'Chill - Sprucebot is saying something informative or a salutation'
					},
					{
						value: 'contemplative',
						label: 'Contemplative - Sprucebot is loading or sending data'
					},
					{
						value: 'curious',
						label:
							'Curious - Sprucebot is asking a question or waiting for input'
					},
					{
						value: 'accomplished',
						label:
							'Accomplished - Sprucebot is celebrating because a process has finished'
					}
				]
			}
		},
		/** Size. */
		size: {
			label: 'Size',
			type: FieldType.Select,
			isRequired: true,
			defaultValue: 'medium',
			options: {
				choices: [
					{ value: 'small', label: 'Small' },
					{ value: 'medium', label: 'Medium' },
					{ value: 'large', label: 'Large' }
				]
			}
		}
	}
}

export default sprucebotAvatarDefinition
