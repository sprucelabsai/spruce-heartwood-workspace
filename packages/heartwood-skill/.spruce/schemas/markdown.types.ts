import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import markdownDefinition from '../../src/schemas/markdown.definition'

type MarkdownDefinition = typeof markdownDefinition
export interface IMarkdownDefinition extends MarkdownDefinition {}

// Render markdown beautifully
export interface IMarkdown extends SchemaDefinitionValues<IMarkdownDefinition> {}
export interface IMarkdownInstance extends Schema<IMarkdownDefinition> {}
