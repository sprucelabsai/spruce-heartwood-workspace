import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import cardHeaderDefinitionLocal from '#spruce/schemas/local/cardHeader.definition'

const cardDefinition: SpruceSchemas.Local.Card.IDefinition = {
	id: 'card',
	name: 'Card',
	description:
		'I universal way to hold visual information, use card builder to create cards',
	fields: {
		/** . */
		children: {
			type: FieldType.Node,
			options: undefined
		},
		/** Centered. Is all content centered? */
		isCentered: {
			label: 'Centered',
			type: FieldType.Boolean,
			hint: 'Is all content centered?',
			defaultValue: false,
			options: undefined
		},
		/** Critical. Call attention to this card by making it standout! */
		isCritical: {
			label: 'Critical',
			type: FieldType.Boolean,
			hint: 'Call attention to this card by making it standout!',
			options: undefined
		},
		/** Small. A small variation of a card */
		isSmall: {
			label: 'Small',
			type: FieldType.Boolean,
			hint: 'A small variation of a card',
			options: undefined
		},
		/** Class name. */
		className: {
			label: 'Class name',
			type: FieldType.Text,
			options: undefined
		},
		/** Expandable. Allows this card to collapse at the header */
		isExpandable: {
			label: 'Expandable',
			type: FieldType.Boolean,
			hint: 'Allows this card to collapse at the header',
			defaultValue: false,
			options: undefined
		},
		/** Expanded by default. Should this thing start expanded */
		defaultExpanded: {
			label: 'Expanded by default',
			type: FieldType.Boolean,
			hint: 'Should this thing start expanded',
			defaultValue: true,
			options: undefined
		},
		/** Header. */
		header: {
			label: 'Header',
			type: FieldType.Schema,
			options: { schemas: [cardHeaderDefinitionLocal] }
		}
	}
}

export default cardDefinition
