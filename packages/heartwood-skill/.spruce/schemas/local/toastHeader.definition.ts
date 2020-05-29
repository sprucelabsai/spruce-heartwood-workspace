import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const toastHeaderDefinition: SpruceSchemas.Local.ToastHeader.IDefinition  = {
	id: 'toastHeader',
	name: 'Toast header',
	    fields: {
	            /** Headline. Headline text */
	            'headline': {
	                label: 'Headline',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'Headline text',
	                options: undefined
	            },
	            /** Remove action. Action to be invoked when hitting the dismiss button */
	            'onClickDismiss': {
	                label: 'Remove action',
	                type: SpruceSchema.FieldType.EventCallback,
	                hint: 'Action to be invoked when hitting the dismiss button',
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	    }
}

export default toastHeaderDefinition
