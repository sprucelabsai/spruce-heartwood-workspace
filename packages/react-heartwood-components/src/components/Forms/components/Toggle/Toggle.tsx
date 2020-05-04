import React from 'react'
import cx from 'classnames'
import { SpruceSchemas, stripNulls } from '@sprucelabs/heartwood-skill'

const Toggle = (props: SpruceSchemas.Local.IToggle): React.ReactElement => {
	const { id, className, helper, ...rest } = stripNulls(props)
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
				<label className="toggle__label" htmlFor={id ?? undefined} />
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
