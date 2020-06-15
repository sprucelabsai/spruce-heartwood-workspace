import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const scoreCardPanelDefinition = buildSchemaDefinition({
	id: 'ScoreCardPanel',
	name: 'ScoreCardPanel',
	description: 'Header of a card',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		label: {
			type: FieldType.Text,
			label: 'Label',
			hint: "The label for this score, e.g. Today's Sales"
		},
		value: {
			type: FieldType.Text,
			label: 'Value',
			hint: 'The score, e.g. $234.30'
		}
	}
})

export default scoreCardPanelDefinition
