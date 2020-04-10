import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const toastDefinition = buildSchemaDefinition({
	id: 'Toast',
	name: 'Toast',
	description: "Call out information so it's impossible to miss!",
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true,
			hint: 'Unique id for UI caching'
		},
		headline: {
			type: FieldType.Text,
			label: 'Headline',
			isRequired: true,
			hint: 'Headline text'
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'Optional; Text after the headline'
		},
		canRemove: {
			type: FieldType.Boolean,
			label: 'Can remove',
			hint:
				'Optional; controls whether the toast can be removed. Defaults to true'
		},
		removeAction: {
			type: FieldType.Action,
			label: 'Remove action',
			hint: 'Action to be invoked when hitting the dismiss button'
		},
		kind: {
			type: FieldType.Text,
			label: 'Kind',
			hint: 'Sets the variation of toast'
		},
		followupText: {
			type: FieldType.Text,
			label: 'Followup text',
			hint: 'Text for the followup action'
		},
		followupAction: {
			type: FieldType.Action,
			label: 'Followup action',
			hint: 'Action to be invoked when hitting the followup CTA'
		}
	}
})

export default toastDefinition
