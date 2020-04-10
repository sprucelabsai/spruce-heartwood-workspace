import { FieldType, buildSchemaDefinition } from '@sprucelabs/schema'

const cardBuilderFooterDefinition = buildSchemaDefinition({
	id: 'CardBuilderFooter',
	name: 'CardBuilderFooter',
	description: 'Header of a card',
	fields: {
		buttonGroup: {
			type: FieldType.Schema,
			label: 'Button group',
			hint: 'Render buttons in the Card Footer',
			options: {
				schemaId: 'ButtonGroup'
			}
		},
		helper: {
			type: FieldType.Text,
			label: 'Helper',
			hint: 'Helper for the footer'
		}
	}
})

export default cardBuilderFooterDefinition
