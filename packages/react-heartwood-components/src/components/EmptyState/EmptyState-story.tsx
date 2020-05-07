import React from 'react'
import { each, keys } from 'lodash'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import EmptyState from './EmptyState'
import * as icons from '../../icons.js'

const options = {}

each(keys(icons), icon => {
	options[icon] = icon
})

const stories = storiesOf('EmptyState', module)

// Stories.addDecorator(
// 	withKnobsOptions({
// 		escapeHTML: false
// 	})
// )
stories.addDecorator(withKnobs)

stories.add('Default', () => <EmptyState />)

stories.add('No matches', () => (
	<EmptyState
		icon={object('icon', { name: 'no_matches' })}
		heading={text('headline', 'No matches found')}
		primaryButton={object('primary button action', {
			text: 'Show all',
			onClick: () => {},
			type: 'submit'
		})}
	/>
))

stories.add('API Failure', () => (
	<EmptyState
		icon={object('icon', options, 'caution')}
		heading={text('headline', 'Data not available')}
		subheading={text('subheading', 'It looks like something went wrong.')}
		primaryButton={object('primary button action', {
			text: 'Try Again',
			onClick: () => {},
			type: 'submit',
			kind: 'primary'
		})}
	/>
))
