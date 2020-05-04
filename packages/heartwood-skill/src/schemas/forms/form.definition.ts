import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const formDefinition = buildSchemaDefinition({
	id: 'form',
	name: 'Form',
	description: 'A form with fields',
	fields: {
		onSubmit: {
			type: FieldType.Raw,
			label: 'Submit handler',
			isRequired: true,
			options: {
				valueType: '() => void'
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
		validate: {
			type: FieldType.Raw,
			label: 'Validate',
			options: {
				valueType: '() => void'
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
