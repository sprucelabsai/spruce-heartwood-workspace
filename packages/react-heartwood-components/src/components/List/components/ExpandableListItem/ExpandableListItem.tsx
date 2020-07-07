import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'

interface IExpandableListItemState {
	/** Is the list item expanded */
	isExpanded: boolean
}

export default class ExpandableListItem extends Component<
	SpruceSchemas.Local.IExpandableListItem,
	IExpandableListItemState
> {
	public state = {
		isExpanded: false,
	}

	public toggleExpanded = () => {
		this.setState((prevState) => ({
			isExpanded: !prevState.isExpanded,
		}))
	}

	public render(): React.ReactElement {
		const {
			// List,
			// lists,
			collapsedIcon: collapsedIconProps,
			expandedIcon: expandedIconProps,
			onClick,
			list,
			...item
		} = this.props
		const { isExpanded } = this.state

		const collapsedIcon = collapsedIconProps ?? { name: 'keyboard' }
		const expandedIcon = expandedIconProps ?? { name: 'keyboard' }
		const icon = isExpanded ? expandedIcon : collapsedIcon

		return (
			<ListItem
				{...item}
				list={isExpanded ? list : undefined}
				// Lists={isExpanded ? lists : undefined}
				buttons={[
					{
						icon,
						kind: isExpanded ? undefined : 'simple',
						onClick: this.toggleExpanded,
					},
				]}
				onClick={(e) => onClick?.(e as any)}
			/>
		)
	}
}
