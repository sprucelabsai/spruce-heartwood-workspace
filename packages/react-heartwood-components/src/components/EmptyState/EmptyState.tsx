import React from 'react'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import { IEmptyState } from '@sprucelabs/heartwood-skill'

const EmptyState = (props: IEmptyState): React.ReactElement => {
	const {
		heading,
		subheading,
		icon,
		primaryButton,
	} = props

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
			{primaryButton && (
				<Button
					{...primaryButton}
				/>
			)}
		</div>
	)
}

EmptyState.defaultProps = {
	icon: {
		id: 'empty',
		name: 'empty_box',
		isLineIcon: true
	},
	heading: 'Nothing to see here',
	primaryButton: {
		kind: 'simple'
	}
} as Partial<IEmptyState>

export default EmptyState
