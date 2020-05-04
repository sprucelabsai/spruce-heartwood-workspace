import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

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
			type: FieldType.Element,
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
			type: FieldType.Element,
			label: 'Panel',
			hint: 'Rendered as the body of the selected tab'
		}
	}
})

export default tabDefinition
