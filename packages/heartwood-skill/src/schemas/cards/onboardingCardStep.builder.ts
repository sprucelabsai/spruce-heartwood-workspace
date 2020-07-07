import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const onboardingCardStepDefinition = buildSchemaDefinition({
	id: 'onboardingCardStep',
	name: 'OnboardingCardStep',
	description: 'Header of a card',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
		},
		tabTitle: {
			type: FieldType.Text,
			label: 'Tab title',
			isRequired: true,
			hint: 'Title that shows in the tab',
		},
		tabIcon: {
			type: FieldType.Schema,
			label: 'Tab icon',
			hint: 'Icon for the tab',
			options: {
				schemaId: 'icon',
			},
		},
		panelTitle: {
			type: FieldType.Text,
			label: 'Panel title',
			isRequired: true,
			hint: 'Title that shows in the panel',
		},
		panelCopy: {
			type: FieldType.Text,
			label: 'Panel text',
			isRequired: true,
			hint: "Copy describing the step in the card's body",
		},
		panelCTA: {
			type: FieldType.Schema,
			label: 'Panel CTA',
			hint: 'Primary CTA of this step',
			options: {
				schemaId: 'button',
			},
		},
		isComplete: {
			type: FieldType.Boolean,
			label: 'Is complete',
			hint: 'Is this step complete?',
		},
		className: {
			type: FieldType.Text,
			isPrivate: true,
		},
	},
})

export default onboardingCardStepDefinition
