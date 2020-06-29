import cx from 'classnames'
import React from 'react'

export interface IModalBodyProps {
	/** Modal children */
	children: React.ReactNode

	/** Optional class name */
	className?: string

	/** Should the content go to the edge of the modal body? */
	fullBleed?: boolean

	/** Optional height of body */
	height?: string
}

const ModalBody = (props: IModalBodyProps) => (
	<div
		className={cx(
			'modal-body',
			{
				'modal-body--full-bleed': props.fullBleed
			},
			props.className
		)}
		style={{ ...(props.height ? { height: props.height } : {}) }}
	>
		{props.children}
	</div>
)

ModalBody.displayName = 'Modal.Body'
export default ModalBody
