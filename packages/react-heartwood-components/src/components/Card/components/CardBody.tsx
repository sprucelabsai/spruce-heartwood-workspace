import React from 'react'
import cx from 'classnames'
import CardSection from './CardSection'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

const CardBody = (props: SpruceSchemas.Local.ICardBody): React.ReactElement => {
	const {
		children,
		isSectioned,
		hasTopPadding,
		hasBottomPadding,
		areSectionSeparatorsVisible,
		isFullBleed = false
	} = props
	const className = cx('card__body', {
		'card__body--section-separators-visible': areSectionSeparatorsVisible,
		'card__body--no-top-padding': !hasTopPadding,
		'card__body--no-bottom-padding': !hasBottomPadding
	})
	return (
		<div className={className}>
			{isSectioned ? (
				<CardSection isFullBleed={isFullBleed}>{children}</CardSection>
			) : (
				children
			)}
		</div>
	)
}

CardBody.displayName = 'Card.Body'
CardBody.defaultProps = {
	isSectioned: true,
	areSectionSeparatorsVisible: false,
	hasTopPadding: true,
	hasBottomPadding: true
}

export default CardBody
