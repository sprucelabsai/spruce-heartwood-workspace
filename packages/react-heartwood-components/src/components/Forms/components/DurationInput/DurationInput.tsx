import React, { Component } from 'react'
import { range, findIndex } from 'lodash'
import memoize from 'memoize-one'

import Autosuggest from '../Autosuggest/Autosuggest'
import Button from '../../../Button/Button'

import { IAutosuggestInterfaceProps } from '../Autosuggest/Autosuggest'

interface IDurationInputProps
	extends Omit<IAutosuggestInterfaceProps, 'defaultValue'> {
	/** Minimum time someone can select */
	minMinutes?: number

	/** Maximum time someone can select */
	maxMinutes?: number

	/** When generating suggestions, how much much time is there between suggestions */
	skipMinutes?: number

	/** Default value (in minutes)  */
	defaultValue?: number

	/** Placeholder to be formatted nicely (expects minutes) */
	placeholder?: string

	/** Title rendered when no results are found */
	noResultsTitle?: string

	/** Subtitle rendered when no results are found */
	noResultsSubtitle?: string

	/** The initial value */
	value?: number

	/** Pass an error message to the input, this is show only after a valid duration is selected */
	error?: string

	/** Is this field required? */
	required?: boolean

	/** A slighly different onChange */
	onChange?: (durationInMinutes: number | null, e: KeyboardEvent) => void

	onBlur?: (e: KeyboardEvent) => {}
}

interface IDurationInputState {
	/** The current value in state */
	value?: string
	/** The last value */
	prevPropsValue?: number | null
	validationError?: string | null
}

export default class DurationInput extends Component<
	IDurationInputProps,
	IDurationInputState
> {
	public static defaultProps = {
		minMinutes: 5,
		maxMinutes: 180,
		skipMinutes: 5,
		noResultsTitle: 'Invalid duration.',
		noResultsSubtitle: 'Please adjust your search and try again.'
	}

	public generateSuggestions = memoize((min, max, skip) => {
		return range(min, max + skip, skip).map(minutes => {
			const duration = DurationInput.minutesToStr(minutes)
			return {
				text: duration,
				search: duration.replace(/[^0-9hm]/g, ''),
				minutes
			}
		})
	})

	public searchSuggestions = memoize(
		(value): Array<string> => {
			const { minMinutes, maxMinutes, skipMinutes } = this.props

			const search = value.replace(/[^0-9hm]/g, '')

			// We typed something, but it was nothing valid
			if (value.length > 0 && search.length === 0) {
				return []
			}

			const suggestions = this.generateSuggestions(
				minMinutes,
				maxMinutes,
				skipMinutes
			)

			const results = suggestions.filter(
				suggestion => suggestion.search.search(search) > -1
			)

			return results
		}
	)

	public constructor(props: IDurationInputProps) {
		super(props)
		const val = props.defaultValue || props.value
		this.state = {
			value: val ? DurationInput.minutesToStr(val) : '',
			prevPropsValue: props.value,
			validationError: null
		}
	}

	public static getDerivedStateFromProps(props, state) {
		if (props.value !== state.prevPropsValue) {
			return {
				prevPropsValue: props.value,
				value: DurationInput.minutesToStr(props.value)
			}
		}
		return null
	}

	public static minutesToStr = (num: number): string => {
		const hours = Math.floor(num / 60)
		const minutes = num % 60

		let value = ''

		if (hours > 0) {
			value += `${hours}hr`
		}

		if (minutes > 0) {
			value += `${minutes}min`
		}

		return value.trim()
	}

	public renderSuggestion = (suggestion: any) => {
		if (suggestion.isEmptyMessage) {
			const { noResultsTitle, noResultsSubtitle } = this.props
			return (
				<div className="autosuggest__no-results">
					<p className="autosuggest__no-results-title">{noResultsTitle}</p>
					<p className="autosuggest__no-results-subtitle">
						{noResultsSubtitle}
					</p>
				</div>
			)
		}
		return (
			<Button
				isSmall
				className="autosuggest__list-item-inner"
				text={suggestion.text}
			/>
		)
	}

	public strToMinutes = (str: string): number => {
		const { minMinutes, maxMinutes, skipMinutes } = this.props
		const suggestions = this.generateSuggestions(
			minMinutes,
			maxMinutes,
			skipMinutes
		)
		const idx = findIndex(suggestions, suggestion => suggestion.text === str)

		const suggestion = suggestions[idx]
		return suggestion.minutes
	}

	public handleChange = e => {
		const { value } = e.target
		this.setState({ value })
	}

	public handleBlur = e => {
		const { onBlur, onChange, required } = this.props

		const value = e.target.value
		if (!required && (!value || value.length === 0)) {
			this.setState({ value: '', validationError: null })
			onChange && onChange(null, e)
		}

		const matches = this.searchSuggestions(value)

		if (value.length > 0 && matches.length > 0) {
			this.setState({ value: matches[0].text, validationError: null })
			// Only fire on change if the new value is valid
			onChange && onChange(this.strToMinutes(matches[0].text), e)
		} else if (required && value.length > 0) {
			this.setState({ validationError: 'You must select a valid duration.' })
		}

		onBlur && onBlur(e)
	}

	public handleSelectSuggestion = (
		e: KeyboardEvent,
		suggestion: Record<string, any>
	) => {
		const { onChange } = this.props

		const value = suggestion.suggestionValue

		this.setState({ value })
		const matches = this.searchSuggestions(value)

		if (value.length > 0 && matches.length > 0) {
			this.setState({ value: matches[0].text, validationError: null })
			// Only fire on change if the new value is valid
			onChange && onChange(this.strToMinutes(matches[0].text), e)
		}
	}

	public handleGetSuggestions = value => {
		const matches = this.searchSuggestions(value)
		// Here you could add click events to buttons or whatever else they need
		// No Results Message
		if (matches.length === 0) {
			return [
				{
					text: 'NO RESULTS',
					isEmptyMessage: true
				}
			]
		}
		return matches
	}

	public render() {
		const {
			minMinutes,
			maxMinutes,
			skipMinutes,
			error,
			placeholder,
			...props
		} = this.props

		const { value, validationError } = this.state

		const suggestions = this.generateSuggestions(
			minMinutes,
			maxMinutes,
			skipMinutes
		)

		return (
			<Autosuggest
				inputProps={{
					value,
					onChange: this.handleChange,
					onBlur: this.handleBlur
				}}
				error={validationError || error}
				defaultSuggestions={suggestions}
				shouldRenderSuggestions={() => true}
				renderSuggestion={this.renderSuggestion}
				getSuggestionValue={value => value.text}
				getSuggestions={this.handleGetSuggestions}
				onSuggestionSelected={this.handleSelectSuggestion}
				placeholder={
					placeholder && typeof placeholder === 'number'
						? DurationInput.minutesToStr(placeholder)
						: placeholder
				}
				{...props}
			/>
		)
	}
}
