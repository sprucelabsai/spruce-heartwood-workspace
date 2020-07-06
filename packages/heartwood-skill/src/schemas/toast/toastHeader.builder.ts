import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import buttonDefinition from '../forms/button.builder'

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
