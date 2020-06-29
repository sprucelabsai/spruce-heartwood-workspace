import { withKnobs, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Heading from './Heading'
const stories = storiesOf('Heading', module)

stories.addDecorator(withKnobs)

stories.add('Heading', () => (
	<Heading id="heading">{text('children', 'Hello, world')}</Heading>
))
