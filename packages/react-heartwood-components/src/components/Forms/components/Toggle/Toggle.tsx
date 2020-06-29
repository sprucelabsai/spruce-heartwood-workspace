import { SpruceSchemas, stripNulls } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'

const Toggle = (props: SpruceSchemas.Local.IToggle): React.ReactElement => {
	const { id, className, helper, label, ...rest } = stripNulls(props)
	const parentClass = cx('toggle__wrapper', className)
	return (
		<div className={parentClass}>
			<div className="toggle">
				<input
					className="toggle__input"
					type="checkbox"
					id={id ?? undefined}
					{...rest}
				/>
				{label && (
					<label className="toggle__label" htmlFor={label.id ?? undefined}>
						{label.text}
					</label>
				)}
			</div>
			{helper && (
				<label className="toggle__text" htmlFor={id ?? undefined}>
					{helper.error || helper.hint}
				</label>
			)}
		</div>
	)
}

export default Toggle
