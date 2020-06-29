import {
	withKnobs,
	boolean,
	select,
	text,
	object
} from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { map, sampleSize } from 'lodash'
import React, { Component } from 'react'
import { generateLocations } from '../../../.storybook/data/tableData'
import Card, { CardHeader, CardBody } from '../Card'
import Modal from '../Modal/Modal'
import RecordSelectionList, {
	IRecordSelectionListItemProps
} from './RecordSelectionList'

const stories = storiesOf('RecordSelectionList', module)

stories.addDecorator(withKnobs)

type RSLExampleProps = {
	canSelect?: 'many' | 'one'
	canRemove: boolean
	locations: Array<Record<string, any>>
	totalRecordCount: number
	maxRowsVisible?: number | 'auto'
	canSearch?: boolean
	searchValue?: string
	onSearchChange?: (newVal: string) => void
}

type RSLExampleState = {
	isModalOpen?: boolean
	selectedIds: Array<string>
	unselectableIds: Array<string>
	locations: Array<Record<string, any>>
	emptyState?: any
}

class RecordListItemsExample extends Component<
	RSLExampleProps,
	RSLExampleState
> {
	public constructor(props) {
		super(props)

		let selectedIds = props.locations.map(loc => loc.node.id)

		if (props.canSelect === 'one') {
			selectedIds = sampleSize(selectedIds, 1)
		} else {
			selectedIds = sampleSize(selectedIds, Math.floor(selectedIds.length / 2))
		}

		const unselectedIds = props.locations
			.map(loc => loc.node.id)
			.filter(locationId => selectedIds.indexOf(locationId) === -1)

		const unselectableIds = sampleSize(unselectedIds, unselectedIds.length / 2)

		this.state = { selectedIds, locations: props.locations, unselectableIds }
	}

	public render() {
		const {
			canSearch = true,
			canSelect,
			canRemove,
			totalRecordCount,
			onSearchChange,
			maxRowsVisible,
			searchValue
		} = this.props

		const { selectedIds, locations, unselectableIds } = this.state

		return (
			<RecordSelectionList
				searchValue={searchValue}
				onSearchChange={onSearchChange}
				canSearch={canSearch}
				searchLabel={'Search Label'}
				selectedIds={selectedIds}
				unselectableIds={unselectableIds}
				loadRecordListItems={async ({
					limit,
					offset,
					search
				}): Promise<IRecordSelectionListItemProps[]> => {
					// Artificial API wait time
					await new Promise(resolve =>
						setTimeout(() => {
							resolve()
						}, Math.random() * 1000)
					)

					let results: Record<string, any>[] = []

					if (search) {
						const filteredLocations = locations.filter(location => {
							return location.node.publicName.match(new RegExp(search, 'ig'))
						})

						results = filteredLocations.slice(offset, offset + limit)
					} else {
						results = locations.slice(offset, offset + limit)
					}

					const recordListItems = results.map(result => {
						return {
							id: result.node.id,
							title: result.node.publicName,
							subtitle: result.node.address,
							isDisabled: unselectableIds.indexOf(result.node.id) >= 0,
							note:
								unselectableIds.indexOf(result.node.id) >= 0
									? 'Location already in group!'
									: ''
						}
					})

					return recordListItems
				}}
				canSelect={canSelect}
				canRemove={canRemove}
				onSelect={id => {
					// Typically you'd want "many" or "one", so you'd only need one side
					// of this conditional.
					if (canSelect === 'many') {
						if (selectedIds.indexOf(id) >= 0) {
							this.setState({
								selectedIds: selectedIds.filter(selectedId => selectedId !== id)
							})
						} else {
							this.setState({ selectedIds: [...selectedIds, id] })
						}
					} else if (canSelect === 'one') {
						this.setState({ selectedIds: [id] })
					}
				}}
				onRemove={id => {
					// The component maintains state of the records it has loaded, but
					// it's up to you to remove them from your list in your local state.
					// Also, if for some reason you want to have selection alongside deletion,
					// you should be sure to clear out the selection at the same time.
					this.setState({
						selectedIds: selectedIds.filter(selectedId => selectedId !== id),
						locations: locations.filter(location => location.id !== id)
					})
				}}
				totalRecordCount={totalRecordCount}
				maxRowsVisible={
					maxRowsVisible && maxRowsVisible !== 'auto'
						? +maxRowsVisible
						: undefined
				}
				noSearchResultsEmptyState={{
					heading: "Nothin' here...",
					icon: { name: 'no_matches' },
					primaryButton: {
						text: "Show all, y'all!"
					}
				}}
			/>
		)
	}
}

