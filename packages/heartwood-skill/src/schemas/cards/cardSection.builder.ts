import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const cardSectionDefinition = buildSchemaDefinition({
	id: 'cardSection',
	name: 'card section',
	description: 'A card body is made up of several sections',
	fields: {
		children: {
			type: FieldType.Node,
		},
		isFullBleed: {
			type: FieldType.Boolean,
			hint: 'Set to true to remove horizontal padding',
		},
	},
})

export default cardSectionDefinition
