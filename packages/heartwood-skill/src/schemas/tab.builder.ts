import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const tabDefinition = buildSchemaDefinition({
	id: 'tab',
	name: 'Tab',
	description: 'A tabs control',
	fields: {
		text: {
			type: FieldType.Text,
			label: 'Text',
			isRequired: true,
			hint: 'The text shown on the tab'
		},
		icon: {
			type: FieldType.Schema,
			label: 'Icon',
			hint: 'An icon shown on the tab next to the text',
			options: {
				schemaId: 'icon'
			}
		},
		AnchorComponent: {
			type: FieldType.ElementType,
			isPrivate: true
		},
		isCurrent: {
			type: FieldType.Boolean,
			label: 'Is current',
			hint: 'Is the currently selected tab'
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		panel: {
			type: FieldType.Node,
			label: 'Panel',
			hint: 'Rendered as the body of the selected tab'
		}
	}
})

export default tabDefinition
