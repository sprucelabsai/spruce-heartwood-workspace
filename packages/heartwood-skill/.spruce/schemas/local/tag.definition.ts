import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const tagDefinition: SpruceSchemas.Local.Tag.IDefinition  = {
	id: 'tag',
	name: 'Tag',
	description: 'Small pill like control with text and onClick functionality',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Text. */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Kind. */
	            'kind': {
	                label: 'Kind',
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "primary",
	                options: {choices: [{"value":"primary","label":"Primary"},{"value":"secondary","label":"Secondary"}],}
	            },
	            /** Small. Render small variation of the tag */
	            'isSmall': {
	                label: 'Small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Render small variation of the tag',
	                defaultValue: false,
	                options: undefined
	            },
	    }
}

export default tagDefinition
