import { registerFieldType } from '@sprucelabs/schema'
import EventCallbackField from '../fields/EventCallbackField'

export default registerFieldType({
	type: 'EventCallback',
	class: EventCallbackField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas'
})
