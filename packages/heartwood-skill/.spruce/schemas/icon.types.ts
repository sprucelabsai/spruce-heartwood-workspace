import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import iconDefinition from '../../src/schemas/icon.definition'

type IconDefinition = typeof iconDefinition
export interface IIconDefinition extends IconDefinition {}

// **missing description**
export interface IIcon extends SchemaDefinitionValues<IIconDefinition> {}
export interface IIconInstance extends Schema<IIconDefinition> {}
