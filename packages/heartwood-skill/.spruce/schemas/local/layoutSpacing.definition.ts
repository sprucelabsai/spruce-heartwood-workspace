import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import layoutBuilderDefinitionLocal from '#spruce/schemas/local/layoutBuilder.definition'

const layoutSpacingDefinition: SpruceSchemas.Local.LayoutSpacing.IDefinition = {
	id: 'layoutSpacing',
	name: 'Layout spacing',
	description: 'A way to add spacing to your layouts',
	fields: {
		/** Direction. */
		direction: {
			label: 'Direction',
			type: FieldType.Select,
			defaultValue: 'all',
			options: {
				choices: [
					{ value: 'all', label: 'All' },
					{ value: 'horizontal', label: 'Horizontal' },
					{ value: 'vertical', label: 'Vertical' },
					{ value: 'top', label: 'Top' },
					{ value: 'right', label: 'Right' },
					{ value: 'bottom', label: 'Bottom' },
					{ value: 'left', label: 'Left' }
				]
			}
		},
		/** Spacing amount. The amount of spacing to apply (0-12) */
		amount: {
			label: 'Spacing amount',
			type: FieldType.Number,
			isRequired: true,
			hint: 'The amount of spacing to apply (0-12)',
			options: undefined
		},
		/** Layout builder. */
		layoutBuilder: {
			label: 'Layout builder',
			type: FieldType.Schema,
			options: { schemas: [layoutBuilderDefinitionLocal] }
		},
		/** . */
		children: {
			type: FieldType.Node,
			options: undefined
		}
	}
}

export default layoutSpacingDefinition
