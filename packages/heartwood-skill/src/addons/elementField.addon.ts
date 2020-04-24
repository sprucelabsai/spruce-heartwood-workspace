import { registerFieldType } from '@sprucelabs/schema'
import ElementField from '../fields/ElementField'

export default registerFieldType({
	type: 'Element',
	class: ElementField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas'
})
