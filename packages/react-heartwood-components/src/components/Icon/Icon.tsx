import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Fragment } from 'react'
import * as icons from '../../icons.js'

const Icon = (props: SpruceSchemas.Local.IIcon): React.ReactElement => {
	const { name, customIcon, isLineIcon, className, ...rest } = props

	const iconKey = name && name.toLowerCase()

	if (!customIcon && (!name || !icons[iconKey])) {
		console.warn(`<Icon /> could not find an icon with key:`, name)
		return <Fragment />
	}

	const isFillIcon = !customIcon && icons[iconKey] && !icons[iconKey].isLineIcon
	const Handler = customIcon || icons[iconKey].icon

	return (
		<Handler
			className={cx(className, 'icon', {
				'icon--no-fill':
					typeof isLineIcon !== 'undefined' ? isLineIcon : !isFillIcon,
				'icon--stroke':
					typeof isLineIcon !== 'undefined' ? isLineIcon : !isFillIcon
			})}
			{...rest}
		/>
	)
}

export default Icon
