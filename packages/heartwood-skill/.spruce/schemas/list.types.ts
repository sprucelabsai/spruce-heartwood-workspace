import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import listDefinition from '../../src/schemas/lists/list.definition'

type ListDefinition = typeof listDefinition
export interface IListDefinition extends ListDefinition {}

// A list of information or inputs
export interface IList extends SchemaDefinitionValues<IListDefinition> {}
export interface IListInstance extends Schema<IListDefinition> {}
