import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import cardBuilderBodyDefinitionLocal from '#spruce/schemas/local/cardBuilderBody.definition'
import cardBuilderFooterDefinitionLocal from '#spruce/schemas/local/cardBuilderFooter.definition'

const cardBuilderDefinition: SpruceSchemas.Local.CardBuilder.IDefinition  = {
	id: 'cardBuilder',
	name: 'CardBuilder',
	description: 'Build a card to show something to the user',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Header. Card Header props */
	            'header': {
	                label: 'Header',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Card Header props',
	                options: {schemas: [cardHeaderDefinitionLocal],}
	            },
	            /** Header image. optionally pass props to an image tag to be rendered in the header */
	            'headerImage': {
	                label: 'Header image',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'optionally pass props to an image tag to be rendered in the header',
	                options: {schemas: [imageDefinitionLocal],}
	            },
	            /** Onboarding. all onboarding props */
	            'onboarding': {
	                label: 'Onboarding',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'all onboarding props',
	                options: {schemas: [onboardingCardDefinitionLocal],}
	            },
	            /** Body. Card Body props */
	            'body': {
	                label: 'Body',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Card Body props',
	                options: {schemas: [cardBuilderBodyDefinitionLocal],}
	            },
	            /** Footer. The footer of the card */
	            'footer': {
	                label: 'Footer',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'The footer of the card',
	                options: {schemas: [cardBuilderFooterDefinitionLocal],}
	            },
	    }
}

export default cardBuilderDefinition
