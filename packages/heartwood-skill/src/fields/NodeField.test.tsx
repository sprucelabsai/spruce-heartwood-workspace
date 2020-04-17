import '@sprucelabs/path-resolver/register'
import BaseTest, { ISpruce, test } from '@sprucelabs/test'
import { ExecutionContext } from 'ava'

/** Context just for this test */
interface IContext {
}

export default class NodeFieldTest extends BaseTest {
	protected static beforeEach(t: ExecutionContext<IContext>) {
		// Test setting something to the context
		// t.context.hello = 'world'
	}

	@test('Node field can be used as node in react component')
	protected static async canAccessSpruce(
		t: ExecutionContext<IContext>,
		spruce: ISpruce
	) {

		const component = <div>yes!</div>
		t.assert(component)
	}

	
}
