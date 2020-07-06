import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import inputHelperDefinition from './inputHelper.builder'
import inputEventsDefinition from './inputEvents.builder'

const checkboxDefinition = buildSchemaDefinition({
	id: 'checkbox',
	name: 'Checkbox',
	description: 'A checkbox!',
	fields: {
		...inputEventsDefinition.fields,
		id: {
			type: FieldType.Id
		},
		name: {
			type: FieldType.Text,
			label: 'Name'
		},
		label: {
			type: FieldType.Schema,
			label: 'Label',
			options: {
				schemaId: 'label'
			}
		},
		isDisabled: {
			type: FieldType.Boolean,
			label: 'Disabled'
		},
		isIndeterminate: {
			type: FieldType.Boolean,
			label: 'Indeterminate',
			hint:
				"Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it."
		},
		isChecked: {
			type: FieldType.Boolean,
			label: 'Checked'
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

export default checkboxDefinition
