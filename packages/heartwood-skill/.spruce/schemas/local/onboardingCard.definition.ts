import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import onboardingCardStepDefinitionLocal from '#spruce/schemas/local/onboardingCardStep.definition'

const onboardingCardDefinition: SpruceSchemas.Local.OnboardingCard.IDefinition  = {
	id: 'OnboardingCard',
	name: 'OnboardingCard',
	description: 'Header of a card',
	    fields: {
	            /** Title. Title of the entire card */
	            'title': {
	                label: 'Title',
	                type: FieldType.Text,
	                hint: 'Title of the entire card',
	                options: undefined
	            },
	            /** Steps. Steps for onboarding */
	            'steps': {
	                label: 'Steps',
	                type: FieldType.Schema,
	                isRequired: true,
	                hint: 'Steps for onboarding',
	                isArray: true,
	                options: {schemas: [onboardingCardStepDefinitionLocal],}
	            },
	    }
}

export default onboardingCardDefinition
