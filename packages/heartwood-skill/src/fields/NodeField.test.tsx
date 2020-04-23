import React from 'react'
import BaseTest, { test, assert } from '@sprucelabs/test'

export default class NodeFieldTest extends BaseTest {
	@test('Can use jsx in a test')
	protected static async canUseJSX() {
		const component = <div>yes!</div>
		assert.isOk(component)
	}
}
