import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import labelDefinition from './label.builder'
import inputHelperDefinition from './inputHelper.builder'
import inputEventsDefinition from './inputEvents.builder'

const radioDefinition = buildSchemaDefinition({
	id: 'radio',
	name: 'Radio',
	description:
		'A radio control. Give a bunch the same name to keep them as part of the same group',
	fields: {
		...inputEventsDefinition.fields,
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
