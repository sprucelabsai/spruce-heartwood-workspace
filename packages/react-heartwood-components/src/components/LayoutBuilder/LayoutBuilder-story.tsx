import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import LayoutBuilder from './LayoutBuilder'
import { buildCard } from '@sprucelabs/heartwood-skill'

const stories = storiesOf('LayoutBuilder', module)

const cards = buildCard({
	id: 'foo',
	header: {
		title: 'This is a basic card',
		labelText: ''
	},
	body: {
		items: [
			{
				schemaId: 'text',
				values: {
					id: 'first',
					text: `This was built by the CardBuilder (via the SkillViewBuilder)!`
				}
			}
		]
	},
	footer: {
		buttonGroup: {
			buttons: [
				{
					id: 'foo',
					type: 'button',
					text: 'Fire a JS Callback!',
					onClick: () => window.alert('clicked'),
					kind: 'secondary',
					isSmall: true
				}
			]
		}
	}
})

stories.addDecorator(withKnobs)

stories.add('Simply rendering a cardbuilder', () => (
	<LayoutBuilder
		items={[
			{
				schemaId: 'cardBuilder',
				values: cards
			}
		]}
	/>
))

stories.add('Three-up cards, with a button underneath', () => (
	<LayoutBuilder
		items={[
			{
				schemaId: 'layout',
				values: {
					sections: [
						{
							isSecondary: true,
							layoutBuilder: {
								items: [
									{
										schemaId: 'cardBuilder',
										values: cards
									}
								]
							}
						},
						{
							isSecondary: true,
							layoutBuilder: {
								items: [
									{
										schemaId: 'cardBuilder',
										values: cards
									}
								]
							}
						},
						{
							isSecondary: true,
							layoutBuilder: {
								items: [
									{
										schemaId: 'cardBuilder',
										values: cards
									}
								]
							}
						},
						{
							layoutBuilder: {
								items: [{ schemaId: 'button', values: { text: 'This is it!' } }]
							}
						}
					]
				}
			}

			// {
			// 	type: IHWLayoutBuilderSectionType.Layout,
			// 	viewModel: {
			// 		sections: [
			// 			{
			// 				isSecondary: true,
			// 				layoutBuilder: {
			// 					items: [
			// 						{
			// 							type: IHWLayoutBuilderSectionType.CardBuilder,
			// 							viewModel: cardJSON
			// 						}
			// 					]
			// 				}
			// 			},
			// 			{
			// 				isSecondary: true,
			// 				layoutBuilder: {
			// 					items: [
			// 						{
			// 							type: IHWLayoutBuilderSectionType.CardBuilder,
			// 							viewModel: cardJSON
			// 						}
			// 					]
			// 				}
			// 			},
			// 			{
			// 				isSecondary: true,
			// 				layoutBuilder: {
			// 					items: [
			// 						{
			// 							type: IHWLayoutBuilderSectionType.CardBuilder,
			// 							viewModel: cardJSON
			// 						}
			// 					]
			// 				}
			// 			},
			// 			{
			// 				layoutBuilder: {
			// 					items: [buttonModel]
			// 				}
			// 			}
			// 		]
			// 	}
			// }
		]}
	/>
))

// Stories.add('Render a Page', () => (
// 	<LayoutBuilder
// 		items={[
// 			{
// 				type: IHWLayoutBuilderSectionType.Page,
// 				viewModel: {
// 					header: {
// 						title: 'My Cool Page',
// 						backLinkText: 'Go back somewhere',
// 						backLinkHref: '#',
// 						primaryAction: {
// 							id: 'do-something',
// 							href: '#',
// 							text: 'Do something',
// 							kind: 'primary'
// 						}
// 					},
// 					contentLayoutBuilder: {
// 						items: [
// 							{
// 								type: IHWLayoutBuilderSectionType.Layout,
// 								viewModel: {
// 									width: IHWLayoutWidth.FullWidth,
// 									sections: [
// 										{
// 											layoutBuilder: {
// 												items: [
// 													{
// 														type: IHWLayoutBuilderSectionType.CardBuilder,
// 														viewModel: cardJSON
// 													}
// 												]
// 											}
// 										}
// 									]
// 								}
// 							}
// 						]
// 					}
// 				}
// 			}
// 		]}
// 	/>
// ))

// stories.add('Render a Page with a Sidebar', () => (
// 	<LayoutBuilder
// 		items={[
// 			{
// 				type: IHWLayoutBuilderSectionType.Page,
// 				viewModel: {
// 					header: {
// 						title: 'My Cool Page',
// 						backLinkText: 'Go back somewhere',
// 						backLinkHref: '#',
// 						primaryAction: {
// 							id: 'do-something',
// 							href: '#',
// 							text: 'Do something',
// 							kind: 'primary'
// 						}
// 					},
// 					contentLayoutBuilder: {
// 						items: [
// 							{
// 								type: IHWLayoutBuilderSectionType.Layout,
// 								viewModel: {
// 									width: IHWLayoutWidth.FullWidth,
// 									sections: [
// 										{
// 											layoutBuilder: {
// 												items: [
// 													{
// 														type: IHWLayoutBuilderSectionType.CardBuilder,
// 														viewModel: cardJSON
// 													}
// 												]
// 											}
// 										}
// 									]
// 								}
// 							}
// 						]
// 					},
// 					sidebarLayoutBuilder: {
// 						items: [
// 							{
// 								type: IHWLayoutBuilderSectionType.Sidebar,
// 								viewModel: {
// 									side: IHWSidebarSide.Right,
// 									isLarge: true,
// 									isCollapsible: false,
// 									sections: [
// 										{
// 											layoutBuilder: {
// 												items: [
// 													{
// 														type: IHWLayoutBuilderSectionType.SidebarHeader,
// 														viewModel: {
// 															action: {
// 																id: 'go',
// 																text: 'Burn it down!',
// 																kind: IHWButtonKinds.Caution
// 															},
// 															title: 'My Sidebar'
// 														}
// 													},
// 													{
// 														type: IHWLayoutBuilderSectionType.CardBuilder,
// 														viewModel: cardJSON
// 													},
// 													{
// 														type: IHWLayoutBuilderSectionType.CardBuilder,
// 														viewModel: cardJSON
// 													}
// 												]
// 											}
// 										}
// 									]
// 								}
// 							}
// 						]
// 					}
// 				}
// 			}
// 		]}
// 	/>
// ))
