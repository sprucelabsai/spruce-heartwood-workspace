import { FieldType, buildSchemaDefinition } from '@sprucelabs/schema'
import buttonGroupDefinition from '../forms/buttonGroup.definition'

const cardFooterDefinition = buildSchemaDefinition({
	id: 'cardFooter',
	name: 'cardFooter',
	description: 'Header of a card',
	fields: {
		buttonGroup: {
			type: FieldType.Schema,
			label: 'Button group',
			hint: 'Render buttons in the Card Footer',
			options: {
				schema: buttonGroupDefinition
			}
		},
		helper: {
			type: FieldType.Text,
			label: 'Helper',
			hint: 'Helper for the footer'
		}
	}
})

export default cardFooterDefinition
