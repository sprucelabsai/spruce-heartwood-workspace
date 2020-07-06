import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import { sidebarSpacingChoices } from './sidebar.builder'
import layoutBuilderDefinition from '../layouts/layoutBuilder.builder'

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
