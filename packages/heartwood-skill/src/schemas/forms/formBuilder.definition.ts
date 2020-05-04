import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import formDefinition from './form.definition'
import formBuilderSectionDefinition from './formBuilderSection.definition'

const formBuilderDefinition = buildSchemaDefinition({
	id: 'formBuilder',
	name: 'Form builder',
	description: 'Build a form to collect some deets',
	fields: {
		...formDefinition.fields,
		schema: {
			type: FieldType.Raw,
			label: 'Schema definition',
			isRequired: true,
			options: {
				valueType: 'SpruceSchema.ISchemaDefinition'
			}
		},
		sections: {
			type: FieldType.Schema,
			label: 'Sections',
			isArray: true,
			isRequired: true,
			options: {
				schema: formBuilderSectionDefinition
			}
		}
	}
})

export default formBuilderDefinition
