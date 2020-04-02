import React from 'react'
import Button, { ButtonOnClick } from '../Button/Button'
import Icon from '../Icon/Icon'

export interface IInputPreProps {
	id: string
	label: string
	postLabel?: string | React.ReactNode
}

export const InputPre = (props: IInputPreProps) => {
	const { id, label, postLabel } = props
	return (
		<div className="text-input__pre">
			<label htmlFor={id} className="text-input__label">
				{label}
			</label>
			{postLabel && <span className="text-input__post-label">{postLabel}</span>}
		</div>
	)
}

export interface IInputInnerProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	kind?: string
	iconBefore?: string
	iconAfter?: any
	appendix?: string
	handleClear?: ButtonOnClick
	/** The input value */
	value?: string | number
	name?: string
	/** When the value changes */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputInner = (props: IInputInnerProps) => {
	const { kind, iconBefore, iconAfter, appendix, handleClear, ...rest } = props
	return (
		<div className="text-input__inner">
			{iconBefore && (
				<Icon name={iconBefore} className={'text-input__icon-pre'} />
			)}
			{kind === 'credit-card' && <p>CC</p>}
			<input className="text-input__input" {...rest} />
			{appendix && <p className="text-input__appendix">{appendix}</p>}
			{iconAfter && (
				<Button
					onClick={handleClear}
					className="text-input__clear-btn"
					icon={iconAfter}
				/>
			)}
		</div>
	)
}

export interface IInputHelperProps {
	error?: string
	helper?: any
}

export const InputHelper = (props: IInputHelperProps) => {
	const { error, helper } = props
	return <p className="text-input__helper"> {error || helper}</p>
}
