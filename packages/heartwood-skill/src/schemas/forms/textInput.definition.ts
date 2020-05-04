import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const textInputDefinition = buildSchemaDefinition({
	id: 'textInput',
	name: 'Input inner',
	description:
		'A reusable component that holds an html <input /> element and decorates it.',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		name: {
			type: FieldType.Text,
			label: 'Name'
		},
		enableAutoComplete: {
			type: FieldType.Boolean,
			label: 'Autocomplete',
			defaultValue: true
		},
		placeholder: {
			type: FieldType.Text,
			label: 'Placeholder'
		},
		type: {
			type: FieldType.Select,
			label: 'Type',
			isPrivate: true,
			defaultValue: 'text',
			options: {
				choices: [
					{ value: 'button', label: 'button' },
					{ value: 'search', label: 'search' },
					{ value: 'checkbox', label: 'checkbox' },
					{ value: 'color', label: 'color' },
					{ value: 'date', label: 'date' },
					{ value: 'datetime-local', label: 'datetime-local' },
					{ value: 'email', label: 'email' },
					{ value: 'file', label: 'file' },
					{ value: 'hidden', label: 'hidden' },
					{ value: 'image', label: 'image' },
					{ value: 'month', label: 'month' },
					{ value: 'number', label: 'number' },
					{ value: 'password', label: 'password' },
					{ value: 'radio', label: 'radio' },
					{ value: 'range', label: 'range' },
					{ value: 'reset', label: 'reset' },
					{ value: 'search', label: 'search' },
					{ value: 'submit', label: 'submit' },
					{ value: 'tel', label: 'tel' },
					{ value: 'text', label: 'text' },
					{ value: 'time', label: 'time' },
					{ value: 'url', label: 'url' },
					{ value: 'week', label: 'week' }
				]
			}
		},
		iconBefore: {
			type: FieldType.Schema,
			label: 'Before icon',
			hint: 'The icon shown before the input',
			options: {
				schemaId: 'icon'
			}
		},
		clearButtonIcon: {
			type: FieldType.Schema,
			label: 'Clear input icon',
			hint:
				'The icon shown on the "clear" or "reset" button that is after an input.',
			options: {
				schemaId: 'icon'
			}
		},
		onClear: {
			type: FieldType.EventCallback,
			label: 'Clear handler',
			hint:
				'Invoked when a person taps the clear button (requires clear button icon to be set)',
			options: {
				event: 'React.MouseEvent<...>',
				element: 'HTMLInputElement'
			}
		},
		onChange: {
			type: FieldType.EventCallback,
			label: 'Change handler',
			options: {
				event: 'React.ChangeEvent<...>',
				element: 'HTMLInputElement'
			}
		},
		onBlur: {
			type: FieldType.EventCallback,
			label: 'Blur handler',
			options: {
				event: 'React.FocusEvent<...>',
				element: 'HTMLInputElement'
			}
		},
		appendix: {
			type: FieldType.Text,
			label: 'Appendix',
			hint: 'Shown under the input.'
		},
		helper: {
			type: FieldType.Schema,
			label: 'Helper',
			hint: 'Shows hints or error messages. If both set, error wins.',
			options: {
				schemaId: 'inputHelper'
			}
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		label: {
			type: FieldType.Schema,
			label: 'Label',
			options: {
				schemaId: 'label'
			}
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Small',
			hint: 'Render a small variation'
		},
		value: {
			type: FieldType.Text,
			label: 'Value'
		}
	}
})

export default textInputDefinition
