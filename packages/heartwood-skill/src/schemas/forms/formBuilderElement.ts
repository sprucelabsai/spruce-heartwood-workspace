import { buildSchemaDefinition } from '@sprucelabs/schema'

const formBuilderElement = buildSchemaDefinition({
	id: 'formBuilderElement',
	name: 'Form builder element',
	description:
		'All field types must mixin this definition to support working in the FormBuilder',
	fields: {}
})

export default formBuilderElement
