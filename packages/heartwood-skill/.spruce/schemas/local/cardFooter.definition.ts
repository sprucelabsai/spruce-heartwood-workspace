import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const cardFooterDefinition: SpruceSchemas.Local.CardFooter.IDefinition  = {
	id: 'cardFooter',
	name: 'cardFooter',
	description: 'Header of a card',
	    fields: {
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	    }
}

export default cardFooterDefinition
