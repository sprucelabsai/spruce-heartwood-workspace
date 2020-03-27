import React, { Component } from 'react'
import cx from 'classnames'
import { InputInner } from '../../FormPartials'

interface ISearchState {
	value: string
}

interface ISearchProps {
	/** Parent class */
	className: string

	/** Default input value */
	defaultValue?: string

	/** Set true to make the input less tall */
	isSmall?: boolean
}

export default class Search extends Component<ISearchProps, ISearchState> {
	state = {
		value: this.props.defaultValue || ''
	}

	handleChange = (e: any) => {
		const value = e.target.value
		this.setState({
			value
		})
	}

	handleClear = () => {
		this.setState({
			value: ''
		})
	}

	render() {
		const { className, isSmall, ...rest } = this.props
		const { value } = this.state
		return (
			<div
				className={cx('text-input', className, { 'text-input-small': isSmall })}
			>
				<InputInner
					iconBefore="search"
					iconAfter={value && value.length > 0 && 'cancel'}
					onChange={this.handleChange}
					value={value}
					handleClear={this.handleClear}
					{...rest}
				/>
			</div>
		)
	}
}
