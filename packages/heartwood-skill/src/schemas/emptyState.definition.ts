import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import iconDefinition from './icon.definition'
import buttonDefinition from './forms/button.definition'

const emptyStateDefinition = buildSchemaDefinition({
	id: 'emptyState',
	name: 'Empty state',
	description: 'Used for the empty state of lists',
	fields: {
		heading: {
			type: FieldType.Text,
			label: 'Heading',
			isRequired: true
		},
		subheading: {
			type: FieldType.Text,
			label: 'Subheading'
		},
		icon: {
			type: FieldType.Schema,
			label: 'Icon',
			options: {
				schema: iconDefinition
			}
		},
		primaryButton: {
			type: FieldType.Schema,
			label: 'Primary button',
			options: {
				schema: buttonDefinition
			}
		}
	}
})

export default emptyStateDefinition
