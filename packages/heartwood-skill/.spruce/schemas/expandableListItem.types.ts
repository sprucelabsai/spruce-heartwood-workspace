import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import expandableListItemDefinition from '../../src/schemas/lists/expandableListItem.definition'

type ExpandableListItemDefinition = typeof expandableListItemDefinition
export interface IExpandableListItemDefinition extends ExpandableListItemDefinition {}

// Wraps a list item to make it expandable
export interface IExpandableListItem extends SchemaDefinitionValues<IExpandableListItemDefinition> {}
export interface IExpandableListItemInstance extends Schema<IExpandableListItemDefinition> {}
