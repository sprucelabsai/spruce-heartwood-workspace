import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const markdownDefinition: SpruceSchemas.Local.Markdown.IDefinition  = {
	id: 'markdown',
	name: 'Markdown',
	description: 'Render markdown beautifully',
	    fields: {
	            /** Id. Unique ID for view caching. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
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

export default markdownDefinition
