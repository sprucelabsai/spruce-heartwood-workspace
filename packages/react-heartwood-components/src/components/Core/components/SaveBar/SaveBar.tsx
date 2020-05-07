import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import Button from '../../../Button/Button'
import { CSSTransition } from 'react-transition-group'
import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'

interface ISaveBarState {}

const defaults = defaultProps(SpruceSchemas.Local.SaveBar.definition)
export default class SaveBar extends React.PureComponent<
	SpruceSchemas.Local.ISaveBar & typeof defaults,
	ISaveBarState
> {
	public static defaultProps = defaults

	private _element: HTMLElement | null = null

	public componentDidMount() {
		this._element = document.body
		this.forceUpdate()
	}

	public render() {
		const {
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
					<div className="save-bar__right">
						<p className="save-bar__title">{message}</p>
						{onDiscard && (
							<Button
								kind={'simple'}
								text="Discard"
								onClick={onDiscard}
								isDisabled={isDiscardDisabled || isDiscarding || isSaving}
								isLoading={isDiscarding}
								isSmall
							/>
						)}
						<Button
							kind={'primary'}
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
