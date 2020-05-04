import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import { calendarEventDetailItems } from './calendars/calendarEventDetails.definition'
import { cardBuilderBodyItems } from './cards/cardBuilder.definition'

const uIEnhancementSectionDefinition = buildSchemaDefinition({
	id: 'uIEnhancementSection',
	name: 'User interface enhancement section',
	description:
		'Some front end components emit uiEnhancement events to allow skills to enhance them during presentation.',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			hint:
				'The ID of the section that is acting as a placeholder for ui enhancements'
		},
		calendarEventDetailItems: {
			type: FieldType.Schema,
			label: 'Calendar event details items',
			isRequired: true,
			isArray: true,
			hint: 'Calendar items to add as enhancements',
			options: {
				schemaIds: calendarEventDetailItems
			}
		},
		cardBuilderBodyItems: {
			type: FieldType.Schema,
			label: 'Card builder body items',
			isRequired: true,
			isArray: true,
			hint: 'Card builder items to add as enhancements',
			options: {
				schemaIds: cardBuilderBodyItems
			}
		},
		contextMenuItems: {
			type: FieldType.Schema,
			label: 'Context menu items',
			isRequired: true,
			isArray: true,
			hint: 'Context menu items to add as enhancements',
			options: {
				schemaId: 'button'
			}
		}
	}
})

export default uIEnhancementSectionDefinition
