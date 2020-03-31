import React from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

export interface IInputPreProps {
	id: string
	label: string
	postLabel?: string
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

export interface IInputInnerProps {
	kind?: string
	iconBefore?: string
	iconAfter?: any
	appendix?: string
	handleClear?: Function
}

export const InputInner = (props: IInputInnerProps) => {
	const { kind, iconBefore, iconAfter, appendix, handleClear, ...rest } = props
	return (
		<div className="text-input__inner">
			{iconBefore && (
				<Icon icon={iconBefore} className={'text-input__icon-pre'} />
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
