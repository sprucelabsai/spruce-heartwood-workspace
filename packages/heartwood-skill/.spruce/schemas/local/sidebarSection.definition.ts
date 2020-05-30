import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import cardBuilderDefinitionLocal from '#spruce/schemas/local/cardBuilder.definition'
import layoutDefinitionLocal from '#spruce/schemas/local/layout.definition'
import layoutSpacingDefinitionLocal from '#spruce/schemas/local/layoutSpacing.definition'
import sidebarHeaderDefinitionLocal from '#spruce/schemas/local/sidebarHeader.definition'
import sidebarSectionDefinitionLocal from '#spruce/schemas/local/sidebarSection.definition'

const sidebarSectionDefinition: SpruceSchemas.Local.SidebarSection.IDefinition = {
	id: 'sidebarSection',
	name: 'Sidebar item',
	description: 'An element that makes up the sidebar',
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
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Centered. Center everything horizontally */
		isCentered: {
			label: 'Centered',
			type: FieldType.Boolean,
			hint: 'Center everything horizontally',
			defaultValue: false,
			options: undefined
		},
		/** Mobile only. Will hide on desktop if true */
		isOnlyForMobile: {
			label: 'Mobile only',
			type: FieldType.Boolean,
			hint: 'Will hide on desktop if true',
			defaultValue: false,
			options: undefined
		},
		/** . */
		horizontalSpacing: {
			type: FieldType.Select,
			defaultValue: 'base',
			options: {
				choices: [
					{ value: 'base', label: 'Base' },
					{ value: 'loose', label: 'Loose' }
				]
			}
		},
		/** . */
		verticalSpacing: {
			type: FieldType.Select,
			defaultValue: 'base',
			options: {
				choices: [
					{ value: 'base', label: 'Base' },
					{ value: 'loose', label: 'Loose' }
				]
			}
		},
		/** . */
		children: {
			type: FieldType.Node,
			options: undefined
		}
	}
}

export default sidebarSectionDefinition
