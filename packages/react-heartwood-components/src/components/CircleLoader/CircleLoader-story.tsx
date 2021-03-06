import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import CircleLoader from './CircleLoader'

const stories = storiesOf('CircleLoader', module)

stories.addDecorator(withKnobs)

stories.add('CircleLoader', () => (
	<CircleLoader light={boolean('light', false)} />
))
