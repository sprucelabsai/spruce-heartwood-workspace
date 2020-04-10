import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import scoreCardDefinition from '../../src/schemas/cards/scoreCard.definition'

type ScoreCardDefinition = typeof scoreCardDefinition
export interface IScoreCardDefinition extends ScoreCardDefinition {}

// Header of a card
export interface IScoreCard extends SchemaDefinitionValues<IScoreCardDefinition> {}
export interface IScoreCardInstance extends Schema<IScoreCardDefinition> {}
