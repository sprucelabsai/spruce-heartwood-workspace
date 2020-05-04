import React from 'react'
import cx from 'classnames'
import Label from '../Label/Label'
import Icon from '../../../Icon/Icon'
import Button from '../../../Button/Button'
import InputHelper from '../InputHelper/InputHelper'
import {
	SpruceSchemas,
	defaultProps,
	stripNulls
} from '@sprucelabs/heartwood-skill'

const defaults = defaultProps(SpruceSchemas.Local.TextInput.definition)

class TextInput extends React.Component<
	SpruceSchemas.Local.ITextInput & typeof defaults
> {
	public static defaultProps = defaults
	public wrapperRef = React.createRef<HTMLDivElement>()

	public focus = (options?: FocusOptions) => {
		const wrapper = this.wrapperRef.current
		if (wrapper) {
			const input = wrapper.querySelector('input')
			if (input) {
				input.focus(options)
			}
		}
	}
	public render(): React.ReactElement {
		const {
			className,
			label,
			iconBefore,
			clearButtonIcon,
			appendix,
			helper,
			isSmall,
			onClear,
			children,
			enableAutoComplete,
			...rest
		} = stripNulls(this.props)

		const parentClass = cx('text-input', {
			className,
			'text-input--has-error': !!helper?.error,
			'text-input-small': isSmall
		})

		return (
			<div className={parentClass} ref={this.wrapperRef}>
				{label && <Label {...label} />}
				<div className="text-input__inner">
					{iconBefore && <Icon {...iconBefore} />}
					<input
						className="text-input__input"
						{...rest}
						autoComplete={enableAutoComplete ? 'on' : 'off'}
					/>
					{appendix && <p className="text-input__appendix">{appendix}</p>}
					{clearButtonIcon && onClear && (
						<Button
							onClick={onClear}
							className="text-input__clear-btn"
							icon={clearButtonIcon}
						/>
					)}
				</div>
				{children}
				{helper && <InputHelper {...helper} />}
			</div>
		)
	}
}

export default TextInput
