import {
	buildSchemaDefinition,
	FieldType,
	ISelectFieldDefinitionChoice
} from '@sprucelabs/schema'
import sidebarHeaderDefinition from './sidebarHeader.definition'

export const sidebarSpacingChoices: ISelectFieldDefinitionChoice[] = [
	{ value: 'base', label: 'Base' },
	{ value: 'loose', label: 'Loose' }
]

const sidebarDefinition = buildSchemaDefinition({
	id: 'sidebar',
	name: 'Sidebar',
	description: 'On the left or right side of a layout',
	fields: {
		mobileHeader: {
			type: FieldType.Schema,
			hint: 'Optional header that will only appear on mobile',
			options: {
				schema: sidebarHeaderDefinition
			}
		},
		items: {
			type: FieldType.Schema,
			label: 'Label',
			hint: 'Items to display in the sidebar',
			isArray: true,
			options: {
				schemaId: 'sidebarItem'
			}
		},
		sections: {
			type: FieldType.Schema,
			label: 'Sections',
			hint: 'Sections to display in the sidebar',
			isArray: true,
			options: {
				schemaId: 'sidebarSection'
			}
		},
		backLink: {
			type: FieldType.Schema,
			label: 'Back link',
			hint: 'Back link item to handle navigation back to previous location',
			options: {
				schemaId: 'sidebarItem'
			}
		},
		side: {
			type: FieldType.Select,
			label: 'Side',
			hint: `Set which side the sidebar is on. Must be either 'left' or 'right'`,
			options: {
				choices: [
					{ value: 'left', label: 'Left' },
					{ value: 'right', label: 'Right' }
				]
			}
		},
		isLarge: {
			type: FieldType.Boolean,
			label: 'Large',
			hint: 'Set true to make the sidebar larger. Defaults to false.'
		},
		isCollapsible: {
			type: FieldType.Boolean,
			label: 'Collapsed',
			hint:
				'Enables the user to collapse the sidebar on desktop. Defaults to true.'
		},
		isExpanded: {
			type: FieldType.Boolean,
			label: 'Expanded on desktop',
			hint: 'Set true to expand the sidebar (large screens only)',
			defaultValue: true
		},
		isMobileExpanded: {
			type: FieldType.Boolean,
			label: 'Expanded on mobile',
			hint: 'Set true to expand the sidebar on small screens'
		},
		children: {
			type: FieldType.Node,
			isPrivate: true
		},
		footerChildren: {
			type: FieldType.Node,
			isPrivate: true
		}
	}
})

export default sidebarDefinition
