import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import sidebarHeaderDefinitionLocal from '#spruce/schemas/local/sidebarHeader.definition'
import sidebarItemDefinitionLocal from '#spruce/schemas/local/sidebarItem.definition'
import sidebarSectionDefinitionLocal from '#spruce/schemas/local/sidebarSection.definition'

const sidebarDefinition: SpruceSchemas.Local.Sidebar.IDefinition = {
	id: 'sidebar',
	name: 'Sidebar',
	description: 'On the left or right side of a layout',
	fields: {
		/** . Optional header that will only appear on mobile */
		mobileHeader: {
			type: FieldType.Schema,
			hint: 'Optional header that will only appear on mobile',
			options: { schemas: [sidebarHeaderDefinitionLocal] }
		},
		/** Label. Items to display in the sidebar */
		items: {
			label: 'Label',
			type: FieldType.Schema,
			hint: 'Items to display in the sidebar',
			isArray: true,
			options: { schemas: [sidebarItemDefinitionLocal] }
		},
		/** Sections. Sections to display in the sidebar */
		sections: {
			label: 'Sections',
			type: FieldType.Schema,
			hint: 'Sections to display in the sidebar',
			isArray: true,
			options: { schemas: [sidebarSectionDefinitionLocal] }
		},
		/** Back link. Back link item to handle navigation back to previous location */
		backLink: {
			label: 'Back link',
			type: FieldType.Schema,
			hint: 'Back link item to handle navigation back to previous location',
			options: { schemas: [sidebarItemDefinitionLocal] }
		},
		/** Side. Set which side the sidebar is on. Must be either 'left' or 'right' */
		side: {
			label: 'Side',
			type: FieldType.Select,
			hint:
				"Set which side the sidebar is on. Must be either 'left' or 'right'",
			options: {
				choices: [
					{ value: 'left', label: 'Left' },
					{ value: 'right', label: 'Right' }
				]
			}
		},
		/** Large. Set true to make the sidebar larger. Defaults to false. */
		isLarge: {
			label: 'Large',
			type: FieldType.Boolean,
			hint: 'Set true to make the sidebar larger. Defaults to false.',
			options: undefined
		},
		/** Collapsed. Enables the user to collapse the sidebar on desktop. Defaults to true. */
		isCollapsible: {
			label: 'Collapsed',
			type: FieldType.Boolean,
			hint:
				'Enables the user to collapse the sidebar on desktop. Defaults to true.',
			options: undefined
		},
		/** Expanded on desktop. Set true to expand the sidebar (large screens only) */
		isExpanded: {
			label: 'Expanded on desktop',
			type: FieldType.Boolean,
			hint: 'Set true to expand the sidebar (large screens only)',
			defaultValue: true,
			options: undefined
		},
		/** Expanded on mobile. Set true to expand the sidebar on small screens */
		isMobileExpanded: {
			label: 'Expanded on mobile',
			type: FieldType.Boolean,
			hint: 'Set true to expand the sidebar on small screens',
			options: undefined
		},
		/** . */
		children: {
			type: FieldType.Node,
			options: undefined
		},
		/** . */
		footerChildren: {
			type: FieldType.Node,
			options: undefined
		},
		/** Expander handler. Expected to expand/collapse the sidebar by setting (isExpanded to true/false) */
		onToggleExpanded: {
			label: 'Expander handler',
			type: FieldType.Callback,
			hint:
				'Expected to expand/collapse the sidebar by setting (isExpanded to true/false)',
			options: { signature: `() => void` }
		},
		/** Force close handler. Expect you to collapse the bar no matter what (isExpanded to false) */
		onForceCollapse: {
			label: 'Force close handler',
			type: FieldType.Callback,
			hint:
				'Expect you to collapse the bar no matter what (isExpanded to false)',
			options: { signature: `() => void` }
		}
	}
}

export default sidebarDefinition
