import React from 'react'
import Button from '../../../Button/Button'
import { IButtonProps } from '../../../Button/Button'

export interface IModalFooterProps {
	/** The primary action in the footer */
	primaryAction: IButtonProps

	/** Optional secondary action */
	secondaryAction?: IButtonProps
}

const ModalFooter = (props: IModalFooterProps) => {
	const { primaryAction, secondaryAction } = props
	return (
		<div className="modal-footer">
			<Button kind="primary" {...primaryAction} />
			{secondaryAction && <Button kind="secondary" {...secondaryAction} />}
		</div>
	)
}

ModalFooter.displayName = 'Modal.Footer'
export default ModalFooter
