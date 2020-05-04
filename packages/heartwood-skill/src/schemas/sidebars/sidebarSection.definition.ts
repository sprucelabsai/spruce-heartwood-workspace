import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import { sidebarSpacingChoices } from './sidebar.definition'
import layoutBuilderDefinition from '../layouts/layoutBuilder.definition'

const sidebarDefinition = buildSchemaDefinition({
	id: 'sidebarSection',
	name: 'Sidebar item',
	description: 'An element that makes up the sidebar',
	fields: {
		...layoutBuilderDefinition.fields,
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		isCentered: {
			type: FieldType.Boolean,
			label: 'Centered',
			hint: 'Center everything horizontally',
			defaultValue: false
		},
		isOnlyForMobile: {
			type: FieldType.Boolean,
			label: 'Mobile only',
			hint: 'Will hide on desktop if true',
			defaultValue: false
		},
		horizontalSpacing: {
			type: FieldType.Select,
			defaultValue: 'base',
			options: {
				choices: sidebarSpacingChoices
			}
		},
		verticalSpacing: {
			type: FieldType.Select,
			defaultValue: 'base',
			options: {
				choices: sidebarSpacingChoices
			}
		},
		children: {
			type: FieldType.Node,
			isPrivate: true
		}
	}
})

export default sidebarDefinition
