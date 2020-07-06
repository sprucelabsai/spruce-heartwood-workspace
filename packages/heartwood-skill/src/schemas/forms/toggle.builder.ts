import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import inputHelperDefinition from './inputHelper.builder'
import labelDefinition from './label.builder'

const toggleDefinition = buildSchemaDefinition({
	id: 'Toggle',
	name: 'Toggle',
	description: 'A great way to render a on/off style question or control',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		name: {
			type: FieldType.Text,
			label: 'Name'
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		label: {
			type: FieldType.Schema,
			label: 'Label',
			options: {
				schema: labelDefinition
			}
		},
		helper: {
			type: FieldType.Schema,
			label: 'Helper',
			options: {
				schema: inputHelperDefinition
			}
		},
		onClick: {
			type: FieldType.EventCallback,
			label: 'On click',
			hint: 'Optional on click to invoke when tapped',
			options: {
				event: 'React.MouseEvent<...>',
				element: 'HTMLInputElement'
			}
		}
	}
})

export default toggleDefinition
