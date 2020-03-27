import React from 'react'
import cx from 'classnames'
import { IHWHeadingWeight } from '@sprucelabs/spruce-types'

export type ISubheadingProps = {
	/** Contents of the component. */
	children: Node

	/** Class name for the component */
	className?: string

	/** Wrapping element to use for the subheading */
	element?: IHWHeadingWeight
}

const Subheading = (props: ISubheadingProps) => {
	const { children, className, element: Element } = props
	if (typeof children === 'string') {
		return (
			<Element
				className={cx('subheading', className)}
				dangerouslySetInnerHTML={{ __html: children }}
			/>
		)
	}
	return <Element className={cx('subheading', className)}>{children}</Element>
}

Subheading.defaultProps = {
	element: 'h2'
}

export default Subheading
