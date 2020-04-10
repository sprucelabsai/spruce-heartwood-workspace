import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import listHeaderDefinition from '../../src/schemas/lists/listHeader.definition'

type ListHeaderDefinition = typeof listHeaderDefinition
export interface IListHeaderDefinition extends ListHeaderDefinition {}

// **missing description**
export interface IListHeader extends SchemaDefinitionValues<IListHeaderDefinition> {}
export interface IListHeaderInstance extends Schema<IListHeaderDefinition> {}
