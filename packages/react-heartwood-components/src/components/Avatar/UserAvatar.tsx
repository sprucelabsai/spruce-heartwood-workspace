import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import Avatar from './Avatar'

const UserAvatar = (props: SpruceSchemas.Local.IUserAvatar) => {
	const { user, ...avatar } = props
	const { profileImages, defaultProfileImages } = user

	const profileImage =
		profileImages?.['profile150@2x'] ?? defaultProfileImages['profile150@2x']

	return (
		<Avatar
			src={profileImage}
			className={cx(avatar.className, {
				'default-avatar': !profileImages || !profileImages.profile150
			})}
			{...avatar}
		/>
	)
}

export default UserAvatar
