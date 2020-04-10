import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import buttonDefinition from '../../src/schemas/forms/button.definition'

type ButtonDefinition = typeof buttonDefinition
export interface IButtonDefinition extends ButtonDefinition {}

// A interactive element you can touch or click to invoke an Action
export interface IButton extends SchemaDefinitionValues<IButtonDefinition> {}
export interface IButtonInstance extends Schema<IButtonDefinition> {}
