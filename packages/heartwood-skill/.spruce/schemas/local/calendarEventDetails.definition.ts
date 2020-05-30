import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import listDefinitionLocal from '#spruce/schemas/local/list.definition'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import splitButtonDefinitionLocal from '#spruce/schemas/local/splitButton.definition'
import cardBuilderDefinitionLocal from '#spruce/schemas/local/cardBuilder.definition'
import toastDefinitionLocal from '#spruce/schemas/local/toast.definition'
import textDefinitionLocal from '#spruce/schemas/local/text.definition'
import markdownDefinitionLocal from '#spruce/schemas/local/markdown.definition'

const calendarEventDetailsDefinition: SpruceSchemas.Local.CalendarEventDetails.IDefinition  = {
	id: 'calendarEventDetails',
	name: 'Calendar event details',
	description: 'All the details attached to an event. Shown on click of the event.',
	    fields: {
	            /** Id. An optional ID for this item; used to allow association with UI Enhancements */
	            'id': {
	                label: 'Id',
	                type: FieldType.Text,
	                hint: 'An optional ID for this item; used to allow association with UI Enhancements',
	                options: undefined
	            },
	            /** Loading. Hides everything while loading */
	            'isLoading': {
	                label: 'Loading',
	                type: FieldType.Boolean,
	                hint: 'Hides everything while loading',
	                options: undefined
	            },
	            /** Items. The items that make up the event details */
	            'items': {
	                label: 'Items',
	                type: FieldType.Schema,
	                isRequired: true,
	                hint: 'The items that make up the event details',
	                isArray: true,
	                options: {schemas: [listDefinitionLocal, buttonDefinitionLocal, splitButtonDefinitionLocal, cardBuilderDefinitionLocal, toastDefinitionLocal, textDefinitionLocal, markdownDefinitionLocal],}
	            },
	    }
}

export default calendarEventDetailsDefinition
