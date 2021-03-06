import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import inputHelperDefinition from './inputHelper.definition'
import labelDefinition from './label.definition'

const selectDefinition = buildSchemaDefinition({
	id: 'select',
	name: 'Select',
	description: 'A form select',
	fields: {
		id: {
			type: FieldType.Id
		},
		isSimple: {
			type: FieldType.Boolean,
			label: 'Simple',
			hint: 'Render a simpler variation'
		},
		isDisabled: {
			type: FieldType.Boolean,
			label: 'Disabled'
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
		value: {
			type: FieldType.Text,
			label: 'Value'
		},
		placeholder: {
			type: FieldType.Text,
			label: 'Placeholder'
		},
		helper: {
			type: FieldType.Schema,
			label: 'Helper',
			options: {
				schema: inputHelperDefinition
			}
		},
		options: {
			type: FieldType.Schema,
			label: 'Options',
			isRequired: true,
			options: {
				schema: {
					id: 'selectOption',
					name: 'Select option',
					fields: {
						value: {
							type: FieldType.Text,
							label: 'Value',
							isRequired: true
						},
						label: {
							type: FieldType.Text,
							label: 'Label',
							isRequired: true
						}
					}
				}
			}
		}
	}
})

export default selectDefinition
