import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonGroupDefinitionLocal from '#spruce/schemas/local/buttonGroup.definition'

const cardBuilderFooterDefinition: SpruceSchemas.Local.CardBuilderFooter.IDefinition  = {
	id: 'cardBuilderFooter',
	name: 'CardBuilder footer',
	description: 'Footer used for the card builder',
	    fields: {
	            /** Button group. Render buttons in the Card Footer */
	            'buttonGroup': {
	                label: 'Button group',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Render buttons in the Card Footer',
	                options: {schemas: [buttonGroupDefinitionLocal],}
	            },
	            /** Helper. Helper for the footer */
	            'helper': {
	                label: 'Helper',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Helper for the footer',
	                options: undefined
	            },
	    }
}

export default cardBuilderFooterDefinition
