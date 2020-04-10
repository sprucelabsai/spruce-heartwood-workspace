import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const contextMenuDefinition = buildSchemaDefinition({
	id: 'ContextMenu',
	name: 'ContextMenu',
	description: '**missing description**',
	fields: {
		actions: {
			type: FieldType.Action,
			label: 'Actions',
			isRequired: true,
			isArray: true,
			hint: 'The actions to be shown on tap/click'
		},
		size: {
			type: FieldType.Select,
			label: 'Size',
			hint: 'Set the width of the menu. Helpful for longer text in buttons',
			options: {
				choices: [
					{
						label: 'Medium',
						value: 'medium'
					},
					{
						label: 'Large',
						value: 'large'
					}
				]
			}
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'Adds text to the collapsed menu'
		},
		icon: {
			type: FieldType.Schema,
			label: 'Icon',
			hint: 'Overrides the default icon',
			options: {
				schemaId: 'Icon'
			}
		},
		isSimple: {
			type: FieldType.Boolean,
			label: 'Is simple',
			hint: 'Set true to make the button blue'
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Is small',
			hint: 'Set true to make the button smaller'
		},
		closeOnSelectAction: {
			type: FieldType.Boolean,
			label: 'Close on select action',
			hint: 'Set to true makes the menu close when any action is selected'
		},
		isTextOnly: {
			type: FieldType.Boolean,
			label: 'Is text only',
			hint: 'Hide the icon entirely'
		}
	}
})

export default contextMenuDefinition
