import { withKnobs, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Subheading from './Subheading'
const stories = storiesOf('Subheading', module)

stories.addDecorator(withKnobs)

stories.add('Subheading', () => (
	<Subheading>{text('children', 'Hello, world')}</Subheading>
))
