import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const listItemWarningDefinition: SpruceSchemas.Local.ListItemWarning.IDefinition = {
	id: 'listItemWarning',
	name: 'List item warning',
	description: 'A warning message that can go on a list item',
	fields: {
		/** Title. */
		title: {
			label: 'Title',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Subtitle. */
		subtitle: {
			label: 'Subtitle',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Note. */
		note: {
			label: 'Note',
			type: FieldType.Boolean,
			options: undefined
		}
	}
}

export default listItemWarningDefinition
