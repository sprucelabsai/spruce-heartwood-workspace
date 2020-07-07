import {
	IFieldDefinition,
	IFieldTemplateDetailOptions,
} from '@sprucelabs/schema'
import AbstractField from '@sprucelabs/schema/build/fields/AbstractField'
import FieldType from '#spruce:schema/fields/fieldType'

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
			}`,
		}
	}
}
