import React from 'react'
import cx from 'classnames'

export interface ILayoutSectionProps {
	/** The id for the created layout div */
	id?: string

	/** Contents of the Layout Section */
	children?: React.ReactNode | null

	/** Class name for the section */
	className?: string | null

	/** Whether this is a secondary Layout Section */
	isSecondary?: boolean | null
}

const LayoutSection = (props: ILayoutSectionProps) => {
	const { className, isSecondary, children, ...rest } = props

	return (
		<div
			className={cx('layout__section', className, {
				'layout__section--secondary': isSecondary
			})}
			{...rest}
		>
			{children}
		</div>
	)
}

LayoutSection.displayName = 'Layout.Section'
LayoutSection.defaultProps = {
	isSecondary: false
}

export default LayoutSection
