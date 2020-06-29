import { withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'

const stories = storiesOf('FontLoader', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
	<div>
		<h1>Hello, are you a UFO?</h1>
	</div>
))
