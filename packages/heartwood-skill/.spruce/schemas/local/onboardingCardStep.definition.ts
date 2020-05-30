import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const onboardingCardStepDefinition: SpruceSchemas.Local.OnboardingCardStep.IDefinition  = {
	id: 'onboardingCardStep',
	name: 'OnboardingCardStep',
	description: 'Header of a card',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: FieldType.Id,
	                options: undefined
	            },
	            /** Tab title. Title that shows in the tab */
	            'tabTitle': {
	                label: 'Tab title',
	                type: FieldType.Text,
	                isRequired: true,
	                hint: 'Title that shows in the tab',
	                options: undefined
	            },
	            /** Tab icon. Icon for the tab */
	            'tabIcon': {
	                label: 'Tab icon',
	                type: FieldType.Schema,
	                hint: 'Icon for the tab',
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Panel title. Title that shows in the panel */
	            'panelTitle': {
	                label: 'Panel title',
	                type: FieldType.Text,
	                isRequired: true,
	                hint: 'Title that shows in the panel',
	                options: undefined
	            },
	            /** Panel text. Copy describing the step in the card's body */
	            'panelCopy': {
	                label: 'Panel text',
	                type: FieldType.Text,
	                isRequired: true,
	                hint: 'Copy describing the step in the card\'s body',
	                options: undefined
	            },
	            /** Panel CTA. Primary CTA of this step */
	            'panelCTA': {
	                label: 'Panel CTA',
	                type: FieldType.Schema,
	                hint: 'Primary CTA of this step',
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Is complete. Is this step complete? */
	            'isComplete': {
	                label: 'Is complete',
	                type: FieldType.Boolean,
	                hint: 'Is this step complete?',
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: FieldType.Text,
	                options: undefined
	            },
	    }
}

export default onboardingCardStepDefinition
