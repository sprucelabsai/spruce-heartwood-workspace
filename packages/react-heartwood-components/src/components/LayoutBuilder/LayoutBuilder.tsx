import React, { Fragment } from 'react'
import Button from '../Button/Button'
import { CardBuilder } from '../Card'
import LayoutSpacing from '../Layout/components/LayoutSpacing/LayoutSpacing'
import Layout from '../Layout/Layout'
import SidebarHeader from '../Core/components/Sidebar/components/SidebarHeader/SidebarHeader'
import SidebarSection from '../Core/components/Sidebar/components/SidebarSection/SidebarSection'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

const LayoutBuilder = ({ items }: SpruceSchemas.Local.ILayoutBuilder) => (
	<Fragment>
		{items &&
			items.map(item => {
				if (item) {
					if (item.schemaId === 'cardBuilder') {
						return <CardBuilder {...item.values} />
					} else if (item.schemaId === 'button') {
						return <Button {...item.values} />
					} else if (item.schemaId === 'layout') {
						return <Layout {...item.values} />
					} else if (item.schemaId === 'layoutSpacing') {
						return <LayoutSpacing {...item.values} />
					} else if (item.schemaId === 'sidebarHeader') {
						return <SidebarHeader {...item.values} />
					} else if (item.schemaId === 'sidebarSection') {
						return <SidebarSection {...item.values} />
					}
				}
			})}
	</Fragment>
)

export default LayoutBuilder
