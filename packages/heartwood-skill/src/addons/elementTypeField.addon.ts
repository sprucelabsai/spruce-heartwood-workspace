import { registerFieldType } from '@sprucelabs/schema'
import ElementTypeField from '../fields/ElementTypeField'

export default registerFieldType({
	type: 'ElementType',
	class: ElementTypeField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas'
})
