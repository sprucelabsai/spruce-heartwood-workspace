import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const headingDefinition = buildSchemaDefinition({
	id: 'Heading',
	name: 'Heading',
	description: '**missing description**',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
		},
		html: {
			type: FieldType.Text,
			label: 'Html',
			hint: 'HTML rendered directly',
			isPrivate: true,
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
			hint: 'Text rendered in the header',
		},
		className: {
			type: FieldType.Text,
			isPrivate: true,
		},
		children: {
			type: FieldType.Node,
			isPrivate: true,
		},
		weight: {
			type: FieldType.Select,
			label: 'Weight',
			hint: 'The weight of the heading, H1 and beyond',
			defaultValue: 'h1',
			options: {
				choices: [
					{
						label: 'H1',
						value: 'h1',
					},
					{
						label: 'H2',
						value: 'h2',
					},
					{
						label: 'H3',
						value: 'h3',
					},
					{
						label: 'H4',
						value: 'h4',
					},
					{
						label: 'H5',
						value: 'h5',
					},
					{
						label: 'H6',
						value: 'h6',
					},
				],
			},
		},
	},
})

export default headingDefinition
