import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import textInputDefinition from './textInput.definition'

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
