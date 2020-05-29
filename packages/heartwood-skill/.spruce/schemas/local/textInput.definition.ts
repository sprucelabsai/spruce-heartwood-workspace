import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'

const textInputDefinition: SpruceSchemas.Local.TextInput.IDefinition  = {
	id: 'textInput',
	name: 'Input inner',
	description: 'A reusable component that holds an html <input /> element and decorates it.',
	    fields: {
	            /** Change handler. */
	            'onChange': {
	                label: 'Change handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.ChangeEvent<...>`,element: `HTMLInputElement`,}
	            },
	            /** Blur handler. */
	            'onBlur': {
	                label: 'Blur handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.FocusEvent<...>`,element: `HTMLInputElement`,}
	            },
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
	            /** Autocomplete. */
	            'enableAutoComplete': {
	                label: 'Autocomplete',
	                type: SpruceSchema.FieldType.Boolean,
	                defaultValue: true,
	                options: undefined
	            },
	            /** Placeholder. */
	            'placeholder': {
	                label: 'Placeholder',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Type. */
	            'type': {
	                label: 'Type',
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "text",
	                options: {choices: [{"value":"button","label":"button"},{"value":"search","label":"search"},{"value":"checkbox","label":"checkbox"},{"value":"color","label":"color"},{"value":"date","label":"date"},{"value":"datetime-local","label":"datetime-local"},{"value":"email","label":"email"},{"value":"file","label":"file"},{"value":"hidden","label":"hidden"},{"value":"image","label":"image"},{"value":"month","label":"month"},{"value":"number","label":"number"},{"value":"password","label":"password"},{"value":"radio","label":"radio"},{"value":"range","label":"range"},{"value":"reset","label":"reset"},{"value":"search","label":"search"},{"value":"submit","label":"submit"},{"value":"tel","label":"tel"},{"value":"text","label":"text"},{"value":"time","label":"time"},{"value":"url","label":"url"},{"value":"week","label":"week"}],}
	            },
	            /** Before icon. The icon shown before the input */
	            'iconBefore': {
	                label: 'Before icon',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'The icon shown before the input',
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Clear button. Drops in a clear button after the field, but requires you to handle the clear. */
	            'clearButton': {
	                label: 'Clear button',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Drops in a clear button after the field, but requires you to handle the clear.',
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Appendix. Shown under the input. */
	            'appendix': {
	                label: 'Appendix',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Shown under the input.',
	                options: undefined
	            },
	            /** Helper. Shows hints or error messages. If both set, error wins. */
	            'helper': {
	                label: 'Helper',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Shows hints or error messages. If both set, error wins.',
	                options: {schemas: [inputHelperDefinitionLocal],}
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
	            /** Small. Render a small variation */
	            'isSmall': {
	                label: 'Small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Render a small variation',
	                options: undefined
	            },
	            /** Value. */
	            'value': {
	                label: 'Value',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Read only. */
	            'isReadOnly': {
	                label: 'Read only',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	    }
}

export default textInputDefinition
