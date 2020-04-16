import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

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
				schemaId: 'button'
			}
		},
		kind: {
			type: FieldType.Select,
			label: 'Kind',
			hint: 'Visual appearance of the group.',
			options: {
				choices: [
					{
						label: 'Default',
						value: 'default'
					},
					{
						label: 'Segmented',
						value: 'segmented'
					},
					{
						label: 'Floating',
						value: 'floating'
					}
				]
			}
		},
		isFullWidth: {
			type: FieldType.Boolean,
			label: 'Is full width',
			hint: 'Set true to fill parent width'
		},
		highlightedIndex: {
			type: FieldType.Number,
			label: 'Highlighted index',
			hint:
				'Index of the button that is currently highlighted, e.g. by arrow keys'
		}
	}
})

export default buttonGroupDefinition