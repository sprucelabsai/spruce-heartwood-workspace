import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import skillViewDefinition from './SkillView.builder'

const skillViewBuilderDefinition = buildSchemaDefinition({
	id: 'skillViewBuilder',
	name: 'Skill view builder',
	description:
		"A view you're presenting to a person on an unknown set of devices",
	fields: {
		...skillViewDefinition.fields,
		contentLayout: {
			type: FieldType.Schema,
			label: 'Content layout',
			options: {
				schemaId: 'layoutBuilder'
			}
		},
		sidebarLayout: {
			type: FieldType.Schema,
			label: 'Content layout',
			options: {
				schemaId: 'layoutBuilder'
			}
		}
	}
})

export default skillViewBuilderDefinition