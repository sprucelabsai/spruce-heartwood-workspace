import React from 'react'
import { unionArray } from '../../..'
import Button from '../../Button/Button'
import ButtonGroup from '../../ButtonGroup/ButtonGroup'
import Heading from '../../Heading/Heading'
import Image from '../../Image/Image'
import List from '../../List/List'
import Text from '../../Text/Text'
import Toast from '../../Toast/Toast'
import Card from '../Card'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import OnboardingCard from './OnboardingCard'
import Scores from './Scores'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

type CardBuilderBodyItem = SpruceSchemas.Local.ICardBuilderBody['items'][number]

const components: Record<CardBuilderBodyItem['schemaId'], React.ElementType> = {
	button: Button,
	image: Image,
	heading: Heading,
	text: Text,
	scoreCard: Scores,
	toast: Toast,
	list: List
}

const renderItem = (item: CardBuilderBodyItem): React.ReactElement => {
	const { schemaId, values } = item
	const Handler = components[schemaId]

	if (!Handler) {
		return <div>Could not render ${schemaId}.</div>
	}

	// Uncomment below if this blows up
	return <Handler {...values} />
	// @ts-ignore
	// return typeof Handler.prototype === 'undefined' ||
	// 	// @ts-ignore
	// 	!Handler.prototype.render ? (
	// 	// TODO figure out why these don't pass
	// 	// @ts-ignore
	// 	Handler({ ...values })
	// ) : (
	// 	<Handler {...values} />
	// )
}

export default class CardBuilder extends React.Component<
	SpruceSchemas.Local.ICardBuilder
> {
	public render() {
		const { header, headerImage, body, footer, onboarding } = this.props
		if (onboarding) {
			return <OnboardingCard {...onboarding} />
		}

		// NOTE: Destructuring stopped working after tsx conversion
		const {
			items,
			isSectioned = true,
			isFullBleed = false,
			areSectionSeparatorsVisible = false,
			hasTopPadding = true,
			hasBottomPadding = true
		} = body || {
			items: undefined,
			isSectioned: true,
			isFullBleed: false,
			areSectionSeparatorsVisible: false,
			hasTopPadding: true,
			hasBottomPadding: true
		}

		const { children } = body || { children: undefined }

		return (
			<Card>
				{header && <CardHeader {...header} />}
				{headerImage && <Image {...headerImage} />}
				{(items || children) && (
					<CardBody
						hasBottomPadding={
							hasBottomPadding === null ? true : hasBottomPadding
						}
						hasTopPadding={hasTopPadding === null ? true : hasTopPadding}
						areSectionSeparatorsVisible={
							areSectionSeparatorsVisible === null
								? false
								: areSectionSeparatorsVisible
						}
						isSectioned={!!isSectioned}
						isFullBleed={!!isFullBleed}
					>
						{children}
						{Array.isArray(items)
							? unionArray(items).map(item => renderItem(item))
							: items}
					</CardBody>
				)}
				{footer && (
					<CardFooter>
						{footer.buttonGroup && <ButtonGroup {...footer.buttonGroup} />}
						{footer.helper && (
							<div className={'card__footer__helper'}>{footer.helper}</div>
						)}
					</CardFooter>
				)}
			</Card>
		)
	}
}
