import React from 'react'
import { FieldType } from '#spruce:schema/fields/fieldType'
import AbstractField, {
	IFieldDefinition
} from '@sprucelabs/schema/build/fields/AbstractField'
import { IFieldTemplateDetailOptions } from '@sprucelabs/schema'

export type INodeFieldDefinition = IFieldDefinition<React.ReactElement> & {
	/** * .Element - An action to be invoked when a person interacts with a component */
	type: FieldType.Element
	options?: {}
}

export default class ElementField extends AbstractField<INodeFieldDefinition> {
	public static get description() {
		return 'A React.Element'
	}

	public static templateDetails(
		options: IFieldTemplateDetailOptions<INodeFieldDefinition>
	) {
		return {
			valueType: `React.ReactElement${options.definition.isArray ? '[]' : ''}`
		}
	}
}
