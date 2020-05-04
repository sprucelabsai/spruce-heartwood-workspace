import React from 'react'
import SidebarSection from '../SidebarSection/SidebarSection'
import Button from '../../../../../Button/Button'
import Text from '../../../../../Text/Text'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

const SidebarHeader = (
	props: SpruceSchemas.Local.ISidebarHeader
): React.ReactElement => {
	const { button, title, onClose, onGoBack } = props

	return (
		<SidebarSection className="sidebar-header">
			<div className="sidebar-header__action-wrapper">
				{onGoBack && (
					<Button icon={{ name: 'arrow_back' }} onClick={onGoBack} isSmall />
				)}
			</div>
			<Text className="sidebar-header__title">{title}</Text>
			<div className="sidebar-header__action-wrapper">
				{onClose && (
					<Button icon={{ name: 'close' }} onClick={onClose} isSmall />
				)}
			</div>
			{button && (
				<div className="sidebar-header__action-wrapper">
					<Button {...button} />
				</div>
			)}
		</SidebarSection>
	)
}

export default SidebarHeader
