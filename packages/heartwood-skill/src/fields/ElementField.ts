import React from 'react'
import { FieldType } from '#spruce:schema/fields/fieldType'
import AbstractField from '@sprucelabs/schema/build/fields/AbstractField'
import {
	IFieldTemplateDetailOptions,
	IFieldDefinition
} from '@sprucelabs/schema'

export type IElementFieldDefinition = IFieldDefinition<React.ReactElement> & {
	/** * .Element - An action to be invoked when a person interacts with a component */
	type: FieldType.Element
	options?: {}
}

export default class ElementField extends AbstractField<
	IElementFieldDefinition
> {
	public static get description() {
		return 'A React.Element'
	}

	public static templateDetails(
		options: IFieldTemplateDetailOptions<IElementFieldDefinition>
	) {
		return {
			valueType: `JSX.Element${options.definition.isArray ? '[]' : ''}`
		}
	}
}
