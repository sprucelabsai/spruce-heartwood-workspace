import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import scoreCardPanelDefinitionLocal from '#spruce/schemas/local/scoreCardPanel.definition'

const scoreCardDefinition: SpruceSchemas.Local.ScoreCard.IDefinition  = {
	id: 'ScoreCard',
	name: 'ScoreCard',
	description: 'Header of a card',
	    fields: {
	            /** Scores. */
	            'scores': {
	                label: 'Scores',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                isArray: true,
	                options: {schemas: [scoreCardPanelDefinitionLocal],}
	            },
	    }
}

export default scoreCardDefinition
