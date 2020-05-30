import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import userDefinitionCore from '#spruce/schemas/core/user.definition'

const userAvatarDefinition: SpruceSchemas.Local.UserAvatar.IDefinition  = {
	id: 'userAvatar',
	name: 'User avatar',
	description: 'Avatar tied to a core user',
	    fields: {
	            /** User. */
	            'user': {
	                label: 'User',
	                type: FieldType.Schema,
	                isRequired: true,
	                options: {schemas: [userDefinitionCore],}
	            },
	            /** Source. */
	            'src': {
	                label: 'Source',
	                type: FieldType.Text,
	                isRequired: true,
	                options: undefined
	            },
	            /** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
	            'alt': {
	                label: 'Alternate text',
	                type: FieldType.Text,
	                isRequired: true,
	                hint: 'Provides alternative information for an image if a user for some reason cannot view it',
	                options: undefined
	            },
	            /** Is large. True will show large variation of the avatar */
	            'isLarge': {
	                label: 'Is large',
	                type: FieldType.Boolean,
	                hint: 'True will show large variation of the avatar',
	                options: undefined
	            },
	            /** Is large. Align text and name center */
	            'isVertical': {
	                label: 'Is large',
	                type: FieldType.Boolean,
	                hint: 'Align text and name center',
	                options: undefined
	            },
	            /** Show online indicator. Should I should the status indicator */
	            'showIndicator': {
	                label: 'Show online indicator',
	                type: FieldType.Boolean,
	                hint: 'Should I should the status indicator',
	                options: undefined
	            },
	            /** Status. */
	            'status': {
	                label: 'Status',
	                type: FieldType.Select,
	                options: {choices: [{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}],}
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: FieldType.Text,
	                options: undefined
	            },
	            /** Text. Additional text to show below the name */
	            'text': {
	                label: 'Text',
	                type: FieldType.Text,
	                hint: 'Additional text to show below the name',
	                options: undefined
	            },
	            /** Class name. Set the "class" attribute */
	            'className': {
	                label: 'Class name',
	                type: FieldType.Text,
	                hint: 'Set the "class" attribute',
	                options: undefined
	            },
	            /** Width. */
	            'width': {
	                label: 'Width',
	                type: FieldType.Number,
	                options: undefined
	            },
	            /** Height. */
	            'height': {
	                label: 'Height',
	                type: FieldType.Number,
	                options: undefined
	            },
	    }
}

export default userAvatarDefinition
