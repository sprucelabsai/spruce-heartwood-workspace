import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const tagDefinition = buildSchemaDefinition({
	id: 'tag',
	name: 'Tag',
	description: 'Small pill like control with text and onClick functionality',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
		},
		className: {
			type: FieldType.Text,
			isPrivate: true,
		},
		text: {
			type: FieldType.Text,
			label: 'Text',
		},
		kind: {
			type: FieldType.Select,
			label: 'Kind',
			defaultValue: 'primary',
			options: {
				choices: [
					{ value: 'primary', label: 'Primary' },
					{ value: 'secondary', label: 'Secondary' },
				],
			},
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Small',
			hint: 'Render small variation of the tag',
			defaultValue: false,
		},
	},
})

export default tagDefinition
