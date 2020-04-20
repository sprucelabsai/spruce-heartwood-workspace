import * as SpruceSchema from '@sprucelabs/schema'
import Schema, { ISchemaDefinition } from '@sprucelabs/schema'

/**
import confirmModalDefinition from '../../src/schemas/confirmDialog.definition'
type ConfirmModalDefinition = typeof confirmModalDefinition
*/

export interface IConfirmModalDefinition extends ISchemaDefinition {
	id: 'confirm Modal',
	name: 'ConfirmModal',
	description: 'a confirmation dialog',
	
	
	    fields: {
	            /** Title. Title of the confirmation dialog */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'Title of the confirmation dialog',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Text. Text shown in the dialog */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'Text shown in the dialog',
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

export const confirmModalDefinition : IConfirmModalDefinition = {
	id: 'confirm Modal',
	name: 'ConfirmModal',
	description: 'a confirmation dialog',
	
	
	    fields: {
	            /** Title. Title of the confirmation dialog */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'Title of the confirmation dialog',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Text. Text shown in the dialog */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'Text shown in the dialog',
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

// a confirmation dialog
export interface IConfirmModal {
	
		/** Title. Title of the confirmation dialog */
		'title'?: string
		/** Text. Text shown in the dialog */
		'text'?: string
}
export interface IConfirmModalInstance extends Schema<IConfirmModalDefinition> {}
