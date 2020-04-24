import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const toggleDefinition = buildSchemaDefinition({
	id: 'Toggle',
	name: 'Toggle',
	description: 'A great way to render a on/off style question or control',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint: 'Unique id for UI caching'
		},
		postText: {
			type: FieldType.Text,
			label: 'Post text',
			hint: 'Text after the toggle'
		},
		onClick: {
			type: FieldType.OnClick,
			label: 'On click',
			hint: 'Optional on click to invoke when tapped'
		}
	}
})

export default toggleDefinition
