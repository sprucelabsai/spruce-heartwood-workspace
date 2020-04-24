import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const radioDefinition = buildSchemaDefinition({
	id: 'Radio',
	name: 'Radio',
	description:
		'A radio control. Give a bunch the same name to keep them as part of the same group',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint: 'Unique identifier'
		},
		name: {
			type: FieldType.Text,
			label: 'Name',
			hint: 'A name attached to this radio button'
		},
		label: {
			type: FieldType.Text,
			label: 'Label',
			hint: 'Label and text for the radio'
		},
		postText: {
			type: FieldType.Text,
			label: 'Post text',
			hint: 'Optional text to show after the label'
		},
		isDisabled: {
			type: FieldType.Boolean,
			label: 'Is disabled',
			hint: 'is this control disabled?'
		},
		isChecked: {
			type: FieldType.Boolean,
			label: 'Is checked',
			hint: 'Is this control checked?'
		},
		onClick: {
			type: FieldType.OnClick,
			label: 'Action',
			hint: 'Optional action to invoke when tapped'
		}
	}
})

export default radioDefinition
