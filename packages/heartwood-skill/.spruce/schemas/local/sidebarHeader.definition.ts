import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const sidebarHeaderDefinition: SpruceSchemas.Local.SidebarHeader.IDefinition = {
	id: 'sidebarHeader',
	name: 'Sidebar header',
	fields: {
		/** Title. */
		title: {
			label: 'Title',
			type: FieldType.Text,
			isRequired: true,
			options: undefined
		},
		/** Button. */
		button: {
			label: 'Button',
			type: FieldType.Schema,
			options: { schemas: [buttonDefinitionLocal] }
		},
		/** Close handler. */
		onClose: {
			label: 'Close handler',
			type: FieldType.Raw,
			options: { valueType: `() => void` }
		},
		/** Go back handler. */
		onGoBack: {
			label: 'Go back handler',
			type: FieldType.Raw,
			options: { valueType: `() => void` }
		}
	}
}

export default sidebarHeaderDefinition
