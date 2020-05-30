import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'


const scoreCardPanelDefinition: SpruceSchemas.Local.ScoreCardPanel.IDefinition  = {
	id: 'ScoreCardPanel',
	name: 'ScoreCardPanel',
	description: 'Header of a card',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: FieldType.Id,
	                options: undefined
	            },
	            /** Label. The label for this score, e.g. Today's Sales */
	            'label': {
	                label: 'Label',
	                type: FieldType.Text,
	                hint: 'The label for this score, e.g. Today\'s Sales',
	                options: undefined
	            },
	            /** Value. The score, e.g. $234.30 */
	            'value': {
	                label: 'Value',
	                type: FieldType.Text,
	                hint: 'The score, e.g. $234.30',
	                options: undefined
	            },
	    }
}

export default scoreCardPanelDefinition
