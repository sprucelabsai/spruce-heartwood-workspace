import { registerFieldType } from '@sprucelabs/schema'
import ActionField from '../fields/ActionField'

export default registerFieldType({
	type: 'Action',
	class: ActionField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas'
})
