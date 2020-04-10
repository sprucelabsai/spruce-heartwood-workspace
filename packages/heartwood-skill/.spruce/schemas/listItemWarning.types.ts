import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import listItemWarningDefinition from '../../src/schemas/lists/listWarning.definition'

type ListItemWarningDefinition = typeof listItemWarningDefinition
export interface IListItemWarningDefinition extends ListItemWarningDefinition {}

// A warning message that can go on a list item
export interface IListItemWarning extends SchemaDefinitionValues<IListItemWarningDefinition> {}
export interface IListItemWarningInstance extends Schema<IListItemWarningDefinition> {}
