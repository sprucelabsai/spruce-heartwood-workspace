import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React, { Component } from 'react'
import { unionArray } from '../../..'
import Button from '../../Button/Button'
import Tabs from '../../Tabs/Tabs'
import Card from '../Card'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

interface IOnboardingCardState {
	currentStep: number
}

const getCurrentStep = (
	steps: SpruceSchemas.Local.IOnboardingCardStep[]
): number => {
	// Find the first step that is not complete
	if (steps && steps.length > 0) {
		for (let i = 0; i < steps.length; i++) {
			if (!steps[i].isComplete) {
				return i
			}
		}
	}
	return 0
}

export default class OnboardingCard extends Component<
	SpruceSchemas.Local.IOnboardingCard,
	IOnboardingCardState
> {
	public state = {
		currentStep: getCurrentStep(this.props.steps),
	}

	public handleClick = (idx: number) => {
		this.setState({
			currentStep: idx,
		})
	}

	public render(): React.ReactElement {
		const { currentStep } = this.state
		const { title, steps } = this.props
		const tabs = unionArray(steps).map((step, idx) => ({
			text: step.tabTitle,
			icon: step.tabIcon,
			isCurrent: idx === currentStep,
			onClick: () => this.handleClick(idx),
			className: step.isComplete ? 'tab--is-complete' : '',
		}))

		return (
			<Card className="onboarding-card">
				<div className="onboarding-card__header">
					<p className="onboarding-card__title">{title}</p>
					{tabs && <Tabs tabs={tabs} isPadded={false} isTruncatable={false} />}
				</div>
				<CardHeader title={steps[currentStep].panelTitle} />
				<CardBody isSectioned isFullBleed={false}>
					{steps[currentStep].panelCopy}
				</CardBody>
				{steps[currentStep].panelCTA && (
					<CardFooter>
						<Button kind={'primary'} {...steps[currentStep].panelCTA} />
					</CardFooter>
				)}
			</Card>
		)
	}
}
