import React from 'react'
import cx from 'classnames'
import { defaultProps, SpruceSchemas } from '@sprucelabs/heartwood-skill'
import Heading from '../Heading/Heading'

const defaults = {} // DefaultProps(SpruceSchemas.Local.Subheading.definition)

const Subheading = (props: SpruceSchemas.Local.ISubheading) => {
	const { className } = props
	const names = cx('subheading', className)
	return <Heading {...props} className={names} />
}

Subheading.defaultProps = defaults

export default Subheading
