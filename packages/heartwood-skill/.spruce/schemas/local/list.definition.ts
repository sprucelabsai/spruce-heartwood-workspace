import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import listHeaderDefinitionLocal from '#spruce/schemas/local/listHeader.definition'
import expandableListItemDefinitionLocal from '#spruce/schemas/local/expandableListItem.definition'
import checkboxDefinitionLocal from '#spruce/schemas/local/checkbox.definition'
import radioDefinitionLocal from '#spruce/schemas/local/radio.definition'

const listDefinition: SpruceSchemas.Local.List.IDefinition  = {
	id: 'list',
	name: 'List',
	description: 'A list of information or inputs',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Header. List Header */
	            'header': {
	                label: 'Header',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'List Header',
	                options: {schemas: [listHeaderDefinitionLocal],}
	            },
	            /** Items. List items */
	            'items': {
	                label: 'Items',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                hint: 'List items',
	                isArray: true,
	                options: {schemas: [expandableListItemDefinitionLocal],}
	            },
	            /** Is small. Set true to make the list smaller */
	            'isSmall': {
	                label: 'Is small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to make the list smaller',
	                options: undefined
	            },
	            /** Are separators visible. Set to true to show separators between list items */
	            'areSeparatorsVisible': {
	                label: 'Are separators visible',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set to true to show separators between list items',
	                options: undefined
	            },
	            /** Class name. */
	            'className': {
	                label: 'Class name',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** Is loading. Show loading */
	            'isLoading': {
	                label: 'Is loading',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Show loading',
	                options: undefined
	            },
	            /** Selectable. Optional: set whether to use checkbox or radio for selectable list items */
	            'selectable': {
	                label: 'Selectable',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Optional: set whether to use checkbox or radio for selectable list items',
	                options: {schemas: [checkboxDefinitionLocal, radioDefinitionLocal],}
	            },
	            /** Click handler. */
	            'onClick': {
	                label: 'Click handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.MouseEvent<...>`,element: `HTMLDivElement`,}
	            },
	    }
}

export default listDefinition
