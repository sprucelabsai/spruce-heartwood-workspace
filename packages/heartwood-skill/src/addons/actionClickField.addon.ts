import { registerFieldType } from '@sprucelabs/schema'
import ActionClickField from '../fields/ActionClickField'

export default registerFieldType({
	type: 'ActionClick',
	class: ActionClickField,
	package: '@sprucelabs/heartwood-skill'
})
