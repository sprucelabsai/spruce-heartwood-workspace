import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import formDialogButtonsDefinitionLocal from '#spruce/schemas/local/formDialogButtons.definition'

const formDefinition: SpruceSchemas.Local.Form.IDefinition = {
	id: 'form',
	name: 'Form',
	description: 'A form with fields',
	fields: {
		/** Submit handler. */
		onSubmit: {
			label: 'Submit handler',
			type: FieldType.EventCallback,
			isRequired: true,
			options: { event: `React.FormEvent<...>`, element: `HTMLFormElement` }
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Reset handler. */
		onReset: {
			label: 'Reset handler',
			type: FieldType.Raw,
			options: { valueType: `() => void` }
		},
		/** Validate. */
		onValidate: {
			label: 'Validate',
			type: FieldType.Raw,
			options: {
				valueType: `(values: Record<string, any>) => Promise<void> | void`
			}
		},
		/** . */
		children: {
			type: FieldType.Node,
			options: undefined
		},
		/** Initial values. */
		initialValues: {
			label: 'Initial values',
			type: FieldType.Raw,
			options: { valueType: `Record<string, any>` }
		},
		/** Render type. Set this to tell the Form where it'll be rendered */
		renderAs: {
			label: 'Render type',
			type: FieldType.Select,
			hint: "Set this to tell the Form where it'll be rendered",
			defaultValue: 'default',
			options: {
				choices: [
					{ value: 'page', label: 'Full page' },
					{ value: 'default', label: 'Default' },
					{ value: 'dialog', label: 'Dialog body' }
				]
			}
		},
		/** Dirty. Has this field been edited/updated? */
		isDirty: {
			label: 'Dirty',
			type: FieldType.Boolean,
			hint: 'Has this field been edited/updated?',
			options: undefined
		},
		/** Valid. Is the form valid (will disable submit buttons) */
		isValid: {
			label: 'Valid',
			type: FieldType.Boolean,
			hint: 'Is the form valid (will disable submit buttons)',
			options: undefined
		},
		/** Busy. Is the form busy (will show progress over buttons) */
		isBusy: {
			label: 'Busy',
			type: FieldType.Boolean,
			hint: 'Is the form busy (will show progress over buttons)',
			options: undefined
		},
		/** Dialog buttons. */
		dialogButtons: {
			label: 'Dialog buttons',
			type: FieldType.Schema,
			options: { schemas: [formDialogButtonsDefinitionLocal] }
		}
	}
}

export default formDefinition
