import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import layoutDefinition from '../../src/schemas/layout.definition'

type LayoutDefinition = typeof layoutDefinition
export interface ILayoutDefinition extends LayoutDefinition {}

// Layout 
export interface ILayout extends SchemaDefinitionValues<ILayoutDefinition> {}
export interface ILayoutInstance extends Schema<ILayoutDefinition> {}
