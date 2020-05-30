import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const inputHelperDefinition: SpruceSchemas.Local.InputHelper.IDefinition = {
	id: 'inputHelper',
	name: 'Input helper',
	description:
		'For hints and error messages after inputs (if both set, only error shows)',
	fields: {
		/** Hint. */
		hint: {
			label: 'Hint',
			type: FieldType.Text,
			options: undefined
		},
		/** Error message. */
		error: {
			label: 'Error message',
			type: FieldType.Text,
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** . */
		htmlFor: {
			type: FieldType.Text,
			options: undefined
		},
		/** . */
		ElementTag: {
			type: FieldType.Select,
			defaultValue: 'p',
			options: {
				choices: [
					{ value: 'p', label: '<p/>' },
					{ value: 'label', label: '<label/>' }
				]
			}
		}
	}
}

export default inputHelperDefinition
