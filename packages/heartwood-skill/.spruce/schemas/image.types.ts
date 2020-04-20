import * as SpruceSchema from '@sprucelabs/schema'
import Schema, { ISchemaDefinition } from '@sprucelabs/schema'

/**
import imageDefinition from '../../src/schemas/image.definition'
type ImageDefinition = typeof imageDefinition
*/

export interface IImageDefinition extends ISchemaDefinition {
	id: 'Image',
	name: 'Image',
	description: 'A basic image tag',
	
	
	    fields: {
	            /** Id. For UI caching */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                
	                isRequired: true,
	                hint: 'For UI caching',
	                
	                
	                
	                
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
	                label: '',
	                type: SpruceSchema.FieldType.Number,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** . */
	            'height': {
	                label: '',
	                type: SpruceSchema.FieldType.Number,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

export const imageDefinition : IImageDefinition = {
	id: 'Image',
	name: 'Image',
	description: 'A basic image tag',
	
	
	    fields: {
	            /** Id. For UI caching */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                
	                isRequired: true,
	                hint: 'For UI caching',
	                
	                
	                
	                
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
	                label: '',
	                type: SpruceSchema.FieldType.Number,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	            /** . */
	            'height': {
	                label: '',
	                type: SpruceSchema.FieldType.Number,
	                
	                
	                
	                
	                
	                
	                
	                options: undefined
	            },
	    }
}

// A basic image tag
export interface IImage {
	
		/** Id. For UI caching */
		'id': string
		/** Src. Where to pull the image from */
		'src': string
		/** Alt. Rendered as the alt tag for hovers */
		'alt'?: string
		/** . */
		'width'?: number
		/** . */
		'height'?: number
}
export interface IImageInstance extends Schema<IImageDefinition> {}
