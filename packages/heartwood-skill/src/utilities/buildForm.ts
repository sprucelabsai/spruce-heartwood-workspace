import { ISchemaDefinition } from '@sprucelabs/schema'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export interface IFormBuilder<T extends ISchemaDefinition>
	extends SpruceSchemas.Local.IFormBuilder {}
