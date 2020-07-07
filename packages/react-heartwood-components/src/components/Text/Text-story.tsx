import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Text, { Span } from './Text'
const stories = storiesOf('Text', module)

stories.addDecorator(withKnobs)

stories
	.add('Text', () => (
		<Text
			isInline={boolean('isInline', false)}
			context={object('context', {
				planet: {
					text: 'World!',
					type: 'style',
					props: { type: 'strong' },
				},
				link: {
					text: 'Click me!',
					type: 'button',
					props: { href: 'https://www.spruce.ai' },
				},
			})}
		>
			{text('children', 'Hello, {{planet}}! {{link}}')}
		</Text>
	))
	.add('Span', () => (
		<Span
			isInline={boolean('isInline', true)}
			context={object('context', {
				planet: {
					text: 'World!',
					type: 'style',
					props: { type: 'strong' },
				},
			})}
		>
			{text('children', 'Hello, {{planet}}!')}
		</Span>
	))
