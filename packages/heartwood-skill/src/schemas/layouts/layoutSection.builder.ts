import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const layoutSectionDefinition = buildSchemaDefinition({
	id: 'layoutSection',
	name: 'Layout section',
	description: 'A section that makes up a layout',
	fields: {
		id: {
			type: FieldType.Text,
			label: 'Id'
		},
		children: {
			type: FieldType.Node,
			label: 'Children',
			isPrivate: true
		},
		className: {
			type: FieldType.Text,
			label: 'Classname',
			isPrivate: true
		},
		isSecondary: {
			type: FieldType.Boolean,
			label: 'Is secondary',
			hint: 'Makes this section thinner'
		},
		layoutBuilder: {
			type: FieldType.Schema,
			label: 'Layout builder',
			options: {
				schemaId: 'layoutBuilder'
			}
		}
	}
})

export default layoutSectionDefinition
