import React, { ReactElement } from 'react'
import { default as Autosuggest } from '../../../Forms/components/Autosuggest/Autosuggest'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

const TableSearch = (props: SpruceSchemas.Local.IAutosuggest): ReactElement => {
	const { ...rest } = props

	return (
		<div className="table-search__wrapper">
			<Autosuggest isSmall icon={{ name: 'search' }} {...rest} />
		</div>
	)
}

export default TableSearch
