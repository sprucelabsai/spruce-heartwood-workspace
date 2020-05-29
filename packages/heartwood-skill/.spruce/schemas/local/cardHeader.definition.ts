import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import iconDefinitionLocal from '#spruce/schemas/local/icon.definition'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const cardHeaderDefinition: SpruceSchemas.Local.CardHeader.IDefinition  = {
	id: 'CardHeader',
	name: 'cardHeader',
	description: 'Header of a card',
	    fields: {
	            /** Title. Title for the card */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Title for the card',
	                options: undefined
	            },
	            /** Label text. Optional label to show above title */
	            'labelText': {
	                label: 'Label text',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Optional label to show above title',
	                options: undefined
	            },
	            /** Label icon. Optional icon to show above the title and before the label */
	            'labelIcon': {
	                label: 'Label icon',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Optional icon to show above the title and before the label',
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Buttons. Render buttons in the Card Header */
	            'buttons': {
	                label: 'Buttons',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Render buttons in the Card Header',
	                isArray: true,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Context menu. Renders a Context Menu in the Card Header */
	            'contextMenu': {
	                label: 'Context menu',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Renders a Context Menu in the Card Header',
	                options: {schemas: [contextMenuDefinitionLocal],}
	            },
	    }
}

export default cardHeaderDefinition
