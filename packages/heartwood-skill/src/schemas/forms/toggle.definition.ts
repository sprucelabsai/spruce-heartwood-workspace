import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import inputHelperDefinition from './inputHelper.definition'

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
