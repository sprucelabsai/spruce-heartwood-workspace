import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

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
		defaultAction: {
			type: FieldType.Schema,
			label: 'Default action',
			isRequired: true,
			hint: 'The main action readily surfaced to the user',
			options: {
				schemaId: 'Button'
			}
		},
		actions: {
			type: FieldType.Action,
			label: 'Actions',
			isRequired: true,
			isArray: true,
			hint: 'All the secondary nested actions'
		},
		kind: {
			type: FieldType.Select,
			label: 'Kind',
			hint: 'Sets the visual hierarchy of the button',
			options: {
				choices: [
					{
						value: 'Primary',
						label: 'Primary'
					},
					{
						value: 'Secondary',
						label: 'Secondary'
					},
					{
						value: 'Simple',
						label: 'Simple'
					},
					{
						value: 'Caution',
						label: 'Caution'
					}
				]
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
