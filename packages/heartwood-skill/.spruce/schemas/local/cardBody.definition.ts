import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const cardBodyDefinition: SpruceSchemas.Local.CardBody.IDefinition  = {
	id: 'cardBody',
	name: 'Card body',
	description: 'The body of a card.',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** children. Children to show in the Card */
	            'children': {
	                label: 'children',
	                type: SpruceSchema.FieldType.Node,
	                hint: 'Children to show in the Card',
	                options: undefined
	            },
	            /** Is sectioned. Whether to wrap children in CardSection */
	            'isSectioned': {
	                label: 'Is sectioned',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Whether to wrap children in CardSection',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Are section separators visible. Set true to display line separators between CardSection components */
	            'areSectionSeparatorsVisible': {
	                label: 'Are section separators visible',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to display line separators between CardSection components',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Has top padding. Does card include top padding */
	            'hasTopPadding': {
	                label: 'Has top padding',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Does card include top padding',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Has bottom padding. Does card include bottom padding */
	            'hasBottomPadding': {
	                label: 'Has bottom padding',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Does card include bottom padding',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Is full bleed. Set to true to remove horizontal padding */
	            'isFullBleed': {
	                label: 'Is full bleed',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set to true to remove horizontal padding',
	                options: undefined
	            },
	    }
}

export default cardBodyDefinition
