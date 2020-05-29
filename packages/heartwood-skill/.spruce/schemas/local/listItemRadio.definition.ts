import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'

const listItemRadioDefinition: SpruceSchemas.Local.ListItemRadio.IDefinition  = {
	id: 'listItemRadio',
	name: 'Radio',
	description: 'A radio control. Give a bunch the same name to keep them as part of the same group',
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
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. A name attached to this radio button */
	            'name': {
	                label: 'Name',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'A name attached to this radio button',
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [labelDefinitionLocal],}
	            },
	            /** Is disabled. is this control disabled? */
	            'isDisabled': {
	                label: 'Is disabled',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'is this control disabled?',
	                options: undefined
	            },
	            /** Is checked. Is this control checked? */
	            'isChecked': {
	                label: 'Is checked',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is this control checked?',
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Helper. */
	            'helper': {
	                label: 'Helper',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [inputHelperDefinitionLocal],}
	            },
	    }
}

export default listItemRadioDefinition
