import * as SpruceSchema from '@sprucelabs/schema'
import Schema, { ISchemaDefinition } from '@sprucelabs/schema'

/**
import listItemWarningDefinition from '../../src/schemas/lists/listWarning.definition'
type ListItemWarningDefinition = typeof listItemWarningDefinition
*/

export interface IListItemWarningDefinition extends ISchemaDefinition {
	id: 'listItemWarning',
	name: 'List item warning',
	description: 'A warning message that can go on a list item',
	
	
	    fields: {
	            /** Title. */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Subtitle. */
	            'subtitle': {
	                label: 'Subtitle',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Note. */
	            'note': {
	                label: 'Note',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

export const listItemWarningDefinition : IListItemWarningDefinition = {
	id: 'listItemWarning',
	name: 'List item warning',
	description: 'A warning message that can go on a list item',
	
	
	    fields: {
	            /** Title. */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Subtitle. */
	            'subtitle': {
	                label: 'Subtitle',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Note. */
	            'note': {
	                label: 'Note',
	                type: SpruceSchema.FieldType.Boolean,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

// A warning message that can go on a list item
export interface IListItemWarning {
	
		/** Title. */
		'title'?: boolean
		/** Subtitle. */
		'subtitle'?: boolean
		/** Note. */
		'note'?: boolean
}
export interface IListItemWarningInstance extends Schema<IListItemWarningDefinition> {}
