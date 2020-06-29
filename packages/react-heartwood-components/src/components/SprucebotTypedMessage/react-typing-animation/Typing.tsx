import requestAnimationFrame from 'raf'
import React, { Component } from 'react'
import { default as Backspace } from './Backspace'
import { default as Cursor } from './Cursor'
import { default as Delay } from './Delay'
import { default as Reset } from './Reset'
import { default as Speed } from './Speed'
import { randomize, extractText, replaceTreeText } from './utils'

export enum Step {
	Line = 'line',
	Char = 'char'
}

export interface ICursor {
	lineNum: number
	charPos: number
	numToErase: number
	preEraseLineNum: number
	delay: number
	speed: number
	step: Step
}
interface IProps {
	children: React.ReactNode
	className?: string
	cursor?: React.ReactNode
	cursorClassName?: string
	speed?: number
	startDelay?: number
	loop?: boolean | null
	beginTypingOnMount?: boolean
	hideCursor?: boolean
	onStartedTyping?: () => void
	onPausedTyping?: () => void
	onBeforeType?: (text?: string[], cursor?: ICursor) => void
	onAfterType?: (text?: string[], cursor?: ICursor) => void
	onFinishedTyping?: () => void
}

interface IState {
	isFinished: boolean
	text: string[]
	toType: any[]
	cursor: ICursor
}

class Typing extends Component<IProps, IState> {
	public static defaultProps = {
		className: '',
		cursorClassName: '',
		speed: 50,
		startDelay: 0,
		loop: false,
		beginTypingOnMount: true,
		onStartedTyping: () => {},
		onPausedTyping: () => {},
		onBeforeType: () => {},
		onAfterType: () => {},
		onFinishedTyping: () => {}
	}

	public static Backspace = Backspace
	public static Reset = Reset
	public static Delay = Delay
	public static Speed = Speed
	public static Cursor = Cursor

	public hasMounted = false
	public isPaused = true
	/** Was play hit too soon */
	public pendingPlay = false

	public constructor(props: IProps) {
		super(props)
		this.state = {
			isFinished: false,
			text: [],
			toType: [],
			cursor: {
				lineNum: 0,
				charPos: 0,
				numToErase: 0,
				preEraseLineNum: 0,
				delay: Typing.defaultProps.startDelay,
				speed: Typing.defaultProps.speed,
				step: Step.Char
			}
		}
	}

	public componentDidMount() {
		this.hasMounted = true
		this.resetState().then(async () => {
			if (this.props.beginTypingOnMount || this.pendingPlay) {
				this.play()
			}
		})
	}

	public componentWillUnmount() {
		this.hasMounted = false
	}

	public updateState = async state => {
		if (!this.hasMounted) {
			return
		}
		return new Promise(resolve => {
			this.setState(state, resolve)
		})
	}

	public play = async () => {
		if (!this.hasMounted) {
			this.pendingPlay = true
			return
		}

		if (this.isPaused || this.state.isFinished) {
			this.isPaused = false
			if (this.props.onStartedTyping) {
				await this.props.onStartedTyping()
			}
			requestAnimationFrame(this.beginTyping)
		}
	}

	public pause = () => {
		if (!this.isPaused) {
			this.isPaused = true
			if (this.props.onPausedTyping) {
				this.props.onPausedTyping()
			}
		}
	}

	public addToTypingQueue = async lines => {
		const { toType } = this.state
		const newToType = [...toType, ...lines]
		return this.updateState({ toType: newToType, isFinished: false })
	}

	public reset = async () => {
		const wasPaused = this.isPaused

		const { text } = this.state

		// Nothing to reset
		if (text.length === 0) {
			return
		}

		this.isPaused = true
		await this.updateState({ text: [] })

		// Give pause time to hit if a timeout as pending
		return new Promise(resolve => {
			setTimeout(async () => {
				await this.resetState()
				if (!wasPaused) {
					await this.play()
				}
				resolve()
			}, 100)
		})
	}

	public resetState = async () =>
		this.updateState({
			toType: extractText(this.props.children),
			cursor: {
				lineNum: 0,
				charPos: 0,
				numToErase: 0,
				preEraseLineNum: 0,
				delay: this.props.startDelay,
				speed: this.props.speed,
				step: 'char'
			}
		})

