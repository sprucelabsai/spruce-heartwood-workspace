import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const uIEnhancementSectionDefinition = buildSchemaDefinition({
	id: 'uIEnhancementSection',
	name: 'User interface enhancement section',
	description:
		'Some front end components emit uiEnhancement events to allow skills to enhance them during presentation.',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint:
				'The ID of the section that is acting as a placeholder for ui enhancements'
		},
		calendarEventDetailsItems: {
			type: FieldType.Schema,
			label: 'Calendar event details items',
			isRequired: true,
			isArray: true,
			hint: 'Calendar items to add as enhancements',
			options: {
				schemaId: 'calendarEventDetailsItem'
			}
		},
		cardBuilderBodyItems: {
			type: FieldType.Schema,
			label: 'Card builder body items',
			isRequired: true,
			isArray: true,
			hint: '[PLACEHOLDER] Card builder items to add as enhancements',
			options: {
				schemaId: 'cardBuilderBodyItem'
			}
		},
		contextMenuItems: {
			type: FieldType.Schema,
			label: 'Context menu items',
			isRequired: true,
			isArray: true,
			hint: 'Context menu items to add as enhancements',
			options: {
				schemaId: 'Button'
			}
		},
		actions: {
			type: FieldType.Schema,
			label: 'Actions',
			isRequired: true,
			isArray: true,
			hint: 'Items to add as actions in the section context menu',
			options: {
				schemaId: 'Action'
			}
		}
	}
})

export default uIEnhancementSectionDefinition
