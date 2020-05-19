import React from 'react'
import cx from 'classnames'
import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'

const defaults = {} // DefaultProps(SpruceSchemas.Local.Heading.definition)

const Heading = (props: SpruceSchemas.Local.IHeading): React.ReactElement => {
	const { text, className, weight, children } = props

	const Element = weight || 'h1'

	return (
		<Element
			className={cx('heading', className)}
			dangerouslySetInnerHTML={text ? { __html: text } : undefined}
		>
			{children}
		</Element>
	)
}

Heading.defaultProps = defaults

export default Heading
