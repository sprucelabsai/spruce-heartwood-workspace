import * as SpruceSchema from '@sprucelabs/schema'
import Schema, { ISchemaDefinition } from '@sprucelabs/schema'

/**
import markdownDefinition from '../../src/schemas/markdown.definition'
type MarkdownDefinition = typeof markdownDefinition
*/

export interface IMarkdownDefinition extends ISchemaDefinition {
	id: 'Markdown',
	name: 'Markdown',
	description: 'Render markdown beautifully',
	
	
	    fields: {
	            /** Id. Unique ID for view caching. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                
	                isRequired: true,
	                hint: 'Unique ID for view caching.',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Source. Markdown text to be rendered */
	            'source': {
	                label: 'Source',
	                type: SpruceSchema.FieldType.Text,
	                
	                isRequired: true,
	                hint: 'Markdown text to be rendered',
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

export const markdownDefinition : IMarkdownDefinition = {
	id: 'Markdown',
	name: 'Markdown',
	description: 'Render markdown beautifully',
	
	
	    fields: {
	            /** Id. Unique ID for view caching. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                
	                isRequired: true,
	                hint: 'Unique ID for view caching.',
	                
	                
	                
	                
	                options: undefined
	            },
	            /** Source. Markdown text to be rendered */
	            'source': {
	                label: 'Source',
	                type: SpruceSchema.FieldType.Text,
	                
	                isRequired: true,
	                hint: 'Markdown text to be rendered',
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

// Render markdown beautifully
export interface IMarkdown {
	
		/** Id. Unique ID for view caching. */
		'id': string
		/** Source. Markdown text to be rendered */
		'source': string
}
export interface IMarkdownInstance extends Schema<IMarkdownDefinition> {}
