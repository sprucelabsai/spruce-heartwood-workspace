import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import contextMenuDefinition from '../../src/schemas/contextMenu.definition'

type ContextMenuDefinition = typeof contextMenuDefinition
export interface IContextMenuDefinition extends ContextMenuDefinition {}

// **missing description**
export interface IContextMenu extends SchemaDefinitionValues<IContextMenuDefinition> {}
export interface IContextMenuInstance extends Schema<IContextMenuDefinition> {}
