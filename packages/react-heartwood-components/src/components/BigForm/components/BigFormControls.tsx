import React from 'react'
import cx from 'classnames'
import Button from '../../Button/Button'

export interface IBigFormControlsProps {
	/** Is back button enabled? */
	canGoBack?: boolean

	/** Is next button enabled */
	canGoNext?: boolean

	/** When back is clicked */
	onBack?: () => void

	/** When next is clicked */
	onNext?: () => void
}

const BigFormControls: React.StatelessComponent<IBigFormControlsProps> = (
	props: IBigFormControlsProps
): React.ReactElement => {
	return (
		<div className={cx('controls-wrapper', {})}>
			<div className="controls">
				<Button
					icon={{ name: 'arrow_back' }}
					isDisabled={!props.canGoBack}
					htmlAttributes={{ onClick: props.onBack }}
				/>
				<Button
					icon={{ name: 'arrow_forward' }}
					isDisabled={!props.canGoNext}
					htmlAttributes={{ onClick: props.onNext }}
				/>
			</div>
		</div>
	)
}

export default BigFormControls
