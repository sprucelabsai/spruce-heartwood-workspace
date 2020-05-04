import React, { Component } from 'react'
import ReactPhoneInput from 'react-phone-number-input'
import cx from 'classnames'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import Label from '../Label/Label'
import InputHelper from '../InputHelper/InputHelper'

// For validating and formatting
export {
	formatPhoneNumber,
	formatPhoneNumberIntl
} from 'react-phone-number-input'

// This is a barebones copy of react-phone-number-input's method API:
// https://github.com/catamphetamine/react-phone-number-input#validation
export const isValidPhoneNumber = (phoneNumber: string): boolean => {
	return !!phoneNumber.replace(/[^a-z0-9+]/gi, '').match(/^\+1[\d]{10}$/)
}

interface IPhoneInputState {
	phone: string
	error: string
}

export default class PhoneInput extends Component<
	SpruceSchemas.Local.IPhoneInput,
	IPhoneInputState
> {
	public constructor(props) {
		super(props)

		this.state = {
			phone: props.defaultValue || '',
			error: ''
		}
	}

	public handleChange = (phoneNumber: string) => {
		this.setState({
			phone: phoneNumber
		})
	}

	public render(): React.ReactElement {
		const { phone } = this.state
		const { label, isSmall, helper } = this.props

		return (
			<div
				className={cx('text-input', {
					'text-input--has-error': !!helper?.error,
					'text-input-small': isSmall
				})}
			>
				<Label {...label} />

				<ReactPhoneInput
					inputClassName="text-input__input"
					value={phone}
					countries={['US']}
					country="US"
					labels={{ US: 'United States' }}
					onChange={this.handleChange}
					international={false}
				/>

				{helper && <InputHelper {...helper} />}
			</div>
		)
	}
}
