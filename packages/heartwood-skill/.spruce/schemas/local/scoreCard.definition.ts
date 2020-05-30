import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import scoreCardPanelDefinitionLocal from '#spruce/schemas/local/scoreCardPanel.definition'

const scoreCardDefinition: SpruceSchemas.Local.ScoreCard.IDefinition  = {
	id: 'ScoreCard',
	name: 'ScoreCard',
	description: 'Header of a card',
	    fields: {
	            /** Scores. */
	            'scores': {
	                label: 'Scores',
	                type: FieldType.Schema,
	                isRequired: true,
	                isArray: true,
	                options: {schemas: [scoreCardPanelDefinitionLocal],}
	            },
	    }
}

export default scoreCardDefinition
