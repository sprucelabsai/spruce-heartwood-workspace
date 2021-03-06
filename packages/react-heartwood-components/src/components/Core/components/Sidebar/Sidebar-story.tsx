// @flow
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import { withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React, { Component } from 'react'
import StylesProvider from '../../../../../.storybook/StylesProvider'
import HomeIcon from '../../../../../static/assets/icons/Interface-Essential/Home/house-1--16w.svg'
import NotificationsIcon from '../../../../../static/assets/icons/Messages-Chat-Smileys/Conversation/conversation-text--16w.svg'
import TeamsIcon from '../../../../../static/assets/icons/Work-Office-Companies/Human-Resources/human-resources-search-team--16w.svg'
import Sidebar from './Sidebar'

const ProvideStyles = storyFn => <StylesProvider>{storyFn()}</StylesProvider>

const stories = storiesOf('Sidebar', module)

stories.addDecorator(ProvideStyles)
stories.addDecorator(withKnobs)

const personalItems: SpruceSchemas.Local.ISidebar['items'] = [
	{
		text: 'Home',
		icon: { customIcon: <HomeIcon className="sidebar-item__line-icon" /> },
		isCurrent: true,
		href: '#'
	},
	{
		text: 'Teams',
		icon: { customIcon: <TeamsIcon className="sidebar-item__line-icon" /> },
		isCurrent: false,
		href: '#'
	},
	{
		text: 'Notification Preferences',
		icon: {
			customIcon: <NotificationsIcon className="sidebar-item__line-icon" />
		},
		isCurrent: false,
		href: '#'
	}
]

const backLink = {
	text: 'Organization Dashboard',
	href: '#'
}

interface IProps {}

interface IState {
	showSidebar?: boolean
}

class Example extends Component<IProps, IState> {
	public state = {
		showSidebar: true
	}

	public handleToggleSidebar = () => {
		this.setState(prevState => ({
			showSidebar: !prevState.showSidebar
		}))
	}

	public render() {
		const { showSidebar } = this.state

		return (
			<Sidebar
				items={personalItems}
				backLink={backLink}
				isExpanded={showSidebar}
				onToggleExpanded={this.handleToggleSidebar}
				onForceCollapse={() => null}
				// @ts-ignore
				STORYBOOKdoNotWrap
			/>
		)
	}
}

stories.add('Default', () => <Example />)
