import * as SpruceSchema from '@sprucelabs/schema'
import Schema, { ISchemaDefinition } from '@sprucelabs/schema'

/**
import sprucebotAvatarDefinition from '../../src/schemas/sprucebotAvatar.definition'
type SprucebotAvatarDefinition = typeof sprucebotAvatarDefinition
*/

export interface ISprucebotAvatarDefinition extends ISchemaDefinition {
	id: 'sprucebotAvatar',
	name: 'SprucebotAvatar',
	description: 'Make it great!',
	
	
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                
	                isRequired: true,
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Second Field. A hint */
	            'stateOfMind': {
	                label: 'Second Field',
	                type: SpruceSchema.FieldType.Select,
	                
	                isRequired: true,
	                hint: 'A hint',
	                
	                
	                
	                
	                options: {choices: [{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}],}
	            },
	            /** Size. */
	            'size': {
	                label: 'Size',
	                type: SpruceSchema.FieldType.Select,
	                
	                isRequired: true,
	                
	                
	                
	                
	                
	                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
	            },
	    }
}

export const sprucebotAvatarDefinition : ISprucebotAvatarDefinition = {
	id: 'sprucebotAvatar',
	name: 'SprucebotAvatar',
	description: 'Make it great!',
	
	
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                
	                isRequired: true,
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Second Field. A hint */
	            'stateOfMind': {
	                label: 'Second Field',
	                type: SpruceSchema.FieldType.Select,
	                
	                isRequired: true,
	                hint: 'A hint',
	                
	                
	                
	                
	                options: {choices: [{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}],}
	            },
	            /** Size. */
	            'size': {
	                label: 'Size',
	                type: SpruceSchema.FieldType.Select,
	                
	                isRequired: true,
	                
	                
	                
	                
	                
	                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
	            },
	    }
}

// Make it great!
export interface ISprucebotAvatar {
	
		/** Id. */
		'id': string
		/** Second Field. A hint */
		'stateOfMind': string
		/** Size. */
		'size': string
}
export interface ISprucebotAvatarInstance extends Schema<ISprucebotAvatarDefinition> {}
