import { withKnobs, text } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'
import SplitButton from './SplitButton'

const buttons = [
	{
		text: 'Another action',
		onClick: () => console.log('CLICK'),
	},
	{
		text: 'Third action',
	},
	{
		text: 'Yet another action',
	},
]

const stories = storiesOf('SplitButton', module)

stories.addDecorator(withKnobs)

stories
	.add('Primary', () => (
		<SplitButton
			defaultAction={{
				text: text('defaultActionText', 'Do the default action'),
			}}
			buttons={buttons}
			kind="primary"
		/>
	))
	.add('Primary Small', () => (
		<SplitButton
			defaultAction={{
				text: text('defaultActionText', 'Do the default action'),
			}}
			buttons={buttons}
			kind="primary"
			isSmall
		/>
	))
	.add('Secondary', () => (
		<SplitButton
			defaultAction={{
				text: text('defaultActionText', 'Do the default action'),
			}}
			buttons={buttons}
			kind="secondary"
		/>
	))
	.add('Secondary Small', () => (
		<SplitButton
			defaultAction={{
				text: text('defaultActionText', 'Do the default action'),
			}}
			buttons={buttons}
			kind="secondary"
			isSmall
		/>
	))
