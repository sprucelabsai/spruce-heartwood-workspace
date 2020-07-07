import cx from 'classnames'
import React from 'react'
import { TextInput } from '../../Forms'

export interface IBigFormSlideBodyProps {
	/** What type of question are you asking */
	answerType: string

	/** Any other children you want passed through */
	children?: React.ReactNode

	/** What i the placeholder on the input */
	placeholder?: string

	/** Called when trying to submit a step (probably hitting return on an input) */
	onSubmit?: <T>(value: T | null) => void
}

class BigFormSlideBody extends React.Component<IBigFormSlideBodyProps> {
	public inputRef = React.createRef<TextInput & HTMLInputElement>()

	public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const value = this.inputRef.current && this.inputRef.current.value
		this.props.onSubmit && this.props.onSubmit(value)
	}

	public focus = (options?: FocusOptions) => {
		this.inputRef.current && this.inputRef.current.focus(options)
	}

	public blur = () => {}

	public render(): React.ReactElement {
		const { children, answerType, placeholder } = this.props
		let input

		switch (answerType) {
			case 'text':
				input = (
					<TextInput id="input" placeholder={placeholder} ref={this.inputRef} />
				)
				break
		}

		return (
			<div className={cx('slide-body')}>
				{children}
				{input && (
					<form onSubmit={this.handleSubmit} className={'input-wrapper'}>
						{input}
					</form>
				)}
			</div>
		)
	}
}

export default BigFormSlideBody
