import { FieldType, buildSchemaDefinition } from '@sprucelabs/schema'

const cardFooterDefinition = buildSchemaDefinition({
	id: 'cardFooter',
	name: 'cardFooter',
	description: 'Header of a card',
	fields: {
		children: {
			type: FieldType.Node,
		},
	},
})

export default cardFooterDefinition
