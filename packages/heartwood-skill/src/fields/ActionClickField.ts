import { Action } from '../schemas/actions/types'
import { FieldType } from '#spruce:schema/fields/fieldType'
import { AbstractField } from '@sprucelabs/schema'
import { IFieldDefinition } from '@sprucelabs/schema'

export interface IActionClickFieldDefinitionValue {
	(action: Action): any
}

export type IActionClickFieldDefinition = IFieldDefinition<
	IActionClickFieldDefinitionValue
> & {
	/** * .Action - An action to be invoked when a person interacts with a component */
	type: FieldType.ActionClick
	options?: {}
}

export default class ActionClickField extends AbstractField<
	IActionClickFieldDefinition
> {
	public static templateDetails() {
		return {
			description:
				'For when you need to click on a component that supports actions',
			valueType: 'IActionClickFieldDefinitionValue'
		}
	}
}
