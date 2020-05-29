import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const textDefinition: SpruceSchemas.Local.Text.IDefinition  = {
	id: 'Text',
	name: 'Text',
	description: 'Basic text to be rendered',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Text. the text to render, supports {{handlebars}} and pulls off {{context}} */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'the text to render, supports {{handlebars}} and pulls off {{context}}',
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Inline. If true, renders text in a <span /> vs a <p /> */
	            'isInline': {
	                label: 'Inline',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'If true, renders text in a <span /> vs a <p />',
	                defaultValue: false,
	                options: undefined
	            },
	            /** Context. A key/value pair used to populate the {{handlebars}} placeholders of the text prop */
	            'context': {
	                label: 'Context',
	                type: SpruceSchema.FieldType.Raw,
	                hint: 'A key/value pair used to populate the {{handlebars}} placeholders of the text prop',
	                options: {valueType: `Record<string, any>`,}
	            },
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	    }
}

export default textDefinition
