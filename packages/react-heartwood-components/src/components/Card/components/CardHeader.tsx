import {
	SpruceSchemas,
	defaultProps,
	cardHeaderDefinition,
} from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Fragment } from 'react'
import Button from '../../Button/Button'
import ContextMenu from '../../ContextMenu/ContextMenu'
import Icon from '../../Icon/Icon'

// Card Header
const CardHeader = (
	props: SpruceSchemas.Local.ICardHeader
): React.ReactElement => {
	const { title, labelText, buttons, contextMenu, labelIcon } = props

	return (
		<div className="card__header">
			{(title || labelText || labelIcon) && (
				<div className="card__header-text">
					{title && <h3 className="card__title">{title}</h3>}
					{(labelText || labelIcon) && (
						<div className="card__header-label">
							{labelIcon && (
								<Icon
									customIcon={
										labelIcon.customIcon ? labelIcon.customIcon : undefined
									}
									name={labelIcon.name}
									isLineIcon={labelIcon.isLineIcon}
									className={cx('card__header-label-icon', labelIcon.className)}
								/>
							)}
							{labelText && (
								<span className="card__header-label-text">{labelText}</span>
							)}
						</div>
					)}
				</div>
			)}
			{(buttons || contextMenu) && (
				<div className="card__header-actions">
					<Fragment>
						{buttons &&
							buttons.length > 0 &&
							buttons.map((button, idx) => (
								<Button
									key={button.id || `header-button-${idx}`}
									kind={'simple'}
									isSmall
									{...button}
								/>
							))}
						{contextMenu && <ContextMenu {...contextMenu} />}
					</Fragment>
				</div>
			)}
		</div>
	)
}

CardHeader.displayName = 'Card.Header'
CardHeader.defaultProps = defaultProps(cardHeaderDefinition)

export default CardHeader
