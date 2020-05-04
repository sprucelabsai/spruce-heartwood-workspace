import React from 'react'
import cx from 'classnames'
import Avatar from './Avatar'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

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
