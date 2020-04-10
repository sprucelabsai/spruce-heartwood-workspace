import Schema, {
	SchemaDefinitionValues
} from '@sprucelabs/schema'

import uIEnhancementSectionDefinition from '../../src/schemas/uIEnhancements.definition'

type UIEnhancementSectionDefinition = typeof uIEnhancementSectionDefinition
export interface IUIEnhancementSectionDefinition extends UIEnhancementSectionDefinition {}

// Some front end components emit uiEnhancement events to allow skills to enhance them during presentation.
export interface IUIEnhancementSection extends SchemaDefinitionValues<IUIEnhancementSectionDefinition> {}
export interface IUIEnhancementSectionInstance extends Schema<IUIEnhancementSectionDefinition> {}
