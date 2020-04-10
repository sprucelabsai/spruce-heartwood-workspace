import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import cardHeaderDefinition from '../../src/schemas/cards/cardHeader.definition'

type CardHeaderDefinition = typeof cardHeaderDefinition
export interface ICardHeaderDefinition extends CardHeaderDefinition {}

// Header of a card
export interface ICardHeader extends SchemaDefinitionValues<ICardHeaderDefinition> {}
export interface ICardHeaderInstance extends Schema<ICardHeaderDefinition> {}
