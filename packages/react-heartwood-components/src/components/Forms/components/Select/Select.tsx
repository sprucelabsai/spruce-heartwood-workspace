import React from 'react'
import cx from 'classnames'
import ArrowIcon from '../../../../../static/assets/icons/ic_arrow_drop_down.svg'
import { SpruceSchemas, stripNulls } from '@sprucelabs/heartwood-skill'
import Label from '../Label/Label'
import InputHelper from '../InputHelper/InputHelper'

const Select = (props: SpruceSchemas.Local.ISelect) => {
	const {
		options = {},
		isSimple,
		className,
		label,
		placeholder,
		helper,
		...rest
	} = stripNulls(props)
	const parentClass = cx('select text-input__inner', className, {
		'select-simple': isSimple,
		'select--has-error': helper?.error
	})

	let defaultSelectProps = {}
	let defaultOptionProps = {}

	// For uncontrolled Select, we'll create a default value for the placeholder.
	// For controlled Select, we'll require that the value be defaulted to
	//   empty-string in order to set the placeholder.
	if (!props.value) {
		defaultSelectProps = { defaultValue: '__DEFAULT' }
		defaultOptionProps = { value: '__DEFAULT' }
	} else {
		defaultOptionProps = { value: '' }
	}

	return (
		<div className="select-wrapper">
			{label && <Label {...label} />}
			<div className={parentClass}>
				<select {...defaultSelectProps} {...rest}>
					{placeholder && (
						<option {...defaultOptionProps} key="placeholder" disabled>
							{placeholder}
						</option>
					)}
					{Object.keys(options).map(key => (
						<option value={key} key={`${key}`}>
							{options[key]}
						</option>
					))}
				</select>
				{!isSimple && <ArrowIcon className="select__icon" />}
			</div>
			{helper && <InputHelper {...helper} />}
		</div>
	)
}

export default Select
