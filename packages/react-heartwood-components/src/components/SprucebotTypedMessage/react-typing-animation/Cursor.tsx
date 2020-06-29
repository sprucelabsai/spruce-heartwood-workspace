import cx from 'classnames'
import React from 'react'

const Cursor = (props: { className: string }) => (
	<div className={cx(props.className, 'cursor')}>|</div>
)
Cursor.defaultProps = { className: '' }

export default Cursor
