import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import imageDefinition from '../../src/schemas/image.definition'

type ImageDefinition = typeof imageDefinition
export interface IImageDefinition extends ImageDefinition {}

// A basic image tag
export interface IImage extends SchemaDefinitionValues<IImageDefinition> {}
export interface IImageInstance extends Schema<IImageDefinition> {}
