import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import { sizeChoices } from './sprucebotAvatar.definition'

const sprucebotTypedMessageDefinition = buildSchemaDefinition({
	id: 'sprucebotTypedMessage',
	name: 'Sprucebot typed message',
	description: '',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true
		},
		sentences: {
			type: FieldType.Schema,
			label: 'Sentences',
			isRequired: true,
			isArray: true,
			hint:
				'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)',
			options: {
				schema: {
					id: 'sprucebotTypedMessageSentence',
					name: 'Sprucebot Typed sentence',
					fields: {
						avatar: {
							type: FieldType.Schema,
							hint: 'A way to override the Sprucebot avatar for this sentence',
							options: {
								schemaId: 'sprucebotAvatar'
							}
						},
						words: {
							type: FieldType.Text,
							label: 'Words',
							hint: 'The words being typed out'
						},
						endDelay: {
							type: FieldType.Duration,
							label: 'End delay',
							hint: "How long should I hold on this sentence after it's typed?"
						}
					}
				}
			}
		},
		defaultAvatar: {
			type: FieldType.Schema,
			label: 'Default avatar',
			hint: 'How should Sprucebot be rendered by default',
			options: {
				schemaId: 'sprucebotAvatar'
			}
		},
		startDelay: {
			type: FieldType.Duration,
			label: 'Start delay',
			hint: 'How long should I wait before starting to type?'
		},
		loop: {
			type: FieldType.Boolean,
			label: 'Loop'
		},
		size: {
			type: FieldType.Select,
			label: 'Size',
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

export default sprucebotTypedMessageDefinition
