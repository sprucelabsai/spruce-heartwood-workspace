import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownText = (
	props: SpruceSchemas.Local.IMarkdown
): React.ReactElement => {
	const { source, id } = props
	return (
		<ReactMarkdown
			className={'markdown-wrapper'}
			key={id ?? undefined}
			source={source}
		/>
	)
}

export default MarkdownText
