import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import headingDefinition from '../../src/schemas/heading.definition'

type HeadingDefinition = typeof headingDefinition
export interface IHeadingDefinition extends HeadingDefinition {}

// **missing description**
export interface IHeading extends SchemaDefinitionValues<IHeadingDefinition> {}
export interface IHeadingInstance extends Schema<IHeadingDefinition> {}
