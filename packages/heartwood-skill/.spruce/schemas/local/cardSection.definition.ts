import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'


const cardSectionDefinition: SpruceSchemas.Local.CardSection.IDefinition  = {
	id: 'cardSection',
	name: 'card section',
	description: 'A card body is made up of several sections',
	    fields: {
	            /** . */
	            'children': {
	                type: FieldType.Node,
	                options: undefined
	            },
	            /** . Set to true to remove horizontal padding */
	            'isFullBleed': {
	                type: FieldType.Boolean,
	                hint: 'Set to true to remove horizontal padding',
	                options: undefined
	            },
	    }
}

export default cardSectionDefinition
