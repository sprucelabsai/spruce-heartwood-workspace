import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import {
	withKnobs,
	text,
	boolean,
	object,
	number,
	select
} from '@storybook/addon-knobs/react'
import Button from '../Button/Button'
import {
	Autosuggest,
	Checkbox,
	DatePicker,
	DurationInput,
	PhoneInput,
	Radio,
	Search,
	Select,
	Slider,
	Stars,
	Tag,
	TextArea,
	TextInput,
	Toggle,
	FormLayout,
	FormLayoutGroup,
	FormLayoutItem
} from './index'
import countries from '../../../../../.storybook/data/countries'

const spacingOptions = {
	Base: null,
	Tight: 'tight'
}

const renderSuggestion = (suggestion: any) => {
	if (suggestion.isEmptyMessage) {
		return (
			<div className="autosuggest__no-results">
				<p className="autosuggest__no-results-title">
					No matching countries found.
				</p>
				<p className="autosuggest__no-results-subtitle">
					Please adjust your search and try again.
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

const stories = storiesOf('Forms', module)

stories.addDecorator(withKnobs)

stories
	.add('Autosuggest', () => (
		<Autosuggest
			id="suggest"
			label={object('label', { text: 'Country' })}
			helper={object('inputHelper', {
				helper: 'We use this information to improve your shopping experience.'
			})}
			placeholder={text('placeholder', 'Select your country')}
			defaultSuggestions={object('defaultSuggestions', countries)}
			shouldRenderSuggestions={true}
			renderSuggestion={renderSuggestion}
			getSuggestionValue={value => value.text}
			getSuggestions={value => {
				const results = countries.filter(
					suggestion =>
						suggestion.text.toLowerCase().slice(0, value.length) ===
						value.toLowerCase()
				)
				// Here you could add click events to buttons or whatever else they need
				// No Results Message
				if (results.length === 0) {
					return [
						{
							text: 'NO RESULTS',
							isEmptyMessage: true
						}
					]
				}
				return results
			}}
		/>
	))
	.add('Autosuggest Search', () => (
		<Autosuggest
			id="suggest-search"
			placeholder={text('placeholder', 'Search countries…')}
			defaultSuggestions={object('defaultSuggestions', countries)}
			shouldRenderSuggestions={true}
			renderSuggestion={renderSuggestion}
			getSuggestionValue={value => value.text}
			getSuggestions={value => {
				const results = countries.filter(
					suggestion =>
						suggestion.text.toLowerCase().slice(0, value.length) ===
						value.toLowerCase()
				)
				// Here you could add click events to buttons or whatever else they need
				// No Results Message
				if (results.length === 0) {
					return [
						{
							text: 'NO RESULTS',
							isEmptyMessage: true
						}
					]
				}
				return results
			}}
			icon={{
				name: 'search'
			}}
		/>
	))
	.add('Duration Input', () => (
		<DurationInput
			id="duration"
			label={{ text: 'Duration' }}
			placeholder={text('placeholder', 'How long is this going to take?')}
			minMinutes={number('minMinutes', 5)}
			maxMinutes={number('maxMinutes', 60 * 4)}
			skipMinutes={number('skipMinutes', 5)}
			defaultValue={number('defaultValue')}
			onChange={(minutes, e) => console.log(minutes, e)}
		/>
	))
	.add('Text Input', () => (
		<Fragment>
			<TextInput
				type="text"
				id={text('id', 'input')}
				name={text('name', 'inputName')}
				label={object('label', {
					text: 'First Name',
					postLabel: ''
				})}
				placeholder={text('placeholder', 'i.e. Annie')}
				value={text('value', '')}
				helper={object('helper', {
					hint: 'Let me help you understand why we are asking for this.',
					error: ''
				})}
				isReadOnly={boolean('isReadOnly', false)}
				isSmall={boolean('isSmall', false)}
			/>
		</Fragment>
	))
	.add('Text Area', () => (
		<Fragment>
			<TextArea
				id={text('id', 'input')}
				name={text('name', 'inputName')}
				label={object('label', { text: 'Category', postLabel: '' })}
				placeholder={text('placeholder', 'Optional category description…')}
				defaultValue={text('defaultValue', '')}
				error={text('error', '')}
				helper={text('helper', '')}
				isReadOnly={boolean('isReadOnly', false)}
				{...object('rest', {})}
			/>
		</Fragment>
	))
	.add('Search', () => (
		<Fragment>
			<Search
				placeholder={text('placeholder', 'Search for anything…')}
				isReadOnly={boolean('isReadOnly', false)}
				isSmall={boolean('isSmall', false)}
			/>
		</Fragment>
	))
	.add('Phone Number', () => (
		<Fragment>
			<PhoneInput
				label={object('label', { text: 'Phone Number' })}
				placeholder={text('placeholder', '(555) 555-5555')}
				isSmall={boolean('isSmall', false)}
			/>
		</Fragment>
	))
	.add('Subdomain', () => (
		<Fragment>
			<TextInput
				label={object('label', { text: 'Shopify Store URL' })}
				placeholder={text('placeholder', 'my-spruce-org')}
				appendix={text('appendix', '.spruce.ai')}
			/>
		</Fragment>
	))
	.add('Radio', () => (
		<Fragment>
			<Radio
				id="option-one"
				name="radio"
				label={object('label', { text: 'Option One', postText: 'option one' })}
			/>
			<Radio
				id="option-two"
				name="radio"
				label={object('label', {
					text: 'label: option two',
					postText: 'Option Two'
				})}
			/>
			<Radio
				id="option-three"
				name="radio"
				label={object('label', {
					text: 'label: option three',
					postText: 'Option Three'
				})}
			/>
		</Fragment>
	))
	.add('Checkbox', () => (
		<Fragment>
			<Checkbox
				id="option-one"
				name="optionOne"
				label={object('label', {
					text: 'Option One',
					postLabel: 'Post text one'
				})}
				isDisabled={boolean('isDisabled: option one', false)}
			/>
			<Checkbox
				id="option-two"
				name="optionTwo"
				label={object('label', {
					text: 'label: option two',
					postText: 'Option Two'
				})}
				isDisabled={boolean('isDisabled: option two', false)}
			/>
			<Checkbox
				id="option-three"
				name="optionThree"
				label={object('label', {
					text: 'label: option three',
					postText: 'Option Three'
				})}
				isDisabled={boolean('isDisabled: option three', false)}
				isIndeterminate
			/>
		</Fragment>
	))
	.add('Toggle', () => (
		<Fragment>
			<Toggle
				id={text('id', 'toggle')}
				name={text('name', 'toggle')}
				label={{ text: '', postLabel: '' }}
				className={text('className', '')}
			/>
		</Fragment>
	))
	.add('Tag', () => (
		<Fragment>
			<Tag
				text={text('text', 'Barber Services')}
				isSmall={boolean('isSmall', false)}
			/>
			<Tag
				kind="secondary"
				text={text('text', 'Barber Services')}
				isSmall={boolean('isSmall', false)}
			/>
		</Fragment>
	))
	.add('Slider', () => (
		<Fragment>
			<Slider
				id={text('id', 'slider')}
				name={text('name', 'slider')}
				min={number('min', 0)}
				max={number('max', 200)}
				value={number('value', 100)}
				label={object('label', { text: 'Scale', postLabel: '100%' })}
			/>
		</Fragment>
	))
	.add('Select', () => (
		<Fragment>
			<p>
				For controlled usage, default `value` to an empty-string in order to
				display the placeholder.
			</p>

			<Select
				label={object('label', { text: 'Country' })}
				placeholder={text('placeholder', 'Select something...')}
				id={text('id', 'country')}
				options={object('options', {
					us: 'United States',
					ca: 'Canada',
					nj: 'New Jersey'
				})}
				isSimple={boolean('isSimple', false)}
				helper={object('helper', {
					error: ''
				})}
				isDisabled={boolean('isDisabled', false)}
			/>
		</Fragment>
	))
	.add('Date Picker', () => (
		<DatePicker
			numberOfMonths={number('numberOfMonths', 1)}
			kind={select(
				'kind',
				{ singleDate: 'singleDate', dateRange: 'dateRange' },
				'singleDate'
			)}
			onSelectDateRange={({ startDate, endDate }) =>
				console.log(startDate, endDate)
			}
			// IsDayBlocked={day => day.isBefore(moment().startOf('day'))}
		/>
	))
	.add('Stars', () => <Stars />)
	.add('Form Layout', () => (
		<FormLayout
			spacing={select('spacing', spacingOptions, spacingOptions.Base)}
		>
			<FormLayoutItem>
				<TextInput
					id="biz-name"
					type="text"
					label={{ text: 'Name of Business' }}
					placeholder="e.g. Annie's Bagels"
				/>
			</FormLayoutItem>
			<FormLayoutGroup>
				<FormLayoutItem>
					<TextInput
						id="first"
						type="text"
						label={{ text: 'First Name' }}
						placeholder="e.g. Annie"
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<TextInput
						id="last"
						type="text"
						label={{ text: 'Last Name' }}
						placeholder="e.g. Smith"
					/>
				</FormLayoutItem>
			</FormLayoutGroup>
			<FormLayoutGroup isCondensed>
				<FormLayoutItem>
					<TextInput id="price" type="text" label={{ text: 'Price' }} />
				</FormLayoutItem>
				<FormLayoutItem>
					<TextInput id="duration" type="text" label={{ text: 'Duration' }} />
				</FormLayoutItem>
				<FormLayoutItem>
					<TextInput
						id="commission"
						type="text"
						label={{ text: 'Commission' }}
					/>
				</FormLayoutItem>
			</FormLayoutGroup>
		</FormLayout>
	))
