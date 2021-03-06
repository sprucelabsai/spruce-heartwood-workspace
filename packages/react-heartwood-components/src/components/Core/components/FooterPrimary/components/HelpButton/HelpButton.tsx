import React from 'react'
import HelpIcon from '../../../../../../../static/assets/icons/Interface-Essential/Help/question-help-square--16w.svg'

interface IHelpButtonProps {
	/** Class for the button */
	className: string

	/** Class for the icon */
	iconClassName: string

	/** Class for the text */
	textClassName: string
}

const HelpButton = (props: IHelpButtonProps) => {
	const { className, iconClassName, textClassName } = props
	return (
		<a className={className} href="#" target="_blank" rel="noopener noreferrer">
			<HelpIcon className={iconClassName} />
			<span className={textClassName}>Help</span>
		</a>
	)
}

export default HelpButton
