import cx from 'classnames'
import React, { Fragment } from 'react'
import CircleLoader from '../CircleLoader/CircleLoader'
import Icon, { IIconProps } from '../Icon/Icon'
import BasicAnchor from '../_utilities/Anchor'
import { IButton,Action } from '@sprucelabs/heartwood-skill'

export type ButtonOnClick = (
	e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>
) => void

export interface IButtonProps extends IButton {
	// TODO figure out why this is any
	/** override the anchor component if href is true */
	AnchorComponent?: any

	/** Optional children passed into button */
	children?: React.ReactNode

	/** Click handler. */
	onClick?: ButtonOnClick

	/** Optional, provide a handler for Actions */
	onAction?: (action: Action) => any
}

const Button = (props: IButtonProps): React.ReactElement => {
	const {
		action,
		AnchorComponent = BasicAnchor,
		children,
		className,
		href,
		icon,
		isFullWidth,
		isIconOnly,
		isLoading,
		isSmall,
		kind,
		onAction,
		onClick,
		text,
		type,
		...rest
	} = props

	const btnClass = cx(className, {
		btn: true,
		'btn-primary': kind === 'primary',
		'btn-secondary': kind === 'secondary',
		'btn-caution': kind === 'caution',
		'btn-simple': kind === 'simple',
		'btn-full-width': isFullWidth,
		'btn--loading': isLoading,
		'btn-small': isSmall,
		'btn-icon-only': (!children && !text) || isIconOnly
	})
	const textClass = cx('btn__text', {
		'visually-hidden': isIconOnly
	})

	const handleClick = (e: React.MouseEvent): any => {
		if (e.currentTarget instanceof HTMLElement) {
			e.currentTarget.blur()
		}

		if (onAction && action) {
			onAction(action)
		}

		if (onClick) {
			onClick(e)
		}
	}

	const Inner = (): React.ReactElement => (
		<span className="btn__inner">
			{children ? (
				children
			) : (
				<Fragment>
					{icon && (icon.customIcon || icon.name) && (
						<span className="btn__icon-wrapper">
							<Icon
								id={icon.id}
								customIcon={icon.customIcon}
								name={icon.name}
								isLineIcon={icon.isLineIcon}
								className={cx(
									{
										['btn__icon']: true,
										'btn__line-icon': icon.isLineIcon
									},
									icon.className
								)}
							/>
						</span>
					)}
					{text && <span className={textClass}>{text}</span>}
					{isLoading && (
						<CircleLoader
							light={
								kind === 'primary' || kind === 'caution'
							}
						/>
					)}
				</Fragment>
			)}
		</span>
	)

	// TODO: We probably need to create explicit whitelists of what we want to
	// allow to be spread onto native DOM elements, since applying non-standard
	// attributes throws a warning.
	const { isDisabled } = rest

	const button = (
		<button
			className={btnClass}
			type={type || 'button'}
			onClick={handleClick}
			disabled={isDisabled || false}
		>
			<Inner />
		</button>
	)

	if (!AnchorComponent) {
		throw new Error('what the?')
	}

	const anchor = (
		<AnchorComponent
			href={href}
			className={btnClass}
			onClick={handleClick}
			{...rest}
		>
			<Inner />
		</AnchorComponent>
	)

	if (!children && !text && !icon) {
		// TODO: Handle Logging
		// console.error(
		// 	'<Button /> must have text, icon, or both. Please check the props your passing.'
		// )
		return <Fragment />
	}

	return href ? anchor : button
}

Button.defaultProps = {
	className: '',
	kind: '',
	isSmall: false,
	isFullWidth: false,
	isLoading: false,
	isIconOnly: false,
	text: '',
	href: '',
	icon: null,
	type: 'button',
	onClick: () => null
}

export default Button
