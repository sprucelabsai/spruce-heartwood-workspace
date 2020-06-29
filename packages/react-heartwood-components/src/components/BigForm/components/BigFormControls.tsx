import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import Button from '../../Button/Button'

const BigFormControls: React.StatelessComponent<SpruceSchemas.Local.IBigFormControls> = (
	props
): React.ReactElement => {
	return (
		<div className={cx('controls-wrapper', {})}>
			<div className="controls">
				<Button
					icon={{ name: 'arrow_back' }}
					isDisabled={!props.canGoBack}
					onClick={props.onBack}
				/>
				<Button
					icon={{ name: 'arrow_forward' }}
					isDisabled={!props.canGoNext}
					onClick={props.onNext}
				/>
			</div>
		</div>
	)
}

export default BigFormControls
