import React, { Component } from 'react'
import cx from 'classnames'

import EventDetailsItem from './components/EventDetailsItem/EventDetailsItem'
import { unionArray } from '../..'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

interface IEventDetailsState {}

export default class EventDetails extends Component<
	SpruceSchemas.Local.ICalendarEventDetails,
	IEventDetailsState
> {
	public render(): React.ReactElement {
		const { items, isLoading } = this.props

		const className = cx('event-details', {
			'loading-placeholder': isLoading
		})

		return (
			<div className={className}>
				{unionArray(items).map((item, idx) => (
					<div
						key={item.values.id ?? `item-${idx}`}
						className={cx('event-details__section', {
							'event-details__button-wrapper':
								item.schemaId === 'button' || item.schemaId === 'splitButton',
							'event-details__markdown-wrapper': item.schemaId === 'markdown',
							'event-details__card-wrapper': item.schemaId === 'cardBuilder'
						})}
					>
						<EventDetailsItem item={item} />
					</div>
				))}
			</div>
		)
	}
}
