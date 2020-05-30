import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import cardBuilderDefinitionLocal from '#spruce/schemas/local/cardBuilder.definition'
import layoutDefinitionLocal from '#spruce/schemas/local/layout.definition'
import layoutSpacingDefinitionLocal from '#spruce/schemas/local/layoutSpacing.definition'
import sidebarHeaderDefinitionLocal from '#spruce/schemas/local/sidebarHeader.definition'
import sidebarSectionDefinitionLocal from '#spruce/schemas/local/sidebarSection.definition'

const layoutBuilderDefinition: SpruceSchemas.Local.LayoutBuilder.IDefinition = {
	id: 'layoutBuilder',
	name: 'Layout builder',
	description: 'A way to build layouts',
	fields: {
		/** Items. */
		items: {
			label: 'items',
			type: FieldType.Schema,
			isArray: true,
			options: {
				schemas: [
					buttonDefinitionLocal,
					cardBuilderDefinitionLocal,
					layoutDefinitionLocal,
					layoutSpacingDefinitionLocal,
					sidebarHeaderDefinitionLocal,
					sidebarSectionDefinitionLocal
				]
			}
		}
	}
}

export default layoutBuilderDefinition
