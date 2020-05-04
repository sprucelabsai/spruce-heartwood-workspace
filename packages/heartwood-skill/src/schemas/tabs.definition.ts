import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import tabDefinition from './tab.definition'

const tabsDefinition = buildSchemaDefinition({
	id: 'tabs',
	name: 'Tabs',
	description: 'A tabs control',
	fields: {
		tabs: {
			type: FieldType.Schema,
			label: 'Tabs',
			isRequired: true,
			isArray: true,
			options: {
				schema: tabDefinition
			}
		},
		isPadded: {
			type: FieldType.Boolean,
			label: 'Horizontal padding',
			hint: 'Adds horizontal padding'
		},
		isTruncatable: {
			type: FieldType.Boolean,
			label: 'Truncate tabs',
			hint: "Should tabs render 3 dots if they all don't fit"
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		}
	}
})

export default tabsDefinition