	public beginTyping = async () => {
		if (this.isPaused) {
			return
		}
		const cursor = { ...this.state.cursor }

		if (this.state.toType.length > 0 || cursor.numToErase > 0) {
			await this.handleBeforeType(this.state.text, this.state.cursor)
			await this.type()
			await this.handleAfterType(this.state.text, this.state.cursor)
		} else {
			await this.handleFinishedTyping()

			if (this.props.loop) {
				await this.resetState()
			} else {
				// Pause when done
				this.isPaused = true
				return this.updateState({ isFinished: true })
			}
		}

		if (this.hasMounted) {
			return this.beginTyping()
		}
	}

	public type = async () => {
		const toType = [...this.state.toType]
		let cursor = { ...this.state.cursor }

		while (
			toType &&
			toType[0] &&
			toType[0].type &&
			toType[0].type.updateCursor &&
			cursor.numToErase < 1
		) {
			cursor = toType[0].type.updateCursor(cursor, toType[0].props)
			toType.shift()
		}

		await this.updateState({ cursor, toType })

		return this.animateNextStep()
	}

	public animateNextStep = async () => {
		if (this.isPaused) {
			return
		}

		return new Promise(resolve => {
			setTimeout(async () => {
				if (this.isPaused) {
					return
				}

				const { cursor, toType } = this.state

				await this.updateState({ cursor: { ...cursor, delay: 0 } })

				if (cursor.step === 'char' && cursor.numToErase < 1) {
					if (toType.length > 0) {
						await this.typeCharacter()
					}
				} else {
					await this.erase()
				}

				resolve()
			}, this.state.cursor.delay)
		})
	}

	public typeCharacter = async () => {
		if (this.isPaused) {
			return
		}
		return new Promise(async resolve => {
			const toType = [...this.state.toType]
			const text = [...this.state.text]
			const cursor = { ...this.state.cursor }

			if (text.length - 1 < cursor.lineNum) {
				text[cursor.lineNum] = ''
			}

			text[cursor.lineNum] += toType[0][cursor.charPos]
			cursor.charPos += 1

			if (toType[0].length - 1 < cursor.charPos) {
				cursor.lineNum += 1
				cursor.charPos = 0
				toType.shift()
			}

			await this.updateState({ cursor, text, toType })

			setTimeout(resolve, randomize(cursor.speed))
		})
	}

	public erase = async () => {
		if (this.isPaused) {
			return
		}
		return new Promise(async resolve => {
			const text = [...this.state.text]
			const cursor = { ...this.state.cursor }

			while (cursor.lineNum > text.length - 1 || cursor.charPos < 0) {
				cursor.lineNum -= 1

				if (cursor.lineNum < 0) {
					break
				}

				cursor.charPos =
					text[cursor.lineNum] && text[cursor.lineNum].length
						? text[cursor.lineNum].length - 1
						: 0
			}
			if (cursor.step === 'char' && cursor.lineNum >= 0) {
				text[cursor.lineNum] = text[cursor.lineNum].substr(
					0,
					text[cursor.lineNum].length - 1
				)

				cursor.charPos -= 1
				cursor.numToErase -= 1

				if (cursor.numToErase < 1) {
					cursor.lineNum = cursor.preEraseLineNum
					cursor.charPos = 0
					cursor.step = Step.Char
				}
			} else if (cursor.step === 'line' && cursor.numToErase > 0) {
				text[cursor.lineNum] = ''
				cursor.lineNum -= 1
				cursor.numToErase -= 1
				cursor.charPos = 0
				cursor.step = Step.Char
			} else if (cursor.step === 'line') {
				cursor.lineNum = 0
				cursor.charPos = 0
				cursor.numToErase = 0
				cursor.step = Step.Char
				text.length = 0
			}

			await this.updateState({ cursor, text })

			setTimeout(resolve, randomize(cursor.speed))
		})
	}

	public render() {
		const { children, className, cursorClassName, hideCursor } = this.props

		const { text, isFinished } = this.state

		const cursor = this.props.cursor || <Cursor className={cursorClassName} />

		const filled = replaceTreeText(
			children,
			text,
			cursor,
			hideCursor || isFinished
		)

		return <div className={className}>{filled}</div>
	}

	private handleBeforeType(text?: string[], cursor?: ICursor) {
		if (this.props.onBeforeType) {
			this.props.onBeforeType(text, cursor)
		}
	}

	private handleAfterType(text?: string[], cursor?: ICursor) {
		if (this.props.onAfterType) {
			this.props.onAfterType(text, cursor)
		}
	}

	private handleFinishedTyping() {
		if (this.props.onFinishedTyping) {
			this.props.onFinishedTyping()
		}
	}
}

export default Typing
