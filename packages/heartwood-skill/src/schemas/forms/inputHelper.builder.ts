import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const inputHelperDefinition = buildSchemaDefinition({
	id: 'inputHelper',
	name: 'Input helper',
	description:
		'For hints and error messages after inputs (if both set, only error shows)',
	fields: {
		hint: {
			type: FieldType.Text,
			label: 'Hint'
		},
		error: {
			type: FieldType.Text,
			label: 'Error message'
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		htmlFor: {
			type: FieldType.Text,
			isPrivate: true
		},
		ElementTag: {
			type: FieldType.Select,
			isPrivate: true,
			defaultValue: 'p',
			options: {
				choices: [
					{ value: 'p', label: '<p/>' },
					{ value: 'label', label: '<label/>' }
				]
			}
		}
	}
})

export default inputHelperDefinition
