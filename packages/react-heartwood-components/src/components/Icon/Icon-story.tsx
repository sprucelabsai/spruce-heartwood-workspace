import { withKnobs, select } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import { each, keys, map } from 'lodash'
import React from 'react'
import * as icons from '../../icons.js'
import Icon from './Icon'

import './demo.scss'

const options = {}

each(keys(icons), (icon) => {
	options[icon] = icon
})

const stories = storiesOf('Icon', module)

stories.addDecorator(withKnobs)

stories.add('Icon', () => (
	<Icon id="edit" name={select('icon', options, 'edit')} />
))

stories.add('All Icons', () => (
	<div className="Storybook-IconGrid">
		{map(keys(icons), (icon) => (
			<div className="Storybook-IconGridItem" key={`icon-${icon}`}>
				<Icon id={`icon-${icon}`} name={icon} />
				<div>{icon}</div>
			</div>
		))}
	</div>
))
