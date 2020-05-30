import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const buttonGroupDefinition: SpruceSchemas.Local.ButtonGroup.IDefinition = {
	id: 'buttonGroup',
	name: 'Button group',
	description: 'A group of buttons presented in a few cool ways (see kind)',
	fields: {
		/** Buttons. */
		buttons: {
			label: 'Buttons',
			type: FieldType.Schema,
			isRequired: true,
			isArray: true,
			options: { schemas: [buttonDefinitionLocal] }
		},
		/** Kind. Visual appearance of the group. */
		kind: {
			label: 'Kind',
			type: FieldType.Select,
			hint: 'Visual appearance of the group.',
			options: {
				choices: [
					{ label: 'Default', value: 'default' },
					{ label: 'Segmented', value: 'segmented' },
					{ label: 'Floating', value: 'floating' }
				]
			}
		},
		/** Is full width. Set true to fill parent width */
		isFullWidth: {
			label: 'Is full width',
			type: FieldType.Boolean,
			hint: 'Set true to fill parent width',
			options: undefined
		},
		/** Highlighted index. Index of the button that is currently highlighted, e.g. by arrow keys */
		highlightedIndex: {
			label: 'Highlighted index',
			type: FieldType.Number,
			hint:
				'Index of the button that is currently highlighted, e.g. by arrow keys',
			options: undefined
		},
		/** . */
		onClick: {
			type: FieldType.EventCallback,
			options: { event: `React.MouseEvent<...>`, element: `HTMLInputElement` }
		}
	}
}

export default buttonGroupDefinition
