import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'

// Card Section
const CardSection = (
	props: SpruceSchemas.Local.ICardSection
): React.ReactElement => {
	const { children, isFullBleed } = props
	const className = cx('card__section', {
		'card__section--full-bleed': isFullBleed,
	})
	return <div className={className}>{children}</div>
}

export default CardSection
