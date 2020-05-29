import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const splitButtonDefinition: SpruceSchemas.Local.SplitButton.IDefinition  = {
	id: 'splitButton',
	name: 'Split button',
	description: 'A button with a dropdown of actions on the right',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Default action. The main action readily surfaced to the user */
	            'defaultButton': {
	                label: 'Default action',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                hint: 'The main action readily surfaced to the user',
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Actions. All the secondary nested buttons */
	            'buttons': {
	                label: 'Actions',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'All the secondary nested buttons',
	                defaultValue: [],
	                isArray: true,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Kind. Sets the visual hierarchy of the button */
	            'kind': {
	                label: 'Kind',
	                type: SpruceSchema.FieldType.Select,
	                hint: 'Sets the visual hierarchy of the button',
	                options: {choices: [{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}],}
	            },
	            /** Is full width. Set true to fill the parent's width */
	            'isFullWidth': {
	                label: 'Is full width',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to fill the parent\'s width',
	                options: undefined
	            },
	            /** Is small. Sets the visual hierarchy of the button */
	            'isSmall': {
	                label: 'Is small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Sets the visual hierarchy of the button',
	                options: undefined
	            },
	            /** Click handler. */
	            'onClick': {
	                label: 'Click handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	            /** Portal. Render in a react-portal, not sure why this is needed or not just always true */
	            'usePortal': {
	                label: 'Portal',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Render in a react-portal, not sure why this is needed or not just always true',
	                options: undefined
	            },
	    }
}

export default splitButtonDefinition
