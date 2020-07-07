import { FieldType, buildSchemaDefinition } from '@sprucelabs/schema'
import buttonDefinition from '../forms/button.builder'

const cardHeaderDefinition = buildSchemaDefinition({
	id: 'CardHeader',
	name: 'cardHeader',
	description: 'Header of a card',
	fields: {
		title: {
			type: FieldType.Text,
			label: 'Title',
			hint: 'Title for the card',
		},
		labelText: {
			type: FieldType.Text,
			label: 'Label text',
			hint: 'Optional label to show above title',
		},
		labelIcon: {
			type: FieldType.Schema,
			label: 'Label icon',
			hint: 'Optional icon to show above the title and before the label',
			options: {
				schemaId: 'Icon',
			},
		},
		buttons: {
			type: FieldType.Schema,
			label: 'Buttons',
			isArray: true,
			hint: 'Render buttons in the Card Header',
			options: {
				schema: buttonDefinition,
			},
		},
		contextMenu: {
			type: FieldType.Schema,
			label: 'Context menu',
			hint: 'Renders a Context Menu in the Card Header',
			options: {
				schemaId: 'contextMenu',
			},
		},
	},
})

export default cardHeaderDefinition
