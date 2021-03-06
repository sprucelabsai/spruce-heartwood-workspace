import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from '../forms/button.definition'
import toastHeaderDefinition from './toastHeader.definition'

const toastDefinition = buildSchemaDefinition({
	id: 'toast',
	name: 'Toast',
	description: "Call out information so it's impossible to miss!",
	fields: {
		...toastHeaderDefinition.fields,
		id: {
			type: FieldType.Id,
			label: 'Id',
			hint: 'Unique id for UI caching',
			isRequired: true
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'Optional; Text after the headline'
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
		onClickFollowup: {
			...buttonDefinition.fields.onClick,
			label: 'Followup handler',
			hint: 'Callback to be invoked when hitting the followup CTA'
		},
		onRemove: {
			...buttonDefinition.fields.onClick,
			label: 'Remove handler',
			hint: 'Callback invoked when remove is clicked (cannot block the removal)'
		}
	}
})

export default toastDefinition
