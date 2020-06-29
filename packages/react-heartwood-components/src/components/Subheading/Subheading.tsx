import { defaultProps, SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import Heading from '../Heading/Heading'

const defaults = defaultProps(SpruceSchemas.Local.Subheading.definition)

const Subheading = (props: SpruceSchemas.Local.ISubheading) => {
	const { className } = props
	const names = cx('subheading', className)
	return <Heading {...props} className={names} />
}

Subheading.defaultProps = defaults

export default Subheading
