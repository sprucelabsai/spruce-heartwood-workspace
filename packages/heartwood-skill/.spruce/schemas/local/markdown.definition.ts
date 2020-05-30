import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'


const markdownDefinition: SpruceSchemas.Local.Markdown.IDefinition  = {
	id: 'markdown',
	name: 'Markdown',
	description: 'Render markdown beautifully',
	    fields: {
	            /** Id. Unique ID for view caching. */
	            'id': {
	                label: 'Id',
	                type: FieldType.Id,
	                hint: 'Unique ID for view caching.',
	                options: undefined
	            },
	            /** Source. Markdown text to be rendered */
	            'source': {
	                label: 'Source',
	                type: FieldType.Text,
	                isRequired: true,
	                hint: 'Markdown text to be rendered',
	                options: undefined
	            },
	    }
}

export default markdownDefinition
