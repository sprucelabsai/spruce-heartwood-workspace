import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import splitButtonDefinition from '../../src/schemas/forms/splitButton.definition'

type SplitButtonDefinition = typeof splitButtonDefinition
export interface ISplitButtonDefinition extends SplitButtonDefinition {}

// A button with a dropdown of actions on the right
export interface ISplitButton extends SchemaDefinitionValues<ISplitButtonDefinition> {}
export interface ISplitButtonInstance extends Schema<ISplitButtonDefinition> {}
