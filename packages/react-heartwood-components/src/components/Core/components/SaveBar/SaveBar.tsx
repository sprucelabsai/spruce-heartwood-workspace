import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import Button from '../../../Button/Button'
import { CSSTransition } from 'react-transition-group'
import { IHWButtonKinds } from '@sprucelabs/spruce-types'

export interface ISaveBarProps {
	/** The current location */
	location?: Record<string, any>

	/** The message to display in the Save Bar */
	message?: string

	/** Set to true to show the save bar */
	isVisible: boolean

	/** Set to true to disable the discard button */
	isDiscardDisabled: boolean

	/** Set to true to disable the save button */
	isSaveDisabled: boolean

	/** Set to true while the discard action is being executed */
	isDiscarding: boolean

	/** Set to true while the save action is being executed */
	isSaving: boolean

	/** The function to execute when user selects discard */
	onDiscard?: Function

	/** The function to execute when user selects save */
	onSave: Function
}

interface ISaveBarState {}

export default class SaveBar extends React.PureComponent<
	ISaveBarProps,
	ISaveBarState
> {
	public static defaultProps = {
		message: 'Unsaved changes',
		isVisible: false,
		isDiscarding: false,
		isSaving: false,
		isDiscardDisabled: false,
		isSaveDisabled: false
	}

	private _element: HTMLElement | null = null

	public componentDidMount() {
		this._element = document.body
		this.forceUpdate()
	}

	public render() {
		const {
			location,
			message,
			isVisible,
			isDiscarding,
			isSaving,
			isDiscardDisabled,
			isSaveDisabled,
			onDiscard,
			onSave
		} = this.props

		if (!this._element) {
			return null
		}

		return ReactDOM.createPortal(
			<CSSTransition
				in={isVisible}
				appear={true}
				classNames="save-bar"
				timeout={100}
			>
				<div className={cx('save-bar', { 'save-bar--visible': isVisible })}>
					<div className="save-bar__left">
						{location && location.name ? (
							<p className="save-bar__text">{location.name}</p>
						) : (
							<p className="save-bar__text">Spruce</p>
						)}
					</div>

					<div className="save-bar__right">
						<p className="save-bar__title">{message}</p>
						{onDiscard && (
							<Button
								kind={IHWButtonKinds.Simple}
								text="Discard"
								onClick={onDiscard}
								isDisabled={isDiscardDisabled || isDiscarding || isSaving}
								isLoading={isDiscarding}
								isSmall
							/>
						)}
						<Button
							kind={IHWButtonKinds.Primary}
							text="Save"
							onClick={onSave}
							isDisabled={isSaveDisabled || isDiscarding || isSaving}
							isLoading={isSaving}
							isSmall
						/>
					</div>
				</div>
			</CSSTransition>,
			this._element
		)
	}
}
