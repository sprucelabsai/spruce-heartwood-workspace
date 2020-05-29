import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const confirmModalDefinition: SpruceSchemas.Local.ConfirmModal.IDefinition  = {
	id: 'confirm Modal',
	name: 'ConfirmModal',
	description: 'a confirmation dialog',
	    fields: {
	            /** Title. Title of the confirmation dialog */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Title of the confirmation dialog',
	                options: undefined
	            },
	            /** Text. Text shown in the dialog */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Text shown in the dialog',
	                options: undefined
	            },
	    }
}

export default confirmModalDefinition