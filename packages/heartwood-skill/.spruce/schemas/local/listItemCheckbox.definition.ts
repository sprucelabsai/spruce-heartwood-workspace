import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'

const listItemCheckboxDefinition: SpruceSchemas.Local.ListItemCheckbox.IDefinition  = {
	id: 'listItemCheckbox',
	name: 'Checkbox',
	description: 'A checkbox!',
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
	            /** . */
	            'id': {
	                type: SpruceSchema.FieldType.Id,
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Label. */
	            'label': {
	                label: 'Label',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [labelDefinitionLocal],}
	            },
	            /** Disabled. */
	            'isDisabled': {
	                label: 'Disabled',
	                type: SpruceSchema.FieldType.Boolean,
	                options: undefined
	            },
	            /** Indeterminate. Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it. */
	            'isIndeterminate': {
	                label: 'Indeterminate',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is showing that half checked state you\'ve seen on checkboxes. It generally has a horizontal line through it.',
	                options: undefined
	            },
	            /** Checked. */
	            'isChecked': {
	                label: 'Checked',
	                type: SpruceSchema.FieldType.Boolean,
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

export default listItemCheckboxDefinition
