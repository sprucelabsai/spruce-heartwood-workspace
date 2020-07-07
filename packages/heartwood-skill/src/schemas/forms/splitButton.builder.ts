import { buildSchemaDefinition } from '@sprucelabs/schema'
import buttonDefinition from './button.builder'
import FieldType from '#spruce:schema/fields/fieldType'

const splitButtonDefinition = buildSchemaDefinition({
	id: 'splitButton',
	name: 'Split button',
	description: 'A button with a dropdown of actions on the right',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
		},
		defaultButton: {
			type: FieldType.Schema,
			label: 'Default action',
			isRequired: true,
			hint: 'The main action readily surfaced to the user',
			options: {
				schema: buttonDefinition,
			},
		},
		buttons: {
			type: FieldType.Schema,
			label: 'Actions',
			isArray: true,
			hint: 'All the secondary nested buttons',
			defaultValue: [],
			options: {
				schema: buttonDefinition,
			},
		},
		kind: {
			type: FieldType.Select,
			label: 'Kind',
			hint: 'Sets the visual hierarchy of the button',
			options: {
				choices: buttonDefinition.fields.kind.options.choices,
			},
		},
		isFullWidth: {
			type: FieldType.Boolean,
			label: 'Is full width',
			hint: "Set true to fill the parent's width",
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Is small',
			hint: 'Sets the visual hierarchy of the button',
		},
		onClick: {
			...buttonDefinition.fields.onClick,
			label: 'Click handler',
		},
		usePortal: {
			type: FieldType.Boolean,
			label: 'Portal',
			hint:
				'Render in a react-portal, not sure why this is needed or not just always true',
			isPrivate: true,
		},
	},
})

export default splitButtonDefinition
