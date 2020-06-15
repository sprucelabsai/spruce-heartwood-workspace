import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from './forms/button.definition'

const saveBarDefinition = buildSchemaDefinition({
	id: 'saveBar',
	name: 'Save bar',
	description: 'Holds buttons and spans the top or bottom of the screen.',
	fields: {
		message: {
			type: FieldType.Text,
			label: 'Message',
			hint: 'Show a custom message across the bar',
			defaultValue: 'Unsaved changes'
		},
		isVisible: {
			type: FieldType.Boolean,
			label: 'Visible'
		},
		isDiscardDisabled: {
			type: FieldType.Boolean,
			label: 'Disable discard'
		},
		isSaveDisabled: {
			type: FieldType.Boolean,
			label: 'Disable save'
		},
		isDiscarding: {
			type: FieldType.Boolean,
			label: 'Discard in progress'
		},
		isSaving: {
			type: FieldType.Boolean,
			label: 'Save in progress'
		},
		onDiscard: {
			...buttonDefinition.fields.onClick,
			label: 'Discard handler'
		},
		onSave: {
			...buttonDefinition.fields.onClick,
			label: 'Save handler'
		}
	}
})

export default saveBarDefinition
