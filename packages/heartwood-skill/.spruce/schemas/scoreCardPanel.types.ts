import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import scoreCardPanelDefinition from '../../src/schemas/cards/scoreCardPanel.definition'

type ScoreCardPanelDefinition = typeof scoreCardPanelDefinition
export interface IScoreCardPanelDefinition extends ScoreCardPanelDefinition {}

// Header of a card
export interface IScoreCardPanel extends SchemaDefinitionValues<IScoreCardPanelDefinition> {}
export interface IScoreCardPanelInstance extends Schema<IScoreCardPanelDefinition> {}
