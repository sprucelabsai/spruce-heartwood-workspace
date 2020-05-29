import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const scoreCardPanelDefinition: SpruceSchemas.Local.ScoreCardPanel.IDefinition  = {
	id: 'ScoreCardPanel',
	name: 'ScoreCardPanel',
	description: 'Header of a card',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Label. The label for this score, e.g. Today's Sales */
	            'label': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'The label for this score, e.g. Today\'s Sales',
	                options: undefined
	            },
	            /** Value. The score, e.g. $234.30 */
	            'value': {
	                label: 'Value',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'The score, e.g. $234.30',
	                options: undefined
	            },
	    }
}

export default scoreCardPanelDefinition
