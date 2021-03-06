import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import iconDefinition from '../icon.definition'

const buttonDefinition = buildSchemaDefinition({
	id: 'button',
	name: 'Button',
	description:
		'A interactive element you can touch or click to invoke an Action',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		kind: {
			type: FieldType.Select,
			label: 'Kind',
			hint:
				'Sets the visual appearance of the button. May be primary, secondary, simple, or caution.',
			options: {
				choices: [
					{
						label: 'Primary',
						value: 'primary'
					},
					{
						label: 'Secondary',
						value: 'secondary'
					},
					{
						label: 'Simple',
						value: 'simple'
					},
					{
						label: 'Caution',
						value: 'caution'
					}
				]
			}
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Is small',
			hint: 'Set true to make the button less tall.'
		},
		isFullWidth: {
			type: FieldType.Boolean,
			label: 'Is full width',
			hint: "Set true to make the button fill its parent's width."
		},
		isLoading: {
			type: FieldType.Boolean,
			label: 'Is loading',
			hint:
				'Set true to hide any text or icon in the button and show a loader instead.'
		},
		isIconOnly: {
			type: FieldType.Boolean,
			label: 'Is icon only',
			hint:
				'Set true to hide any text in the button. Text should still be provided for accessibility.'
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'Text for the button.'
		},
		href: {
			type: FieldType.Text,
			label: 'Href',
			hint: 'Will render a link. May be relative or absolute.'
		},
		icon: {
			type: FieldType.Schema,
			label: 'Icon',
			hint: 'Icon for the button.',
			options: {
				schema: iconDefinition
			}
		},
		type: {
			type: FieldType.Select,
			label: 'Type',
			hint: "Type attribute for HTML button element. Defaults to 'button'.",
			defaultValue: 'button',
			options: {
				choices: [
					{
						label: 'Button',
						value: 'button'
					},
					{
						label: 'Submit',
						value: 'submit'
					},
					{
						label: 'Reset',
						value: 'reset'
					}
				]
			}
		},
		isDisabled: {
			type: FieldType.Boolean,
			label: 'Is disabled',
			hint: 'Set true to disable the button'
		},
		className: {
			type: FieldType.Text,
			label: 'classname',
			isPrivate: true
		},
		onClick: {
			type: FieldType.EventCallback,
			label: 'On click handler',
			options: {
				event: 'React.MouseEvent<...>',
				element: 'Element'
			}
		},
		children: {
			type: FieldType.Node,
			isPrivate: true
		},
		AnchorComponent: {
			type: FieldType.ElementType,
			hint: 'Lets you override the element used when rendering a link',
			isPrivate: true
		},
		target: {
			type: FieldType.Text,
			label: 'Target',
			hint: '_blank|_self|_parent|_top|framename'
		}
	}
})

export default buttonDefinition
