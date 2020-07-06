import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import inputEventsDefinition from './inputEvents.builder'

const autosuggestDefinition = buildSchemaDefinition({
	id: 'autosuggest',
	name: 'Autosuggest',
	description: 'An input with autosuggest capabilities!',
	fields: {
		...inputEventsDefinition.fields,
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		value: {
			type: FieldType.Text,
			label: 'Value'
		},
		getSuggestions: {
			type: FieldType.Raw,
			label: 'Suggestion getter',
			hint:
				'Invoked while person is typing. Is expected to return search results',
			isRequired: true,
			options: {
				valueType:
					'(query: string) => Promise<Record<string, any>[]> | Record<string, any>[]'
			}
		},
		getSuggestionValue: {
			type: FieldType.Raw,
			label: 'Suggestion value reducer',
			hint:
				'Takes a suggestion (returned from the suggestion getter) and turns it into a single string value to show in the search input after selection',
			isRequired: true,
			options: {
				valueType: '(suggestion: Record<string, any>) => string'
			}
		},
		renderSuggestion: {
			type: FieldType.Raw,
			label: 'Suggestion renderer',
			hint: 'Renders a single suggestion, return a React.ReactNode',
			isRequired: true,
			options: {
				valueType:
					'(suggestion: Record<string, any>, params: { query:string, isHighlighted: boolean }) => React.ReactNode'
			}
		},
		onSuggestionSelected: {
			type: FieldType.Raw,
			label: 'Selection handler',
			hint: 'Invoked when a person select a suggestion',
			options: {
				valueType: `(event: React.FormEvent<any>, data: { suggestion: Record<string, any>, suggestionValue: string, suggestionIndex: number, sectionIndex: number | null, method: 'click' | 'enter' }) => void`
			}
		},
		shouldRenderSuggestions: {
			type: FieldType.Boolean,
			label: 'Render suggestions',
			hint: 'Should I even show the suggestions when typing'
		},
		defaultSuggestions: {
			type: FieldType.Raw,
			label: 'Default suggestions',
			hint: 'Suggestions to show before anyone types',
			isArray: true,
			defaultValue: [],
			options: {
				valueType: 'Record<string, any>'
			}
		},
		placeholder: {
			type: FieldType.Text,
			label: 'Placeholder'
		},
		defaultValue: {
			type: FieldType.Text,
			label: 'Default value'
		},
		label: {
			type: FieldType.Schema,
			label: 'Label',
			options: {
				schemaId: 'label'
			}
		},
		helper: {
			type: FieldType.Schema,
			label: 'Helper',
			options: {
				schemaId: 'inputHelper'
			}
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Small',
			hint: 'Render small variation'
		},
		wrapperClassName: {
			type: FieldType.Text,
			isPrivate: true,
			label: 'Wrapper class name'
		},
		className: {
			type: FieldType.Text,
			isPrivate: true
		},
		isDisabled: {
			type: FieldType.Boolean,
			label: 'Disable',
			hint: 'Disable this field by setting to true'
		},
		icon: {
			type: FieldType.Schema,
			label: 'Icon',
			options: {
				schemaId: 'icon'
			}
		}
	}
})

export default autosuggestDefinition
