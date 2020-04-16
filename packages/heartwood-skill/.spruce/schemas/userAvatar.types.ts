import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import userAvatarDefinition from '../../src/schemas/userAvatar.definition'

type UserAvatarDefinition = typeof userAvatarDefinition
export interface IUserAvatarDefinition extends UserAvatarDefinition {}

// Avatar tied to a core user
export interface IUserAvatar extends SchemaDefinitionValues<IUserAvatarDefinition> {}
export interface IUserAvatarInstance extends Schema<IUserAvatarDefinition> {}