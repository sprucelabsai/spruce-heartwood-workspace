import React from 'react'
import cx from 'classnames'
import Button from '../Button/Button'
import Text, { Span } from '../Text/Text'
import ArrowNext from '../../../static/assets/icons/ic_arrow_forward.svg'
import ArrowBack from '../../../static/assets/icons/ic_arrow_back.svg'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import { TextInput } from '../Forms'

export interface IPaginationProps {
	/** The current page */
	currentPage: number

	/** Total pages */
	totalPages: number

	/** Go forward one page */
	onClickNext: () => void

	/** Go back one page */
	onClickBack: () => void

	/** Navigate to the clicked/tapped page */
	onPageButtonClick?: (page: number) => void

	/** Navigate through the jump input */
	onJump?: (page: number) => void

	/** Set true to display pages between arrows */
	showPages?: boolean

	/** Set true to show the jump input */
	showJump?: boolean

	/** Set true to use simple buttons */
	isSimple?: boolean
}

type DisplayPageText = { text: string }
type DisplayPage = number | DisplayPageText

const Pagination = (props: IPaginationProps) => {
	const {
		currentPage,
		totalPages,
		showPages,
		showJump,
		onClickNext,
		onClickBack,
		onPageButtonClick,
		onJump,
		isSimple
	} = props
	const pagesArray: number[] = []
	let displayPages: DisplayPage[] = []
	for (let i = 0; i < totalPages; i++) {
		pagesArray.push(i)
	}
	if (currentPage <= 2 || totalPages - currentPage <= 2) {
		displayPages = pagesArray.filter(
			page =>
				page === 0 ||
				page === 1 ||
				page === 2 ||
				page === totalPages - 1 ||
				page === totalPages - 2 ||
				page === totalPages - 3 ||
				page === currentPage
		)
		if (totalPages > 6) {
			displayPages.splice(3, 0, { text: '…' })
		}
	} else {
		displayPages = pagesArray.filter(
			page =>
				page === 0 ||
				page === totalPages - 1 ||
				page === currentPage ||
				page === currentPage + 1 ||
				page === currentPage - 1
		)
		displayPages.splice(1, 0, { text: '…' })
		displayPages.splice(displayPages.length - 1, 0, { text: '…' })
	}

	const kind: SpruceSchemas.Local.IButton['kind'] = isSimple
		? 'simple'
		: 'secondary'

	return (
		<div
			className={cx('pagination-wrapper', {
				'pagination-wrapper-minimal': !showPages
			})}
		>
			<Button
				kind={kind}
				onClick={onClickBack}
				isSmall
				className="pagination__btn"
				icon={{ customIcon: ArrowBack }}
				isDisabled={currentPage === 0}
			/>
			{showPages &&
				onPageButtonClick &&
				displayPages.map((page, idx) => {
					if ((page as DisplayPageText).text === '…') {
						return (
							<Text key={idx} className="pagination__page-ellipse">
								<Span>…</Span>
							</Text>
						)
					}
					return (
						<Button
							key={idx}
							onClick={() => onPageButtonClick(page as number)}
							kind={currentPage === page ? 'simple' : undefined}
							text={((page as number) + 1).toString()}
							isSmall
							className="pagination__page-btn"
						/>
					)
				})}
			<Button
				kind={kind}
				onClick={onClickNext}
				isSmall
				className="pagination__btn"
				icon={{ customIcon: ArrowNext }}
				isDisabled={currentPage >= totalPages - 1}
			/>
			{showJump && onJump && (
				<form
					className="pagination__jump-wrapper"
					onSubmit={e => {
						e.preventDefault()
						for (let i = 0; i < e.currentTarget.elements.length; i++) {
							// TODO: What is the proper type here for "Element" to access name, value, placeholder?
							// @ts-ignore
							if (e.currentTarget.elements[i].name === 'jump') {
								onJump(
									// @ts-ignore
									e.currentTarget.elements[i].value ||
										// @ts-ignore
										e.currentTarget.elements[i].placeholder
								)
							}
						}
					}}
				>
					<Span className="pagination__jump-text">Jump:&nbsp;</Span>
					<TextInput
						name="jump"
						enableAutoComplete={false}
						placeholder={currentPage.toString()}
						onBlur={e => {
							onJump(+(e.currentTarget.value || e.currentTarget.placeholder))
						}}
					/>
				</form>
			)}
		</div>
	)
}

export default Pagination
