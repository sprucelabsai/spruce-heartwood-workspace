import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

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
			type: FieldType.EventCallback,
			label: 'Remove action',
			hint: 'Action to be invoked when hitting the dismiss button',
			options: {
				event: 'React.MouseEvent<...>',
				element: 'HTMLDivElement'
			}
		}
	}
})

export default toastHeaderDefinition
