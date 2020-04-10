import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const onboardingCardStepDefinition = buildSchemaDefinition({
	id: 'OnboardingCardStep',
	name: 'OnboardingCardStep',
	description: 'Header of a card',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint: 'Unique identifier'
		},
		tabTitle: {
			type: FieldType.Text,
			label: 'Tab title',
			isRequired: true,
			hint: 'Title that shows in the tab'
		},
		tabIcon: {
			type: FieldType.Schema,
			label: 'Tab icon',
			hint: 'Icon for the tab',
			options: {
				schemaId: 'Icon'
			}
		},
		panelTitle: {
			type: FieldType.Text,
			label: 'Panel title',
			isRequired: true,
			hint: 'Title that shows in the panel'
		},
		panelCopy: {
			type: FieldType.Text,
			label: 'Panel copy',
			isRequired: true,
			hint: "Copy describing the step in the card's body"
		},
		panelCTA: {
			type: FieldType.Schema,
			label: 'Panel c t a',
			hint: 'Primary CTA of this step',
			options: {
				schemaId: 'Button'
			}
		},
		isComplete: {
			type: FieldType.Boolean,
			label: 'Is complete',
			hint: 'Is this step complete?'
		}
	}
})

export default onboardingCardStepDefinition
