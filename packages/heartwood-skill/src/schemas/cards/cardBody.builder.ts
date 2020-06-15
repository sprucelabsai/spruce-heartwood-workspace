import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const cardBodyDefinition = buildSchemaDefinition({
	id: 'cardBody',
	name: 'Card body',
	description: 'The body of a card.',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		children: {
			type: FieldType.Node,
			label: 'children',
			hint: 'Children to show in the Card'
		},
		isSectioned: {
			type: FieldType.Boolean,
			label: 'Is sectioned',
			hint: 'Whether to wrap children in CardSection',
			defaultValue: true
		},
		areSectionSeparatorsVisible: {
			type: FieldType.Boolean,
			label: 'Are section separators visible',
			hint:
				'Set true to display line separators between CardSection components',
			defaultValue: true
		},
		hasTopPadding: {
			type: FieldType.Boolean,
			label: 'Has top padding',
			hint: 'Does card include top padding',
			defaultValue: true
		},
		hasBottomPadding: {
			type: FieldType.Boolean,
			label: 'Has bottom padding',
			hint: 'Does card include bottom padding',
			defaultValue: true
		},
		isFullBleed: {
			type: FieldType.Boolean,
			label: 'Is full bleed',
			hint: 'Set to true to remove horizontal padding'
		}
	}
})

export default cardBodyDefinition
