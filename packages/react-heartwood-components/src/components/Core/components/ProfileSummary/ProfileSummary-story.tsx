import { withKnobs, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'
import defaultImageLg from '../../../../../static/assets/users/user-placeholder--96w.png'
import ProfileSummary from './ProfileSummary'

const stories = storiesOf('Profile Summary', module)

stories.addDecorator(withKnobs)

stories.add('Basic', () => (
	<ProfileSummary
		image={text('image', defaultImageLg)}
		name={text('name', 'Dorian Feeney')}
		onButtonClick={() => console.log('onButtonClick')}
	/>
))
