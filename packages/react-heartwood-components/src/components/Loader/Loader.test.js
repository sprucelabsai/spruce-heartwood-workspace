import { shallow } from 'enzyme'
import React from 'react'
import Loader from './Loader'

describe('Loader tests', () => {
	it('Should match the snapshot', () => {
		const renderedComponent = shallow(<Loader />)

		expect(renderedComponent).toMatchSnapshot()
	})
})
