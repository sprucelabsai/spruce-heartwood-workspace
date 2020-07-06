import { FieldType, buildSchemaDefinition } from '@sprucelabs/schema'
import buttonDefinition from '../forms/button.builder'

const listHeaderDefinition = buildSchemaDefinition({
	id: 'listHeader',
	name: 'List header',
	description: 'The header of a list',
	fields: {
		title: {
			type: FieldType.Text,
			label: 'Title',
			isRequired: true,
			hint: 'Title to render in the header'
		},
		subtitle: {
			type: FieldType.Text,
			label: 'Subtitle',
			hint: 'Optional subtitle text'
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Is small',
			hint: 'Set true for small lists',
			defaultValue: false
		},
		buttons: {
			type: FieldType.Schema,
			label: 'Buttons',
			isArray: true,
			hint: 'Buttons to associate with the list header',
			options: {
				schema: buttonDefinition
			}
		}
	}
})

export default listHeaderDefinition
