import React, { Component } from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import StylesProvider from '../../../.storybook/StylesProvider'
import user01image from '../../../static/assets/users/user-01--96w.png'
import { Sidebar, SidebarSection } from '../Core'
import Card, { CardHeader, CardBody, CardFooter } from '../Card'
import Button from '../Button/Button'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import ContextMenu from '../ContextMenu/ContextMenu'
import Page from '../Page/Page'
import TextStyle from '../TextStyle/TextStyle'
import Heading from '../Heading/Heading'
import Text from '../Text/Text'
import TextContainer from '../TextContainer/TextContainer'
import Avatar from '../Avatar/Avatar'
import SaveBar from '../Core/components/SaveBar/SaveBar'
import FeedBuilder from '../Core/components/FeedBuilder/FeedBuilder'
import { generateMessages } from '../../../.storybook/data/feed'

import View from './View'
import {
	IHWButtonKinds,
	IHWSidebarSide,
	IHWSidebarSpacing
} from '@sprucelabs/spruce-types'
import { ISidebarItemProps } from '../Core/components/Sidebar/components/SidebarItem/SidebarItem'

const ProvideStyles = storyFn => <StylesProvider>{storyFn()}</StylesProvider>

const stories = storiesOf('View', module)

stories.addDecorator(ProvideStyles)
stories.addDecorator(withKnobs)

const personalItems = [
	{
		text: 'Home',
		icon: { icon: 'home', className: 'sidebar-item__line-icon' },
		isCurrent: true,
		href: '#'
	},
	{
		text: 'Teams',
		icon: { icon: 'team', className: 'sidebar-item__line-icon' },
		isCurrent: false,
		href: '#'
	},
	{
		text: 'Notification Preferences',
		icon: { icon: 'messages', className: 'sidebar-item__line-icon' },
		isCurrent: false,
		href: '#'
	}
]

const orgItems: ISidebarItemProps[] = [
	{
		text: 'Organization Dashboard',
		icon: { icon: 'dashboard' },
		isCurrent: false,
		href: '#'
	},
	{
		text: 'Locations',
		icon: { icon: 'location' },
		isCurrent: true,
		href: '#'
	},
	{
		text: 'Team',
		icon: { icon: 'team' },
		href: '#'
	},
	{
		text: 'Skills',
		icon: { icon: 'skill' },
		href: '#',
		action: {
			id: 'getSkills',
			text: 'Get Skills',
			href: '#',
			isSmall: true
		}
	},
	{
		text: 'Settings',
		icon: { icon: 'settings' },
		href: '#'
	}
]

const bizItems: ISidebarItemProps[] = [
	{
		href: '#',
		text: 'Dashboard',
		icon: { icon: 'dashboard' }
	},
	{
		href: '#',
		text: 'Guests',
		icon: { icon: 'guests' },
		isCurrent: true
	},
	{
		href: '#',
		text: 'Team',
		icon: { icon: 'team' }
	},
	{
		href: '#',
		text: 'Calendar',
		icon: { icon: 'calendar' }
	}
]

const user = {
	name: 'Madaline Gibson',
	image: user01image,
	tel: '(605) 230-5253'
}

const organization = {
	name: 'Chimera Hair Salon',
	image:
		'https://www.logoground.com/uploads/2018130762018-04-113965123chimera%20logo%20chimera%20logo.jpg'
}

const skillViewTabs = [
	{
		text: 'Info',
		isCurrent: true
	},
	{
		text: 'Scheduling'
	}
]

interface ISkillViewProps {}
interface ISkillViewState {
	sidebarsExpanded: Record<string, any>
	sidebarsMobileExpanded: Record<string, any>
}

const generateTonsOfContent = () => (
	<TextContainer>
		{[...Array(100)].map((o, idx) => (
			<Text key={idx}>{faker.lorem.paragraph()}</Text>
		))}
	</TextContainer>
)

