import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const calendarEventBlockDefinition: SpruceSchemas.Local.CalendarEventBlock.IDefinition  = {
	id: 'calendarEventBlock',
	name: 'Calendar event block',
	description: 'A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks.',
	    fields: {
	            /** Id. An optional identifier for this block */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                hint: 'An optional identifier for this block',
	                options: undefined
	            },
	            /** Title. Any title rendered on the event */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Any title rendered on the event',
	                options: undefined
	            },
	            /** Subtitle. Displayed right under the title */
	            'subtitle': {
	                label: 'Subtitle',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Displayed right under the title',
	                options: undefined
	            },
	            /** Duration sec. How long this block is for, in seconds */
	            'durationSec': {
	                label: 'Duration sec',
	                type: SpruceSchema.FieldType.Duration,
	                isRequired: true,
	                hint: 'How long this block is for, in seconds',
	                options: undefined
	            },
	            /** Left icons. All the icons show on the left of the calendar event */
	            'leftIcons': {
	                label: 'Left icons',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                hint: 'All the icons show on the left of the calendar event',
	                isArray: true,
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Right icons. All the icons shown on the right of the calendar event */
	            'rightIcons': {
	                label: 'Right icons',
	                type: SpruceSchema.FieldType.Schema,
	                isRequired: true,
	                hint: 'All the icons shown on the right of the calendar event',
	                isArray: true,
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Is busy. Is the person associated to this event busy during this time (to keep from double booking)? */
	            'isBusy': {
	                label: 'Is busy',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Is the person associated to this event busy during this time (to keep from double booking)?',
	                options: undefined
	            },
	    }
}

export default calendarEventBlockDefinition
