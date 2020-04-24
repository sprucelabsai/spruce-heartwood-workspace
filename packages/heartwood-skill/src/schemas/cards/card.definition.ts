import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import cardHeaderDefinition from './cardHeader.definition'

const cardDefinition = buildSchemaDefinition({
	id: 'card',
	name: 'Card',
	description:
		'I universal way to hold visual information, use card builder to create cards',
	fields: {
		children: {
			type: FieldType.Node,
			isPrivate: true
		},
		isCentered: {
			type: FieldType.Boolean,
			label: 'Centered',
			hint: 'Is all content centered?',
			default: false
		},
		isCritical: {
			type: FieldType.Boolean,
			label: 'Critical',
			hint: 'Call attention to this card by making it standout!'
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Small',
			hint: 'A small variation of a card'
		},
		className: {
			type: FieldType.Text,
			label: 'Class name',
			isPrivate: true
		},
		isExpandable: {
			type: FieldType.Boolean,
			label: 'Expandable',
			hint: 'Allows this card to collapse at the header',
			default: false
		},
		defaultExpanded: {
			type: FieldType.Boolean,
			label: 'Expanded by default',
			hint: 'Should this thing start expanded',
			default: true
		},
		header: {
			type: FieldType.Schema,
			label: 'Header',
			options: {
				schema: cardHeaderDefinition
			}
		}
	}
})

export default cardDefinition