class SkillViewExample extends Component<ISkillViewProps, ISkillViewState> {
	public state = {
		sidebarsExpanded: {
			right: true,
			left: true
		},
		sidebarsMobileExpanded: {
			right: false,
			left: false
		}
	}

	public componentDidMount = () => {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', this.onResize, false)
		}
	}

	public componentWillUnmount = () => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', this.onResize, false)
		}
	}

	public onResize = () => {
		const { sidebarsMobileExpanded } = this.state
		if (typeof window !== 'undefined') {
			if (window.innerWidth > 990 && sidebarsMobileExpanded.right) {
				this.hideRightSidebar()
			}
			if (window.innerWidth > 750 && sidebarsMobileExpanded.left) {
				this.hideLeftSidebar()
			}
		}
	}

	public handleSidebarToggle = (side: string) => {
		this.setState(prevState => ({
			sidebarsExpanded: {
				...prevState.sidebarsExpanded,
				[side]: !prevState.sidebarsExpanded[side]
			}
		}))
	}

	public handleMobileSidebarToggle = (side: string) => {
		this.setState(prevState => ({
			sidebarsMobileExpanded: {
				...prevState.sidebarsMobileExpanded,
				[side]: !prevState.sidebarsMobileExpanded[side]
			},
			sidebarsExpanded: {
				...prevState.sidebarsExpanded,
				[side]: true
			}
		}))
	}

	public hideRightSidebar = () => {
		this.setState(prevState => ({
			sidebarsMobileExpanded: {
				...prevState.sidebarsMobileExpanded,
				right: false
			}
		}))
	}

	public hideLeftSidebar = () => {
		this.setState(prevState => ({
			sidebarsMobileExpanded: {
				...prevState.sidebarsMobileExpanded,
				left: false
			}
		}))
	}

	public render() {
		const { sidebarsExpanded, sidebarsMobileExpanded } = this.state
		return (
			<View
				// @ts-ignore
				STORYBOOKdoNotWrap
				sidebarItems={orgItems}
				user={user}
				organization={organization}
				isSidebarExpanded={sidebarsExpanded.left}
				isSidebarMobileExpanded={sidebarsMobileExpanded.left}
				toggleSidebarExpanded={() => this.handleSidebarToggle('left')}
				toggleSidebarVisibility={() => this.handleMobileSidebarToggle('left')}
			>
				<Page
					header={{
						title: 'Chimera Hair Salon at the Point',
						primaryAction: {
							id: 'header',
							text: 'Go to location dashboard',
							icon: { id: 'newtab', name: 'new_tab' },
							kind: IHWButtonKinds.Simple,
							isSmall: true
						},
						backLinkHref: '#',
						backLinkText: 'Locations',
						sidebarExpander: {
							icon: { id: 'more', name: 'more_vertical', isLineIcon: true },
							// TODO: Set proper onclick type
							// @ts-ignore
							onClick: () => this.handleMobileSidebarToggle('right')
						},
						tabs: skillViewTabs
					}}
					sidebarIsCollapsed={!sidebarsExpanded.right}
					sidebar={
						<Sidebar
							side={IHWSidebarSide.Right}
							isCollapsible={false}
							isLarge
							isExpanded={sidebarsExpanded.right}
							isMobileExpanded={sidebarsMobileExpanded.right}
							toggleExpanded={() => this.handleSidebarToggle('right')}
							mobileHeader={{
								title: 'Chimera Salon at the Point',
								action: {
									icon: { id: 'close', name: 'close' },
									isSmall: true,
									// TODO: Set proper onclick type
									// @ts-ignore
									onClick: () => this.handleMobileSidebarToggle('right')
								}
							}}
						>
							<SidebarSection>
								<Card isSmall>
									<CardHeader
										labelText="Location Status"
										labelIcon={{ name: 'hide', isLineIcon: true }}
										title="This location is hidden"
									/>
									<CardBody>
										<p>
											This location is currently hidden from guests, but is
											visible to you and your teammates.
										</p>
									</CardBody>
									<CardFooter>
										<ButtonGroup
											actions={[
												{
													text: 'Preview as guest',
													kind: IHWButtonKinds.Simple,
													isSmall: true
												},
												{
													text: 'Make location live',
													kind: IHWButtonKinds.Primary,
													isSmall: true
												}
											]}
										/>
									</CardFooter>
								</Card>
							</SidebarSection>
						</Sidebar>
					}
				>
					{generateTonsOfContent()}
				</Page>
			</View>
		)
	}
}

