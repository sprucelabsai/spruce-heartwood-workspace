import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const tagDefinition: SpruceSchemas.Local.Tag.IDefinition = {
	id: 'tag',
	name: 'Tag',
	description: 'Small pill like control with text and onClick functionality',
	fields: {
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Id,
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Text. */
		text: {
			label: 'Text',
			type: FieldType.Text,
			options: undefined
		},
		/** Kind. */
		kind: {
			label: 'Kind',
			type: FieldType.Select,
			defaultValue: 'primary',
			options: {
				choices: [
					{ value: 'primary', label: 'Primary' },
					{ value: 'secondary', label: 'Secondary' }
				]
			}
		},
		/** Small. Render small variation of the tag */
		isSmall: {
			label: 'Small',
			type: FieldType.Boolean,
			hint: 'Render small variation of the tag',
			defaultValue: false,
			options: undefined
		}
	}
}

export default tagDefinition
