// @flow
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { Formik } from 'formik'
import React, { Fragment } from 'react'
import { generateLocations } from '../../../.storybook/data/tableData'
import Button from '../Button/Button'
import Card, { CardBody, CardHeader } from '../Card'
import {
	FormLayout,
	FormLayoutGroup,
	FormLayoutItem,
	TextInput
} from '../Forms'
import LayoutSection from '../Layout/components/LayoutSection/LayoutSection'
import Layout from '../Layout/Layout'
import Tabs from '../Tabs/Tabs'
import Table, { TableFilters, TableSearch } from './index'

const stories = storiesOf('Table', module)

stories.addDecorator(withKnobs)

const staticLocations = generateLocations({ amount: 149 })

const columns = [
	{
		Header: 'Public Name',
		accessor: 'publicName',
		// NOTE: It looks like with has to be passed here to override built-in inline styles
		minWidth: 300,
		maxWidth: 400,
		Cell: function PublicNameCell(row) {
			return <a href="#">{row.value}</a>
		}
	},
	{
		Header: 'Store',
		accessor: 'storeNumber',
		minWidth: 80,
		maxWidth: 100
	},
	{
		Header: 'Status',
		accessor: 'status',
		minWidth: 80,
		maxWidth: 100
	},
	{
		Header: 'Address',
		accessor: 'address',
		minWidth: 420,
		maxWidth: 500
	}
]

type State = {
	locations: Array<Record<string, any>>
}

type Props = {}

class ExpandableEditableTable extends React.Component<Props, State> {
	public constructor(props) {
		super(props)
		this.state = {
			locations: generateLocations({ amount: 149 })
		}
	}

	public handleChangeHours = (e, location, dayId) => {
		const { locations } = this.state

		locations.forEach(l => {
			if (l.id === location.id) {
				const updatedSchedule = l.schedule.map(day => {
					const updatedDay = day
					if (day.id === dayId) {
						l.isDirty = true
						updatedDay.hours = e.target.value
						updatedDay.isDirty = true
					}
					return updatedDay
				})

				l.schedule = updatedSchedule
			}
		})

		this.setState({ locations })
	}

	public handleValidation = async (location: Record<string, any>, dayId) => {
		const errors = {}

		const { locations } = this.state

		const updatedLocation = locations.find(l => l.id === location.id)
		const updatedScheduleDay =
			updatedLocation && updatedLocation.schedule.find(day => day.id === dayId)

		if (updatedLocation && updatedScheduleDay && !updatedScheduleDay.isDirty) {
			updatedLocation.isDirty = true
			updatedScheduleDay.isDirty = true
			this.setState({ locations })
		}

		return errors
	}

	public handleSaveHours = async (
		location: Record<string, any>,
		dayId,
		values
	) => {
		const { locations } = this.state

		const updatedLocation = locations.find(l => l.id === location.id)
		const updatedScheduleDay =
			updatedLocation && updatedLocation.schedule.find(day => day.id === dayId)

		if (updatedLocation && updatedScheduleDay) {
			updatedScheduleDay.hours = values.hours || ''
			updatedLocation.isDirty = false
			updatedScheduleDay.isDirty = false
			this.setState({ locations })
		}
	}

	public renderStoreScheduleForRow = (row: Record<string, any>) => {
		const location = this.state.locations[row.index]
		const schedule = location && location.schedule
		return schedule ? (
			<Fragment>
				<CardHeader title={'Store Schedule'} />
				<Table
					totalRows={schedule.length}
					isSelectable
					className="store-schedule-table"
					data={schedule}
					columns={[
						{
							Header: 'Day',
							accessor: 'day',
							minWidth: 100,
							maxWidth: 300
						},
						{
							Header: 'Hours',
							accessor: 'hours',
							minWidth: 100,
							maxWidth: 500
						}
					]}
					collapseOnDataChange={false}
					loading={false}
					pageSize={schedule.length}
					showPagination={false}
					rowIsDirty={row => {
						return row.original.isDirty
					}}
				/>
			</Fragment>
		) : null
	}

