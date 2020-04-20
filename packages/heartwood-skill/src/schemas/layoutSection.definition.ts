import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const layoutSectionDefinition = buildSchemaDefinition({
	id: 'layoutSection',
	name: 'Layout section',
	description: '',
	fields: {
		id: {
			type: FieldType.Text,
			label: 'Id',
			isRequired: true
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
		}
	}
})

export default layoutSectionDefinition
