import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Fragment, ReactNode /*, HTMLProps*/ } from 'react'
import Button from '../Button/Button'
import TextStyle from '../TextStyle/TextStyle'

// Components available for templating
const TextComponentKey = {
	style: TextStyle,
	button: Button
}

const renderText = (child): ReactNode => {
	const { children, ...rest } = child.props
	const handlerProps = { children: child.text || children, ...rest }
	const Handler = child && child.type && TextComponentKey[child.type]

	if (!Handler) {
		return <Fragment key={rest.key}>{children}</Fragment>
	}

	return typeof Handler === 'function' ? (
		Handler({ ...handlerProps })
	) : (
		<Handler {...handlerProps} />
	)
}

// Allows basic templating functionality on text strings
const TemplateEngine = (text = '', context = {}): ReactNode[] => {
	const re = /{{([^}}]+)?}}/g,
		children: Record<string, any>[] = []

	let cursor = 0

	const add = function(line: string, templateVar?: string): void {
		if (line !== '') {
			children.push({
				props: { element: 'span', children: line.replace(/"/g, '\\"') }
			})
		}
		if (templateVar && context[templateVar]) {
			children.push(context[templateVar])
		}
	}

	const matches = text.match(re)

	if (matches) {
		matches.forEach(() => {
			const matched = re.exec(text)

			if (matched) {
				add(text.slice(cursor, matched.index), matched[1])
				cursor = matched.index + matched[0].length
			}
		})
	}

	add(text.substr(cursor, text.length - cursor))

	return children.map(renderText)
}

const Text: React.StatelessComponent<SpruceSchemas.Local.IText> = (
	props
): React.ReactElement => {
	const {
		children: originalChildren,
		className,
		context,
		text: textProps,
		isInline,
		...rest
	} = props
	const Element: any = isInline ? 'span' : 'p'
	let children = originalChildren

	const text = children || textProps || context

	if (typeof text === 'string') {
		children = TemplateEngine(text, context ?? {})
	}

	return (
		<Element className={cx('text', className)} {...rest}>
			{children}
		</Element>
	)
}

export const Span: React.StatelessComponent<SpruceSchemas.Local.IText> = (
	props: SpruceSchemas.Local.IText
): React.ReactElement => {
	const { children, className, ...rest } = props

	return (
		<Text isInline={true} className={cx('text', className)} {...rest}>
			{children}
		</Text>
	)
}

export default Text
