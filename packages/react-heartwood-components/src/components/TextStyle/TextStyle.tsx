import cx from 'classnames'
import React from 'react'

export interface ITextStyleProps {
	/** Contents of the component. */
	children: React.ReactNode

	/** Class name for the component */
	className?: string

	/** Style type */
	type?: 'strong' | 'emphasis' | 'subdued'
}

const TextStyle = (props: ITextStyleProps) => {
	const { children, className, type } = props
	const Element = type === 'strong' ? 'strong' : 'span'
	const classes = cx(className, {
		'text__style--strong': type === 'strong',
		'text__style--emphasis': type === 'emphasis',
		'text__style--subdued': type === 'subdued',
	})
	if (typeof children === 'string') {
		return (
			<Element
				className={classes}
				dangerouslySetInnerHTML={{ __html: children }}
			/>
		)
	}
	return <Element className={classes}>{children}</Element>
}

export default TextStyle
