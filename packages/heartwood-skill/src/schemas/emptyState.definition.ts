import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from './forms/button.definition'
import iconDefinition from './icon.definition'

const emptyStateDefinition = buildSchemaDefinition({
	id: 'emptyState',
	name: 'Empty state',
	description: 'Used for the empty state of lists',
	fields: {
		heading: {
			type: FieldType.Text,
			label: 'Heading',
			isRequired: true,
			defaultValue: 'Nothing to see here'
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
			},
			defaultValue: {
				name: 'empty_box',
				isLineIcon: true
			}
		},
		primaryButton: {
			type: FieldType.Schema,
			label: 'Primary button',
			options: {
				schema: buttonDefinition
			},
			defaultValue: {
				kind: 'simple'
			}
		}
	}
})

export default emptyStateDefinition
