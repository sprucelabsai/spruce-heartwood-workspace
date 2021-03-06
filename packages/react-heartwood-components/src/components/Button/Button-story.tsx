import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from './Button'

const btnText = text('text', 'Hello World')
const isFullWidth = boolean('isFullWidth', false)

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories
	.add('Primary', () => (
		<Button
			isFullWidth={isFullWidth}
			text={btnText}
			kind={text('kind', '') || 'primary'}
			isDisabled={boolean('isDisabled', false)}
			isLoading={boolean('isLoading', false)}
			isSmall={boolean('isSmall', false)}
			isIconOnly={boolean('isIconOnly', false)}
			icon={{
				id: 'example',
				name: text('icon', null),
				className: text('iconClassName', 'btn__line-icon')
			}}
			href={text('href', '')}
			target={text('target', '')}
			onClick={text('onClick', '() => console.log("you clicked")')}
		/>
	))
	.add('Secondary', () => (
		<Button
			isFullWidth={isFullWidth}
			text={btnText}
			kind={text('kind', '') || 'secondary'}
			isDisabled={boolean('isDisabled', false)}
			isLoading={boolean('isLoading', false)}
			isSmall={boolean('isSmall', false)}
			icon={{
				id: 'example',
				name: text('icon', null),
				className: text('iconClassName', 'btn__line-icon')
			}}
			href={text('href', '')}
			target={text('target', '')}
			onClick={text('onClick', '() => console.log("you clicked")')}
		/>
	))
	.add('Simple', () => (
		<Button
			isFullWidth={isFullWidth}
			text={btnText}
			kind={text('kind', '') || 'simple'}
			isDisabled={boolean('isDisabled', false)}
			isLoading={boolean('isLoading', false)}
			isSmall={boolean('isSmall', false)}
			icon={{
				id: 'example',
				name: text('icon', null),
				className: text('iconClassName', 'btn__line-icon')
			}}
			href={text('href', '')}
			target={text('target', '')}
			onClick={text('onClick', '() => console.log("you clicked")')}
		/>
	))
	.add('Default', () => (
		<Button
			isFullWidth={isFullWidth}
			text={btnText}
			kind={text('kind', '') || ''}
			isDisabled={boolean('isDisabled', false)}
			isLoading={boolean('isLoading', false)}
			isSmall={boolean('isSmall', false)}
			icon={{
				id: 'example',
				name: text('icon', null),
				className: text('iconClassName', 'btn__line-icon')
			}}
			href={text('href', '')}
			target={text('target', '')}
			onClick={text('onClick', '() => console.log("you clicked")')}
		/>
	))
	.add('Caution', () => (
		<Button
			isFullWidth={isFullWidth}
			text={btnText}
			kind={text('kind', '') || 'caution'}
			isDisabled={boolean('isDisabled', false)}
			isLoading={boolean('isLoading', false)}
			isSmall={boolean('isSmall', false)}
			icon={{
				id: 'example',
				name: text('icon', null),
				className: text('iconClassName', 'btn__line-icon')
			}}
			href={text('href', '')}
			target={text('target', '')}
			onClick={text('onClick', '() => console.log("you clicked")')}
		/>
	))
