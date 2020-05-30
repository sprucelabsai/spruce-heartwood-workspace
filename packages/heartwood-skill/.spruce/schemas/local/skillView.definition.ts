import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import skillViewHeaderDefinitionLocal from '#spruce/schemas/local/skillViewHeader.definition'

const skillViewDefinition: SpruceSchemas.Local.SkillView.IDefinition = {
	id: 'skillView',
	name: 'Skill view',
	description:
		"A view you're presenting to a person on an unknown set of devices",
	fields: {
		/** Centered. Is all content centered? */
		isCentered: {
			label: 'Centered',
			type: FieldType.Boolean,
			hint: 'Is all content centered?',
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** . */
		children: {
			type: FieldType.Node,
			options: undefined
		},
		/** . */
		sidebarChildren: {
			type: FieldType.Node,
			options: undefined
		},
		/** Header. */
		header: {
			label: 'Header',
			type: FieldType.Schema,
			options: { schemas: [skillViewHeaderDefinitionLocal] }
		},
		/** Collapse sidebar. Will hide the sidebar */
		isSidebarCollapsed: {
			label: 'Collapse sidebar',
			type: FieldType.Boolean,
			hint: 'Will hide the sidebar',
			options: undefined
		},
		/** Collapse header. Will hide the header */
		isHeaderCollapsed: {
			label: 'Collapse header',
			type: FieldType.Boolean,
			hint: 'Will hide the header',
			options: undefined
		}
	}
}

export default skillViewDefinition
