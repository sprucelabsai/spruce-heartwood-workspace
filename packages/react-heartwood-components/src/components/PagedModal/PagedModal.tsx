import * as React from 'react'
import cx from 'classnames'
import Modal from '../Modal/Modal'

import { IModalProps } from '../Modal/Modal'
import { IButtonProps } from '../Button/Button'

interface IModalPageProps {
	/** The title for this page */
	title: string

	/** The modal body for this page */
	body: React.ReactNode

	/** The modal footer primary action for this page */
	footerPrimaryAction?: IButtonProps

	/** The modal footer secondary action for this page */
	footerSecondaryAction?: IButtonProps

	/** Whether this page is currently visible */
	isCurrent: boolean
}

interface IPageModalProps extends IModalProps {
	/** Callback to close the modal */
	onRequestClose: Function

	/** Whether the back button should be displayed */
	canGoBack: boolean

	/** Function to handle navigating backwards in the modal */
	onClickBack?: Function

	/** Set true to show the modal */
	pages: Array<IModalPageProps>
}

export default class PagedModal extends React.PureComponent<IPageModalProps> {
	public static defaultProps = {
		size: 'medium'
	}

	public render() {
		const {
			isOpen,
			isFullHeight,
			size,
			pages,
			onRequestClose,
			canGoBack,
			onClickBack
		} = this.props

		const currentPage = pages.find(page => page.isCurrent)

		return (
			<Modal
				isOpen={isOpen}
				size={size}
				isFullHeight={isFullHeight}
				className="paged-modal"
			>
				<Modal.Header
					title={(currentPage && currentPage.title) || ''}
					onRequestClose={onRequestClose}
					onClickBack={canGoBack && onClickBack}
					isPaginated
				/>
				{pages.map((page, idx) => (
					<Modal.Body
						key={`${idx}`}
						className={cx('paged-modal__page', {
							'paged-modal__page--is-current': page.isCurrent
						})}
					>
						{page.body}
					</Modal.Body>
				))}
				{currentPage && currentPage.footerPrimaryAction && (
					<Modal.Footer
						primaryAction={currentPage.footerPrimaryAction}
						secondaryAction={currentPage.footerSecondaryAction}
					/>
				)}
			</Modal>
		)
	}
}