stories
	.add('Default', () => (
		// @ts-ignore
		<div STORYBOOKdoNotWrap style={{ height: '100vh' }}>
			<View
				// @ts-ignore
				STORYBOOKdoNotWrap
				sidebarItems={personalItems}
				user={user}
				organization={organization}
				isSidebarExpanded
				isChromeless={boolean('isChromeless', false)}
			>
				<Page
					header={{
						title: 'Hello Human'
					}}
				>
					{generateTonsOfContent()}
				</Page>
			</View>
		</div>
	))
	.add('Save Bar', () => (
		// @ts-ignore
		<div STORYBOOKdoNotWrap style={{ height: '100vh' }}>
			<View
				// @ts-ignore
				STORYBOOKdoNotWrap
				sidebarItems={personalItems}
				user={user}
				organization={organization}
				isSidebarExpanded
			>
				<Page
					header={{
						title: 'Hello Human'
					}}
				>
					{generateTonsOfContent()}
				</Page>
				<SaveBar isVisible={boolean('isVisible', true)} />
			</View>
		</div>
	))
	.add('Skill View', () => (
		// @ts-ignore
		<div STORYBOOKdoNotWrap style={{ height: '100vh' }}>
			<SkillViewExample />
		</div>
	))
	.add('Guest Profile', () => {
		const messages = generateMessages({ count: 50, interval: 31 })
		return (
			// @ts-ignore
			<div STORYBOOKdoNotWrap style={{ height: '100vh' }}>
				<View
					// @ts-ignore
					STORYBOOKdoNotWrap
					sidebarItems={bizItems}
					user={user}
					business={organization}
					isSidebarExpanded
				>
					<Page
						sidebar={
							<Sidebar
								isLarge
								isCollapsible={false}
								side={IHWSidebarSide.Right}
							>
								<SidebarSection
									isCentered
									verticalSpacing={IHWSidebarSpacing.Loose}
									horizontalSpacing={IHWSidebarSpacing.Loose}
								>
									<Avatar
										alt="avatar"
										isLarge
										image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80"
									/>
									<Heading>
										<TextStyle type="strong">Dorian Feeney</TextStyle>
									</Heading>
								</SidebarSection>
								<SidebarSection
									horizontalSpacing={IHWSidebarSpacing.Loose}
									className="u-flex-row"
								>
									<Button
										isSmall
										kind={IHWButtonKinds.Secondary}
										className="u-flex-child-grow"
										text="Call Dorian"
										icon={{
											name: 'phone',
											isLineIcon: true
										}}
									/>
									<ContextMenu
										isSmall
										className="u-ml-tight"
										actions={[
											{
												text: 'One action'
											},
											{
												text: 'two action'
											},
											{
												text: 'red action'
											},
											{
												text: 'blue action'
											}
										]}
										isSimple
									/>
								</SidebarSection>
							</Sidebar>
						}
					>
						<FeedBuilder messages={messages} onRowsRequested={() => null} />
					</Page>
				</View>
			</div>
		)
	})
	.add('No Left Sidebar Items', () => {
		return (
			// @ts-ignore
			<div STORYBOOKdoNotWrap style={{ height: '100vh' }}>
				<View
					sidebarItems={[]}
					user={user}
					organization={organization}
					isSidebarExpanded
					termsLink="#"
					privacyLink="#"
				>
					<Page>{generateTonsOfContent()}</Page>
				</View>
			</div>
		)
	})
