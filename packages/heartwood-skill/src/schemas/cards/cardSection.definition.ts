import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const cardSectionDefinition = buildSchemaDefinition({
	id: 'cardSection',
	name: 'card section',
	description: 'A card body is made up of several sections',
	fields: {
		children: {
			type: FieldType.Node
		},
		isFullBleed: {
			type: FieldType.Boolean,
			hint: 'Set to true to remove horizontal padding'
		}
	}
})

export default cardSectionDefinition
