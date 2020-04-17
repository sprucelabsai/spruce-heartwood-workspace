import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import contextMenuDefinition from '../../src/schemas/contextMenu.definition'

type ContextMenuDefinition = typeof contextMenuDefinition
export interface IContextMenuDefinition extends ContextMenuDefinition {}

// A contextual menu comprised of buttons (tip: set the action on each button).
export interface IContextMenu extends SchemaDefinitionValues<IContextMenuDefinition> {}
export interface IContextMenuInstance extends Schema<IContextMenuDefinition> {}
