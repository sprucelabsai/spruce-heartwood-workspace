import React from 'react'
import cx from 'classnames'

export interface IFormLayoutGroupProps {
	/** Contents of the FormLayoutGroup. Should be FormLayoutItem components */
	children: Node

	/** Class name for the group */
	className?: string

	/** Whether the group item widths can be condensed to fit more items in a row */
	isCondensed?: boolean
}

const FormLayoutGroup = (props: IFormLayoutGroupProps) => {
	const { children, className, isCondensed } = props

	return (
		<div
			className={cx('form-layout__group', className, {
				'form-layout__group--condensed': isCondensed
			})}
		>
			{children}
		</div>
	)
}

FormLayoutGroup.defaultProps = {
	isCondensed: false
}

export default FormLayoutGroup
