import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import sprucebotAvatarDefinition from './sprucebotAvatar.builder'

const sprucebotTypeMessageSentenceDefinition = buildSchemaDefinition({
	id: 'sprucebotTypedMessageSentence',
	name: 'Sprucebot Typed sentence',
	fields: {
		avatar: {
			type: FieldType.Schema,
			hint: 'A way to override the Sprucebot avatar for this sentence',
			options: {
				schema: sprucebotAvatarDefinition
			}
		},
		words: {
			type: FieldType.Text,
			label: 'Words',
			hint: 'The words being typed out',
			isRequired: true
		},
		endDelay: {
			type: FieldType.Duration,
			label: 'End delay',
			hint: "How long should I hold on this sentence after it's typed?"
		}
	}
})

export default sprucebotTypeMessageSentenceDefinition
