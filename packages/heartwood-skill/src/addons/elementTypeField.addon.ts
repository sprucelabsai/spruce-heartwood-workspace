import registerFieldType from '@sprucelabs/schema/src/utilities/registerFieldType'
import ElementTypeField from '../fields/ElementTypeField'

export default registerFieldType({
	type: 'ElementType',
	class: ElementTypeField,
	package: '@sprucelabs/heartwood-skill',
	importAs: 'HeartwoodSchemas',
})
