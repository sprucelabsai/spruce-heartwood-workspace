import React from 'react'
import { Tag } from '../../../Forms'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

interface ITableFiltersProps {
	/** Filters applied to the table */
	filters: SpruceSchemas.Local.ITag[]
}

const TableFilters = (props: ITableFiltersProps) => {
	const { filters } = props
	return (
		<div className="table-filters__wrapper">
			{filters.map(filter => (
				<Tag key={filter.text} kind="secondary" isSmall {...filter} />
			))}
		</div>
	)
}

export default TableFilters
