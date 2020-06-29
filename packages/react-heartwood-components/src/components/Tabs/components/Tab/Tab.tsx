import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import Button from '../../../Button/Button'

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

Tab.defaultProps = defaultProps(SpruceSchemas.Local.Tab.definition)

export default Tab
