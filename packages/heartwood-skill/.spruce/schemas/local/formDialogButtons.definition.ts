import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const formDialogButtonsDefinition: SpruceSchemas.Local.FormDialogButtons.IDefinition = {
	id: 'formDialogButtons',
	name: 'Form dialog buttons',
	fields: {
		/** Primary button. */
		primary: {
			label: 'Primary button',
			type: FieldType.Schema,
			options: { schemas: [buttonDefinitionLocal] }
		},
		/** Secondary button. */
		secondary: {
			label: 'Secondary button',
			type: FieldType.Schema,
			options: { schemas: [buttonDefinitionLocal] }
		}
	}
}

export default formDialogButtonsDefinition
