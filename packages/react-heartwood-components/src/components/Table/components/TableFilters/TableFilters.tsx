import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React from 'react'
import { Tag } from '../../../Forms'

interface ITableFiltersProps {
	/** Filters applied to the table */
	filters: SpruceSchemas.Local.ITag[]
}

const TableFilters = (props: ITableFiltersProps) => {
	const { filters } = props
	return (
		<div className="table-filters__wrapper">
			{filters.map((filter, idx) => (
				<Tag
					key={filter.text ?? `tag-${idx}`}
					kind="secondary"
					isSmall
					{...filter}
				/>
			))}
		</div>
	)
}

export default TableFilters
