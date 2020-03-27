import React from 'react'

export interface IPageContentProps {
	/** Contents of the Page */
	children: Node
}

const PageContent = (props: IPageContentProps) => {
	const { children } = props

	return <div className="page__content">{children}</div>
}

PageContent.displayName = 'Page.Content'
export default PageContent
