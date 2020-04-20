import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import {IExpandableListItem} from '@sprucelabs/heartwood-skill'

interface IExpandableListItemState {
	/** Is the list item expanded */
	isExpanded: boolean
}

export default class ExpandableListItem extends Component<
	IExpandableListItem,
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
			item,
			// list,
			// lists,
			collapsedIcon:collapsedIconProps,
			expandedIcon:expandedIconProps,
			onAction
		} = this.props
		const { isExpanded } = this.state

		const collapsedIcon = collapsedIconProps ?? { name: 'keyboard'}
const expandedIcon = collapsedIconProps ?? { name: 'keyboard'}
const icon = isExpanded ? expandedIcon : collapsedIcon

		return (
			<ListItem
				{...item}
				// list={isExpanded ? list : undefined}
				// lists={isExpanded ? lists : undefined}
				actions={[
					{
						icon,
						kind: isExpanded ? undefined : 'simple',
						onClick: this.toggleExpanded
					}
				]}
				onAction={onAction}
			/>
		)
	}
}
