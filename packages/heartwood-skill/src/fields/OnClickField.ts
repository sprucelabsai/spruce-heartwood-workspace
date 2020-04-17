import React from 'react'
import { IFieldDefinition, FieldType, AbstractField } from '@sprucelabs/schema'

export type IOnClickFieldDefinition = IFieldDefinition<
	(
		e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>
	) => void
> & {
	type: FieldType.OnClick
}

export default class OnClickField extends AbstractField<
	IOnClickFieldDefinition
> {
	public static templateDetails() {
		return {
			description: 'A universal onclick handler for react components',
			valueType:
				'(e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void'
		}
	}
}
