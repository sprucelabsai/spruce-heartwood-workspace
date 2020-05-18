import cx from 'classnames'
import React from 'react'
import BackIcon from '../../../../../static/assets/icons/ic_keyboard_arrow_left.svg'
import Button from '../../../Button/Button'
import Icon from '../../../Icon/Icon'
import Tabs from '../../../Tabs/Tabs'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

const SkillViewHeader = (props: SpruceSchemas.Local.ISkillViewHeader) => {
	const {
		backLinkHref,
		backLinkText,
		className,
		isCollapsed = false,
		hasBottomBorder,
		onClickBack,
		primaryButton,
		sidebarExpanderButton,
		tabs,
		title
	} = props

	const backLinkClass = 'page__header-back-link'
	let anchor

	if (onClickBack || backLinkHref) {
		const backIcon = (
			<span className="page__header-back-link-icon">
				<Icon customIcon={BackIcon} />
			</span>
		)

		if (onClickBack) {
			anchor = (
				<button
					className={cx(backLinkClass, 'btn')}
					type="button"
					onClick={onClickBack}
				>
					{backIcon}
					{backLinkText}
				</button>
			)
		} else if (backLinkHref) {
			// Check if the link is relative (client-side) or absolute
			// let linkIsRelative = true
			// if (backLinkHref && is.url(backLinkHref)) {
			// 	linkIsRelative = false
			// }
			// Only return a Next link if the href is relative
			anchor = (
				<a href={backLinkHref} className={backLinkClass}>
					{backIcon}
					{backLinkText}
				</a>
			)
		}
	}

	return (
		<header
			className={cx(
				'page__header',
				{
					'page__header--is-collapsed': isCollapsed
				},
				className
			)}
		>
			<div
				className={cx('page__header-inner', {
					'page__header-inner--is-collapsed': isCollapsed
				})}
			>
				{anchor && anchor}
				<div
					className={cx('page__header-main', {
						'page__header-main--has-bottom-border': hasBottomBorder
					})}
				>
					<div className="page__header-title-wrapper">
						<h1>{title}</h1>
						<div>
							{sidebarExpanderButton && (
								<Button
									{...sidebarExpanderButton}
									isSmall
									className="page__header-sidebar-btn"
								/>
							)}
							{primaryButton && <Button {...primaryButton} />}
						</div>
					</div>
				</div>
			</div>
			{tabs && tabs.length > 0 && (
				<Tabs isPadded={false} className="page__header-tabs" tabs={tabs} />
			)}
		</header>
	)
}

SkillViewHeader.displayName = 'SkillView.Header'
SkillViewHeader.defaultProps = {
	title: '',
	backLinkText: 'Back',
	backLinkHref: '',
	primaryAction: null,
	hasBottomBorder: false,
	tabs: []
}

export default SkillViewHeader
