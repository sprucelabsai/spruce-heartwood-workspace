import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const tabDefinition: SpruceSchemas.Local.Tab.IDefinition  = {
	id: 'tab',
	name: 'Tab',
	description: 'A tabs control',
	    fields: {
	            /** Text. The text shown on the tab */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'The text shown on the tab',
	                options: undefined
	            },
	            /** Icon. An icon shown on the tab next to the text */
	            'icon': {
	                label: 'Icon',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'An icon shown on the tab next to the text',
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** . */
	            'AnchorComponent': {
	                type: SpruceSchema.FieldType.ElementType,
	                options: undefined
	            },
	            /** Is current. Is the currently selected tab */
	            'isCurrent': {
	                label: 'Is current',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is the currently selected tab',
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Panel. Rendered as the body of the selected tab */
	            'panel': {
	                label: 'Panel',
	                type: SpruceSchema.FieldType.Node,
	                hint: 'Rendered as the body of the selected tab',
	                options: undefined
	            },
	    }
}

export default tabDefinition
