import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'


const toastHeaderDefinition: SpruceSchemas.Local.ToastHeader.IDefinition  = {
	id: 'toastHeader',
	name: 'Toast header',
	    fields: {
	            /** Headline. Headline text */
	            'headline': {
	                label: 'Headline',
	                type: FieldType.Text,
	                isRequired: true,
	                hint: 'Headline text',
	                options: undefined
	            },
	            /** Remove action. Action to be invoked when hitting the dismiss button */
	            'onClickDismiss': {
	                label: 'Remove action',
	                type: FieldType.EventCallback,
	                hint: 'Action to be invoked when hitting the dismiss button',
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	    }
}

export default toastHeaderDefinition
