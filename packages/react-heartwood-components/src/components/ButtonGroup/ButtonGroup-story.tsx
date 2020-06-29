import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'
import ButtonGroup from './ButtonGroup'

const stories = storiesOf('ButtonGroup', module)

stories.addDecorator(withKnobs)

stories.add('Button Group', () => (
	<ButtonGroup
		kind={text('kind', '')}
		buttons={object('buttons', [
			{ text: 'Confirm Changes', kind: 'primary' },
			{ text: 'Cancel', kind: 'secondary' }
		])}
	/>
))
