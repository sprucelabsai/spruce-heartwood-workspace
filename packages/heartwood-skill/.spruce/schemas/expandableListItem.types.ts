import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import expandableListItemDefinition from '../../src/schemas/expandableListItem.definition'

type ExpandableListItemDefinition = typeof expandableListItemDefinition
export interface IExpandableListItemDefinition extends ExpandableListItemDefinition {}

// Description missing in schema defined in /Users/taylorromero/Development/SpruceLabs/spruce-heartwood-workspace/packages/heartwood-skill/src/schemas/expandableListItem.definition.ts
export interface IExpandableListItem extends SchemaDefinitionValues<IExpandableListItemDefinition> {}
export interface IExpandableListItemInstance extends Schema<IExpandableListItemDefinition> {}
