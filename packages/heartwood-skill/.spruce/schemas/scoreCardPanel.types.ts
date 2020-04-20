import * as SpruceSchema from '@sprucelabs/schema'
import Schema, { ISchemaDefinition } from '@sprucelabs/schema'

/**
import scoreCardPanelDefinition from '../../src/schemas/cards/scoreCardPanel.definition'
type ScoreCardPanelDefinition = typeof scoreCardPanelDefinition
*/

export interface IScoreCardPanelDefinition extends ISchemaDefinition {
	id: 'ScoreCardPanel',
	name: 'ScoreCardPanel',
	description: 'Header of a card',
	
	
	    fields: {
	            /** Id. Unique id for React loops */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                
	                isRequired: true,
	                hint: 'Unique id for React loops',
	                
	                
	                
	                
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

export const scoreCardPanelDefinition : IScoreCardPanelDefinition = {
	id: 'ScoreCardPanel',
	name: 'ScoreCardPanel',
	description: 'Header of a card',
	
	
	    fields: {
	            /** Id. Unique id for React loops */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                
	                isRequired: true,
	                hint: 'Unique id for React loops',
	                
	                
	                
	                
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

// Header of a card
export interface IScoreCardPanel {
	
		/** Id. Unique id for React loops */
		'id': string
		/** Label. The label for this score, e.g. Today's Sales */
		'label'?: string
		/** Value. The score, e.g. $234.30 */
		'value'?: string
}
export interface IScoreCardPanelInstance extends Schema<IScoreCardPanelDefinition> {}
