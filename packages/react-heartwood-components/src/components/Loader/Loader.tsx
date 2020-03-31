import React from 'react'
import cx from 'classnames'

interface ILoaderProps {
	/* Set to true if loader is on a dark background */
	isLight: boolean

	/* Set to true if loader should be centered within parent */
	isCentered: boolean
}

const Loader = (props: ILoaderProps) => {
	const { isLight, isCentered } = props
	return (
		<span
			className={cx('loader', {
				'loader--light': isLight,
				'loader--centered': isCentered
			})}
		>
			<span className="loader__dot" />
			<span className="loader__dot" />
			<span className="loader__dot" />
		</span>
	)
}

Loader.defaultProps = {
	isLight: false
}

export default Loader
