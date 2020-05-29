import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const formDialogButtonsDefinition: SpruceSchemas.Local.FormDialogButtons.IDefinition  = {
	id: 'formDialogButtons',
	name: 'Form dialog buttons',
	    fields: {
	            /** Primary button. */
	            'primary': {
	                label: 'Primary button',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Secondary button. */
	            'secondary': {
	                label: 'Secondary button',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	    }
}

export default formDialogButtonsDefinition
