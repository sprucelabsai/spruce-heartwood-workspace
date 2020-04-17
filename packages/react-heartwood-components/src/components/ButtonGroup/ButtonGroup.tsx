import cx from 'classnames'
import React from 'react'
import { unionArray } from '../..'
import Button from '../Button/Button'
import { Action,IButtonGroup } from '@sprucelabs/heartwood-skill'

const ButtonGroup = (
	props: IButtonGroup
): React.ReactElement => {
	
	const { buttons, kind, isFullWidth, highlightedIndex, onAction } = props

	const parentClass = cx('button-group', {
		'button-group-segmented': kind === 'segmented',
		'button-group-floating': kind === 'floating',
		'button-group--is-full-width': isFullWidth
	})
	return (
		<ul className={parentClass}>
			{unionArray(buttons).map((button, idx) => {
				return (
					<li
						key={button.id}
						className={cx('button-group__item', {
							'button-group__item--is-highlighted': highlightedIndex === idx
						})}
					>
						<Button
						id={button.id}
							isFullWidth={kind === 'floating'}
							kind={
								kind === 'floating'
									? 'simple'
									: kind === 'segmented'
									? 'secondary'
									: button.kind
							}
							onAction={(action: Action) => onAction && onAction(action)}
						/>
					</li>
				)
			})}
		</ul>
	)
}

ButtonGroup.defaultProps = {
	kind: 'default',
	isFullWidth: false,
	highlightedIndex: -1
}

export default ButtonGroup
