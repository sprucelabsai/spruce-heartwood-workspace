import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const confirmDialogDefinition = buildSchemaDefinition({
	id: 'confirm Modal',
	name: 'ConfirmModal',
	description: 'a confirmation dialog',
	fields: {
		title: {
			type: FieldType.Text,
			label: 'Title',
			hint: 'Title of the confirmation dialog',
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'Text shown in the dialog',
		},
	},
})

export default confirmDialogDefinition
