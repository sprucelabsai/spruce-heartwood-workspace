import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'

const formBuilderSectionDefinition = buildSchemaDefinition({
	id: 'formBuilderSection',
	name: 'Form builder section',
	fields: {
		title: {
			type: FieldType.Text,
			label: 'Title'
		},
		spacing: {
			type: FieldType.Select,
			label: 'Spacing',
			options: {
				choices: [
					{
						value: 'tight',
						label: 'Tight'
					},
					{
						value: 'base',
						label: 'Base'
					}
				]
			}
		},
		fields: {
			type: FieldType.Boolean,
			isArray: true
		}
	}
})

export default formBuilderSectionDefinition
