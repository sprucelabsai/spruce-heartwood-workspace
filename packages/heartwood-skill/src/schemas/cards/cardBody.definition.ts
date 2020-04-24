import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

export const cardBuilderBodyItems: string[] = [
	'button',
	'image',
	'heading',
	'text',
	'scoreCard',
	'toast',
	'list'
]

const cardBodyDefinition = buildSchemaDefinition({
	id: 'cardBody',
	name: 'Card body',
	description:
		'The builder of Cards, a fundamental visualization concept pervasive in the Heartwood design system.',
	fields: {
		items: {
			type: FieldType.Schema,
			label: 'Items',
			isRequired: true,
			isArray: true,
			hint: 'Children to show in the Card',
			options: {
				schemaIds: cardBuilderBodyItems
			}
		},
		isSectioned: {
			type: FieldType.Boolean,
			label: 'Is sectioned',
			hint: 'Whether to wrap children in CardSection'
		},
		areSectionSeparatorsVisible: {
			type: FieldType.Boolean,
			label: 'Are section separators visible',
			hint: 'Set true to display line separators between CardSection components'
		},
		hasTopPadding: {
			type: FieldType.Boolean,
			label: 'Has top padding',
			hint: 'Does card include top padding'
		},
		hasBottomPadding: {
			type: FieldType.Boolean,
			label: 'Has bottom padding',
			hint: 'Does card include bottom padding'
		},
		isFullBleed: {
			type: FieldType.Boolean,
			label: 'Is full bleed',
			hint: 'Set to true to remove horizontal padding'
		}
	}
})

export default cardBodyDefinition
