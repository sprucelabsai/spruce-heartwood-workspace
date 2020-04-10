import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import cardBuilderFooterDefinition from '../../src/schemas/cards/cardFooter.definition'

type CardBuilderFooterDefinition = typeof cardBuilderFooterDefinition
export interface ICardBuilderFooterDefinition extends CardBuilderFooterDefinition {}

// Header of a card
export interface ICardBuilderFooter extends SchemaDefinitionValues<ICardBuilderFooterDefinition> {}
export interface ICardBuilderFooterInstance extends Schema<ICardBuilderFooterDefinition> {}
