import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import iconDefinitionLocal from '#spruce/schemas/local/icon.definition'

const contextMenuDefinition: SpruceSchemas.Local.ContextMenu.IDefinition  = {
	id: 'ContextMenu',
	name: 'ContextMenu',
	description: 'A contextual menu comprised of buttons (tip: set the action on each button).',
	    fields: {
	            /** Buttons. */
	            'buttons': {
	                label: 'Buttons',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                isArray: true,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Size. Set the width of the menu. Helpful for longer text in buttons */
	            'size': {
	                label: 'Size',
	                type: SpruceSchema.FieldType.Select,
	                hint: 'Set the width of the menu. Helpful for longer text in buttons',
	                options: {choices: [{"label":"Medium","value":"medium"},{"label":"Large","value":"large"}],}
	            },
	            /** Text. Adds text to the collapsed menu */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Adds text to the collapsed menu',
	                options: undefined
	            },
	            /** Icon. Overrides the default icon */
	            'icon': {
	                label: 'Icon',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Overrides the default icon',
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Is simple. Set true to make the button blue */
	            'isSimple': {
	                label: 'Is simple',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to make the button blue',
	                options: undefined
	            },
	            /** Is small. Set true to make the button smaller */
	            'isSmall': {
	                label: 'Is small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to make the button smaller',
	                options: undefined
	            },
	            /** Close on select. Set to true makes the menu close when any option is selected */
	            'closeOnSelect': {
	                label: 'Close on select',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set to true makes the menu close when any option is selected',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Classname. */
	            'className': {
	                label: 'Classname',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** . Invoked when the button is clicked */
	            'onClick': {
	                type: SpruceSchema.FieldType.EventCallback,
	                hint: 'Invoked when the button is clicked',
	                options: {event: `React.MouseEvent<...>`,element: `HTMLDivElement`,}
	            },
	    }
}

export default contextMenuDefinition
