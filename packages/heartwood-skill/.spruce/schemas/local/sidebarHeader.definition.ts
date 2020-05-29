import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const sidebarHeaderDefinition: SpruceSchemas.Local.SidebarHeader.IDefinition  = {
	id: 'sidebarHeader',
	name: 'Sidebar header',
	    fields: {
	            /** Title. */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                options: undefined
	            },
	            /** Button. */
	            'button': {
	                label: 'Button',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Close handler. */
	            'onClose': {
	                label: 'Close handler',
	                type: SpruceSchema.FieldType.Raw,
	                options: {valueType: `() => void`,}
	            },
	            /** Go back handler. */
	            'onGoBack': {
	                label: 'Go back handler',
	                type: SpruceSchema.FieldType.Raw,
	                options: {valueType: `() => void`,}
	            },
	    }
}

export default sidebarHeaderDefinition
