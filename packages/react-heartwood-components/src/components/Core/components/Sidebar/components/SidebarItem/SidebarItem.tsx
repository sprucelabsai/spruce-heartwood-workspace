import React from 'react'
import cx from 'classnames'
import Button, { IButtonProps } from '../../../../../Button/Button'
import Icon from '../../../../../Icon/Icon'

interface IItemProps {
	text: string
	href: string
	className?: string
	action?: IButtonProps
	icon?: React.ReactNode
	isCurrent?: boolean
	items: Array<IItemProps>
}

export interface ISidebarItemProps {
	items?: Array<IItemProps>
	className?: string
	text: string
	href: string
	action?: Record<string, any>
	icon?: any
	isCurrent?: boolean
}

const isCurrentParent = (props: ISidebarItemProps) => {
	const { items } = props
	if (items) {
		if (items.find(item => item.isCurrent)) {
			return true
		}
		items.forEach(item => {
			if (item.items) {
				if (item.items.find(item => item.isCurrent)) {
					return true
				}
			}
		})
	}
	return false
}

const SidebarItem = (props: ISidebarItemProps) => {
	const { text, href, action, icon, isCurrent, items, className } = props
	const parentClass = cx('sidebar-item', className, {
		'sidebar-item--is-current': isCurrent,
		'sidebar-item--is-current-parent': items && isCurrentParent({ items })
	})
	return (
		<li className={parentClass}>
			<div className="sidebar-item__inner">
				<a className="sidebar-item__link" href={href}>
					{icon && (
						<Icon
							{...icon}
							className={cx('sidebar-item__icon', icon.className)}
						/>
					)}
					<span className="sidebar-item__text">{text}</span>
				</a>
				{action && <Button {...action} />}
			</div>
			{items && items.length > 0 && (
				<ul className="sidebar__sub-list">
					{items.map((item, idx) => {
						const subClass = cx('sidebar__sub-list-item', {
							'sidebar-item--is-current': item.isCurrent,
							'sidebar-item--is-current-parent':
								item.items && isCurrentParent({ items: item.items })
						})
						return (
							<li key={idx} className={subClass}>
								<div className="sidebar-item__inner">
									<a href={item.href} className="sidebar-item__link">
										{item.text}
									</a>
								</div>
								{item.items && isCurrentParent({ items: item.items }) && (
									<ul className="sidebar__sub-list">
										{item.items.map((item, idx) => {
											const subSubClass = cx(
												'sidebar__sub-list-item',
												item.className,
												{
													'sidebar-item--is-current': item.isCurrent
												}
											)
											return (
												<li key={idx} className={subSubClass}>
													<div className="sidebar-item__inner">
														<a className="sidebar-item__link" href={item.href}>
															{item.text}
														</a>
													</div>
												</li>
											)
										})}
									</ul>
								)}
							</li>
						)
					})}
				</ul>
			)}
		</li>
	)
}

SidebarItem.defaultProps = {
	icon: null,
	isCurrent: false,
	items: [],
	action: null
}

export default SidebarItem
