import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import sprucebotTypedMessageDefinition from '../../src/schemas/sprucebotTypedMessage.definition'

type SprucebotTypedMessageDefinition = typeof sprucebotTypedMessageDefinition
export interface ISprucebotTypedMessageDefinition extends SprucebotTypedMessageDefinition {}

// Description missing in schema defined in /Users/taylorromero/Development/SpruceLabs/spruce-heartwood-workspace/packages/heartwood-skill/src/schemas/sprucebotTypedMessage.definition.ts
export interface ISprucebotTypedMessage extends SchemaDefinitionValues<ISprucebotTypedMessageDefinition> {}
export interface ISprucebotTypedMessageInstance extends Schema<ISprucebotTypedMessageDefinition> {}
