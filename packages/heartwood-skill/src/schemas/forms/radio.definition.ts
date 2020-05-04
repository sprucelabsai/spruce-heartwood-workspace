import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import labelDefinition from './label.definition'
import inputHelperDefinition from './inputHelper.definition'

const radioDefinition = buildSchemaDefinition({
	id: 'radio',
	name: 'Radio',
	description:
		'A radio control. Give a bunch the same name to keep them as part of the same group',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		name: {
			type: FieldType.Text,
			label: 'Name',
			hint: 'A name attached to this radio button'
		},
		label: {
			type: FieldType.Schema,
			label: 'Label',
			options: {
				schema: labelDefinition
			}
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
		onChange: {
			type: FieldType.EventCallback,
			label: 'Change handler',
			hint: 'Optional action to invoke when tapped',
			options: {
				event: 'React.ChangeEvent<...>',
				element: 'HTMLInputElement'
			}
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		helper: {
			type: FieldType.Schema,
			label: 'Helper',
			options: {
				schema: inputHelperDefinition
			}
		}
	}
})

export default radioDefinition
