import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from '../forms/button.definition'
import tabDefinition from '../tab.definition'

const skillViewHeaderDefinition = buildSchemaDefinition({
	id: 'skillViewHeader',
	name: 'Skill view header',
	fields: {
		title: {
			type: FieldType.Text,
			label: 'Title'
		},
		backLinkHref: {
			type: FieldType.Text,
			label: 'Back link href',
			isPrivate: true
		},
		backLinkText: {
			type: FieldType.Text,
			label: 'Back link text',
			isPrivate: true
		},
		isCollapsed: {
			type: FieldType.Boolean,
			label: 'Collapsed'
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		primaryButton: {
			type: FieldType.Schema,
			label: 'Primary button',
			options: {
				schemaId: 'button'
			}
		},
		hasBottomBorder: {
			type: FieldType.Boolean,
			label: 'Bottom border'
		},
		sidebarExpanderButton: {
			type: FieldType.Schema,
			label: 'Sidebar expander button',
			hint:
				"The button I'll use to let the person toggle the sidebar's visibility.",
			options: {
				schema: buttonDefinition
			}
		},
		onClickBack: {
			type: FieldType.EventCallback,
			label: 'Back click handler',
			options: {
				event: 'React.MouseEvent<...>',
				element: 'HTMLButtonElement'
			}
		},
		tabs: {
			type: FieldType.Schema,
			label: 'Tabs',
			isArray: true,
			options: {
				schema: tabDefinition
			}
		}
	}
})

export default skillViewHeaderDefinition
