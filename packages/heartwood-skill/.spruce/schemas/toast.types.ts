import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import toastDefinition from '../../src/schemas/toast.definition'

type ToastDefinition = typeof toastDefinition
export interface IToastDefinition extends ToastDefinition {}

// Call out information so it&#x27;s impossible to miss!
export interface IToast extends SchemaDefinitionValues<IToastDefinition> {}
export interface IToastInstance extends Schema<IToastDefinition> {}
