import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import formDialogButtonsDefinitionLocal from '#spruce/schemas/local/formDialogButtons.definition'
import formBuilderSectionDefinitionLocal from '#spruce/schemas/local/formBuilderSection.definition'

const formBuilderDefinition: SpruceSchemas.Local.FormBuilder.IDefinition  = {
	id: 'formBuilder',
	name: 'Form builder',
	description: 'Build a form to collect some deets',
	    fields: {
	            /** Submit handler. */
	            'onSubmit': {
	                label: 'Submit handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                isRequired: true,
	                options: {event: `React.FormEvent<...>`,element: `HTMLFormElement`,}
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Reset handler. */
	            'onReset': {
	                label: 'Reset handler',
	                type: SpruceSchema.FieldType.Raw,
	                options: {valueType: `() => void`,}
	            },
	            /** Validate. */
	            'onValidate': {
	                label: 'Validate',
	                type: SpruceSchema.FieldType.Raw,
	                options: {valueType: `(values: Record<string, any>) => Promise<void> | void`,}
	            },
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** Initial values. */
	            'initialValues': {
	                label: 'Initial values',
	                type: SpruceSchema.FieldType.Raw,
	                options: {valueType: `Record<string, any>`,}
	            },
	            /** Render type. Set this to tell the Form where it'll be rendered */
	            'renderAs': {
	                label: 'Render type',
	                type: SpruceSchema.FieldType.Select,
	                hint: 'Set this to tell the Form where it\'ll be rendered',
	                defaultValue: "default",
	                options: {choices: [{"value":"page","label":"Full page"},{"value":"default","label":"Default"},{"value":"dialog","label":"Dialog body"}],}
	            },
	            /** Dirty. Has this field been edited/updated? */
	            'isDirty': {
	                label: 'Dirty',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Has this field been edited/updated?',
	                options: undefined
	            },
	            /** Valid. Is the form valid (will disable submit buttons) */
	            'isValid': {
	                label: 'Valid',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is the form valid (will disable submit buttons)',
	                options: undefined
	            },
	            /** Busy. Is the form busy (will show progress over buttons) */
	            'isBusy': {
	                label: 'Busy',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is the form busy (will show progress over buttons)',
	                options: undefined
	            },
	            /** Dialog buttons. */
	            'dialogButtons': {
	                label: 'Dialog buttons',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [formDialogButtonsDefinitionLocal],}
	            },
	            /** Schema definition. */
	            'schema': {
	                label: 'Schema definition',
	                type: SpruceSchema.FieldType.Raw,
	                isRequired: true,
	                options: {valueType: `SpruceSchema.ISchemaDefinition`,}
	            },
	            /** Sections. */
	            'sections': {
	                label: 'Sections',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                isArray: true,
	                options: {schemas: [formBuilderSectionDefinitionLocal],}
	            },
	    }
}

export default formBuilderDefinition
