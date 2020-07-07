import {
	SpruceSchemas,
	defaultProps,
	sprucebotAvatarDefinition,
} from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import accomplishedAnimation from './animations/accomplished.json'
import chillAnimation from './animations/chill.json'
import contemplativeAnimation from './animations/contemplative.json'

const ANIMATION_MAP = {
	chill: chillAnimation,
	accomplished: accomplishedAnimation,
	contemplative: contemplativeAnimation,
}

const defaults = defaultProps(sprucebotAvatarDefinition)

export default class SprucebotAvatar extends Component<
	SpruceSchemas.Local.ISprucebotAvatar
> {
	public static defaultProps = defaults

	public render() {
		const { stateOfMind, size } = this.props

		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: ANIMATION_MAP[stateOfMind || 'chill'],
			rendererSettings: {},
		}

		return (
			<div
				className={cx('sprucebot-avatar', {
					'sprucebot-avatar-small': size === 'small',
					'sprucebot-avatar-medium': size === 'medium',
					'sprucebot-avatar-large': size === 'large',
				})}
			>
				<Lottie options={defaultOptions} />
			</div>
		)
	}
}
