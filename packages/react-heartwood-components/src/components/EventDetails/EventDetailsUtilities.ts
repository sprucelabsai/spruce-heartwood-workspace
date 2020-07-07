import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import { cloneDeep, compact, concat, each, find } from 'lodash'

type DetailItem = SpruceSchemas.Local.ICalendarEventDetails['items'][number]

/** This utility is used in conjunction with the `getUIEnhancements` endpoint.
 *  With it, you can meld the results of that API with an existing eventDetailsItems
 *  response, which you may have retrieved from `CalendarEvents`, or otherwise
 *  may be assembling manually.
 */
export function applyUIEnhancementsToEventDetails(
	eventDetailItems: DetailItem[],
	UIEnhancementSections: SpruceSchemas.Local.IUIEnhancementSection[]
) {
	// First, we clone the input to keep the method pure and avoid side-effects.
	const mutatedEventDetailItems: DetailItem[] = cloneDeep(eventDetailItems)

	// This loop applies the `contextMenuItems` enhancements to the appropriate
	// context menus in the event details.
	mutatedEventDetailItems.forEach((eventDetailItem) => {
		if (eventDetailItem.schemaId === 'list') {
			eventDetailItem.values.items &&
				eventDetailItem.values.items.forEach((item) => {
					const matchingUIEnhancement = find(UIEnhancementSections, {
						id: eventDetailItem.values.id || undefined,
					})

					if (matchingUIEnhancement && item.contextMenu) {
						item.contextMenu.buttons = concat(
							item.contextMenu.buttons,
							compact(matchingUIEnhancement.contextMenuItems)
						)
					}
				})
		}
	})

	// At this stage we interleave the new `calendarEventDetailsItems` enhancements with
	// the inputs'.
	let mutatedEventDetailItemsWithAdditionalEventDetailItems: any = []

	each(mutatedEventDetailItems, (eventDetailItem) => {
		mutatedEventDetailItemsWithAdditionalEventDetailItems.push(eventDetailItem)

		if (eventDetailItem && typeof eventDetailItem === 'object') {
			const matchingUIEnhancement = find(UIEnhancementSections, {
				id: eventDetailItem.id || undefined,
			})

			if (
				matchingUIEnhancement &&
				matchingUIEnhancement.calendarEventDetailsItems
			) {
				mutatedEventDetailItemsWithAdditionalEventDetailItems = mutatedEventDetailItemsWithAdditionalEventDetailItems.concat(
					matchingUIEnhancement.calendarEventDetailsItems
				)
			}
		}
	})

	// And done! Have a nice day!
	return mutatedEventDetailItemsWithAdditionalEventDetailItems
}
