import React from 'react'
import cx from 'classnames'
import Button from '../../../Button/Button'
import {
	SpruceSchemas,
	defaultProps,
	tabDefinition
} from '@sprucelabs/heartwood-skill'

const Tab = ({
	AnchorComponent,
	text,
	icon,
	isCurrent,
	className
}: SpruceSchemas.Local.ITab) => {
	return (
		<li className={cx('tab', className)}>
			<Button
				id="tab"
				AnchorComponent={AnchorComponent}
				className={cx('tab__inner', {
					'tab--is-current': isCurrent
				})}
				text={text}
				icon={icon}
			/>
		</li>
	)
}

Tab.defaultProps = defaultProps(tabDefinition)

export default Tab
