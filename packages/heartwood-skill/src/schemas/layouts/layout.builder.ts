import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import layoutSectionDefinition from './layoutSection.builder'

const layoutDefinition = buildSchemaDefinition({
	id: 'layout',
	name: 'Layout',
	description: 'A layout is the start of it all',
	fields: {
		children: {
			type: FieldType.Node,
			label: 'Children',
			isPrivate: true
		},
		isCentered: {
			type: FieldType.Boolean,
			label: 'Is centered',
			hint: 'A hint',
			defaultValue: false
		},
		isFullBleed: {
			type: FieldType.Boolean,
			label: 'Is full bleed',
			defaultValue: false
		},
		sections: {
			type: FieldType.Schema,
			label: 'Sections',
			hint: 'Layout sections that makeup this layout',
			isArray: true,
			options: {
				schema: layoutSectionDefinition
			}
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		width: {
			type: FieldType.Select,
			label: 'Width',
			defaultValue: 'base',
			options: {
				choices: [
					{
						value: 'base',
						label: 'Base'
					},
					{
						value: 'wide',
						label: 'Wide'
					},
					{
						value: 'tight',
						label: 'Tight'
					},
					{
						value: 'fullWidth',
						label: 'Full width'
					}
				]
			}
		}
	}
})

export default layoutDefinition
