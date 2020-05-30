import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'


const cardFooterDefinition: SpruceSchemas.Local.CardFooter.IDefinition  = {
	id: 'cardFooter',
	name: 'cardFooter',
	description: 'Header of a card',
	    fields: {
	            /** . */
	            'children': {
	                type: FieldType.Node,
	                options: undefined
	            },
	    }
}

export default cardFooterDefinition
