import React from 'react'
import cx from 'classnames'

import ImageSSR from '../../components/ImageSSR/ImageSSR'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

const Avatar = (props: SpruceSchemas.local.IAvatar): React.ReactElement => {
	const {
		src,
		alt,
		isLarge,
		isVertical,
		showIndicator,
		status,
		name,
		text,
		width,
		height,
		className,
		...rest
	} = props

	const wrapperClass = cx('avatar-wrapper', className, {
		'avatar-wrapper-large': isLarge,
		'avatar-wrapper-has-text': text,
		'avatar-wrapper-vertical': isVertical
	})
	const indicatorClass = cx('avatar__indicator', {
		'avatar__indicator--is-online': status === 'online'
	})
	let imgWidth = 40
	let imgHeight = 40
	if (isLarge) {
		imgWidth = 96
		imgHeight = 96
	}
	if (width) {
		imgWidth = width
	}
	if (height) {
		imgHeight = height
	}

	return (
		<div className={wrapperClass}>
			<div className="avatar__image-wrapper">
				<ImageSSR
					id="avatar"
					className="avatar"
					src={src}
					alt={alt}
					width={imgWidth}
					height={imgHeight}
					{...rest}
				/>
				{showIndicator && <div className={indicatorClass} />}
			</div>
			{(name || text) && (
				<div className="avatar__text-wrapper">
					{name && <p className="avatar__name">{name}</p>}
					{text && <p className="avatar__text">{text}</p>}
				</div>
			)}
		</div>
	)
}

Avatar.defaultProps = {
	isLarge: false,
	isVertical: false,
	showIndicator: false,
	status: 'offline',
	name: '',
	text: '',
	width: null,
	height: null
}

export default Avatar
