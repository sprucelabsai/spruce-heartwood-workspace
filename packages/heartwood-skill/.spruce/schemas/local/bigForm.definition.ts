import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import bigFormControlsDefinitionLocal from '#spruce/schemas/local/bigFormControls.definition'

const bigFormDefinition: SpruceSchemas.Local.BigForm.IDefinition  = {
	id: 'bigForm',
	name: 'Big form',
	description: 'Ask questions one at a time',
	    fields: {
	            /** Header controls. */
	            'controls': {
	                label: 'Header controls',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [bigFormControlsDefinitionLocal],}
	            },
	            /** Use one Sprucebot. Sprucebot will stay in place and delete, then type each question */
	            'useOneSprucebot': {
	                label: 'Use one Sprucebot',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Sprucebot will stay in place and delete, then type each question',
	                options: undefined
	            },
	            /** Transition style. */
	            'transitionStyle': {
	                label: 'Transition style',
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "stack",
	                options: {choices: [{"label":"Stack","value":"stack"},{"label":"SlideLeft","value":"slide-left"},{"label":"SlideUp","value":"slide-up"},{"label":"Swap","value":"swap"}],}
	            },
	            /** Current slide. */
	            'currentSlide': {
	                label: 'Current slide',
	                type: SpruceSchema.FieldType.Number,
	                defaultValue: 0,
	                options: undefined
	            },
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	    }
}

export default bigFormDefinition
