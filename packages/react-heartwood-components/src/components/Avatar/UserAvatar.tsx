import React from 'react'
import cx from 'classnames'
import Avatar from './Avatar'
import { IUserAvatar } from '@sprucelabs/heartwood-skill'

const UserAvatar = (props: IUserAvatar) => {
	const { user, ...avatar } = props
	const { profileImages = {}, defaultProfileImages = {} } = user

	const profileImage =
		(profileImages && profileImages.profile150) ||
		(defaultProfileImages && defaultProfileImages.profile150)

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
