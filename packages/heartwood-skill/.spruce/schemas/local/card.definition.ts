import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import cardHeaderDefinitionLocal from '#spruce/schemas/local/cardHeader.definition'

const cardDefinition: SpruceSchemas.Local.Card.IDefinition  = {
	id: 'card',
	name: 'Card',
	description: 'I universal way to hold visual information, use card builder to create cards',
	    fields: {
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** Centered. Is all content centered? */
	            'isCentered': {
	                label: 'Centered',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is all content centered?',
	                defaultValue: false,
	                options: undefined
	            },
	            /** Critical. Call attention to this card by making it standout! */
	            'isCritical': {
	                label: 'Critical',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Call attention to this card by making it standout!',
	                options: undefined
	            },
	            /** Small. A small variation of a card */
	            'isSmall': {
	                label: 'Small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'A small variation of a card',
	                options: undefined
	            },
	            /** Class name. */
	            'className': {
	                label: 'Class name',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Expandable. Allows this card to collapse at the header */
	            'isExpandable': {
	                label: 'Expandable',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Allows this card to collapse at the header',
	                defaultValue: false,
	                options: undefined
	            },
	            /** Expanded by default. Should this thing start expanded */
	            'defaultExpanded': {
	                label: 'Expanded by default',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Should this thing start expanded',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Header. */
	            'header': {
	                label: 'Header',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [cardHeaderDefinitionLocal],}
	            },
	    }
}

export default cardDefinition
