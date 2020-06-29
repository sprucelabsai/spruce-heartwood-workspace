import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import Button from '../Button/Button'

const ToastHeader = (
	props: SpruceSchemas.Local.IToastHeader
): React.ReactElement => {
	const { headline, onClickDismiss } = props
	return (
		<div className="toast__header">
			<p>{headline}</p>
			{onClickDismiss && (
				<Button icon={{ name: 'close' }} onClick={onClickDismiss} />
			)}
		</div>
	)
}

const Toast = (props: SpruceSchemas.Local.IToast): React.ReactElement => {
	const {
		headline,
		onClickDismiss,
		kind,
		text,
		onClickFollowup,
		followupText
	} = props

	const toastClass = cx('toast', {
		'toast-positive': kind === 'positive',
		'toast-negative': kind === 'negative',
		'toast-warn': kind === 'warn',
		'toast-info': kind === 'info'
	})
	return (
		<div className={toastClass}>
			<ToastHeader headline={headline} onClickDismiss={onClickDismiss} />
			{text && (
				<div className="toast__body">
					<p>{text}</p>
				</div>
			)}
			{followupText && onClickFollowup && (
				<Button text={followupText} onClick={onClickFollowup} />
			)}
		</div>
	)
}

Toast.defaultProps = defaultProps(SpruceSchemas.Local.Toast.definition)

export default Toast
