import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import avatarDefinition from '../../src/schemas/avatar.definition'

type AvatarDefinition = typeof avatarDefinition
export interface IAvatarDefinition extends AvatarDefinition {}

// A photo of a person that is generally round
export interface IAvatar extends SchemaDefinitionValues<IAvatarDefinition> {}
export interface IAvatarInstance extends Schema<IAvatarDefinition> {}
