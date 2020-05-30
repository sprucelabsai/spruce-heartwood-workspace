import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const labelDefinition: SpruceSchemas.Local.Label.IDefinition = {
	id: 'label',
	name: 'Label',
	description: 'The label for any input',
	fields: {
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Id,
			options: undefined
		},
		/** Label. */
		text: {
			label: 'Label',
			type: FieldType.Text,
			isRequired: true,
			options: undefined
		},
		/** Post label text. */
		postLabel: {
			label: 'Post label text',
			type: FieldType.Text,
			options: undefined
		}
	}
}

export default labelDefinition
