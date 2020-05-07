import React from 'react'
import { FieldType } from '#spruce:schema/fields/fieldType'
import AbstractField from '@sprucelabs/schema/build/fields/AbstractField'
import {
	IFieldTemplateDetailOptions,
	IFieldDefinition
} from '@sprucelabs/schema'

export type IElementTypeFieldDefinition = IFieldDefinition<
	React.ElementType
> & {
	/** * .Element - An action to be invoked when a person interacts with a component */
	type: FieldType.ElementType
	options?: {}
}

export default class ElementTypeField extends AbstractField<
	IElementTypeFieldDefinition
> {
	public static get description() {
		return 'A React.ElementType (you can use it as a jsx element)'
	}

	public static templateDetails(
		options: IFieldTemplateDetailOptions<IElementTypeFieldDefinition>
	) {
		return {
			valueType: `React.ElementType${options.definition.isArray ? '[]' : ''}`
		}
	}
}
