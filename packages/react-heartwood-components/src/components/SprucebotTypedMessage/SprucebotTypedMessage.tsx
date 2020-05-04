import React, { Component } from 'react'
import Typing from './react-typing-animation/Typing'

import cx from 'classnames'
import compact from 'lodash/compact'

import SprucebotAvatar from '../SprucebotAvatar/SprucebotAvatar'
import {
	SpruceSchemas,
	defaultProps,
	definitionChoicesToHash
} from '@sprucelabs/heartwood-skill'

type Message = SpruceSchemas.Local.ISprucebotTypedMessage
type Sentence = SpruceSchemas.Local.ISprucebotTypedMessageSentence

export interface ISprucebotTypedMessageState {
	sentenceIdxBeingTyped: number
	lastLineNum: number
	sentenceQueue: Sentence[]
}

const SIZE_MAP = definitionChoicesToHash(
	SpruceSchemas.Local.SprucebotTypedMessage.definition,
	'size'
)

const defaults = defaultProps(
	SpruceSchemas.Local.SprucebotTypedMessage.definition
)

export default class SprucebotTypedMessage extends Component<
	Message,
	ISprucebotTypedMessageState
> {
	public static defaultProps = defaults

	public typingRef = React.createRef<Typing>()

	public constructor(props: Message & typeof defaults) {
		super(props)
		this.state = {
			sentenceIdxBeingTyped: 0,
			lastLineNum: 0,
			sentenceQueue: []
		}
	}

	public addToTypingQueue = async (sentence: Sentence) => {
		if (this.typingRef.current) {
			const { sentences } = this.props
			const { sentenceQueue } = this.state

			// Add sentence to the queue and re-render of children of Typing
			this.setState({ sentenceQueue: [...sentenceQueue, sentence] })

			// Need to calculate delete count or reset
			const all = [...sentences, ...sentenceQueue]
			const last = all.pop()

			let words = sentence.words
			const toAdd: React.ReactNode[] = []

			if (last) {
				const firstUniqueIdx = this.findFirstUniqueCharacter(
					last.words,
					sentence.words
				)

				const howManyToDelete = last.words.length - firstUniqueIdx

				if (firstUniqueIdx === -1) {
					words = words.substr(last.words.length)
				} else if (howManyToDelete < last.words.length) {
					toAdd.push(
						<Typing.Backspace key={`added-backspace`} count={howManyToDelete} />
					)

					words = words.substr(firstUniqueIdx)
				} else {
					toAdd.push(<Typing.Reset key={`added-reset`} />)
				}
			}

			if (words.length > 0) {
				toAdd.push(words)
			}

			return this.typingRef.current.addToTypingQueue(toAdd)
		}
	}

	public componentDidUpdate = prevProps => {
		// If paused prop changed at all, it wins (calling play manually starts it again)
		if (prevProps.paused !== this.props.paused) {
			switch (this.props.paused) {
				case true:
					this.pause()
					break
				default:
					this.play()
			}
		}
	}

	public pause = async () => {
		return this.typingRef.current && this.typingRef.current.pause()
	}

	public play = async () => {
		return this.typingRef.current && this.typingRef.current.play()
	}

	public reset = async () => {
		return this.typingRef.current && this.typingRef.current.reset()
	}

	public findFirstUniqueCharacter = (words1: string, words2: string) => {
		for (let i = 0; i < words1.length; i++) {
			if (words1[i] !== words2[i]) {
				return i
			}
		}
		return -1
	}

	public buildMarkup = () => {
		const { sentences, startDelay, loop } = this.props
		const { sentenceQueue } = this.state
		const elements: React.ReactNode[] = []

		if (startDelay && startDelay?.ms > 0) {
			elements.push(<Typing.Delay ms={startDelay.ms} key={'start-delay'} />)
		}

		let lastSentence:
			| SpruceSchemas.Local.ISprucebotTypedMessageSentence
			| undefined
		;[...sentences, ...sentenceQueue].forEach((sentence, idx) => {
			let startCharacterIdx = 0

			// Delete the last words
			if (lastSentence) {
				const firstUniqueIdx = this.findFirstUniqueCharacter(
					sentence.words,
					lastSentence.words
				)

				// How far back should we delete to start typing the next sentence?
				const howManyToDelete = lastSentence.words.length - firstUniqueIdx

				// The next sentence was additive so only add the characters that are new
				if (firstUniqueIdx === -1) {
					startCharacterIdx = lastSentence.words.length
				} else if (howManyToDelete === lastSentence.words.length) {
					// If we are deleting the whole thing, just clear the line entirely
					elements.push(
						<Typing.Reset
							key={`reset-${idx}`}
							delay={lastSentence.endDelay?.ms}
						/>
					)
				} else {
					startCharacterIdx = firstUniqueIdx

					elements.push(
						<Typing.Backspace
							key={`backspace-${idx}`}
							delay={lastSentence.endDelay?.ms}
							count={howManyToDelete}
						/>
					)
				}
			}

			elements.push(sentence.words.substr(startCharacterIdx))
			lastSentence = sentence
		})

		if (loop && lastSentence) {
			elements.push(
				<Typing.Backspace
					key={`last-backspace`}
					delay={lastSentence.endDelay?.ms}
					count={lastSentence.words.length}
				/>
			)
			elements.push(<Typing.Reset key="final-reset" />)
		}

		return elements
	}

	public buildAvatar = (): SpruceSchemas.Local.ISprucebotAvatar | undefined => {
		const { defaultAvatar, size, sentences } = this.props
		const { sentenceIdxBeingTyped } = this.state

		let avatar

		if (defaultAvatar) {
			avatar = {
				size: size && SIZE_MAP[size],
				...defaultAvatar
			}
		}

		// If this test
		if (
			sentences[sentenceIdxBeingTyped] &&
			sentences[sentenceIdxBeingTyped].avatar
		) {
			avatar = {
				...(avatar || {}),
				...sentences[sentenceIdxBeingTyped].avatar
			}
		}

		return avatar
	}

	public handleTyping = (text?: string[]) => {
		if (!Array.isArray(text)) {
			return
		}
		// To track when the animation has started the next sentence, we need to check when text has a different amonut of elements
		const { sentenceIdxBeingTyped, lastLineNum } = this.state
		const { sentences } = this.props
		const line = compact(text).length - 1

		if (line < 0) {
			this.setState({ lastLineNum: -1 })
			return
		}

		if (lastLineNum !== line) {
			const newIdx =
				sentenceIdxBeingTyped < sentences.length - 1
					? sentenceIdxBeingTyped + 1
					: 0
			this.setState({
				lastLineNum: line,
				sentenceIdxBeingTyped: newIdx
			})
		}
	}

	public render() {
		const { size, loop, paused } = this.props
		const avatar = this.buildAvatar()

		return (
			<div
				className={cx('sprucebot-typed-message', {
					small: size === 'small',
					medium: size === 'medium',
					large: size === 'large'
				})}
			>
				{avatar && <SprucebotAvatar {...avatar} />}
				<Typing
					ref={this.typingRef}
					className="typing"
					speed={10}
					loop={loop}
					onAfterType={this.handleTyping}
					beginTypingOnMount={!paused}
				>
					{this.buildMarkup()}
				</Typing>
			</div>
		)
	}
}
