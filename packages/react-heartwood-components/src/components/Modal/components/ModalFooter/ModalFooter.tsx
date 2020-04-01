import React from 'react'
import Button from '../../../Button/Button'
import { IButtonProps } from '../../../Button/Button'
import { IHWButtonKinds } from '@sprucelabs/spruce-types'

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
			<Button kind={IHWButtonKinds.Primary} {...primaryAction} />
			{secondaryAction && (
				<Button kind={IHWButtonKinds.Secondary} {...secondaryAction} />
			)}
		</div>
	)
}

ModalFooter.displayName = 'Modal.Footer'
export default ModalFooter
