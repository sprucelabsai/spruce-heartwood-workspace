import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import labelDefinition from './label.builder'
import inputHelperDefinition from './inputHelper.builder'

const textAreaDefinition = buildSchemaDefinition({
	id: 'textArea',
	name: 'Textarea',
	description: 'Big box to type lots of text (with voice support)',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'id'
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		label: {
			type: FieldType.Schema,
			label: 'Label',
			options: {
				schema: labelDefinition
			}
		},
		helper: {
			type: FieldType.Schema,
			label: 'Helper',
			options: {
				schema: inputHelperDefinition
			}
		},
		isResizeable: {
			type: FieldType.Boolean,
			label: "Resize'able",
			defaultValue: false
		},
		placeholder: {
			type: FieldType.Text,
			label: 'Placeholder'
		},
		rows: {
			type: FieldType.Number,
			label: 'Rows (height)',
			hint: 'Number of rows of text that will show before scrolling'
		}
	}
})

export default textAreaDefinition
