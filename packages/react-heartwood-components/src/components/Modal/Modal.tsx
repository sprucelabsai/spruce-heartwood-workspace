import cx from 'classnames'
import React from 'react'
import ReactModal from 'react-modal'
import { default as ModalBody } from './components/ModalBody/ModalBody'
import { default as ModalFooter } from './components/ModalFooter/ModalFooter'
import { default as ModalHeader } from './components/ModalHeader/ModalHeader'

export interface IModalProps extends ReactModal.Props {
	/** Set true to show the modal */
	isOpen: boolean

	/** Should the modal stretch to its maximum height whatever the content? */
	isFullHeight?: boolean

	/** Size of the modal */
	size: 'small' | 'medium' | 'full-width'

	/** Optional class name */
	className?: string
}

interface IModalState {}

export default class Modal extends React.PureComponent<
	IModalProps,
	IModalState
> {
	public static defaultProps = {
		isFullHeight: false,
		size: 'small',
		isOpen: false
	}
	public static Header = ModalHeader
	public static Body = ModalBody
	public static Footer = ModalFooter

	public static setAppElement = (selector: string) => {
		ReactModal.setAppElement(selector)
	}

	public render() {
		const { isOpen, size, isFullHeight, className, ...rest } = this.props
		const modalClassName = cx('modal', className, {
			'modal-small': size === 'small',
			'modal-medium': size === 'medium',
			'modal-full-height': isFullHeight
		})
		return (
			<ReactModal
				isOpen={isOpen}
				overlayClassName="modal-overlay"
				className={modalClassName}
				{...rest}
			/>
		)
	}
}
