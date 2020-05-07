import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const formDefinition = buildSchemaDefinition({
	id: 'form',
	name: 'Form',
	description: 'A form with fields',
	fields: {
		onSubmit: {
			type: FieldType.EventCallback,
			label: 'Submit handler',
			isRequired: true,
			options: {
				event: 'React.FormEvent<...>',
				element: 'HTMLFormElement'
			}
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		onReset: {
			type: FieldType.Raw,
			label: 'Reset handler',
			options: {
				valueType: '() => void'
			}
		},
		onValidate: {
			type: FieldType.Raw,
			label: 'Validate',
			options: {
				valueType: '(values: Record<string, any>) => Promise<void> | void'
			}
		},
		children: {
			type: FieldType.Node,
			isPrivate: true
		},
		initialValues: {
			type: FieldType.Raw,
			label: 'Initial values',
			options: {
				valueType: 'Record<string, any>'
			}
		},
		renderAs: {
			type: FieldType.Select,
			label: 'Render type',
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
		isDirty: {
			type: FieldType.Boolean,
			label: 'Dirty',
			hint: 'Has this field been edited/updated?'
		},
		isValid: {
			type: FieldType.Boolean,
			label: 'Valid',
			hint: 'Is the form valid (will disable submit buttons)'
		},
		isBusy: {
			type: FieldType.Boolean,
			label: 'Busy',
			hint: 'Is the form busy (will show progress over buttons)'
		},
		dialogButtons: {
			type: FieldType.Schema,
			label: 'Dialog buttons',
			options: {
				schema: {
					id: 'formDialogButtons',
					name: 'Form dialog buttons',
					fields: {
						primary: {
							type: FieldType.Schema,
							label: 'Primary button',
							options: {
								schemaId: 'button'
							}
						},
						secondary: {
							type: FieldType.Schema,
							label: 'Secondary button',
							options: {
								schemaId: 'button'
							}
						}
					}
				}
			}
		}
	}
})

export default formDefinition
