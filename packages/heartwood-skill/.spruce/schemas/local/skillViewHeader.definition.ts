import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import tabDefinitionLocal from '#spruce/schemas/local/tab.definition'

const skillViewHeaderDefinition: SpruceSchemas.Local.SkillViewHeader.IDefinition = {
	id: 'skillViewHeader',
	name: 'Skill view header',
	fields: {
		/** Title. */
		title: {
			label: 'Title',
			type: FieldType.Text,
			options: undefined
		},
		/** Back link href. */
		backLinkHref: {
			label: 'Back link href',
			type: FieldType.Text,
			options: undefined
		},
		/** Back link text. */
		backLinkText: {
			label: 'Back link text',
			type: FieldType.Text,
			options: undefined
		},
		/** Collapsed. */
		isCollapsed: {
			label: 'Collapsed',
			type: FieldType.Boolean,
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Primary button. */
		primaryButton: {
			label: 'Primary button',
			type: FieldType.Schema,
			options: { schemas: [buttonDefinitionLocal] }
		},
		/** Bottom border. */
		hasBottomBorder: {
			label: 'Bottom border',
			type: FieldType.Boolean,
			options: undefined
		},
		/** Sidebar expander button. The button I'll use to let the person toggle the sidebar's visibility. */
		sidebarExpanderButton: {
			label: 'Sidebar expander button',
			type: FieldType.Schema,
			hint:
				"The button I'll use to let the person toggle the sidebar's visibility.",
			options: { schemas: [buttonDefinitionLocal] }
		},
		/** Back click handler. */
		onClickBack: {
			label: 'Back click handler',
			type: FieldType.EventCallback,
			options: { event: `React.MouseEvent<...>`, element: `HTMLButtonElement` }
		},
		/** Tabs. */
		tabs: {
			label: 'Tabs',
			type: FieldType.Schema,
			isArray: true,
			options: { schemas: [tabDefinitionLocal] }
		}
	}
}

export default skillViewHeaderDefinition
