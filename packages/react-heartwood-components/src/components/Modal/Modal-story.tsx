import { withKnobs, text, boolean, object } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React, { Fragment, Component } from 'react'
import countries from '../../../.storybook/data/countries'
import Button from '../Button/Button'
import {
	Checkbox,
	TextInput,
	TextArea,
	FormLayout,
	FormLayoutItem
} from '../Forms'
import Autosuggest from '../Forms/components/Autosuggest/Autosuggest'
import Modal from './Modal'

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

interface IModalExampleProps {
	title: string
	canGoBack: boolean
	hasSecondaryButton: boolean
	includeFooter: boolean
}
interface IModalExampleState {
	isOpen: boolean
}

class ModalExample extends Component<IModalExampleProps, IModalExampleState> {
	public state = {
		isOpen: false
	}

	public toggleVisibility = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}))
	}

	public onAfterOpen = () => {}

	public onRequestClose = () => {
		this.setState({
			isOpen: false
		})
	}
	public render() {
		const { isOpen } = this.state
		const { title, canGoBack, hasSecondaryButton, includeFooter } = this.props
		return (
			<Fragment>
				<Button
					kind={'secondary'}
					text="Give me modal"
					onClick={this.toggleVisibility}
				/>
				<Modal
					isOpen={isOpen}
					onAfterOpen={this.onAfterOpen}
					onRequestClose={this.onRequestClose}
					size={boolean('isSmall', true) ? 'small' : undefined}
				>
					<Modal.Header
						title={title}
						onRequestClose={this.onRequestClose}
						onClickBack={
							canGoBack ? () => console.log('take me home') : undefined
						}
					/>
					<form>
						<Modal.Body>
							<FormLayout>
								<FormLayoutItem>
									<TextInput
										id="category"
										label={{ text: 'Category Name' }}
										placeholder="e.g. Barber"
									/>
								</FormLayoutItem>
								<FormLayoutItem>
									<TextInput
										id="teaser"
										label={{
											text: 'Teaser',
											postLabel: '0/64'
										}}
										placeholder="Haircuts, shaves, and touch-ups."
										helper={{
											hint:
												'Add a short teaser for your guests to see when they browse your services. Please limit to 64 characters.'
										}}
									/>
								</FormLayoutItem>
								<FormLayoutItem>
									<TextArea
										id="description"
										label={{ text: 'Description' }}
										placeholder="Optional category description…"
										helper={{
											hint:
												'Add a short teaser for your guests to see when they browse your services.'
										}}
										rows={3}
									/>
								</FormLayoutItem>
								<FormLayoutItem>
									<Checkbox
										id="hide-category"
										label={{
											text: 'Hide this category',
											postLabel:
												'It will still be visible to your teammates, but will be hidden from guests.'
										}}
									/>
								</FormLayoutItem>
							</FormLayout>
						</Modal.Body>
						{includeFooter && (
							<Modal.Footer
								primaryAction={{
									text: 'Create Category',
									onClick: () => console.log('Next'),
									type: 'submit'
								}}
								secondaryAction={
									hasSecondaryButton
										? {
												text: 'Cancel',
												onClick: () => console.log('Cancel')
										  }
										: undefined
								}
							/>
						)}
					</form>
				</Modal>
			</Fragment>
		)
	}
}

const stories = storiesOf('Modal', module)

stories.addDecorator(withKnobs)

stories
	.add('Modal', () => (
		<ModalExample
			title={text('title', 'New Service Category')}
			canGoBack={boolean('handleGoBack', false)}
			includeFooter={boolean('Modal.Footer', true)}
			hasSecondaryButton={boolean('secondaryAction', false)}
		/>
	))
	.add('static', () => (
		<Modal
			isOpen={boolean('isOpen', true)}
			onAfterOpen={() => console.log('onAfterOpen')}
			onRequestClose={() => console.log('onRequestClose')}
			size={boolean('isSmall', true) ? 'small' : undefined}
		>
			<Modal.Header
				title={text('title', 'New Service Category')}
				onRequestClose={() => console.log('onRequestClose')}
				onClickBack={
					boolean('canGoBack', false)
						? () => console.log('take me home')
						: undefined
				}
			/>
			<form>
				<Modal.Body>
					<FormLayout>
						<FormLayoutItem>
							<TextInput
								id="category"
								label={{ text: 'Category Name' }}
								placeholder="e.g. Barber"
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<TextInput
								id="teaser"
								label={{
									text: 'Teaser',
									postLabel: '0/64'
								}}
								placeholder="Haircuts, shaves, and touch-ups."
								helper={{
									hint:
										'Add a short teaser for your guests to see when they browse your services. Please limit to 64 characters.'
								}}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<TextArea
								id="description"
								label={{ text: 'Description' }}
								placeholder="Optional category description…"
								helper={{
									hint:
										'Add a short teaser for your guests to see when they browse your services.'
								}}
								rows={3}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Autosuggest
								id="country-select"
								label={{ text: 'Country' }}
								placeholder={'Select a country...'}
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
						</FormLayoutItem>
						<FormLayoutItem>
							<Checkbox
								id="hide-category"
								label={{
									text: 'Hide this category',
									postLabel:
										'It will still be visible to your teammates, but will be hidden from guests.'
								}}
							/>
						</FormLayoutItem>
					</FormLayout>
				</Modal.Body>
				{boolean('includeFooter', true) && (
					<Modal.Footer
						primaryAction={object('primaryAction', {
							text: 'Create Category',
							onClick: () => console.log('Next'),
							type: 'submit'
						})}
						secondaryAction={object('secondaryAction', {
							text: 'Cancel',
							onClick: () => console.log('Cancel')
						})}
					/>
				)}
			</form>
		</Modal>
	))
