import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const imageDefinition: SpruceSchemas.Local.Image.IDefinition = {
	id: 'Image',
	name: 'Image',
	description: 'A basic image tag',
	fields: {
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Id,
			options: undefined
		},
		/** Src. Where to pull the image from */
		src: {
			label: 'Src',
			type: FieldType.Text,
			isRequired: true,
			hint: 'Where to pull the image from',
			options: undefined
		},
		/** Alt. Rendered as the alt tag for hovers */
		alt: {
			label: 'Alt',
			type: FieldType.Text,
			hint: 'Rendered as the alt tag for hovers',
			options: undefined
		},
		/** . */
		width: {
			type: FieldType.Number,
			options: undefined
		},
		/** . */
		height: {
			type: FieldType.Number,
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		}
	}
}

export default imageDefinition
