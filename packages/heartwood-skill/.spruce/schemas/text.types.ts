import * as SpruceSchema from '@sprucelabs/schema'
import Schema, { ISchemaDefinition } from '@sprucelabs/schema'

/**
import textDefinition from '../../src/schemas/text.definition'
type TextDefinition = typeof textDefinition
*/

export interface ITextDefinition extends ISchemaDefinition {
	id: 'Text',
	name: 'Text',
	description: 'Basic text to be rendered',
	
	
	    fields: {
	            /** Id. Unique id for UI caching */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Text,
	                
	                isRequired: true,
	                hint: 'Unique id for UI caching',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Text. the text to render */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'the text to render',
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

export const textDefinition : ITextDefinition = {
	id: 'Text',
	name: 'Text',
	description: 'Basic text to be rendered',
	
	
	    fields: {
	            /** Id. Unique id for UI caching */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Text,
	                
	                isRequired: true,
	                hint: 'Unique id for UI caching',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Text. the text to render */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                
	                
	                hint: 'the text to render',
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

// Basic text to be rendered
export interface IText {
	
		/** Id. Unique id for UI caching */
		'id': string
		/** Text. the text to render */
		'text'?: string
}
export interface ITextInstance extends Schema<ITextDefinition> {}
