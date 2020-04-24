import { registerFieldType } from '@sprucelabs/schema'
import OnClickField from '../fields/OnClickField'

export default registerFieldType({
	type: 'OnClick',
	class: OnClickField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas'
})
