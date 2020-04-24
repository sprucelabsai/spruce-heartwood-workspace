import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from './button.definition'

const splitButtonDefinition = buildSchemaDefinition({
	id: 'splitButton',
	name: 'Split button',
	description: 'A button with a dropdown of actions on the right',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true
		},
		defaultButton: {
			type: FieldType.Schema,
			label: 'Default action',
			isRequired: true,
			hint: 'The main action readily surfaced to the user',
			options: {
				schema: buttonDefinition
			}
		},
		buttons: {
			type: FieldType.Schema,
			label: 'Actions',
			isArray: true,
			hint: 'All the secondary nested buttons',
			options: {
				schema: buttonDefinition
			}
		},
		kind: {
			type: FieldType.Select,
			label: 'Kind',
			hint: 'Sets the visual hierarchy of the button',
			options: {
				choices: buttonDefinition.fields.kind.options.choices
			}
		},
		isFullWidth: {
			type: FieldType.Boolean,
			label: 'Is full width',
			hint: "Set true to fill the parent's width"
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Is small',
			hint: 'Sets the visual hierarchy of the button'
		}
	}
})

export default splitButtonDefinition
