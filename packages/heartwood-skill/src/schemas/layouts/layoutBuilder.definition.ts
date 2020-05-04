import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const layoutBuilderDefinition = buildSchemaDefinition({
	id: 'layoutBuilder',
	name: 'Layout builder',
	description: 'A way to build layouts',
	fields: {
		items: {
			type: FieldType.Schema,
			label: 'items',
			isArray: true,
			options: {
				schemaIds: [
					'button',
					'cardBuilder',
					'layout',
					'layoutSpacing',
					'sidebarHeader',
					'sidebarSection'
				]
			}
		}
	}
})

export default layoutBuilderDefinition
