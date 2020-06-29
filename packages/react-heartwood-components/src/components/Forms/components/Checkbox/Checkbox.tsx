import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { ChangeEvent, Component } from 'react'
import CheckIconYes from '../../../../../static/assets/icons/ic_check_box.svg'
import CheckIconNo from '../../../../../static/assets/icons/ic_check_box_outline_blank.svg'
import CheckIconMaybe from '../../../../../static/assets/icons/ic_indeterminate_check_box.svg'

interface ICheckboxState {}

export default class Checkbox extends Component<
	SpruceSchemas.Local.ICheckbox,
	ICheckboxState
> {
	private checkboxRef: React.RefObject<HTMLInputElement>

	public constructor(props: SpruceSchemas.Local.ICheckbox) {
		super(props)
		this.checkboxRef = React.createRef()
	}

	public componentDidMount = () => {
		if (this.checkboxRef.current) {
			this.checkboxRef.current.indeterminate = !!this.props.isIndeterminate
		}
	}

	public handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { onChange } = this.props

		if (this.checkboxRef.current) {
			this.checkboxRef.current.indeterminate = false
		}

		if (onChange) {
			onChange(e)
		}
	}

	public render(): React.ReactElement {
		const {
			className,
			id,
			isChecked,
			isDisabled,
			label,
			name,
			helper
		} = this.props
		const parentClass = cx('checkbox-item', className)

		return (
			<div className={parentClass}>
				<div className="checkbox-item__inner">
					<input
						checked={isChecked || false}
						name={name || undefined}
						ref={this.checkboxRef}
						autoComplete={'off'}
						className="checkbox-item__input"
						disabled={isDisabled || false}
						id={id ?? undefined}
						// Always use internal change handler
						onChange={this.handleChange}
						type="checkbox"
					/>
					<label className="checkbox-item__label" htmlFor={id ?? undefined}>
						{label}
					</label>
					<div className="checkbox-item__icons">
						<CheckIconYes className="checkbox-item__icon checkbox-item__icon-yes" />
						<CheckIconNo className="checkbox-item__icon checkbox-item__icon-no" />
						<CheckIconMaybe className="checkbox-item__icon checkbox-item__icon-maybe" />
					</div>
				</div>
				{helper && (
					<p className="checkbox-item__post-text">
						{helper.error || helper.hint}
					</p>
				)}
			</div>
		)
	}
}
