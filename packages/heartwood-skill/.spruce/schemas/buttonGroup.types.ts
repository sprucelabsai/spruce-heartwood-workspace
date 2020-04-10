import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import buttonGroupDefinition from '../../src/schemas/forms/buttonGroup.definition'

type ButtonGroupDefinition = typeof buttonGroupDefinition
export interface IButtonGroupDefinition extends ButtonGroupDefinition {}

// A group of buttons presented in a few cool ways (see kind)
export interface IButtonGroup extends SchemaDefinitionValues<IButtonGroupDefinition> {}
export interface IButtonGroupInstance extends Schema<IButtonGroupDefinition> {}
