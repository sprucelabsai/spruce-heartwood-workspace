import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'

const saveBarDefinition: SpruceSchemas.Local.SaveBar.IDefinition = {
	id: 'saveBar',
	name: 'Save bar',
	description: 'Holds buttons and spans the top or bottom of the screen.',
	fields: {
		/** Message. Show a custom message across the bar */
		message: {
			label: 'Message',
			type: FieldType.Text,
			hint: 'Show a custom message across the bar',
			defaultValue: 'Unsaved changes',
			options: undefined
		},
		/** Visible. */
		isVisible: {
			label: 'Visible',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Disable discard. */
		isDiscardDisabled: {
			label: 'Disable discard',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Disable save. */
		isSaveDisabled: {
			label: 'Disable save',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Discard in progress. */
		isDiscarding: {
			label: 'Discard in progress',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Save in progress. */
		isSaving: {
			label: 'Save in progress',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Discard handler. */
		onDiscard: {
			label: 'Discard handler',
			type: FieldType.EventCallback,
			options: { event: `React.MouseEvent<...>`, element: `Element` }
		},
		/** Save handler. */
		onSave: {
			label: 'Save handler',
			type: FieldType.EventCallback,
			options: { event: `React.MouseEvent<...>`, element: `Element` }
		}
	}
}

export default saveBarDefinition
