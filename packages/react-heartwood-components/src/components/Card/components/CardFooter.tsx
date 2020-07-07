import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React from 'react'

// Card Footer
const CardFooter = (
	props: SpruceSchemas.Local.ICardFooter
): React.ReactElement => {
	const { children } = props
	return <div className="card__footer">{children}</div>
}

CardFooter.displayName = 'Card.Footer'
export default CardFooter
