import registerFieldType from '@sprucelabs/schema/build/utilities/registerFieldType'
import EventCallbackField from '../fields/EventCallbackField'

export default registerFieldType({
	type: 'EventCallback',
	class: EventCallbackField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas',
})
