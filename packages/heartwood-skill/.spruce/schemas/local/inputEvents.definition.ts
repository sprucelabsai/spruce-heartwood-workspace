import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'


const inputEventsDefinition: SpruceSchemas.Local.InputEvents.IDefinition  = {
	id: 'inputEvents',
	name: 'Input events',
	description: 'Mixin for inputs that support events',
	    fields: {
	            /** Change handler. */
	            'onChange': {
	                label: 'Change handler',
	                type: FieldType.EventCallback,
	                options: {event: `React.ChangeEvent<...>`,element: `HTMLInputElement`,}
	            },
	            /** Blur handler. */
	            'onBlur': {
	                label: 'Blur handler',
	                type: FieldType.EventCallback,
	                options: {event: `React.FocusEvent<...>`,element: `HTMLInputElement`,}
	            },
	    }
}

export default inputEventsDefinition
