import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import confirmModalDefinition from '../../src/schemas/confirmDialog.definition'

type ConfirmModalDefinition = typeof confirmModalDefinition
export interface IConfirmModalDefinition extends ConfirmModalDefinition {}

// a confirmation dialog
export interface IConfirmModal extends SchemaDefinitionValues<IConfirmModalDefinition> {}
export interface IConfirmModalInstance extends Schema<IConfirmModalDefinition> {}
