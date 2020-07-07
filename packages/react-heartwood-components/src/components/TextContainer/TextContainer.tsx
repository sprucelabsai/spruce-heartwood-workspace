import cx from 'classnames'
import React from 'react'

export interface ITextContainerProps {
	/** Contents of the component. */
	children: React.ReactNode

	/** Class name for the component */
	className?: string

	/** Vertical spacing of the child components */
	spacing?: 'tight' | 'loose'

	/** Whether the children of the text container are centered */
	isCentered?: boolean
}

const TextContainer = (props: ITextContainerProps) => {
	const { children, className, spacing, isCentered } = props

	return (
		<div
			className={cx('text-container', className, {
				'text-container--centered': isCentered,
				'text-container--spacing-tight': spacing === 'tight',
				'text-container--spacing-loose': spacing === 'loose',
			})}
		>
			{children}
		</div>
	)
}

TextContainer.defaultProps = {
	isCentered: false,
}

export default TextContainer
