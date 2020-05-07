import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import PagedModal from './PagedModal'
import { TextInput, FormLayout, FormLayoutItem } from '../Forms'

interface IPageModalExampleProps {}

interface IPageMoodalExampleState {
	currentPageIndex: number
}

class PageModalExample extends Component<
	IPageModalExampleProps,
	IPageMoodalExampleState
> {
	public state = {
		currentPageIndex: 0
	}

	public handleBack = () => {
		this.setState(prevState => ({
			currentPageIndex:
				prevState.currentPageIndex > 0 ? prevState.currentPageIndex - 1 : 0
		}))
	}

	public render() {
		const { currentPageIndex } = this.state

		return (
			<PagedModal
				isOpen={boolean('isOpen', true)}
				onRequestClose={() => console.log('onRequestClose')}
				onClickBack={this.handleBack}
				canGoBack={currentPageIndex > 0}
				pages={[
					{
						title: 'Page 1',
						isCurrent: currentPageIndex === 0,
						body: (
							<FormLayout>
								<FormLayoutItem>
									<TextInput
										id="phone"
										label={{ text: 'Phone Number' }}
										placeholder="(555)-555-5555"
									/>
								</FormLayoutItem>
							</FormLayout>
						),
						footerPrimaryAction: {
							text: 'Next',
							onClick: () => this.setState({ currentPageIndex: 1 })
						}
					},
					{
						title: 'Page 2',
						isCurrent: currentPageIndex === 1,
						body: (
							<FormLayout>
								<FormLayoutItem>
									<TextInput id="firstName" label={{ text: 'First Name' }} />
								</FormLayoutItem>
							</FormLayout>
						),
						footerPrimaryAction: {
							text: 'Submit',
							onClick: () => console.log('Submit!')
						}
					}
				]}
			/>
		)
	}
}

const stories = storiesOf('Paged Modal', module)

stories.addDecorator(withKnobs)

stories.add('Page Modal', () => <PageModalExample />, {
	jsx: {
		skip: 1
	}
})
