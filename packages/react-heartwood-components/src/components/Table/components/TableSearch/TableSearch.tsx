import React, { ReactElement } from 'react'
import { default as Autosuggest } from '../../../Forms/components/Autosuggest/Autosuggest'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

export interface ITableSearchProps extends SpruceSchemas.Local.IAutosuggest {}

const TableSearch = (props: ITableSearchProps): ReactElement => {
	const { ...rest } = props

	return (
		<div className="table-search__wrapper">
			<Autosuggest
				defaultSuggestions={[]}
				isSmall
				icon={{ name: 'search' }}
				{...rest}
			/>
		</div>
	)
}

export default TableSearch
