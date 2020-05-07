import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import labelDefinition from './label.definition'
import inputHelperDefinition from './inputHelper.definition'

const phoneInputDefinition = buildSchemaDefinition({
	id: 'phoneInput',
	name: 'Phone input',
	description: 'Collect a phone number with area and country codes',
	fields: {
		label: {
			type: FieldType.Schema,
			label: 'Label',
			isRequired: true,
			options: {
				schema: labelDefinition
			}
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Small',
			hint: 'Render a small variation of the phone input'
		},
		helper: {
			type: FieldType.Schema,
			label: 'Helper',
			options: {
				schema: inputHelperDefinition
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
		autoFocus: {
			type: FieldType.Boolean,
			label: 'Autofocus',
			hint: 'Focus when paid loads'
		}
	}
})

export default phoneInputDefinition
