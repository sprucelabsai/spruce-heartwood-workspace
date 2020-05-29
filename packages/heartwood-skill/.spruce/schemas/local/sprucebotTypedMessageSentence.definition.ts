import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import sprucebotAvatarDefinitionLocal from '#spruce/schemas/local/sprucebotAvatar.definition'

const sprucebotTypedMessageSentenceDefinition: SpruceSchemas.Local.SprucebotTypedMessageSentence.IDefinition  = {
	id: 'sprucebotTypedMessageSentence',
	name: 'Sprucebot Typed sentence',
	    fields: {
	            /** . A way to override the Sprucebot avatar for this sentence */
	            'avatar': {
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'A way to override the Sprucebot avatar for this sentence',
	                options: {schemas: [sprucebotAvatarDefinitionLocal],}
	            },
	            /** Words. The words being typed out */
	            'words': {
	                label: 'Words',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'The words being typed out',
	                options: undefined
	            },
	            /** End delay. How long should I hold on this sentence after it's typed? */
	            'endDelay': {
	                label: 'End delay',
	                type: SpruceSchema.FieldType.Duration,
	                hint: 'How long should I hold on this sentence after it\'s typed?',
	                options: undefined
	            },
	    }
}

export default sprucebotTypedMessageSentenceDefinition
