import React from 'react'
import { FieldType } from '#spruce:schema/fields/fieldType'
import { AbstractField } from '@sprucelabs/schema'
import { IFieldDefinition } from '@sprucelabs/schema'

export type INodeFieldDefinitionValue =
	| React.ReactChild
	| React.ReactFragment
	| React.ReactPortal
	| boolean

export type INodeFieldDefinition = IFieldDefinition<
	INodeFieldDefinitionValue
> & {
	/** * .Action - An action to be invoked when a person interacts with a component */
	type: FieldType.Node
	options?: {}
}

export default class NodeField extends AbstractField<INodeFieldDefinition> {
	public static templateDetails() {
		return {
			description: 'A react node',
			valueType: 'INodeFieldDefinitionValue'
		}
	}
}
