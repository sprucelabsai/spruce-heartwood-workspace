import React from 'react'
import cx from 'classnames'
import Button from '../../../Button/Button'
import {
	SpruceSchemas,
	defaultProps,
	listHeaderDefinition
} from '@sprucelabs/heartwood-skill'

const defaults = defaultProps(listHeaderDefinition)

const ListHeader = (
	props: SpruceSchemas.Local.IListHeader
): React.ReactElement => {
	const { title, subtitle, isSmall, buttons } = props
	const parentClass = cx('list-header', { 'list-header-small': isSmall })

	return (
		<div className={parentClass}>
			<div className="list-header__text">
				<h3 className="list-header__title">{title}</h3>
				{subtitle && <p className="list-header__subtitle">{subtitle}</p>}
			</div>
			{Array.isArray(buttons) && buttons.length > 0 && (
				<ul className="list-header__actions">
					{buttons.map((button, idx) => (
						<li key={idx} className="list-header__action-wrapper">
							<Button {...button} />
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

ListHeader.defaultProps = defaults

export default ListHeader
