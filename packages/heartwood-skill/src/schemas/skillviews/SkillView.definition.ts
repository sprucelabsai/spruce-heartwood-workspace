import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import skillViewHeaderDefinition from './skillViewHeader.definition'

const skillViewDefinition = buildSchemaDefinition({
	id: 'skillView',
	name: 'Skill view',
	description:
		"A view you're presenting to a person on an unknown set of devices",
	fields: {
		isCentered: {
			type: FieldType.Boolean,
			label: 'Centered',
			hint: 'Is all content centered?'
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		children: {
			type: FieldType.Node,
			isPrivate: true
		},
		sidebarChildren: {
			type: FieldType.Node,
			isPrivate: true
		},
		header: {
			type: FieldType.Schema,
			label: 'Header',
			options: {
				schema: skillViewHeaderDefinition
			}
		},
		isSidebarCollapsed: {
			type: FieldType.Boolean,
			label: 'Collapse sidebar',
			hint: 'Will hide the sidebar'
		},
		isHeaderCollapsed: {
			type: FieldType.Boolean,
			label: 'Collapse header',
			hint: 'Will hide the header'
		}
	}
})

export default skillViewDefinition
