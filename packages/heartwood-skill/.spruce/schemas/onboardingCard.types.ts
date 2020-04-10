import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import onboardingCardDefinition from '../../src/schemas/cards/onboardingCard.definition'

type OnboardingCardDefinition = typeof onboardingCardDefinition
export interface IOnboardingCardDefinition extends OnboardingCardDefinition {}

// Header of a card
export interface IOnboardingCard extends SchemaDefinitionValues<IOnboardingCardDefinition> {}
export interface IOnboardingCardInstance extends Schema<IOnboardingCardDefinition> {}
