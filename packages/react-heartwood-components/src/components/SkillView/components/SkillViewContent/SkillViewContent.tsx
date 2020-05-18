import React from 'react'

export type Props = {
	/** Contents of the Page */
	children: React.ReactNode
}

const SkillViewContent = (props: Props) => {
	const { children } = props

	return <div className="page__content">{children}</div>
}

SkillViewContent.displayName = 'SkillView.Content'

export default SkillViewContent
