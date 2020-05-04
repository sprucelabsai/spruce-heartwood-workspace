import BaseTest, { test, assert } from '@sprucelabs/test'
import stripNulls from './stripNulls'

interface IWithNulls {
	name?: string | undefined | null
	callback?:
		| ((param?: Record<string, any> | undefined | null) => void)
		| undefined
		| null
}

interface IWithoutNulls {
	name?: string | undefined
	callback?:
		| ((param?: Record<string, any> | undefined | null) => void)
		| undefined
}

export default class StripNullsTest extends BaseTest {
	@test('strip nulls')
	protected static async canAccessVarsFromDecorator() {
		const input: IWithNulls = { name: null }
		const stripped = stripNulls(input)

		assert.expectType<IWithoutNulls>(stripped)
	}
}
