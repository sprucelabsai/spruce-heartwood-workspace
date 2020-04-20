import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import layoutSectionDefinition from '../../src/schemas/layoutSection.definition'

type LayoutSectionDefinition = typeof layoutSectionDefinition
export interface ILayoutSectionDefinition extends LayoutSectionDefinition {}

// Description missing in schema defined in /Users/taylorromero/Development/SpruceLabs/spruce-heartwood-workspace/packages/heartwood-skill/src/schemas/layoutSection.definition.ts
export interface ILayoutSection extends SchemaDefinitionValues<ILayoutSectionDefinition> {}
export interface ILayoutSectionInstance extends Schema<ILayoutSectionDefinition> {}
