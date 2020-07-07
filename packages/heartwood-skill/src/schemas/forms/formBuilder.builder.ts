import { buildSchemaDefinition } from '@sprucelabs/schema'
import formDefinition from './form.builder'
import formBuilderSectionDefinition from './formBuilderSection.builder'
import FieldType from '#spruce:schema/fields/fieldType'

const formBuilderDefinition = buildSchemaDefinition({
	id: 'formBuilder',
	name: 'Form builder',
	description: 'Build a form to collect some deets',
	fields: {
		...formDefinition.fields,
		renderAs: {
			type: FieldType.Select,
			label: 'Render type',
			hint: "Set this to tell the Form where it'll be rendered",
			defaultValue: 'default',
			options: {
				choices: [
					{ value: 'page', label: 'Full page' },
					{ value: 'default', label: 'Default' },
					{ value: 'dialog', label: 'Dialog body' },
				],
			},
		},
		dialogButtons: {
			type: FieldType.Schema,
			label: 'Dialog buttons',
			options: {
				schema: {
					id: 'formDialogButtons',
					name: 'Form dialog buttons',
					fields: {
						primary: {
							type: FieldType.Schema,
							label: 'Primary button',
							options: {
								schemaId: 'button',
							},
						},
						secondary: {
							type: FieldType.Schema,
							label: 'Secondary button',
							options: {
								schemaId: 'button',
							},
						},
					},
				},
			},
		},
		schema: {
			type: FieldType.Raw,
			label: 'Schema definition',
			isRequired: true,
			options: {
				valueType: 'SpruceSchema.ISchemaDefinition',
			},
		},
		sections: {
			type: FieldType.Schema,
			label: 'Sections',
			isArray: true,
			isRequired: true,
			options: {
				schema: formBuilderSectionDefinition,
			},
		},
	},
})

export default formBuilderDefinition
