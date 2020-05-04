import AbstractField from '@sprucelabs/schema/build/fields/AbstractField'
import {
	IFieldDefinition,
	IFieldTemplateDetailOptions,
	FieldType
} from '@sprucelabs/schema'

type ICallbackFieldDefinitionValue = () => any

export type ICallbackFieldDefinition = IFieldDefinition<
	ICallbackFieldDefinitionValue
> & {
	type: FieldType.Callback
	options: {
		signature: string
	}
}

export default class CallbackField extends AbstractField<
	ICallbackFieldDefinition
> {
	public static get description() {
		return `Set my signature to '(someArg: SomeType, maybeOption?: boolean) => Promise<AnotherType>' and I'll do the rest!`
	}

	public static templateDetails(
		options: IFieldTemplateDetailOptions<ICallbackFieldDefinition>
	) {
		return {
			valueType: `(${options.definition.options.signature})${
				options.definition.isArray ? '[]' : ''
			}`
		}
	}
}
