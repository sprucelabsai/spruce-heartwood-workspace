import React from 'react'
import cx from 'classnames'
import Button from '../../../Button/Button'
import CloseIcon from '../../../../../static/assets/icons/ic_close.svg'
import { defaultProps, SpruceSchemas } from '@sprucelabs/heartwood-skill'

const defaults = defaultProps(SpruceSchemas.Local.Tag.definition)

const Tag = (props: SpruceSchemas.Local.ITag = { ...defaults }) => {
	const { text, kind, className, isSmall } = props
	const parentClass = cx('tag', className, {
		'tag-primary': kind === 'primary',
		'tag-secondary': kind === 'secondary',
		'tag-small': isSmall
	})
	return (
		<div className={parentClass}>
			<span className="tag__text">{text}</span>
			<Button
				className="tag__btn"
				isSmall={isSmall}
				icon={{
					customIcon: CloseIcon
				}}
			/>
		</div>
	)
}

Tag.defaultProps = defaults

export default Tag
