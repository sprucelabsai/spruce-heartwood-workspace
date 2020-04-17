import { registerFieldType } from '@sprucelabs/schema'
import NodeField from '../fields/NodeField'

export default registerFieldType({
	type: 'Node',
	class: NodeField,
	package: '@sprucelabs/heartwood-skill'
})
