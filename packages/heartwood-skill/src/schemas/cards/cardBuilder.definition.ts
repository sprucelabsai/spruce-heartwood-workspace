import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const cardBuilderDefinition = buildSchemaDefinition({
	id: 'CardBuilder',
	name: 'CardBuilder',
	description: 'Build a card to show something to the user',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true
		},
		header: {
			type: FieldType.Schema,
			label: 'Header',
			hint: 'Card Header props',
			options: {
				schemaId: 'cardHeader'
			}
		},
		headerImage: {
			type: FieldType.Schema,
			label: 'Header image',
			hint:
				'optionally pass props to an image tag to be rendered in the header',
			options: {
				schemaId: 'image'
			}
		},
		onboarding: {
			type: FieldType.Schema,
			label: 'Onboarding',
			hint: 'all onboarding props',
			options: {
				schemaId: 'OnboardingCard'
			}
		},
		body: {
			type: FieldType.Schema,
			label: 'Body',
			hint: 'Card Body props',
			options: {
				schemaId: 'CardBuilderBody'
			}
		},
		footer: {
			type: FieldType.Schema,
			label: 'Footer',
			hint: 'The footer of the card',
			options: {
				schemaId: 'CardFooter'
			}
		}
	}
})

export default cardBuilderDefinition
