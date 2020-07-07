import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const layoutSpacingDefinition = buildSchemaDefinition({
	id: 'layoutSpacing',
	name: 'Layout spacing',
	description: 'A way to add spacing to your layouts',
	fields: {
		direction: {
			type: FieldType.Select,
			label: 'Direction',
			defaultValue: 'all',
			options: {
				choices: [
					{ value: 'all', label: 'All' },
					{ value: 'horizontal', label: 'Horizontal' },
					{ value: 'vertical', label: 'Vertical' },
					{ value: 'top', label: 'Top' },
					{ value: 'right', label: 'Right' },
					{ value: 'bottom', label: 'Bottom' },
					{ value: 'left', label: 'Left' },
				],
			},
		},
		amount: {
			type: FieldType.Number,
			label: 'Spacing amount',
			isRequired: true,
			hint: 'The amount of spacing to apply (0-12)',
		},
		layoutBuilder: {
			type: FieldType.Schema,
			label: 'Layout builder',
			options: {
				schemaId: 'layoutBuilder',
			},
		},
		children: {
			type: FieldType.Node,
			isPrivate: true,
		},
	},
})

export default layoutSpacingDefinition