	public render() {
		const { locations } = this.state

		return (
			<Table
				totalRows={locations.length}
				className="store-locations-table"
				data={locations}
				columns={columns}
				sortable={true}
				defaultPageSize={50}
				defaultSorted={[
					{
						id: 'publicName',
						desc: false
					}
				]}
				loading={false}
				collapseOnDataChange={false}
				paginationProps={{
					showPages: true,
					onPageButtonClick: () => console.log('onPageButtonClick'),
					totalPages: Math.ceil(locations.length / 50),
					currentPage: 0
				}}
				rowIsDirty={row => {
					return row.original.isDirty
				}}
				subComponentForRow={this.renderStoreScheduleForRow}
			/>
		)
	}
}

stories
	.add('Table', () => {
		return (
			<Layout width={'fullWidth'}>
				<LayoutSection>
					<Card>
						{boolean('Show Title', false) && (
							<CardHeader title={text('Title', 'Locations')} />
						)}
						{boolean('Show Tabs', false) && (
							<Tabs
								tabs={[
									{ text: 'All locations', isCurrent: true },
									{ text: 'Midwest' },
									{ text: 'Northeast' }
								]}
								isPadded
							/>
						)}
						<TableSearch
							id="location-search"
							placeholder="Search locations…"
							getSuggestions={val => {
								console.log(val)
								return []
							}}
							getSuggestionValue={suggestion => {
								console.log(suggestion)
								return 'suggestion'
							}}
							renderSuggestion={() => {
								return null
							}}
						/>
						{boolean('Is Filtered', false) && (
							<TableFilters
								filters={[
									{ text: 'State: IL' },
									{ text: 'Status: Published' },
									{ text: 'City: Bolingbrook' },
									{ text: 'City: Chicago' },
									{
										text: 'Chimera Hair Salon'
									}
								]}
							/>
						)}
						<Table
							totalRows={staticLocations.length}
							className="services-table"
							data={staticLocations}
							columns={columns}
							sortable={true}
							defaultPageSize={50}
							defaultSorted={[
								{
									id: 'publicName',
									desc: false
								}
							]}
							loading={false}
							paginationProps={{
								showPages: true,
								onPageButtonClick: () => console.log('onPageButtonClick'),
								totalPages: Math.ceil(staticLocations.length / 50),
								currentPage: 0
							}}
						/>
					</Card>
				</LayoutSection>
			</Layout>
		)
	})
	.add('Expandable Table', () => {
		return (
			<Layout width={'fullWidth'}>
				<LayoutSection>
					<Card>
						<ExpandableEditableTable />
					</Card>
				</LayoutSection>
			</Layout>
		)
	})
	.add('Selectable Table', () => (
		<Layout width={'fullWidth'}>
			<LayoutSection>
				<Card>
					{boolean('Show Title', false) && (
						<CardHeader title={text('Title', 'Locations')} />
					)}
					{boolean('Show Tabs', false) && (
						<Tabs
							tabs={[
								{ text: 'All locations', isCurrent: true },
								{ text: 'Midwest' },
								{ text: 'Northeast' }
							]}
							isPadded
						/>
					)}
					<TableSearch
						id="location-search"
						placeholder="Search locations…"
						getSuggestions={async val => {
							console.log(val)
							return []
						}}
						getSuggestionValue={suggestion => {
							console.log(suggestion)
							return 'suggestion'
						}}
						renderSuggestion={() => {
							return null
						}}
					/>
					{boolean('Is Filtered', false) && (
						<TableFilters
							filters={[
								{ text: 'State: IL' },
								{ text: 'Status: Published' },
								{ text: 'City: Bolingbrook' },
								{ text: 'City: Chicago' },
								{
									text: 'Chimera Hair Salon'
								}
							]}
						/>
					)}
					<Table
						totalRows={staticLocations.length}
						className="services-table-selectable"
						data={staticLocations}
						columns={columns}
						sortable={true}
						defaultPageSize={50}
						defaultSorted={[
							{
								id: 'publicName',
								desc: false
							}
						]}
						loading={false}
						paginationProps={{
							showPages: true,
							onPageButtonClick: () => console.log('onPageButtonClick'),
							totalPages: Math.ceil(staticLocations.length / 50),
							currentPage: 0
						}}
						isSelectable
						kind="location"
						bulkActions={[
							{
								text: 'Add to location group',
								onClick: () => console.log('Click')
							},
							{
								text: 'Make locations live',
								onClick: () => console.log('Click')
							},
							{
								text: 'Hide locations',
								onClick: () => console.log('Click')
							},
							{
								text: 'Delete locations',
								onClick: () => console.log('Click')
							}
						]}
					/>
				</Card>
			</LayoutSection>
		</Layout>
	))
