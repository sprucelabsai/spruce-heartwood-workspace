import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'

const textareaDefinition: SpruceSchemas.Local.Textarea.IDefinition = {
	id: 'textarea',
	name: 'Textarea',
	description: 'Big box to type lots of text (with voice support)',
	fields: {
		/** Id. */
		id: {
			label: 'id',
			type: FieldType.Id,
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Label. */
		label: {
			label: 'Label',
			type: FieldType.Schema,
			options: { schemas: [labelDefinitionLocal] }
		},
		/** Helper. */
		helper: {
			label: 'Helper',
			type: FieldType.Schema,
			options: { schemas: [inputHelperDefinitionLocal] }
		},
		/** Resize'able. */
		isResizeable: {
			label: "Resize'able",
			type: FieldType.Boolean,
			defaultValue: false,
			options: undefined
		},
		/** Placeholder. */
		placeholder: {
			label: 'Placeholder',
			type: FieldType.Text,
			options: undefined
		},
		/** Rows (height). Number of rows of text that will show before scrolling */
		rows: {
			label: 'Rows (height)',
			type: FieldType.Number,
			hint: 'Number of rows of text that will show before scrolling',
			options: undefined
		}
	}
}

export default textareaDefinition
