import * as SpruceSchema from '@sprucelabs/schema'
import Schema, { ISchemaDefinition } from '@sprucelabs/schema'

/**
import avatarDefinition from '../../src/schemas/avatar.definition'
type AvatarDefinition = typeof avatarDefinition
*/

export interface IAvatarDefinition extends ISchemaDefinition {
	id: 'avatar',
	name: 'Avatar',
	description: 'A photo of a person that is generally round',
	
	
	    fields: {
	            /** Source. */
	            'src': {
	                label: 'Source',
	                type: SpruceSchema.FieldType.Text,
	                
	                isRequired: true,
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
	            'alt': {
	                label: 'Alternate text',
	                type: SpruceSchema.FieldType.Text,
	                
	                isRequired: true,
	                hint: 'Provides alternative information for an image if a user for some reason cannot view it',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Is large. True will show large variation of the avatar */
	            'isLarge': {
	                label: 'Is large',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                hint: 'True will show large variation of the avatar',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Is large. Align text and name center */
	            'isVertical': {
	                label: 'Is large',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                hint: 'Align text and name center',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Show online indicator. Should I should the status indicator */
	            'showIndicator': {
	                label: 'Show online indicator',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                hint: 'Should I should the status indicator',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Status. */
	            'status': {
	                label: 'Status',
	                type: SpruceSchema.FieldType.Select,
	                
	                
	                
	                
	                
	                
	                
	                options: {choices: [{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}],}
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Text. Additional text to show below the name */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'Additional text to show below the name',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Class name. Set the "class" attribute */
	            'className': {
	                label: 'Class name',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'Set the "class" attribute',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Width. */
	            'width': {
	                label: 'Width',
	                type: SpruceSchema.FieldType.Number,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Height. */
	            'height': {
	                label: 'Height',
	                type: SpruceSchema.FieldType.Number,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

export const avatarDefinition : IAvatarDefinition = {
	id: 'avatar',
	name: 'Avatar',
	description: 'A photo of a person that is generally round',
	
	
	    fields: {
	            /** Source. */
	            'src': {
	                label: 'Source',
	                type: SpruceSchema.FieldType.Text,
	                
	                isRequired: true,
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
	            'alt': {
	                label: 'Alternate text',
	                type: SpruceSchema.FieldType.Text,
	                
	                isRequired: true,
	                hint: 'Provides alternative information for an image if a user for some reason cannot view it',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Is large. True will show large variation of the avatar */
	            'isLarge': {
	                label: 'Is large',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                hint: 'True will show large variation of the avatar',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Is large. Align text and name center */
	            'isVertical': {
	                label: 'Is large',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                hint: 'Align text and name center',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Show online indicator. Should I should the status indicator */
	            'showIndicator': {
	                label: 'Show online indicator',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                hint: 'Should I should the status indicator',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Status. */
	            'status': {
	                label: 'Status',
	                type: SpruceSchema.FieldType.Select,
	                
	                
	                
	                
	                
	                
	                
	                options: {choices: [{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}],}
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Text. Additional text to show below the name */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'Additional text to show below the name',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Class name. Set the "class" attribute */
	            'className': {
	                label: 'Class name',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'Set the "class" attribute',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Width. */
	            'width': {
	                label: 'Width',
	                type: SpruceSchema.FieldType.Number,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Height. */
	            'height': {
	                label: 'Height',
	                type: SpruceSchema.FieldType.Number,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

// A photo of a person that is generally round
export interface IAvatar {
	
		/** Source. */
		'src': string
		/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
		'alt': string
		/** Is large. True will show large variation of the avatar */
		'isLarge'?: boolean
		/** Is large. Align text and name center */
		'isVertical'?: boolean
		/** Show online indicator. Should I should the status indicator */
		'showIndicator'?: boolean
		/** Status. */
		'status'?: string
		/** Name. */
		'name'?: string
		/** Text. Additional text to show below the name */
		'text'?: string
		/** Class name. Set the "class" attribute */
		'className'?: string
		/** Width. */
		'width'?: number
		/** Height. */
		'height'?: number
}
export interface IAvatarInstance extends Schema<IAvatarDefinition> {}
