import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import textDefinition from '../../src/schemas/text.definition'

type TextDefinition = typeof textDefinition
export interface ITextDefinition extends TextDefinition {}

// Basic text to be rendered
export interface IText extends SchemaDefinitionValues<ITextDefinition> {}
export interface ITextInstance extends Schema<ITextDefinition> {}
