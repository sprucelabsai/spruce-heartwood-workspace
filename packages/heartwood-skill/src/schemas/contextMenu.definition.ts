import {
	buildSchemaDefinition,
	FieldType,
} from '@sprucelabs/schema'
import buttonDefinition from './forms/button.definition'
import iconDefinition from './icon.definition'

const contextMenuDefinition = buildSchemaDefinition({
	id: 'ContextMenu',
	name: 'ContextMenu',
	description:
		'A contextual menu comprised of buttons (tip: set the action on each button).',
	fields: {
		buttons: {
			type: FieldType.Schema,
			label: 'Buttons',
			isRequired: true,
			isArray: true,
			options: {
				schema: buttonDefinition
			}
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
				schema: iconDefinition
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
		closeOnSelect: {
			type: FieldType.Boolean,
			label: 'Close on select',
			hint: 'Set to true makes the menu close when any option is selected'
		},
		className: {
			type: FieldType.Text,
			label: 'Classname',
			isPrivate: true
		},
		onAction: {
			type: FieldType.ActionClick,
			hint: 'Invoked when the button is clicked',
			isPrivate: true
		}
	}
})

export default contextMenuDefinition
