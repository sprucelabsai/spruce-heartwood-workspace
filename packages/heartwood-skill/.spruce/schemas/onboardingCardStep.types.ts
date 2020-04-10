import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import onboardingCardStepDefinition from '../../src/schemas/cards/onboardingCardStep.definition'

type OnboardingCardStepDefinition = typeof onboardingCardStepDefinition
export interface IOnboardingCardStepDefinition extends OnboardingCardStepDefinition {}

// Header of a card
export interface IOnboardingCardStep extends SchemaDefinitionValues<IOnboardingCardStepDefinition> {}
export interface IOnboardingCardStepInstance extends Schema<IOnboardingCardStepDefinition> {}
