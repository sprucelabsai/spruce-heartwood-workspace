import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const formBuilderSectionDefinition: SpruceSchemas.Local.FormBuilderSection.IDefinition = {
	id: 'formBuilderSection',
	name: 'Form builder section',
	fields: {
		/** Title. */
		title: {
			label: 'Title',
			type: FieldType.Text,
			options: undefined
		},
		/** Spacing. */
		spacing: {
			label: 'Spacing',
			type: FieldType.Select,
			options: {
				choices: [
					{ value: 'tight', label: 'Tight' },
					{ value: 'base', label: 'Base' }
				]
			}
		},
		/** . */
		fields: {
			type: FieldType.Boolean,
			isArray: true,
			options: undefined
		}
	}
}

export default formBuilderSectionDefinition
