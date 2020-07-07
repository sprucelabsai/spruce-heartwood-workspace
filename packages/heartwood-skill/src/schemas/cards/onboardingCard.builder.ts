import { FieldType, buildSchemaDefinition } from '@sprucelabs/schema'

const onboardingCardDefinition = buildSchemaDefinition({
	id: 'OnboardingCard',
	name: 'OnboardingCard',
	description: 'Header of a card',
	fields: {
		title: {
			type: FieldType.Text,
			label: 'Title',
			hint: 'Title of the entire card',
		},
		steps: {
			type: FieldType.Schema,
			label: 'Steps',
			isRequired: true,
			isArray: true,
			hint: 'Steps for onboarding',
			options: {
				schemaId: 'onboardingCardStep',
			},
		},
	},
})

export default onboardingCardDefinition
