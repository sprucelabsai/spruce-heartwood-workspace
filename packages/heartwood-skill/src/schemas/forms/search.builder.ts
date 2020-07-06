import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import textInputDefinition from './textInput.builder'

const searchDefinition = buildSchemaDefinition({
	id: 'search',
	name: 'Search input',
	description: 'Show a text input as a search field',
	fields: {
		...textInputDefinition.fields,
		type: {
			type: FieldType.Text,
			label: 'Type',
			isPrivate: true,
			isRequired: true,
			defaultValue: 'search',
			value: 'search'
		}
	}
})

export default searchDefinition
