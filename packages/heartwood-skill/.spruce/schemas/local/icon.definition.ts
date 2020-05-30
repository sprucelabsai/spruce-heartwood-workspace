import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const iconDefinition: SpruceSchemas.Local.Icon.IDefinition = {
	id: 'Icon',
	name: 'Icon',
	description: '**missing description**',
	fields: {
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Id,
			options: undefined
		},
		/** Name. The name of the icon to render. If not found, this will return null. */
		name: {
			label: 'Name',
			type: FieldType.Text,
			hint:
				'The name of the icon to render. If not found, this will return null.',
			options: undefined
		},
		/** Is line icon. Set true to render an icon with a stroke, but no fill */
		isLineIcon: {
			label: 'Is line icon',
			type: FieldType.Boolean,
			hint: 'Set true to render an icon with a stroke, but no fill',
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** . Lets you pass an icon node */
		customIcon: {
			type: FieldType.Node,
			hint: 'Lets you pass an icon node',
			options: undefined
		}
	}
}

export default iconDefinition
