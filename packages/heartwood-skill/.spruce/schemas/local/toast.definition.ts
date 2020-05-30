import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const toastDefinition: SpruceSchemas.Local.Toast.IDefinition = {
	id: 'toast',
	name: 'Toast',
	description: "Call out information so it's impossible to miss!",
	fields: {
		/** Headline. Headline text */
		headline: {
			label: 'Headline',
			type: FieldType.Text,
			isRequired: true,
			hint: 'Headline text',
			options: undefined
		},
		/** Remove action. Action to be invoked when hitting the dismiss button */
		onClickDismiss: {
			label: 'Remove action',
			type: FieldType.EventCallback,
			hint: 'Action to be invoked when hitting the dismiss button',
			options: { event: `React.MouseEvent<...>`, element: `Element` }
		},
		/** Id. Unique id for UI caching */
		id: {
			label: 'Id',
			type: FieldType.Id,
			isRequired: true,
			hint: 'Unique id for UI caching',
			options: undefined
		},
		/** Text. Optional; Text after the headline */
		text: {
			label: 'Text',
			type: FieldType.Text,
			hint: 'Optional; Text after the headline',
			options: undefined
		},
		/** Kind. Sets the variation of toast */
		kind: {
			label: 'Kind',
			type: FieldType.Text,
			hint: 'Sets the variation of toast',
			options: undefined
		},
		/** Followup text. Text for the followup action */
		followupText: {
			label: 'Followup text',
			type: FieldType.Text,
			hint: 'Text for the followup action',
			options: undefined
		},
		/** Followup handler. Callback to be invoked when hitting the followup CTA */
		onClickFollowup: {
			label: 'Followup handler',
			type: FieldType.EventCallback,
			hint: 'Callback to be invoked when hitting the followup CTA',
			options: { event: `React.MouseEvent<...>`, element: `Element` }
		},
		/** Remove handler. Callback invoked when remove is clicked (cannot block the removal) */
		onRemove: {
			label: 'Remove handler',
			type: FieldType.EventCallback,
			hint:
				'Callback invoked when remove is clicked (cannot block the removal)',
			options: { event: `React.MouseEvent<...>`, element: `Element` }
		}
	}
}

export default toastDefinition
