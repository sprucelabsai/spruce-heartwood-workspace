import {
	IFieldTemplateDetailOptions,
	IFieldDefinition,
} from '@sprucelabs/schema'
import AbstractField from '@sprucelabs/schema/build/fields/AbstractField'
import React from 'react'
import FieldType from '#spruce:schema/fields/fieldType'

export type INodeFieldDefinitionValue =
	| React.ReactChild
	| React.ReactFragment
	| React.ReactPortal
	| boolean

export type INodeFieldDefinition = IFieldDefinition<
	INodeFieldDefinitionValue
> & {
	/** * .Node - The return type from render or the type of children on a component */
	type: FieldType.Node
	options?: {}
}

export default class NodeField extends AbstractField<INodeFieldDefinition> {
	public static get description() {
		return 'A React.Node'
	}

	public static templateDetails(
		options: IFieldTemplateDetailOptions<INodeFieldDefinition>
	) {
		return {
			valueType: `${options.importAs}.INodeFieldDefinitionValue${
				options.definition.isArray ? '[]' : ''
			}`,
		}
	}
}
