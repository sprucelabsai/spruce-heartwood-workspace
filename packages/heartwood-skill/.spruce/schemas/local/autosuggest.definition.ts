import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import inputHelperDefinitionLocal from '#spruce/schemas/local/inputHelper.definition'

const autosuggestDefinition: SpruceSchemas.Local.Autosuggest.IDefinition = {
	id: 'autosuggest',
	name: 'Autosuggest',
	description: 'An input with autosuggest capabilities!',
	fields: {
		/** Change handler. */
		onChange: {
			label: 'Change handler',
			type: FieldType.EventCallback,
			options: { event: `React.ChangeEvent<...>`, element: `HTMLInputElement` }
		},
		/** Blur handler. */
		onBlur: {
			label: 'Blur handler',
			type: FieldType.EventCallback,
			options: { event: `React.FocusEvent<...>`, element: `HTMLInputElement` }
		},
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Id,
			options: undefined
		},
		/** Value. */
		value: {
			label: 'Value',
			type: FieldType.Text,
			options: undefined
		},
		/** Suggestion getter. Invoked while person is typing. Is expected to return search results */
		getSuggestions: {
			label: 'Suggestion getter',
			type: FieldType.Raw,
			isRequired: true,
			hint:
				'Invoked while person is typing. Is expected to return search results',
			options: {
				valueType: `(query: string) => Promise<Record<string, any>[]> | Record<string, any>[]`
			}
		},
		/** Suggestion value reducer. Takes a suggestion (returned from the suggestion getter) and turns it into a single string value to show in the search input after selection */
		getSuggestionValue: {
			label: 'Suggestion value reducer',
			type: FieldType.Raw,
			isRequired: true,
			hint:
				'Takes a suggestion (returned from the suggestion getter) and turns it into a single string value to show in the search input after selection',
			options: { valueType: `(suggestion: Record<string, any>) => string` }
		},
		/** Suggestion renderer. Renders a single suggestion, return a React.ReactNode */
		renderSuggestion: {
			label: 'Suggestion renderer',
			type: FieldType.Raw,
			isRequired: true,
			hint: 'Renders a single suggestion, return a React.ReactNode',
			options: {
				valueType: `(suggestion: Record<string, any>, params: { query:string, isHighlighted: boolean }) => React.ReactNode`
			}
		},
		/** Selection handler. Invoked when a person select a suggestion */
		onSuggestionSelected: {
			label: 'Selection handler',
			type: FieldType.Raw,
			hint: 'Invoked when a person select a suggestion',
			options: {
				valueType: `(event: React.FormEvent<any>, data: { suggestion: Record<string, any>, suggestionValue: string, suggestionIndex: number, sectionIndex: number | null, method: 'click' | 'enter' }) => void`
			}
		},
		/** Render suggestions. Should I even show the suggestions when typing */
		shouldRenderSuggestions: {
			label: 'Render suggestions',
			type: FieldType.Boolean,
			hint: 'Should I even show the suggestions when typing',
			options: undefined
		},
		/** Default suggestions. Suggestions to show before anyone types */
		defaultSuggestions: {
			label: 'Default suggestions',
			type: FieldType.Raw,
			hint: 'Suggestions to show before anyone types',
			defaultValue: [],
			isArray: true,
			options: { valueType: `Record<string, any>` }
		},
		/** Placeholder. */
		placeholder: {
			label: 'Placeholder',
			type: FieldType.Text,
			options: undefined
		},
		/** Default value. */
		defaultValue: {
			label: 'Default value',
			type: FieldType.Text,
			options: undefined
		},
		/** Label. */
		label: {
			label: 'Label',
			type: FieldType.Schema,
			options: { schemas: [labelDefinitionLocal] }
		},
		/** Helper. */
		helper: {
			label: 'Helper',
			type: FieldType.Schema,
			options: { schemas: [inputHelperDefinitionLocal] }
		},
		/** Small. Render small variation */
		isSmall: {
			label: 'Small',
			type: FieldType.Boolean,
			hint: 'Render small variation',
			options: undefined
		},
		/** Wrapper class name. */
		wrapperClassName: {
			label: 'Wrapper class name',
			type: FieldType.Text,
			options: undefined
		},
		/** . */
		className: {
			type: FieldType.Text,
			options: undefined
		},
		/** Disable. Disable this field by setting to true */
		isDisabled: {
			label: 'Disable',
			type: FieldType.Boolean,
			hint: 'Disable this field by setting to true',
			options: undefined
		},
		/** Icon. */
		icon: {
			label: 'Icon',
			type: FieldType.Schema,
			options: { schemas: [iconDefinitionLocal] }
		}
	}
}

export default autosuggestDefinition
