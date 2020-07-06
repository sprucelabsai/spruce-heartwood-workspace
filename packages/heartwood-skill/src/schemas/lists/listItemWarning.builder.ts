import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const listItemWarningDefinition = buildSchemaDefinition({
	id: 'listItemWarning',
	name: 'List item warning',
	description: 'A warning message that can go on a list item',
	fields: {
		title: {
			type: FieldType.Boolean,
			label: 'Title'
		},
		subtitle: {
			type: FieldType.Boolean,
			label: 'Subtitle'
		},
		note: {
			type: FieldType.Boolean,
			label: 'Note'
		}
	}
})

export default listItemWarningDefinition
