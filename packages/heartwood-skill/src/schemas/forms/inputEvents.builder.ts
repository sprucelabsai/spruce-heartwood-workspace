import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const inputEventsDefinition = buildSchemaDefinition({
	id: 'inputEvents',
	name: 'Input events',
	description: 'Mixin for inputs that support events',
	fields: {
		onChange: {
			type: FieldType.EventCallback,
			label: 'Change handler',
			options: {
				event: 'React.ChangeEvent<...>',
				element: 'HTMLInputElement',
			},
		},
		onBlur: {
			type: FieldType.EventCallback,
			label: 'Blur handler',
			options: {
				event: 'React.FocusEvent<...>',
				element: 'HTMLInputElement',
			},
		},
	},
})

export default inputEventsDefinition
