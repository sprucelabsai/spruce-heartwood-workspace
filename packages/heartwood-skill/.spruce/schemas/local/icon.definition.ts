import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const iconDefinition: SpruceSchemas.Local.Icon.IDefinition  = {
	id: 'Icon',
	name: 'Icon',
	description: '**missing description**',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Name. The name of the icon to render. If not found, this will return null. */
	            'name': {
	                label: 'Name',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'The name of the icon to render. If not found, this will return null.',
	                options: undefined
	            },
	            /** Is line icon. Set true to render an icon with a stroke, but no fill */
	            'isLineIcon': {
	                label: 'Is line icon',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to render an icon with a stroke, but no fill',
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** . Lets you pass an icon node */
	            'customIcon': {
	                type: SpruceSchema.FieldType.Node,
	                hint: 'Lets you pass an icon node',
	                options: undefined
	            },
	    }
}

export default iconDefinition
