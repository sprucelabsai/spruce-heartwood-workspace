import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import listDefinitionLocal from '#spruce/schemas/local/list.definition'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import splitButtonDefinitionLocal from '#spruce/schemas/local/splitButton.definition'
import cardBuilderDefinitionLocal from '#spruce/schemas/local/cardBuilder.definition'
import toastDefinitionLocal from '#spruce/schemas/local/toast.definition'
import textDefinitionLocal from '#spruce/schemas/local/text.definition'
import markdownDefinitionLocal from '#spruce/schemas/local/markdown.definition'

const uIEnhancementSectionDefinition: SpruceSchemas.Local.UIEnhancementSection.IDefinition  = {
	id: 'uIEnhancementSection',
	name: 'User interface enhancement section',
	description: 'Some front end components emit uiEnhancement events to allow skills to enhance them during presentation.',
	    fields: {
	            /** Id. The ID of the section that is acting as a placeholder for ui enhancements */
	            'id': {
	                label: 'Id',
	                type: FieldType.Id,
	                hint: 'The ID of the section that is acting as a placeholder for ui enhancements',
	                options: undefined
	            },
	            /** Calendar event details items. Calendar items to add as enhancements */
	            'calendarEventDetailItems': {
	                label: 'Calendar event details items',
	                type: FieldType.Schema,
	                isRequired: true,
	                hint: 'Calendar items to add as enhancements',
	                isArray: true,
	                options: {schemas: [listDefinitionLocal, buttonDefinitionLocal, splitButtonDefinitionLocal, cardBuilderDefinitionLocal, toastDefinitionLocal, textDefinitionLocal, markdownDefinitionLocal],}
	            },
	            /** Card builder body items. Card builder items to add as enhancements */
	            'cardBuilderBodyItems': {
	                label: 'Card builder body items',
	                type: FieldType.Schema,
	                isRequired: true,
	                hint: 'Card builder items to add as enhancements',
	                isArray: true,
	                options: {schemas: [buttonDefinitionLocal, imageDefinitionLocal, headingDefinitionLocal, textDefinitionLocal, scoreCardDefinitionLocal, toastDefinitionLocal, listDefinitionLocal],}
	            },
	            /** Context menu items. Context menu items to add as enhancements */
	            'contextMenuItems': {
	                label: 'Context menu items',
	                type: FieldType.Schema,
	                isRequired: true,
	                hint: 'Context menu items to add as enhancements',
	                isArray: true,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	    }
}

export default uIEnhancementSectionDefinition
