import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const calendarEventBlockDefinition = buildSchemaDefinition({
	id: 'calendarEventBlock',
	name: 'Calendar event block',
	description:
		'A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks.',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			hint: 'An optional identifier for this block'
		},
		title: {
			type: FieldType.Text,
			label: 'Title',
			hint: 'Any title rendered on the event'
		},
		subtitle: {
			type: FieldType.Text,
			label: 'Subtitle',
			hint: 'Displayed right under the title'
		},
		durationSec: {
			type: FieldType.Duration,
			label: 'Duration sec',
			isRequired: true,
			hint: 'How long this block is for, in seconds'
		},
		leftIcons: {
			type: FieldType.Schema,
			label: 'Left icons',
			isRequired: true,
			isArray: true,
			hint: 'All the icons show on the left of the calendar event',
			options: {
				schemaId: 'icon'
			}
		},
		rightIcons: {
			type: FieldType.Schema,
			label: 'Right icons',
			isRequired: true,
			isArray: true,
			hint: 'All the icons shown on the right of the calendar event',
			options: {
				schemaId: 'icon'
			}
		},
		isBusy: {
			type: FieldType.Boolean,
			label: 'Is busy',
			hint:
				'Is the person associated to this event busy during this time (to keep from double booking)?'
		}
	}
})

export default calendarEventBlockDefinition
