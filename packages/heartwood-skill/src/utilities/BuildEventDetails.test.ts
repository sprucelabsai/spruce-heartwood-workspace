import BaseTest, { test, assert } from '@sprucelabs/test'
import buildEventDetailsItem from './buildEventDetailsItem'

export default class BuildEventDetailsTest extends BaseTest {
	@test('test building calendar details')
	protected static async testBuildingDetails() {
		const details = buildEventDetailsItem('list', {
			header: {
				title: 'Hell world!?',
			},
		})
		assert.isOk(details)
	}
}
