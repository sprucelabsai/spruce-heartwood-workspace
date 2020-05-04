import { buildSchemaDefinition } from '@sprucelabs/schema'
import headingDefinition from './heading.definition'

const subheadingDefinition = buildSchemaDefinition({
	id: 'subheading',
	name: 'Subheading',
	description: 'Defaults to h2',

	fields: {
		...headingDefinition.fields,
		weight: {
			...headingDefinition.fields.weight,
			defaultValue: 'h2',
			hint: 'The weight of the sub heading, H2 and beyond'
		}
	}
})

export default subheadingDefinition
