import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import SprucebotAvatar from './SprucebotAvatar'

const stories = storiesOf('SprucebotAvatar', module)

stories.addDecorator(withKnobs)

stories.add('SprucebotAvatar', () => (
	<SprucebotAvatar
		id="avatar"
		size={select(
			'size',
			{
				small: 'small',
				medium: 'medium',
				large: 'large'
			},
			'medium'
		)}
		stateOfMind={select(
			'stateOfMind',
			{
				chill: 'chill',
				contemplative: 'contemplative',
				curious: 'curious',
				accomplished: 'accomplished'
			},
			'chill'
		)}
	/>
))
