import React from 'react'
import { FieldType, IFieldTemplateDetailOptions } from '@sprucelabs/schema'
import AbstractField, {
	IFieldDefinition
} from '@sprucelabs/schema/build/fields/AbstractField'

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
	public static get description() {
		return 'A universal onclick handler for react components'
	}
	public static templateDetails(
		options: IFieldTemplateDetailOptions<IOnClickFieldDefinition>
	) {
		return {
			valueType: `((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)${
				options.definition.isArray ? '[]' : ''
			}`
		}
	}
}
