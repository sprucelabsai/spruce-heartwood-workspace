import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const sprucebotTypedMessageAvatarDefinition: SpruceSchemas.Local.SprucebotTypedMessageAvatar.IDefinition  = {
	id: 'sprucebotTypedMessageAvatar',
	name: 'Typed message avatar',
	description: 'Avatar that makes size optional for use with the Sprucebot Typed Message component',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Second Field. A hint */
	            'stateOfMind': {
	                label: 'Second Field',
	                type: SpruceSchema.FieldType.Select,
	                isRequired: true,
	                hint: 'A hint',
	                defaultValue: "medium",
	                options: {choices: [{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}],}
	            },
	            /** Size. */
	            'size': {
	                label: 'Size',
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "medium",
	                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
	            },
	    }
}

export default sprucebotTypedMessageAvatarDefinition
