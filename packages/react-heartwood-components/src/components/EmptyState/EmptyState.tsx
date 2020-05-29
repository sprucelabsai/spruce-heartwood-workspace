import React from 'react'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import {
	SpruceSchemas,
	defaultProps,
	emptyStateDefinition
} from '@sprucelabs/heartwood-skill'

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

EmptyState.defaultProps = defaultProps(emptyStateDefinition)

export default EmptyState
