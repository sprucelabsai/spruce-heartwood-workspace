import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import sprucebotAvatarDefinition, {
	sizeChoices
} from './sprucebotAvatar.builder'
import sprucebotTypeMessageSentenceDefinition from './sprucebotTypedMessageSentence.builder'

const sprucebotTypeMessageDefinition = buildSchemaDefinition({
	id: 'sprucebotTypedMessage',
	name: 'Sprucebot typed message',
	description: '',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		sentences: {
			type: FieldType.Schema,
			label: 'Sentences',
			isRequired: true,
			isArray: true,
			hint:
				'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)',
			options: {
				schema: sprucebotTypeMessageSentenceDefinition
			}
		},
		defaultAvatar: {
			type: FieldType.Schema,
			label: 'Default avatar',
			hint: 'How should Sprucebot be rendered by default',
			options: {
				schema: {
					id: 'sprucebotTypedMessageAvatar',
					name: 'Typed message avatar',
					description:
						'Avatar that makes size optional for use with the Sprucebot Typed Message component',
					fields: {
						...sprucebotAvatarDefinition.fields,
						size: {
							...sprucebotAvatarDefinition.fields.size,
							isRequired: false
						}
					}
				}
			}
		},
		startDelay: {
			type: FieldType.Duration,
			label: 'Start delay',
			hint: 'How long should I wait before starting to type?',
			defaultValue: { ms: 1000 }
		},
		loop: {
			type: FieldType.Boolean,
			label: 'Loop'
		},
		size: {
			type: FieldType.Select,
			label: 'Size',
			defaultValue: 'small',
			options: {
				choices: sizeChoices
			}
		},
		paused: {
			type: FieldType.Boolean,
			label: 'Paused'
		}
	}
})

export default sprucebotTypeMessageDefinition
