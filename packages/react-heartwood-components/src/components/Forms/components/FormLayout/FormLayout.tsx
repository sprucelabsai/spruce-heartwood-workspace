import React from 'react'
import cx from 'classnames'

export interface IFormLayoutProps {
	/** Contents of the Form Layout. Should be FormLayoutItem or FormLayoutGroup components */
	children?: React.ReactNode

	/** Class name for the layout */
	className?: string

	/** Vertical spacing of the FormLayoutItem components */
	spacing?: 'base' | 'tight'
}

const FormLayout = (props: IFormLayoutProps) => {
	const { children, className, spacing, ...rest } = props

	return (
		<div
			className={cx('form-layout', className, {
				'form-layout--spacing-tight': spacing === 'tight'
			})}
			{...rest}
		>
			{children}
		</div>
	)
}

FormLayout.defaultProps = {
	spacing: 'base'
}

export default FormLayout
