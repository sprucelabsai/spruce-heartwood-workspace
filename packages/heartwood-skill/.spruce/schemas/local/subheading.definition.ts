import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const subheadingDefinition: SpruceSchemas.Local.Subheading.IDefinition = {
	id: 'subheading',
	name: 'Subheading',
	description: 'Defaults to h2',
	fields: {
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Id,
			options: undefined
		},
		/** Html. HTML rendered directly */
		html: {
			label: 'Html',
			type: FieldType.Text,
			hint: 'HTML rendered directly',
			options: undefined
		},
		/** Text. Text rendered in the header */
		text: {
			label: 'Text',
			type: FieldType.Text,
			hint: 'Text rendered in the header',
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** . */
		children: {
			type: FieldType.Node,
			options: undefined
		},
		/** Weight. The weight of the sub heading, H2 and beyond */
		weight: {
			label: 'Weight',
			type: FieldType.Select,
			hint: 'The weight of the sub heading, H2 and beyond',
			defaultValue: 'h2',
			options: {
				choices: [
					{ label: 'H1', value: 'h1' },
					{ label: 'H2', value: 'h2' },
					{ label: 'H3', value: 'h3' },
					{ label: 'H4', value: 'h4' },
					{ label: 'H5', value: 'h5' },
					{ label: 'H6', value: 'h6' }
				]
			}
		}
	}
}

export default subheadingDefinition
