import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const sidebarHeaderDefinition = buildSchemaDefinition({
	id: 'sidebarHeader',
	name: 'Sidebar header',
	fields: {
		title: {
			type: FieldType.Text,
			label: 'Title',
			isRequired: true
		},
		button: {
			type: FieldType.Schema,
			label: 'Button',
			options: {
				schemaId: 'button'
			}
		},
		onClose: {
			type: FieldType.Raw,
			label: 'Close handler',
			options: {
				valueType: '() => void'
			}
		},
		onGoBack: {
			type: FieldType.Raw,
			label: 'Go back handler',
			options: {
				valueType: '() => void'
			}
		}
	}
})

export default sidebarHeaderDefinition
