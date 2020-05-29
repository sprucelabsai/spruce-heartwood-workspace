import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'

const toggleDefinition: SpruceSchemas.Local.Toggle.IDefinition  = {
	id: 'Toggle',
	name: 'Toggle',
	description: 'A great way to render a on/off style question or control',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [labelDefinitionLocal],}
	            },
	            /** Helper. */
	            'helper': {
	                label: 'Helper',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [inputHelperDefinitionLocal],}
	            },
	            /** On click. Optional on click to invoke when tapped */
	            'onClick': {
	                label: 'On click',
	                type: SpruceSchema.FieldType.EventCallback,
	                hint: 'Optional on click to invoke when tapped',
	                options: {event: `React.MouseEvent<...>`,element: `HTMLInputElement`,}
	            },
	    }
}

export default toggleDefinition