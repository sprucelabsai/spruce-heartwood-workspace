import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import BigForm, { BigFormTransitionStyle } from './BigForm'

const stories = storiesOf('BigForm', module)

stories.addDecorator(withKnobs)

interface IControllerProps {
	transitionStyle: SpruceSchemas.Local.IBigForm['transitionStyle']
	useOneSprucebot: boolean
}
interface IControllerState {
	currentSlide: number
}

class Controller extends React.Component<IControllerProps, IControllerState> {
	public constructor(props) {
		super(props)
		this.state = {
			currentSlide: 0,
		}
	}

	public handleNext = () => {
		this.setState({ currentSlide: this.state.currentSlide + 1 })
	}

	public handleBack = () => {
		this.setState({ currentSlide: this.state.currentSlide - 1 })
	}

	public render(): React.ReactElement {
		const { currentSlide } = this.state
		const { transitionStyle, useOneSprucebot } = this.props

		const totalSlides = 3

		return (
			<BigForm
				useOneSprucebot={useOneSprucebot}
				currentSlide={currentSlide}
				controls={{
					canGoBack: currentSlide > 0,
					canGoNext: currentSlide < totalSlides - 1,
					onBack: this.handleBack,
					onNext: this.handleNext,
				}}
				transitionStyle={transitionStyle ?? undefined}
			>
				<BigForm.Slide>
					<BigForm.SlideHeader question="What is your first name?" />
					<BigForm.SlideBody
						answerType={'text'}
						placeholder="Your first name..."
					/>
				</BigForm.Slide>
				<BigForm.Slide>
					<BigForm.SlideHeader question="What is your last name?" />
					<BigForm.SlideBody
						answerType={'text'}
						placeholder="Your last name..."
					/>
				</BigForm.Slide>
				<BigForm.Slide>
					<BigForm.SlideHeader question="What is your email?" />
					<BigForm.SlideBody answerType={'text'} placeholder="Your email..." />
				</BigForm.Slide>
			</BigForm>
		)
	}
}

stories.add('BigForm', () => (
	<BigForm
		currentSlide={number('currentSlide', 0)}
		controls={{
			canGoBack: false,
			canGoNext: false,
		}}
		useOneSprucebot={boolean('useOneSprucebot', false)}
		transitionStyle={select(
			'transitionStyle',
			{
				'BigFormTransitionStyle.Stack': BigFormTransitionStyle.Stack,
				'BigFormTransitionStyle.SlideLeft': BigFormTransitionStyle.SlideLeft,
				'BigFormTransitionStyle.SlideUp': BigFormTransitionStyle.SlideUp,
				'BigFormTransitionStyle.Swap': BigFormTransitionStyle.Swap,
			},
			BigFormTransitionStyle.Stack
		)}
	>
		<BigForm.Slide>
			<BigForm.SlideHeader question="What is your first name?" />
			<BigForm.SlideBody answerType={'text'} placeholder="Your first name..." />
		</BigForm.Slide>
		<BigForm.Slide>
			<BigForm.SlideHeader question="What is your last name?" />
			<BigForm.SlideBody answerType={'text'} placeholder="Your last name..." />
		</BigForm.Slide>
		<BigForm.Slide>
			<BigForm.SlideHeader question="What is your email?" />
			<BigForm.SlideBody answerType={'text'} placeholder="Enter your email!" />
		</BigForm.Slide>
	</BigForm>
))

stories.add('With controller', () => (
	<Controller
		useOneSprucebot={boolean('useOneSprucebot', false)}
		transitionStyle={select(
			'transitionStyle',
			{
				'BigFormTransitionStyle.Stack': BigFormTransitionStyle.Stack,
				'BigFormTransitionStyle.SlideLeft': BigFormTransitionStyle.SlideLeft,
				'BigFormTransitionStyle.SlideUp': BigFormTransitionStyle.SlideUp,
				'BigFormTransitionStyle.Swap': BigFormTransitionStyle.Swap,
			},
			BigFormTransitionStyle.Stack
		)}
	/>
))