stories.add('In a Card', () => (
	<div style={{ width: '320px', padding: '8px' }}>
		<Card>
			<CardHeader title="Card Title" />
			<CardBody>
				<RecordListItemsExample
					canSelect={select('Can Select', [null, 'many', 'one'], null)}
					canRemove={boolean('Can Remove', false)}
					locations={map(generateLocations({ amount: 50 }), o => ({
						node: { ...o }
					}))}
					totalRecordCount={50}
					maxRowsVisible={select('Max Rows Visible', [null, 3, 'auto'], 3)}
				/>
			</CardBody>
		</Card>
	</div>
))

class ExternalStateExample extends React.Component {
	public state = { searchValue: '' }

	public render() {
		const { searchValue } = this.state

		return (
			<div style={{ width: '320px', padding: '8px' }}>
				<p>
					This input will control the search of the following
					RecordSelectionList
				</p>
				<input
					type="text"
					value={searchValue}
					onChange={e => {
						this.setState({ searchValue: e.target.value })
					}}
				/>
				<br />
				<br />

				<Card>
					<CardHeader title="Card Title" />
					<CardBody>
						<RecordListItemsExample
							canSearch={false}
							searchValue={searchValue}
							onSearchChange={newSearchValue => {
								this.setState({ searchValue: newSearchValue })
							}}
							canSelect={select('Can Select', [null, 'many', 'one'], null)}
							canRemove={boolean('Can Remove', false)}
							locations={map(generateLocations({ amount: 50 }), o => ({
								node: { ...o }
							}))}
							totalRecordCount={50}
							maxRowsVisible={select('Max Rows Visible', [null, 3, 'auto'], 3)}
						/>
					</CardBody>
				</Card>
			</div>
		)
	}
}

stories.add('Search Controlled by External State', () => {
	return <ExternalStateExample />
})

stories.add('In a Modal', () => (
	<Modal isOpen onAfterOpen={() => null} onRequestClose={() => null}>
		<Modal.Header title="Modal title" onRequestClose={() => null} />
		<Modal.Body>
			<RecordListItemsExample
				canSelect={select('Can Select', [null, 'many', 'one'], 'many')}
				canRemove={boolean('Can Remove', true)}
				locations={map(generateLocations({ amount: 100 }), o => ({
					node: { ...o }
				}))}
				totalRecordCount={100}
				maxRowsVisible={select('Max Rows Visible', [null, 3, 'auto'], 3)}
			/>
		</Modal.Body>
	</Modal>
))

stories.add('Empty State', () => (
	<div style={{ width: '320px', padding: '8px' }}>
		<Card>
			<CardHeader title="Card Title" />
			<CardBody isSectioned={false} hasBottomPadding={false}>
				<RecordSelectionList
					canSearch={false}
					selectedIds={[]}
					unselectableIds={[]}
					loadRecordListItems={async () => []}
					noDataEmptyState={{
						heading: text('emptyState:headline', 'Nothing to see here'),
						subheading: text(
							'emptyState:subheadline',
							'There is none of that here'
						),
						icon: object('icon', { name: 'text', isLineIcon: true }),
						primaryButton: {
							text: text(
								'emptyState:primaryAction text',
								'Do something about it'
							)
						}
					}}
				/>
			</CardBody>
		</Card>
	</div>
))

interface IRecordSelectionListSearchExampleProps {
	locations: Array<Record<string, any>>
}
interface IRecordSelectionListSearchExampleState {}

class RecordSelectionListSearchExample extends Component<
	IRecordSelectionListSearchExampleProps,
	IRecordSelectionListSearchExampleState
> {
	public render() {
		const { locations } = this.props

		return (
			<RecordSelectionList
				searchLabel={'Search Label'}
				loadRecordListItems={async ({ limit, offset, search }) => {
					if (!search) {
						return []
					}

					// Artificial API wait time
					await new Promise(resolve =>
						setTimeout(() => {
							resolve()
						}, Math.random() * 1000)
					)

					let results: Record<string, any>[] = []

					if (search) {
						const filteredLocations = locations.filter(location => {
							return location.node.publicName.match(new RegExp(search, 'ig'))
						})

						results = filteredLocations.slice(offset, offset + limit)
					} else {
						results = locations.slice(offset, offset + limit)
					}

					const recordListItems = results.map(result => {
						return {
							id: result.node.id,
							title: result.node.publicName,
							subtitle: result.node.address
						}
					})

					return recordListItems
				}}
				canSearch
				maxRowsVisible={5}
				noSearchResultsEmptyState={{
					heading: "Nothin' here...",
					icon: { name: 'no_matches' },
					primaryButton: {
						text: "Show all, y'all!"
					}
				}}
			/>
		)
	}
}

stories.add('Only Showing Records When Searching', () => (
	<div style={{ width: '320px', padding: '8px' }}>
		<Card>
			<CardHeader title="Card Title" />
			<CardBody>
				<RecordSelectionListSearchExample
					locations={map(generateLocations({ amount: 50 }), o => ({
						node: { ...o }
					}))}
				/>
			</CardBody>
		</Card>
	</div>
))
