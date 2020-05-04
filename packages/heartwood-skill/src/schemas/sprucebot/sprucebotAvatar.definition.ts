import {
	buildSchemaDefinition,
	FieldType,
	ISelectFieldDefinitionChoice
} from '@sprucelabs/schema'

export const sizeChoices: ISelectFieldDefinitionChoice[] = [
	{
		value: 'small',
		label: 'Small'
	},
	{
		value: 'medium',
		label: 'Medium'
	},
	{
		value: 'large',
		label: 'Large'
	}
]

const sprucebotAvatarDefinition = buildSchemaDefinition({
	id: 'sprucebotAvatar',
	name: 'SprucebotAvatar',
	description: 'Make it great!',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		stateOfMind: {
			type: FieldType.Select,
			label: 'Second Field',
			isRequired: true,
			hint: 'A hint',
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
		size: {
			type: FieldType.Select,
			label: 'Size',
			isRequired: true,
			options: {
				choices: sizeChoices
			}
		}
	}
})

export default sprucebotAvatarDefinition
