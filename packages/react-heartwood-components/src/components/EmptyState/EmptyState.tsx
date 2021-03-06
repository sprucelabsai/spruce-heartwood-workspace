import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import React from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

const EmptyState = (
	props: SpruceSchemas.Local.IEmptyState
): React.ReactElement => {
	const { heading, subheading, icon, primaryButton } = props

	return (
		<div className="empty-state">
			{icon && (
				<span className="empty-state__icon">
					<Icon {...icon} />
				</span>
			)}
			<h3 className="empty-state__heading">{heading}</h3>
			{subheading && (
				<div className="empty-state__subheading">{subheading}</div>
			)}
			{primaryButton && <Button {...primaryButton} />}
		</div>
	)
}

EmptyState.defaultProps = defaultProps(
	SpruceSchemas.Local.EmptyState.definition
)

export default EmptyState
