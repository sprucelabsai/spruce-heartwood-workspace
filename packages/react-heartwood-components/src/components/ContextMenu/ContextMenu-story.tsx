import { withKnobs, object, boolean, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'
import ContextMenu from './ContextMenu'

const stories = storiesOf('Context Menu', module)

stories.addDecorator(withKnobs)

stories.add('Example', () => (
	<ContextMenu
		buttons={object('buttons', [
			{ text: 'Rebook' },
			{ text: 'Cancel appointment' },
			{ text: 'Ask for feedback' },
		])}
		isRightAligned={boolean('isRightAligned', false)}
		isBottomAligned={boolean('isBottomAligned', false)}
		size={text('size', 'large')}
		isSimple={boolean('isSimple', false)}
		isSmall={boolean('isSmall', false)}
	/>
))
