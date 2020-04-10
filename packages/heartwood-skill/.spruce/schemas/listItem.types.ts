import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import listItemDefinition from '../../src/schemas/lists/listItem.definition'

type ListItemDefinition = typeof listItemDefinition
export interface IListItemDefinition extends ListItemDefinition {}

// A list is comprised of list items (or expandable list items). This is that list item.
export interface IListItem extends SchemaDefinitionValues<IListItemDefinition> {}
export interface IListItemInstance extends Schema<IListItemDefinition> {}
