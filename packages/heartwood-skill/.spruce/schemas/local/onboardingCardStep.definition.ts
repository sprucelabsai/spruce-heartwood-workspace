import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const onboardingCardStepDefinition: SpruceSchemas.Local.OnboardingCardStep.IDefinition  = {
	id: 'onboardingCardStep',
	name: 'OnboardingCardStep',
	description: 'Header of a card',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Tab title. Title that shows in the tab */
	            'tabTitle': {
	                label: 'Tab title',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'Title that shows in the tab',
	                options: undefined
	            },
	            /** Tab icon. Icon for the tab */
	            'tabIcon': {
	                label: 'Tab icon',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Icon for the tab',
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Panel title. Title that shows in the panel */
	            'panelTitle': {
	                label: 'Panel title',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'Title that shows in the panel',
	                options: undefined
	            },
	            /** Panel text. Copy describing the step in the card's body */
	            'panelCopy': {
	                label: 'Panel text',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'Copy describing the step in the card\'s body',
	                options: undefined
	            },
	            /** Panel CTA. Primary CTA of this step */
	            'panelCTA': {
	                label: 'Panel CTA',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Primary CTA of this step',
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Is complete. Is this step complete? */
	            'isComplete': {
	                label: 'Is complete',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is this step complete?',
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	    }
}

export default onboardingCardStepDefinition
