import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import iconDefinitionLocal from '#spruce/schemas/local/icon.definition'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'

const emptyStateDefinition: SpruceSchemas.Local.EmptyState.IDefinition = {
	id: 'emptyState',
	name: 'Empty state',
	description: 'Used for the empty state of lists',
	fields: {
		/** Heading. */
		heading: {
			label: 'Heading',
			type: FieldType.Text,
			isRequired: true,
			defaultValue: 'Nothing to see here',
			options: undefined
		},
		/** Subheading. */
		subheading: {
			label: 'Subheading',
			type: FieldType.Text,
			options: undefined
		},
		/** Icon. */
		icon: {
			label: 'Icon',
			type: FieldType.Schema,
			defaultValue: { name: 'empty_box', isLineIcon: true },
			options: { schemas: [iconDefinitionLocal] }
		},
		/** Primary button. */
		primaryButton: {
			label: 'Primary button',
			type: FieldType.Schema,
			defaultValue: { kind: 'simple' },
			options: { schemas: [buttonDefinitionLocal] }
		}
	}
}

export default emptyStateDefinition
