import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import tabDefinitionLocal from '#spruce/schemas/local/tab.definition'

const tabsDefinition: SpruceSchemas.Local.Tabs.IDefinition  = {
	id: 'tabs',
	name: 'Tabs',
	description: 'A tabs control',
	    fields: {
	            /** Tabs. */
	            'tabs': {
	                label: 'Tabs',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                isArray: true,
	                options: {schemas: [tabDefinitionLocal],}
	            },
	            /** Horizontal padding. Adds horizontal padding */
	            'isPadded': {
	                label: 'Horizontal padding',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Adds horizontal padding',
	                options: undefined
	            },
	            /** Truncate tabs. Should tabs render 3 dots if they all don't fit */
	            'isTruncatable': {
	                label: 'Truncate tabs',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Should tabs render 3 dots if they all don\'t fit',
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	    }
}

export default tabsDefinition
