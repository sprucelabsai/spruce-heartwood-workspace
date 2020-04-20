import React from 'react'
import { FieldType } from '@sprucelabs/schema'
import AbstractField, { IFieldDefinition }  from '@sprucelabs/schema/build/fields/AbstractField'

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
