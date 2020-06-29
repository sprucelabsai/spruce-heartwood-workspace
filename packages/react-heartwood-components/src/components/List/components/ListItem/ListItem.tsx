import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Fragment } from 'react'
import Avatar from '../../../Avatar/Avatar'
import Button from '../../../Button/Button'
import ContextMenu from '../../../ContextMenu/ContextMenu'
import { Checkbox, Radio, Toggle } from '../../../Forms'
import Icon from '../../../Icon/Icon'
import Image from '../../../Image/Image'
import List from '../../List'

const ListItem = (props: SpruceSchemas.Local.IListItem): React.ReactElement => {
	const {
		buttons,
		avatar,
		className,
		contextMenu,
		icon,
		image,
		isDisabled,
		isDraggable,
		isIconHidden,
		isLoading,
		isSeparatorVisible,
		list,
		lists,
		note,
		onClick,
		primaryButton,
		selectable,
		subtitle,
		title,
		toggle,
		warnings
	} = props

	let checkboxProps: SpruceSchemas.Local.ICheckbox | undefined
	let radioProps: SpruceSchemas.Local.IRadio | undefined

	if (selectable?.schemaId === 'listItemCheckbox') {
		checkboxProps = selectable.values
	} else if (selectable?.schemaId === 'listItemRadio') {
		radioProps = selectable.values
	}

	const parentClass = cx('list-item', className, {
		'list-item-title-only': !subtitle,
		'list-item--is-draggable': isDraggable,
		'list-item--is-disabled': isDisabled,
		'list-item--primary-action': primaryButton,
		'list-item--separator-hidden': !isSeparatorVisible,
		'list-item--has-avatar': !!avatar,
		'loading-placeholder': isLoading
	})

	const ListItemInner = (): React.ReactElement => (
		<Fragment>
			{(image || icon || avatar || selectable) && !isDraggable && (
				<div className="list-item__image-wrapper">
					{icon && (
						<Icon
							customIcon={icon.customIcon}
							name={icon.name}
							isLineIcon={icon.isLineIcon}
							className={cx('list-item__icon', icon.className, {
								'list-item__icon--hidden': isIconHidden
							})}
						/>
					)}
					{image && (
						<Image
							{...image}
							className="list-item__image"
							width={40}
							height={40}
						/>
					)}
					{checkboxProps && (
						<Checkbox
							{...(isDisabled ? { isDisabled: true } : {})}
							{...checkboxProps}
							onChange={e => onClick?.(e as any)}
						/>
					)}
					{radioProps && (
						<Radio
							{...(isDisabled ? { disabled: true } : {})}
							{...radioProps}
							onChange={e => onClick?.(e as any)}
						/>
					)}
					{avatar && <Avatar width={32} height={32} {...avatar} />}
				</div>
			)}

			<div className="list-item__text-wrapper">
				{selectable ? (
					<p>
						<label
							className={cx('list-item__title', {
								'u-color-warning-dark': warnings && warnings.title
							})}
							htmlFor={selectable.values.id}
						>
							{title}
						</label>
					</p>
				) : (
					<p
						className={cx('list-item__title', {
							'u-color-warning-dark': warnings && warnings.title
						})}
					>
						{title}
					</p>
				)}
				{subtitle && (
					<Fragment>
						{selectable ? (
							<p>
								<label
									className={cx('list-item__subtitle', {
										'u-color-warning-dark': warnings && warnings.subtitle
									})}
									htmlFor={selectable.values.id}
								>
									{subtitle}
								</label>
							</p>
						) : (
							<p
								className={cx('list-item__subtitle', {
									'u-color-warning-dark': warnings && warnings.subtitle
								})}
								dangerouslySetInnerHTML={{ __html: subtitle }}
							/>
						)}
					</Fragment>
				)}
				{note && (
					<p
						className={cx('list-item__note', {
							'u-color-warning-dark': warnings && warnings.note
						})}
						dangerouslySetInnerHTML={{ __html: note }}
					/>
				)}
			</div>
			{!isDraggable && ((buttons && buttons.length > 0) || contextMenu) && (
				<Fragment>
					{buttons && buttons.length > 0 && (
						<div className="list-item__actions-wrapper">
							{buttons.map((action, idx) => (
								<Button
									key={idx}
									isSmall
									className="list-item__action"
									{...action}
									onClick={onClick}
								/>
							))}
						</div>
					)}
					{contextMenu && (
						<div className="list-item__actions-wrapper">
							<ContextMenu {...contextMenu} onClick={onClick} />
						</div>
					)}
				</Fragment>
			)}
			{toggle && <Toggle {...toggle} />}
			{list && <List {...list} onClick={onClick} />}
			{lists &&
				lists.length > 0 &&
				lists.map((list, idx) => (
					<List key={idx} onClick={onClick} {...list} />
				))}
		</Fragment>
	)

	return (
		<li className={parentClass}>
			{primaryButton ? (
				<Button {...primaryButton} onClick={onClick}>
					<ListItemInner />
				</Button>
			) : (
				<ListItemInner />
			)}
		</li>
	)
}

ListItem.defaultProps = defaultProps(SpruceSchemas.Local.List.definition)

export default ListItem
