import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const bigFormControlsDefinition: SpruceSchemas.Local.BigFormControls.IDefinition  = {
	id: 'bigFormControls',
	name: 'Big form controls',
	    fields: {
	            /** Enable go back. Will enable/disable the back button to go to a previous question */
	            'canGoBack': {
	                label: 'Enable go back',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Will enable/disable the back button to go to a previous question',
	                options: undefined
	            },
	            /** Enable go next. Will enable/disable the button to go to the next question */
	            'canGoNext': {
	                label: 'Enable go next',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Will enable/disable the button to go to the next question',
	                options: undefined
	            },
	            /** Back handler. */
	            'onBack': {
	                label: 'Back handler',
	                type: SpruceSchema.FieldType.Callback,
	                options: {signature: `() => void`,}
	            },
	            /** Next handler. */
	            'onNext': {
	                label: 'Next handler',
	                type: SpruceSchema.FieldType.Callback,
	                options: {signature: `() => void`,}
	            },
	    }
}

export default bigFormControlsDefinition
