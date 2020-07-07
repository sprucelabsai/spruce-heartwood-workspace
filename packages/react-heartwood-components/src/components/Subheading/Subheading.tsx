import {
	defaultProps,
	SpruceSchemas,
	subheadingDefinition,
} from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import Heading from '../Heading/Heading'

const defaults = defaultProps(subheadingDefinition)

const Subheading = (props: SpruceSchemas.Local.ISubheading) => {
	const { className } = props
	const names = cx('subheading', className)
	return <Heading {...props} className={names} />
}

Subheading.defaultProps = defaults

export default Subheading
