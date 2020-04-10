import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import cardBuilderDefinition from '../../src/schemas/cards/cardBuilder.definition'

type CardBuilderDefinition = typeof cardBuilderDefinition
export interface ICardBuilderDefinition extends CardBuilderDefinition {}

// Build a card to show something to the user
export interface ICardBuilder extends SchemaDefinitionValues<ICardBuilderDefinition> {}
export interface ICardBuilderInstance extends Schema<ICardBuilderDefinition> {}
