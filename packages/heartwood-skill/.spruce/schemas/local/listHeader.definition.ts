import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const listHeaderDefinition: SpruceSchemas.Local.ListHeader.IDefinition  = {
	id: 'listHeader',
	name: 'List header',
	description: 'The header of a list',
	    fields: {
	            /** Title. Title to render in the header */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'Title to render in the header',
	                options: undefined
	            },
	            /** Subtitle. Optional subtitle text */
	            'subtitle': {
	                label: 'Subtitle',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Optional subtitle text',
	                options: undefined
	            },
	            /** Is small. Set true for small lists */
	            'isSmall': {
	                label: 'Is small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true for small lists',
	                defaultValue: false,
	                options: undefined
	            },
	            /** Buttons. Buttons to associate with the list header */
	            'buttons': {
	                label: 'Buttons',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Buttons to associate with the list header',
	                isArray: true,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	    }
}

export default listHeaderDefinition
