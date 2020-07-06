import registerFieldType from '@sprucelabs/schema/src/utilities/registerFieldType'
import NodeField from '../fields/NodeField'

export default registerFieldType({
	type: 'Node',
	class: NodeField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas'
})
