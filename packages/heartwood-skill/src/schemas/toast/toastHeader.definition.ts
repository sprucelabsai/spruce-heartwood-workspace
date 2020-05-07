import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from '../forms/button.definition'

const toastHeaderDefinition = buildSchemaDefinition({
	id: 'toastHeader',
	name: 'Toast header',
	fields: {
		headline: {
			type: FieldType.Text,
			label: 'Headline',
			isRequired: true,
			hint: 'Headline text'
		},
		onClickDismiss: {
			...buttonDefinition.fields.onClick,
			label: 'Remove action',
			hint: 'Action to be invoked when hitting the dismiss button'
		}
	}
})

export default toastHeaderDefinition
