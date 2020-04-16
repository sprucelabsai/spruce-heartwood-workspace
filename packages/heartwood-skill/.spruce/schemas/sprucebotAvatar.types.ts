import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import sprucebotAvatarDefinition from '../../src/schemas/sprucebotAvatar.definition'

type SprucebotAvatarDefinition = typeof sprucebotAvatarDefinition
export interface ISprucebotAvatarDefinition extends SprucebotAvatarDefinition {}

// Make it great!
export interface ISprucebotAvatar extends SchemaDefinitionValues<ISprucebotAvatarDefinition> {}
export interface ISprucebotAvatarInstance extends Schema<ISprucebotAvatarDefinition> {}
