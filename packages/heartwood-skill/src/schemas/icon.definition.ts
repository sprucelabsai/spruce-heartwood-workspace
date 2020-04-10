import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const iconDefinition = buildSchemaDefinition({
	id: 'Icon',
	name: 'Icon',
	description: '**missing description**',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint: 'Id for ui caching'
		},
		name: {
			type: FieldType.Text,
			label: 'Name',
			hint:
				'The name of the icon to render. If not found, this will return null.'
		},
		isLineIcon: {
			type: FieldType.Boolean,
			label: 'Is line icon',
			hint: 'Set true to render an icon with a stroke, but no fill'
		}
	}
})

export default iconDefinition
