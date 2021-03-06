import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import Button from '../../../../../Button/Button'
import Icon from '../../../../../Icon/Icon'

const isCurrentParent = (items: SpruceSchemas.Local.ISidebarItem[]) => {
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

const SidebarItem = (props: SpruceSchemas.Local.ISidebarItem) => {
	const { text, href, button, icon, isCurrent, items, className } = props
	const parentClass = cx('sidebar-item', className, {
		'sidebar-item--is-current': isCurrent,
		'sidebar-item--is-current-parent': items && isCurrentParent(items)
	})
	return (
		<li className={parentClass}>
			<div className="sidebar-item__inner">
				<a className="sidebar-item__link" href={href ?? undefined}>
					{icon && (
						<Icon
							{...icon}
							className={cx('sidebar-item__icon', icon.className)}
						/>
					)}
					<span className="sidebar-item__text">{text}</span>
				</a>
				{button && <Button {...button} />}
			</div>
			{items && items.length > 0 && (
				<ul className="sidebar__sub-list">
					{items.map((item, idx) => {
						const subClass = cx('sidebar__sub-list-item', {
							'sidebar-item--is-current': item.isCurrent,
							'sidebar-item--is-current-parent':
								item.items && isCurrentParent(item.items)
						})
						return (
							<li key={idx} className={subClass}>
								<div className="sidebar-item__inner">
									<a
										href={item.href ?? undefined}
										className="sidebar-item__link"
									>
										{item.text}
									</a>
								</div>
								{item.items && isCurrentParent(item.items) && (
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
														<a
															className="sidebar-item__link"
															href={item.href ?? undefined}
														>
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
