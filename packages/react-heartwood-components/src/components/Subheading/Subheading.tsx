import React from 'react'
import cx from 'classnames'
import { IHWHeadingWeight } from '@sprucelabs/spruce-types'

export type ISubheadingProps = {
	/** Contents of the component. */
	children: React.ReactNode

	/** Class name for the component */
	className?: string

	/** Wrapping element to use for the subheading */
	element?: IHWHeadingWeight
}

const Subheading = (props: ISubheadingProps) => {
	const { children, className, element } = props
	let Element
	switch (element) {
		case IHWHeadingWeight.H1:
			Element = <h1 />
			break
		case IHWHeadingWeight.H2:
			Element = <h2 />
			break
		case IHWHeadingWeight.H3:
			Element = <h3 />
			break
		case IHWHeadingWeight.H4:
			Element = <h4 />
			break
		case IHWHeadingWeight.H5:
			Element = <h5 />
			break
		case IHWHeadingWeight.H6:
			Element = <h6 />
			break
		case IHWHeadingWeight.P:
		default:
			Element = <p />
			break
	}

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
