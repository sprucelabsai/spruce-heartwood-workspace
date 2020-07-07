import { buildSchemaDefinition } from '@sprucelabs/schema'
import buttonGroupDefinition from '../forms/buttonGroup.builder'
import cardBodyDefinition from './cardBody.builder'
import FieldType from '#spruce:schema/fields/fieldType'
export const cardBuilderBodyItems: string[] = [
	'button',
	'image',
	'heading',
	'text',
	'scoreCard',
	'toast',
	'list',
]

const cardBuilderDefinition = buildSchemaDefinition({
	id: 'cardBuilder',
	name: 'CardBuilder',
	description: 'Build a card to show something to the user',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
		},
		header: {
			type: FieldType.Schema,
			label: 'Header',
			hint: 'Card Header props',
			options: {
				schemaId: 'cardHeader',
			},
		},
		headerImage: {
			type: FieldType.Schema,
			label: 'Header image',
			hint:
				'optionally pass props to an image tag to be rendered in the header',
			options: {
				schemaId: 'image',
			},
		},
		onboarding: {
			type: FieldType.Schema,
			label: 'Onboarding',
			hint: 'all onboarding props',
			options: {
				schemaId: 'onboardingCard',
			},
		},
		body: {
			type: FieldType.Schema,
			label: 'Body',
			hint: 'Card Body props',
			options: {
				schema: buildSchemaDefinition({
					id: 'cardBuilderBody',
					name: 'Card builder body',
					description: 'Hold all the information for creating body components',
					fields: {
						...cardBodyDefinition.fields,
						items: {
							type: FieldType.Schema,
							label: 'Items',
							isRequired: true,
							isArray: true,
							hint: 'Children to show in the Card',
							options: {
								schemaIds: cardBuilderBodyItems,
							},
						},
					},
				}),
			},
		},
		footer: {
			type: FieldType.Schema,
			label: 'Footer',
			hint: 'The footer of the card',
			options: {
				schema: buildSchemaDefinition({
					id: 'cardBuilderFooter',
					name: 'CardBuilder footer',
					description: 'Footer used for the card builder',
					fields: {
						buttonGroup: {
							type: FieldType.Schema,
							label: 'Button group',
							hint: 'Render buttons in the Card Footer',
							options: {
								schema: buttonGroupDefinition,
							},
						},
						helper: {
							type: FieldType.Text,
							label: 'Helper',
							hint: 'Helper for the footer',
						},
					},
				}),
			},
		},
	},
})

export default cardBuilderDefinition
