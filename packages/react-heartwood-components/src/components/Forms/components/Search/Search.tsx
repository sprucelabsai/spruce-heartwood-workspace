import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Component } from 'react'
import TextInput from '../TextInput/TextInput'

interface ISearchState {
	value: string
}

const defaults = defaultProps(SpruceSchemas.Local.Search.definition)

export default class Search extends Component<
	SpruceSchemas.Local.ISearch & typeof defaults,
	ISearchState
> {
	public static defaultProps = defaults

	public state = {
		value: this.props.value || ''
	}

	public handleChange = (e: any) => {
		const value = e.target.value
		this.setState({
			value
		})
	}

	public handleClear = () => {
		this.setState({
			value: ''
		})
	}

	public render() {
		const { className, isSmall, type, ...rest } = this.props
		const { value } = this.state
		return (
			<div
				className={cx('text-input', className, { 'text-input-small': isSmall })}
			>
				<TextInput
					iconBefore={{ name: 'search' }}
					clearButton={{
						icon:
							(value && value.length > 0 && { name: 'cancel' }) || undefined,
						onClick: this.handleClear
					}}
					onChange={this.handleChange}
					value={value}
					type={type}
					{...rest}
				/>
			</div>
		)
	}
}
