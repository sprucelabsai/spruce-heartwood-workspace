import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const cardSectionDefinition: SpruceSchemas.Local.CardSection.IDefinition  = {
	id: 'cardSection',
	name: 'card section',
	description: 'A card body is made up of several sections',
	    fields: {
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** . Set to true to remove horizontal padding */
	            'isFullBleed': {
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set to true to remove horizontal padding',
	                options: undefined
	            },
	    }
}

export default cardSectionDefinition
