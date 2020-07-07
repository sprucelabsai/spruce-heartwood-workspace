import React from 'react'
import { ICursor } from './Typing'

export interface IBackspaceProps {
	speed?: number | null
	count?: number | null
	delay?: number | null
}

// eslint-disable-next-line
const Backspace = (props?: IBackspaceProps) => <noscript />

Backspace.updateCursor = (cursor: ICursor, options: IBackspaceProps) => {
	const { speed, count, delay } = options
	return {
		...cursor,
		numToErase: count,
		preEraseLineNum: cursor.lineNum,
		speed: typeof speed === 'number' && speed > 0 ? speed : cursor.speed,
		delay:
			typeof delay == 'number' && delay > 0
				? cursor.delay + delay
				: cursor.delay,
	}
}

Backspace.getName = () => 'Backspace'

export default Backspace
