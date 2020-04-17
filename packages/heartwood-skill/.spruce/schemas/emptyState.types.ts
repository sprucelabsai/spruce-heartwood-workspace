import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import emptyStateDefinition from '../../src/schemas/emptyState.definition'

type EmptyStateDefinition = typeof emptyStateDefinition
export interface IEmptyStateDefinition extends EmptyStateDefinition {}

// Used for the empty state of lists
export interface IEmptyState extends SchemaDefinitionValues<IEmptyStateDefinition> {}
export interface IEmptyStateInstance extends Schema<IEmptyStateDefinition> {}
