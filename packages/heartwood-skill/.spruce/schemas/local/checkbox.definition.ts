import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'

const checkboxDefinition: SpruceSchemas.Local.Checkbox.IDefinition = {
	id: 'checkbox',
	name: 'Checkbox',
	description: 'A checkbox!',
	fields: {
		/** Change handler. */
		onChange: {
			label: 'Change handler',
			type: FieldType.EventCallback,
			options: { event: `React.ChangeEvent<...>`, element: `HTMLInputElement` }
		},
		/** Blur handler. */
		onBlur: {
			label: 'Blur handler',
			type: FieldType.EventCallback,
			options: { event: `React.FocusEvent<...>`, element: `HTMLInputElement` }
		},
		/** . */
		id: {
			type: FieldType.Id,
			options: undefined
		},
		/** Name. */
		name: {
			label: 'Name',
			type: FieldType.Text,
			options: undefined
		},
		/** Label. */
		label: {
			label: 'Label',
			type: FieldType.Schema,
			options: { schemas: [labelDefinitionLocal] }
		},
		/** Disabled. */
		isDisabled: {
			label: 'Disabled',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Indeterminate. Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it. */
		isIndeterminate: {
			label: 'Indeterminate',
			type: FieldType.Boolean,
			hint:
				"Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it.",
			options: undefined
		},
		/** Checked. */
		isChecked: {
			label: 'Checked',
			type: FieldType.Boolean,
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Helper. */
		helper: {
			label: 'Helper',
			type: FieldType.Schema,
			options: { schemas: [inputHelperDefinitionLocal] }
		}
	}
}

export default checkboxDefinition
