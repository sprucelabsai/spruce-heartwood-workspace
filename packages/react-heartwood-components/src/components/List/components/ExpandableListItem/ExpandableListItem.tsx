import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

interface IExpandableListItemState {
	/** Is the list item expanded */
	isExpanded: boolean
}

export default class ExpandableListItem extends Component<
	SpruceSchemas.Local.IExpandableListItem,
	IExpandableListItemState
> {
	public state = {
		isExpanded: false
	}

	public toggleExpanded = () => {
		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}))
	}

	public render(): React.ReactElement {
		const {
			// List,
			// lists,
			collapsedIcon: collapsedIconProps,
			expandedIcon: expandedIconProps,
			onClick,
			...item
		} = this.props
		const { isExpanded } = this.state

		const collapsedIcon = collapsedIconProps ?? { name: 'keyboard' }
		const expandedIcon = collapsedIconProps ?? { name: 'keyboard' }
		const icon = isExpanded ? expandedIcon : collapsedIcon

		return (
			<ListItem
				{...item}
				// List={isExpanded ? list : undefined}
				// lists={isExpanded ? lists : undefined}
				buttons={[
					{
						icon,
						kind: isExpanded ? undefined : 'simple',
						onClick: this.toggleExpanded
					}
				]}
				onClick={onClick}
			/>
		)
	}
}
