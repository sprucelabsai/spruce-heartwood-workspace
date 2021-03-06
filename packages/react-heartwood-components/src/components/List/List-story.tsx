import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { Component, Fragment } from 'react'
import {
	dateList,
	expandableList,
	listHiddenIcons,
	listWithAction,
	nestedList,
	selectableList,
	serviceList,
	settingsList
} from '../../../.storybook/data/lists'
import {
	userList,
	userList02,
	userList03
} from '../../../.storybook/data/people'
import Tabs from '../Tabs/Tabs'
import ListHeader from './components/ListHeader/ListHeader'
import ListItem from './components/ListItem/ListItem'
import SortableList from './components/SortableList/SortableList'
import List, { ListWrapper } from './List'

const stories = storiesOf('List', module)

interface ITabbedProps {}
interface ITabbedState {
	users: SpruceSchemas.Core.IUser[]
	tabs: SpruceSchemas.Local.ITab[]
	activeTabIndex: number
}

class TabbedList extends Component<ITabbedProps, ITabbedState> {
	public state = {
		users: userList02,
		tabs: [
			{
				text: 'Guests',
				panel: <List items={userList} />
			},
			{
				text: 'Team',
				panel: <List items={userList02} />
			},
			{
				text: 'Settings',
				panel: <List items={userList03} />
			}
		],
		activeTabIndex: 0
	}

	public handleTabClick = (idx: number) => {
		this.setState({
			activeTabIndex: idx
		})
	}

	public render(): React.ReactElement {
		const { tabs, activeTabIndex } = this.state

		return (
			<ListWrapper>
				<Fragment>
					<ListHeader title="Notes" />
					<Tabs
						tabs={tabs.map((tab, idx) => ({
							isCurrent: idx === activeTabIndex,
							onClick: () => this.handleTabClick(idx),
							...tab
						}))}
					/>
				</Fragment>
			</ListWrapper>
		)
	}
}

// Stories.addDecorator(
// 	withKnobsOptions({
// 		escapeHTML: false
// 	})
// )

stories.addDecorator(withKnobs)

stories
	.add('List Item', () => (
		<ListItem
			id="unique"
			title={text('title', 'Wed, Oct 28')}
			subtitle={text('subtitle', '9am–4pm')}
			avatar={object<SpruceSchemas.Local.IAvatar | undefined>(
				'avatar',
				undefined
			)}
			image={object('image', undefined)}
			icon={{ isLineIcon: boolean('isLineIcon', true), name: text('name', '') }}
			isDraggable={boolean('isDraggable', false)}
			buttons={object('buttons', [])}
			toggle={object<SpruceSchemas.Local.IListItem['toggle']>('toggle', {})}
			contextMenu={object('contextMenu', undefined)}
			isLoading={boolean('isLoading', false)}
		/>
	))
	.add('Text List', () => (
		<Fragment>
			<List
				header={object('header: text list', { title: 'Holidays' })}
				isSmall={boolean('isSmall', false)}
				items={object('items: text list', dateList)}
				isLoading={boolean('isLoading', false)}
			/>
			<SortableList
				header={object('header: sortable list', { title: 'Services' })}
				isSmall={boolean('isSmall', false)}
				onConfirm={() => console.log('Confirmed!')}
				items={object('items: sortable list', serviceList)}
				onSortStart={() => null}
				onSortEnd={() => null}
				areSeparatorsVisible
				isLoading={boolean('isLoading', false)}
			/>
			<List
				header={object('header: dates list', { title: 'Important Dates' })}
				isSmall={boolean('isSmall', false)}
				items={object('items: dates list', dateList)}
				isLoading={boolean('isLoading', false)}
			/>
		</Fragment>
	))
	.add('Nested List', () => <List isSmall items={nestedList} />)
	.add('List with an action', () => <List items={listWithAction} />)
	.add('Icons: some hidden', () => (
		<List
			header={object('header: dates list', { title: 'Important Dates' })}
			isSmall={boolean('isSmall', false)}
			items={object('items: dates list', listHiddenIcons)}
		/>
	))
	.add('Settings List', () => (
		<List
			header={object('header', { title: 'Settings' })}
			items={object('items', settingsList)}
		/>
	))
	.add('People List', () => (
		<List
			header={{
				title: 'Team Schedule',
				subtitle: 'Mon, Sep 27',
				buttons: [
					{
						text: 'Today',
						kind: 'simple'
					},
					{
						icon: {
							name: 'calendar',
							isLineIcon: true
						},
						kind: 'simple'
					},
					{
						icon: {
							name: 'arrow_back'
						},
						kind: 'simple'
					},
					{
						icon: {
							customIcon: 'arrow_forward'
						},
						kind: 'simple'
					}
				]
			}}
			isSmall={boolean('isSmall', false)}
			items={object('items', userList)}
		/>
	))
	.add('People Tabbed', () => <TabbedList />)
	.add('Selectable Items', () => (
		<List
			selectable={object('selectable', {
				schemaId: 'checkbox',
				values: {}
			})}
			items={object('selectable items', selectableList)}
			isSmall={boolean('isSmall', false)}
		/>
	))
	.add('Expandable List Item', () => <List items={expandableList} />)
