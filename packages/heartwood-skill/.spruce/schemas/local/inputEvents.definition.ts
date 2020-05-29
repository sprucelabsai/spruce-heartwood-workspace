import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const inputEventsDefinition: SpruceSchemas.Local.InputEvents.IDefinition  = {
	id: 'inputEvents',
	name: 'Input events',
	description: 'Mixin for inputs that support events',
	    fields: {
	            /** Change handler. */
	            'onChange': {
	                label: 'Change handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.ChangeEvent<...>`,element: `HTMLInputElement`,}
	            },
	            /** Blur handler. */
	            'onBlur': {
	                label: 'Blur handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.FocusEvent<...>`,element: `HTMLInputElement`,}
	            },
	    }
}

export default inputEventsDefinition
