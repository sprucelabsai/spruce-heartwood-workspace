import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import checkboxDefinition from '../../src/schemas/checkbox.definition'

type CheckboxDefinition = typeof checkboxDefinition
export interface ICheckboxDefinition extends CheckboxDefinition {}

// The one, the only, checkbox!
export interface ICheckbox extends SchemaDefinitionValues<ICheckboxDefinition> {}
export interface ICheckboxInstance extends Schema<ICheckboxDefinition> {}
