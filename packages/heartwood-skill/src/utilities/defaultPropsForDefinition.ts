import {
	ISchemaDefinition,
	SchemaDefinitionPartialValues
} from '@sprucelabs/schema'

/** Returns only the default props for a schema to be passed to a react component */
export default function defaultPropsForDefinition<T extends ISchemaDefinition>(
	definition: T
): SchemaDefinitionPartialValues<T> {
	return {}
}
