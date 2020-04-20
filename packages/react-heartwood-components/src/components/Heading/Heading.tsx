import React from 'react'
import cx from 'classnames'
import {IHeading} from '@sprucelabs/heartwood-skill'

const Heading = (props: IHeading): React.ReactElement => {
	const { text, className, weight, children } = props

	const Element = weight || 'h2'

	return (
		<Element
			className={cx('heading', className)}
			dangerouslySetInnerHTML={text ? { __html: text } : undefined}
		>
			{children}
		</Element>
	)
}

export default Heading
