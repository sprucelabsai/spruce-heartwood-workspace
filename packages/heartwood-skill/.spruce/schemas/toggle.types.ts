import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import toggleDefinition from '../../src/schemas/forms/toggle.definition'

type ToggleDefinition = typeof toggleDefinition
export interface IToggleDefinition extends ToggleDefinition {}

// A great way to render a on/off style question or control
export interface IToggle extends SchemaDefinitionValues<IToggleDefinition> {}
export interface IToggleInstance extends Schema<IToggleDefinition> {}
