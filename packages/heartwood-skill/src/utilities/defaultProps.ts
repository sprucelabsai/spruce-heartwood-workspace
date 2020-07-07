import Schema, {
	ISchemaDefinition,
	SchemaDefinitionDefaultValues,
} from '@sprucelabs/schema'

/** Returns only the default props for a schema to be passed to a react component */
export default function defaultPropsForDefinition<T extends ISchemaDefinition>(
	definition: T
): SchemaDefinitionDefaultValues<T> {
	const instance = new Schema(definition)
	return instance.getDefaultValues({
		createSchemaInstances: false,
	})
}
