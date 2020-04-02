import React from 'react'
import { Tag } from '../../../Forms'
import { ITagProps } from '../../../Forms/components/Tag/Tag'

interface ITableFiltersProps {
	/** Filters applied to the table */
	filters: ITagProps[]
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
