import { Action } from '../schemas/actions/types'
import { FieldType } from '#spruce:schema/fields/fieldType'
import { AbstractField } from '@sprucelabs/schema'
import { IFieldDefinition } from '@sprucelabs/schema'

export type IActionFieldDefinition = IFieldDefinition<Action> & {
	/** * .Action - An action to be invoked when a person interacts with a component */
	type: FieldType.Action
	options?: {}
}

export default class ActionField extends AbstractField<IActionFieldDefinition> {
	public static templateDetails() {
		return {
			description:
				'An action field that is invoked when an interaction takes place on a Heartwood component',
			valueType: 'Action'
		}
	}
}
