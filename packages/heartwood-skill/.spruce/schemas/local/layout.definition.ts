import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import layoutSectionDefinitionLocal from '#spruce/schemas/local/layoutSection.definition'

const layoutDefinition: SpruceSchemas.Local.Layout.IDefinition  = {
	id: 'layout',
	name: 'Layout',
	description: 'A layout is the start of it all',
	    fields: {
	            /** Children. */
	            'children': {
	                label: 'Children',
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** Is centered. A hint */
	            'isCentered': {
	                label: 'Is centered',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'A hint',
	                defaultValue: false,
	                options: undefined
	            },
	            /** Is full bleed. */
	            'isFullBleed': {
	                label: 'Is full bleed',
	                type: SpruceSchema.FieldType.Boolean,
	                defaultValue: false,
	                options: undefined
	            },
	            /** Sections. Layout sections that makeup this layout */
	            'sections': {
	                label: 'Sections',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Layout sections that makeup this layout',
	                isArray: true,
	                options: {schemas: [layoutSectionDefinitionLocal],}
	            },
	            /** . */
	            'className': {
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** Width. */
	            'width': {
	                label: 'Width',
	                type: SpruceSchema.FieldType.Select,
	                defaultValue: "base",
	                options: {choices: [{"value":"base","label":"Base"},{"value":"wide","label":"Wide"},{"value":"tight","label":"Tight"},{"value":"fullWidth","label":"Full width"}],}
	            },
	    }
}

export default layoutDefinition
