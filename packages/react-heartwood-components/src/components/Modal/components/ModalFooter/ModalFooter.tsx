import React from 'react'
import Button from '../../../Button/Button'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

export interface IModalFooterProps {
	/** The primary action in the footer */
	primaryAction: SpruceSchemas.Local.IButton

	/** Optional secondary action */
	secondaryAction?: SpruceSchemas.Local.IButton | null
}

const ModalFooter = (props: IModalFooterProps) => {
	const { primaryAction, secondaryAction } = props
	return (
		<div className="modal-footer">
			<Button kind={'primary'} {...primaryAction} />
			{secondaryAction && <Button kind={'secondary'} {...secondaryAction} />}
		</div>
	)
}

ModalFooter.displayName = 'Modal.Footer'
export default ModalFooter
