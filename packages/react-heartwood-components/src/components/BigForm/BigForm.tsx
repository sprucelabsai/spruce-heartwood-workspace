import {
	definitionChoicesToHash,
	SpruceSchemas,
	buildDuration,
	defaultProps
} from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { ReactElement } from 'react'
import SprucebotTypedMessage from '../SprucebotTypedMessage/SprucebotTypedMessage'
import BigFormControls from './components/BigFormControls'
import BigFormSlide, { BigFormSlidePosition } from './components/BigFormSlide'
import BigFormSlideBody from './components/BigFormSlideBody'
import BigFormSlideHeader, {
	IBigFormSlideHeaderProps
} from './components/BigFormSlideHeader'

export const BigFormTransitionStyle = definitionChoicesToHash(
	SpruceSchemas.Local.BigForm.definition,
	'transitionStyle'
)

interface IBigFormState {
	/** This is what actually drives the
	 * selected slide, delayed from prop
	 * changes to handle positioning before
	 * transition */
	currentSlide: number
}

const defaults = defaultProps(SpruceSchemas.Local.BigForm.definition)

class BigForm extends React.Component<
	SpruceSchemas.Local.IBigForm & typeof defaults,
	IBigFormState
> {
	/** A slide for the form */
	public static Slide = BigFormSlide
	/** The body of a slide */
	public static SlideBody = BigFormSlideBody
	/** The header for a slide (uses sprucebot typed question) */
	public static SlideHeader = BigFormSlideHeader

	public static defaultProps = defaults

	public bigFormRef = React.createRef<HTMLDivElement>()
	public slideRefs: BigFormSlide[] = []
	public theOneSprucebotRef = React.createRef<SprucebotTypedMessage>()

	/** All the header props when usingOneSprucebot */
	public headerProps: IBigFormSlideHeaderProps[] = []

	public constructor(props: SpruceSchemas.Local.IBigForm & typeof defaults) {
		super(props)
		this.state = {
			currentSlide: this.props.currentSlide || 0
		}
	}

	public componentWillMount = () => {
		this.headerProps = this.getHeaderProps()
	}
	public componentDidMount = () => {
		this.jumpToSlide(this.props.currentSlide || 0)
	}

	public componentDidUpdate = (prevProps: SpruceSchemas.Local.IBigForm) => {
		// Update header props
		this.headerProps = this.getHeaderProps()

		// Jump to a slide if current slide has changed OR if we toggle enableOneSprucebot
		if (
			prevProps.currentSlide !== this.props.currentSlide ||
			prevProps.useOneSprucebot !== this.props.useOneSprucebot
		) {
			this.jumpToSlide(this.props.currentSlide || 0)
		}
	}

	public getHeaderProps = () => {
		const headers: IBigFormSlideHeaderProps[] = []

		React.Children.forEach(this.props.children, child => {
			if (child && (child as ReactElement).type === BigFormSlide) {
				React.Children.forEach(
					(child as ReactElement).props.children,
					child => {
						if (child && (child as ReactElement).type === BigFormSlideHeader) {
							headers.push((child as ReactElement).props)
						}
					}
				)
			}
		})

		return headers
	}

	public jumpToSlide = async (destinationSlide: number) => {
		this.bigFormRef.current &&
			this.bigFormRef.current.classList.add('transitioning')

		setTimeout(async () => {
			this.slideRefs.forEach((slideRef, idx) => {
				if (idx === destinationSlide) {
					slideRef.focus({ preventScroll: true })
				} else {
					slideRef.blur()
				}
			})

			if (this.props.useOneSprucebot) {
				const destinationHeaderProps = this.headerProps[destinationSlide]
				if (destinationHeaderProps && this.theOneSprucebotRef.current) {
					await this.theOneSprucebotRef.current.pause()
					await this.theOneSprucebotRef.current.addToTypingQueue({
						words: destinationHeaderProps.question
					})

					this.theOneSprucebotRef.current.play()
				}
			}

			// Give styles a chance to position everything before changing the current index
			this.setState({ currentSlide: destinationSlide }, () => {
				// Let all css transitions finish (1 second max)
				setTimeout(() => {
					this.bigFormRef.current &&
						this.bigFormRef.current.classList.remove('transitioning')
				}, 1000)
			})
		}, 50)
	}

	public handleSubmitSlide = () => {
		this.props.controls?.onNext?.()
	}

	public render(): React.ReactElement {
		const {
			children: childrenProps,
			controls,
			transitionStyle,
			useOneSprucebot
		} = this.props

		const { currentSlide } = this.state

		const children = React.Children.map(childrenProps, (child, idx) => {
			if (child && (child as ReactElement).type === BigFormSlide) {
				let position = BigFormSlidePosition.Present
				if (idx < currentSlide) {
					position = BigFormSlidePosition.Past
				} else if (idx > currentSlide) {
					position = BigFormSlidePosition.Future
				}

				const slideElement = child as ReactElement
				let children = slideElement.props.children

				// If we are using one sprucebot, filter out all header fields
				if (useOneSprucebot) {
					children = []
					React.Children.forEach(slideElement.props.children, child => {
						if (!child || (child as ReactElement).type !== BigFormSlideHeader) {
							children.push(child)
						}
					})
				}

				return React.cloneElement(slideElement, {
					onSubmit: this.handleSubmitSlide,
					children,
					position,
					ref: (ref: BigFormSlide) => (this.slideRefs[idx] = ref)
				})
			}
			return child
		})

		return (
			<div
				className={cx('big-form', transitionStyle, {
					'one-sprucebot': useOneSprucebot
				})}
				ref={this.bigFormRef}
			>
				{children}
				{useOneSprucebot && (
					<div className="the-one-sprucebot">
						<SprucebotTypedMessage
							startDelay={buildDuration({ ms: 0 })}
							ref={this.theOneSprucebotRef}
							id="the-one-sprucebot"
							paused={true}
							size={'medium'}
							defaultAvatar={{
								id: 'the-one-default',
								stateOfMind: 'chill'
							}}
							sentences={[]}
						/>
					</div>
				)}
				<BigFormControls {...controls} />
			</div>
		)
	}
}

export default BigForm
