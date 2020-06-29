import '@sprucelabs/path-resolver/register'
import { ISchemaDefinition } from '@sprucelabs/schema'
import BaseTest, { ISpruce, test, assert } from '@sprucelabs/test'
import cardDefinition from '../schemas/cards/card.definition'
import defaultProps from './defaultProps'

export default class DefaultPropsTest extends BaseTest {
	@test('can get card default values', cardDefinition, {
		isCentered: false,
		isExpandable: false,
		defaultExpanded: true
	})
	protected static async testDefaultValues(
		spruce: ISpruce,
		definition: ISchemaDefinition,
		expected: Record<string, any>
	) {
		const defaults = defaultProps(definition)
		assert.deepEqual(defaults, expected)
	}
}
