import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from './button.definition'
import inputEventsDefinition from './inputEvents.definition'

const textInputDefinition = buildSchemaDefinition({
	id: 'textInput',
	name: 'Input inner',
	description:
		'A reusable component that holds an html <input /> element and decorates it.',
	fields: {
		...inputEventsDefinition.fields,
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
		clearButton: {
			type: FieldType.Schema,
			label: 'Clear button',
			hint:
				'Drops in a clear button after the field, but requires you to handle the clear.',
			options: {
				schema: buttonDefinition
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
		},
		isReadOnly: {
			type: FieldType.Boolean,
			label: 'Read only'
		}
	}
})

export default textInputDefinition
