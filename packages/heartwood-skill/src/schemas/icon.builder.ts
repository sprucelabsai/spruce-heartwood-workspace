import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const iconDefinition = buildSchemaDefinition({
	id: 'Icon',
	name: 'Icon',
	description: '**missing description**',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
		},
		name: {
			type: FieldType.Text,
			label: 'Name',
			hint:
				'The name of the icon to render. If not found, this will return null.',
		},
		isLineIcon: {
			type: FieldType.Boolean,
			label: 'Is line icon',
			hint: 'Set true to render an icon with a stroke, but no fill',
		},
		className: {
			type: FieldType.Text,
			isPrivate: true,
		},
		customIcon: {
			type: FieldType.Node,
			isPrivate: true,
			hint: 'Lets you pass an icon node',
		},
	},
})

export default iconDefinition
