import { IAction } from '../schemas/actions/types'
import { FieldType } from '#spruce:schema/fields/fieldType'
import { AbstractField } from '@sprucelabs/schema'
import { IFieldDefinition } from '@sprucelabs/schema'

export interface IActionFieldDefinition extends IFieldDefinition {
	/** * .Action - An action to be invoked when a person interacts with a component */
	type: FieldType.Action
	value?: IAction
	defaultValue?: IAction
	options?: {}
}

export default class ActionField extends AbstractField<IActionFieldDefinition> {
	public static templateDetails() {
		return {
			description: 'An action field',
			valueType: 'IAction'
		}
	}
}
