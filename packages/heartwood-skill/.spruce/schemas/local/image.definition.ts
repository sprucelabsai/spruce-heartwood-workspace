import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const imageDefinition: SpruceSchemas.Local.Image.IDefinition  = {
	id: 'Image',
	name: 'Image',
	description: 'A basic image tag',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Src. Where to pull the image from */
	            'src': {
	                label: 'Src',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'Where to pull the image from',
	                options: undefined
	            },
	            /** Alt. Rendered as the alt tag for hovers */
	            'alt': {
	                label: 'Alt',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Rendered as the alt tag for hovers',
	                options: undefined
	            },
	            /** . */
	            'width': {
	                type: SpruceSchema.FieldType.Number,
	                options: undefined
	            },
	            /** . */
	            'height': {
	                type: SpruceSchema.FieldType.Number,
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	    }
}

export default imageDefinition
