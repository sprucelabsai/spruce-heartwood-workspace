import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import radioDefinition from '../../src/schemas/forms/radio.definition'

type RadioDefinition = typeof radioDefinition
export interface IRadioDefinition extends RadioDefinition {}

// A radio control. Give a bunch the same name to keep them as part of the same group
export interface IRadio extends SchemaDefinitionValues<IRadioDefinition> {}
export interface IRadioInstance extends Schema<IRadioDefinition> {}
