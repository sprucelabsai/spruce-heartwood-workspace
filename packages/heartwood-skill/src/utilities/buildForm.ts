import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { ISchemaDefinition } from '@sprucelabs/schema'

export interface IFormBuilder<T extends ISchemaDefinition>
	extends SpruceSchemas.Local.IFormBuilder {}
