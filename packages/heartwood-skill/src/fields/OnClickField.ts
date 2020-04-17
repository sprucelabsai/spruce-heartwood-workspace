import React from 'react'
import { IFieldDefinition, FieldType, AbstractField } from '@sprucelabs/schema'

export interface IOnClickFieldDefinitionValue {
	(
		e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>
	): void
}

export type IOnClickFieldDefinition = IFieldDefinition<
	IOnClickFieldDefinitionValue
> & {
	type: FieldType.OnClick
}

export default class OnClickField extends AbstractField<
	IOnClickFieldDefinition
> {
	public static templateDetails() {
		return {
			description: 'A universal onclick handler for react components',
			valueType: 'IOnClickFieldDefinitionValue'
		}
	}
}
