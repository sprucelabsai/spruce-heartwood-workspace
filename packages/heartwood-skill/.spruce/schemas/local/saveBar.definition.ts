import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const saveBarDefinition: SpruceSchemas.Local.SaveBar.IDefinition  = {
	id: 'saveBar',
	name: 'Save bar',
	description: 'Holds buttons and spans the top or bottom of the screen.',
	    fields: {
	            /** Message. Show a custom message across the bar */
	            'message': {
	                label: 'Message',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Show a custom message across the bar',
	                defaultValue: "Unsaved changes",
	                options: undefined
	            },
	            /** Visible. */
	            'isVisible': {
	                label: 'Visible',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	            /** Disable discard. */
	            'isDiscardDisabled': {
	                label: 'Disable discard',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	            /** Disable save. */
	            'isSaveDisabled': {
	                label: 'Disable save',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	            /** Discard in progress. */
	            'isDiscarding': {
	                label: 'Discard in progress',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	            /** Save in progress. */
	            'isSaving': {
	                label: 'Save in progress',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	            /** Discard handler. */
	            'onDiscard': {
	                label: 'Discard handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	            /** Save handler. */
	            'onSave': {
	                label: 'Save handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	    }
}

export default saveBarDefinition
