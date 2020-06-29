import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Fragment } from 'react'
import BasicAnchor from '../_utilities/Anchor'
import CircleLoader from '../CircleLoader/CircleLoader'
import Icon from '../Icon/Icon'

const defaults = defaultProps(SpruceSchemas.Local.Button.definition)

const Button = (props: SpruceSchemas.Local.IButton): React.ReactElement => {
	const {
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
						<CircleLoader light={kind === 'primary' || kind === 'caution'} />
					)}
				</Fragment>
			)}
		</span>
	)

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

Button.defaultProps = defaults

export default Button
