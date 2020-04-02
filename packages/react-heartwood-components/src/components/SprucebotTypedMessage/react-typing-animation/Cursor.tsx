import React from 'react'
import cx from 'classnames'

const Cursor = (props: { className: string }) => (
	<div className={cx(props.className, 'cursor')}>|</div>
)
Cursor.defaultProps = { className: '' }

export default Cursor
