import cx from 'classnames'
import React, { Fragment } from 'react'
import ExpandableListItem from './components/ExpandableListItem/ExpandableListItem'
import ListHeader from './components/ListHeader/ListHeader'
import ListItem from './components/ListItem/ListItem'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

// TODO can we delete this?
export const ListWrapper = (props): React.ReactElement => (
	<div className="list-wrapper">{props.children}</div>
)

const List = (props: SpruceSchemas.Local.IList): React.ReactElement => {
	const {
		header,
		items,
		className,
		isSmall,
		areSeparatorsVisible: areSeparatorsVisibleProp,
		children,
		selectable,
		isLoading
	} = props

	// Separators are true by default
	const areSeparatorsVisible =
		typeof areSeparatorsVisibleProp === 'boolean'
			? areSeparatorsVisibleProp
			: true

	const parentClass = cx('list', className, {
		'list-small': isSmall,
		'list--separators-hidden': !areSeparatorsVisible,
		'loading-placeholder': isLoading
	})

	return (
		<Fragment>
			{header && <ListHeader isSmall={isSmall} {...header} />}
			<ul className={parentClass}>
				{items &&
					items.map((item, idx) => {
						if (selectable) {
							item.selectable = selectable
						}
						if (!item.isExpandable) {
							const listItem = item as SpruceSchemas.Local.IListItem
							return (
								<ListItem
									key={`${listItem.id}`}
									{...listItem}
									isSeparatorVisible={
										typeof listItem.isSeparatorVisible === 'boolean'
											? listItem.isSeparatorVisible
											: areSeparatorsVisible
									}
								/>
							)
						}
						return <ExpandableListItem key={idx} {...item} />
					})}
				{children && children}
			</ul>
		</Fragment>
	)
}

List.defaultProps = {
	header: null,
	className: '',
	isSmall: false,
	areSeparatorsVisible: true
}

export default List
