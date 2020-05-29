import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const toastDefinition: SpruceSchemas.Local.Toast.IDefinition  = {
	id: 'toast',
	name: 'Toast',
	description: 'Call out information so it\'s impossible to miss!',
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
	            /** Id. Unique id for UI caching */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                isRequired: true,
	                hint: 'Unique id for UI caching',
	                options: undefined
	            },
	            /** Text. Optional; Text after the headline */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Optional; Text after the headline',
	                options: undefined
	            },
	            /** Kind. Sets the variation of toast */
	            'kind': {
	                label: 'Kind',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Sets the variation of toast',
	                options: undefined
	            },
	            /** Followup text. Text for the followup action */
	            'followupText': {
	                label: 'Followup text',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Text for the followup action',
	                options: undefined
	            },
	            /** Followup handler. Callback to be invoked when hitting the followup CTA */
	            'onClickFollowup': {
	                label: 'Followup handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                hint: 'Callback to be invoked when hitting the followup CTA',
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	            /** Remove handler. Callback invoked when remove is clicked (cannot block the removal) */
	            'onRemove': {
	                label: 'Remove handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                hint: 'Callback invoked when remove is clicked (cannot block the removal)',
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	    }
}

export default toastDefinition
