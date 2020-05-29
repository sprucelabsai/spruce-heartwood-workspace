import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import sprucebotTypedMessageSentenceDefinitionLocal from '#spruce/schemas/local/sprucebotTypedMessageSentence.definition'
import sprucebotTypedMessageAvatarDefinitionLocal from '#spruce/schemas/local/sprucebotTypedMessageAvatar.definition'

const sprucebotTypedMessageDefinition: SpruceSchemas.Local.SprucebotTypedMessage.IDefinition  = {
	id: 'sprucebotTypedMessage',
	name: 'Sprucebot typed message',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
	            'sentences': {
	                label: 'Sentences',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                hint: 'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)',
	                isArray: true,
	                options: {schemas: [sprucebotTypedMessageSentenceDefinitionLocal],}
	            },
	            /** Default avatar. How should Sprucebot be rendered by default */
	            'defaultAvatar': {
	                label: 'Default avatar',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'How should Sprucebot be rendered by default',
	                options: {schemas: [sprucebotTypedMessageAvatarDefinitionLocal],}
	            },
	            /** Start delay. How long should I wait before starting to type? */
	            'startDelay': {
	                label: 'Start delay',
	                type: SpruceSchema.FieldType.Duration,
	                hint: 'How long should I wait before starting to type?',
	                defaultValue: {"ms":1000},
	                options: undefined
	            },
	            /** Loop. */
	            'loop': {
	                label: 'Loop',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	            /** Size. */
	            'size': {
	                label: 'Size',
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "small",
	                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
	            },
	            /** Paused. */
	            'paused': {
	                label: 'Paused',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	    }
}

export default sprucebotTypedMessageDefinition
