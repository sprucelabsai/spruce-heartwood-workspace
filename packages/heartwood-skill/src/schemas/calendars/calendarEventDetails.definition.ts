import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const calendarEventDetailsItemDefinition = buildSchemaDefinition({
	id: 'calendarEventDetailsItem',
	name: 'CalendarEventDetailsItem',
	description:
		'All the details attached to an event. Shown on click of the event.',
	fields: {
		id: {
			type: FieldType.Text,
			label: 'Id',
			hint:
				'An optional ID for this item; used to allow association with UI Enhancements'
		},
		type: {
			type: FieldType.Select,
			label: 'Type',
			isRequired: true,
			hint: 'How the view should be rendered',
			options: {
				choices: [
					{
						label: 'List',
						value: 'list'
					},
					{
						label: 'Button',
						value: 'button'
					},
					{
						label: 'SplitButton',
						value: 'splitButton'
					},
					{
						label: 'CardBuilder',
						value: 'cardBuilder'
					},
					{
						label: 'Toast',
						value: 'toast'
					},
					{
						label: 'Text',
						value: 'text'
					},
					{
						label: 'Markdown',
						value: 'markdown'
					},
					{
						label: 'UiEnhancementSection',
						value: 'uiEnhancementSection'
					}
				]
			}
		},
		viewModel: {
			type: FieldType.Schema,
			label: 'View model',
			isRequired: true,
			hint: 'The data fed into the view to configure it.',
			options: {
				schemaId: 'CalendarEventDetailsItemViewModel'
			}
		}
	}
})

export default calendarEventDetailsItemDefinition
