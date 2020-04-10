import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const checkboxDefinition = buildSchemaDefinition({
	id: 'checkbox',
	name: 'Checkbox',
	description: 'The one, the only, checkbox!',
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
			hint: 'A name attached to this checkbox'
		},
		label: {
			type: FieldType.Text,
			label: 'Label',
			hint: 'Input label and text after checkbox icon'
		},
		postText: {
			type: FieldType.Text,
			label: 'Post text',
			hint: 'Optional text to show below the label'
		},
		isDisabled: {
			type: FieldType.Boolean,
			label: 'Is disabled',
			hint: 'is this checkbox disabled'
		},
		isIndeterminate: {
			type: FieldType.Boolean,
			label: 'Is indeterminate',
			isRequired: true,
			hint:
				"Set true if the checkbox is indeterminate (the half checked thing you've seen in some places)"
		},
		isChecked: {
			type: FieldType.Boolean,
			label: 'Is checked',
			hint: 'is this checkbox checked?'
		},
		action: {
			type: FieldType.Action,
			label: 'Action',
			hint: 'Optional action to invoke when tapped'
		}
	}
})

export default checkboxDefinition
