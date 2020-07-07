import registerFieldType from '@sprucelabs/schema/src/utilities/registerFieldType'
import CallbackField from '../fields/CallbackField'

export default registerFieldType({
	type: 'Callback',
	class: CallbackField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas',
})
