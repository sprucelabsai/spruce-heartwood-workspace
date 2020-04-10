import { registerFieldType } from '@sprucelabs/schema'
import ActionField from '../fields/ActionField'

export default registerFieldType({
	type: 'action',
	class: ActionField,
	package: '@sprucelabs/heartwood-skill'
})
