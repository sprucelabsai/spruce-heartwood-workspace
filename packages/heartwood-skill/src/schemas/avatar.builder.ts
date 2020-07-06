import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const avatarDefinition = buildSchemaDefinition({
	id: 'avatar',
	name: 'Avatar',
	description: 'A photo of a person that is generally round',
	fields: {
		src: {
			type: FieldType.Text,
			label: 'Source',
			isRequired: true
		},
		alt: {
			type: FieldType.Text,
			label: 'Alternate text',
			isRequired: true,
			hint:
				'Provides alternative information for an image if a user for some reason cannot view it'
		},
		isLarge: {
			type: FieldType.Boolean,
			label: 'Is large',
			hint: 'True will show large variation of the avatar'
		},
		isVertical: {
			type: FieldType.Boolean,
			label: 'Is large',
			hint: 'Align text and name center'
		},
		showIndicator: {
			type: FieldType.Boolean,
			label: 'Show online indicator',
			hint: 'Should I should the status indicator'
		},
		status: {
			type: FieldType.Select,
			label: 'Status',
			options: {
				choices: [
					{ value: 'online', label: 'Online' },
					{ value: 'offline', label: 'Offline' }
				]
			}
		},
		name: {
			type: FieldType.Text,
			label: 'Name'
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'Additional text to show below the name'
		},
		className: {
			type: FieldType.Text,
			label: 'Class name',
			isPrivate: true,
			hint: 'Set the "class" attribute'
		},
		width: {
			type: FieldType.Number,
			label: 'Width'
		},
		height: {
			type: FieldType.Number,
			label: 'Height'
		}
	}
})

export default avatarDefinition
