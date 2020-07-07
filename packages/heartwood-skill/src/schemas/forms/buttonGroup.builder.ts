import { buildSchemaDefinition } from '@sprucelabs/schema'
import buttonDefinition from './button.builder'
import FieldType from '#spruce:schema/fields/fieldType'

const buttonGroupDefinition = buildSchemaDefinition({
	id: 'buttonGroup',
	name: 'Button group',
	description: 'A group of buttons presented in a few cool ways (see kind)',
	fields: {
		buttons: {
			type: FieldType.Schema,
			label: 'Buttons',
			isRequired: true,
			isArray: true,
			options: {
				schema: buttonDefinition,
			},
		},
		kind: {
			type: FieldType.Select,
			label: 'Kind',
			hint: 'Visual appearance of the group.',
			options: {
				choices: [
					{
						label: 'Default',
						value: 'default',
					},
					{
						label: 'Segmented',
						value: 'segmented',
					},
					{
						label: 'Floating',
						value: 'floating',
					},
				],
			},
		},
		isFullWidth: {
			type: FieldType.Boolean,
			label: 'Is full width',
			hint: 'Set true to fill parent width',
		},
		highlightedIndex: {
			type: FieldType.Number,
			label: 'Highlighted index',
			hint:
				'Index of the button that is currently highlighted, e.g. by arrow keys',
		},
		onClick: {
			type: FieldType.EventCallback,
			isPrivate: true,
			options: {
				event: 'React.MouseEvent<...>',
				element: 'HTMLInputElement',
			},
		},
	},
})

export default buttonGroupDefinition
