import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const imageDefinition = buildSchemaDefinition({
	id: 'Image',
	name: 'Image',
	description: 'A basic image tag',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint: 'For UI caching'
		},
		src: {
			type: FieldType.Text,
			label: 'Src',
			isRequired: true,
			hint: 'Where to pull the image from'
		},
		alt: {
			type: FieldType.Text,
			label: 'Alt',
			hint: 'Rendered as the alt tag for hovers'
		},
		width: {
			type: FieldType.Number,
			isPrivate: true
		},
		height: {
			type: FieldType.Number,
			isPrivate: true
		}
	}
})

export default imageDefinition
