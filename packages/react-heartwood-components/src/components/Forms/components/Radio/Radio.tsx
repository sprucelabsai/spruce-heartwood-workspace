import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import RadioIconYes from '../../../../../static/assets/icons/ic_radio_button_checked.svg'
import RadioIconNo from '../../../../../static/assets/icons/ic_radio_button_unchecked.svg'

const Radio = (props: SpruceSchemas.Local.IRadio): React.ReactElement => {
	const {
		className,
		id,
		isChecked,
		isDisabled,
		label,
		name,
		onChange,
		helper,
	} = props
	const parentClass = cx('checkbox-item', className)
	return (
		<div className={parentClass}>
			<div className="checkbox-item__inner">
				<input
					checked={isChecked || false}
					className="checkbox-item__input"
					disabled={isDisabled || false}
					id={id ?? undefined}
					name={name || undefined}
					onChange={(...args) => {
						if (onChange) {
							onChange(...args)
						}
					}}
					type="radio"
				/>
				{label && (
					<label className="checkbox-item__label" htmlFor={id ?? undefined}>
						{label.text}
					</label>
				)}
				<div className="checkbox-item__icons">
					<RadioIconYes className="checkbox-item__icon checkbox-item__icon-yes" />
					<RadioIconNo className="checkbox-item__icon checkbox-item__icon-no" />
				</div>
			</div>
			{helper && (
				<p className="checkbox-item__post-text">
					{helper.error || helper.hint}
				</p>
			)}
		</div>
	)
}

export default Radio
