import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React from 'react'
import Avatar from '../../../Avatar/Avatar'
import Button from '../../../Button/Button'
import Text from '../../../Text/Text'

interface IProfileSummaryProps {
	/** User profile image */
	image: string

	/** Use name */
	name: string

	/** Function for the button */
	onButtonClick: SpruceSchemas.Local.IButton['onClick']
}

const ProfileSummary = (props: IProfileSummaryProps) => {
	const { image, name, onButtonClick } = props
	return (
		<div className="profile-summary">
			<Avatar src={image} alt={name} className="profile-summary__avatar" />
			<Text className="profile-summary__name">{name}</Text>
			<Button
				onClick={onButtonClick}
				className="profile-summary__btn"
				icon={{ name: 'more_vertical', isLineIcon: true }}
				text="More options"
				isIconOnly
				isSmall
			/>
		</div>
	)
}

ProfileSummary.defaultProps = {}

export default ProfileSummary
