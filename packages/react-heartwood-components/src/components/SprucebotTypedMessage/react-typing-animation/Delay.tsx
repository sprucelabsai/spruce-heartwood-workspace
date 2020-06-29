import PropTypes from 'prop-types'
import React from 'react'

const Delay = () => <noscript />

Delay.updateCursor = (cursor, { ms }) => {
	return {
		...cursor,
		delay: cursor.delay + ms
	}
}

Delay.getName = () => 'Delay'

Delay.propTypes = {
	ms: PropTypes.number
}

export default Delay
