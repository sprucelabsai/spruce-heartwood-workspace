import React, { Fragment } from 'react'
import Button from '../../../Button/Button'
import { CardBuilder } from '../../../Card'
import List from '../../../List/List'
import MarkdownText from '../../../MarkdownText/MarkdownText'
import SplitButton from '../../../SplitButton/SplitButton'
import Text from '../../../Text/Text'
// TODO: fix toast types to be able to be used here
import Toast from '../../../Toast/Toast'

import {
	SpruceSchemas,
	calendarEventDetailItems
} from '@sprucelabs/heartwood-skill'

const MDTextContainer = (
	props: SpruceSchemas.Local.IMarkdown
): React.ReactElement => (
	<div className="event-details__markdown">
		<MarkdownText {...props} />
	</div>
)

const components: Record<
	typeof calendarEventDetailItems[number],
	React.ElementType
> = {
	list: List,
	button: Button,
	cardBuilder: CardBuilder,
	splitButton: SplitButton,
	text: Text,
	toast: Toast,
	markdown: MDTextContainer
}

type DetailsItem = SpruceSchemas.Local.ICalendarEventDetails['items'][number]

const EventDetailsItem = (
	props:{
		item: DetailsItem
	}
): React.ReactElement => {
	const { schemaId, values } = props.item

	if (!schemaId || !components[schemaId]) {
		// TODO: Use logger library for warning
		console.warn(
			`No component found for key: ${schemaId}. Please double-check properties passed into <EventDetailsItem> from <EventDetails>.`
		)
		return <Fragment />
	}

	const Handler = components[schemaId]
	return <Handler {...values} />
}

export default EventDetailsItem
