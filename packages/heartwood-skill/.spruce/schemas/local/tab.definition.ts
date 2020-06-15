import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import iconDefinitionLocal from '#spruce/schemas/local/icon.definition'

const tabDefinition: SpruceSchemas.Local.Tab.IDefinition = {
	id: 'tab',
	name: 'Tab',
	description: 'A tabs control',
	fields: {
		/** Text. The text shown on the tab */
		text: {
			label: 'Text',
			type: FieldType.Text,
			isRequired: true,
			hint: 'The text shown on the tab',
			options: undefined
		},
		/** Icon. An icon shown on the tab next to the text */
		icon: {
			label: 'Icon',
			type: FieldType.Schema,
			hint: 'An icon shown on the tab next to the text',
			options: { schemas: [iconDefinitionLocal] }
		},
		/** . */
		AnchorComponent: {
			type: FieldType.ElementType,
			options: undefined
		},
		/** Is current. Is the currently selected tab */
		isCurrent: {
			label: 'Is current',
			type: FieldType.Boolean,
			hint: 'Is the currently selected tab',
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Panel. Rendered as the body of the selected tab */
		panel: {
			label: 'Panel',
			type: FieldType.Node,
			hint: 'Rendered as the body of the selected tab',
			options: undefined
		}
	}
}

export default tabDefinition
