import { FieldType, buildSchemaDefinition } from '@sprucelabs/schema'

const scoreCardDefinition = buildSchemaDefinition({
	id: 'ScoreCard',
	name: 'ScoreCard',
	description: 'Header of a card',
	fields: {
		scores: {
			type: FieldType.Schema,
			label: 'Scores',
			isRequired: true,
			isArray: true,
			options: {
				schemaId: 'ScoreCardPanel',
			},
		},
	},
})

export default scoreCardDefinition
