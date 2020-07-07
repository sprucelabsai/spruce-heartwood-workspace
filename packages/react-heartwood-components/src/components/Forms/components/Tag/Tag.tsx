import {
	defaultProps,
	SpruceSchemas,
	tagDefinition,
} from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import CloseIcon from '../../../../../static/assets/icons/ic_close.svg'
import Button from '../../../Button/Button'

const defaults = defaultProps(tagDefinition)

const Tag = (props: SpruceSchemas.Local.ITag = { ...defaults }) => {
	const { text, kind, className, isSmall } = props
	const parentClass = cx('tag', className, {
		'tag-primary': kind === 'primary',
		'tag-secondary': kind === 'secondary',
		'tag-small': isSmall,
	})
	return (
		<div className={parentClass}>
			<span className="tag__text">{text}</span>
			<Button
				className="tag__btn"
				isSmall={isSmall}
				icon={{
					customIcon: CloseIcon,
				}}
			/>
		</div>
	)
}

Tag.defaultProps = defaults

export default Tag
