import { FieldType } from '#spruce:schema/fields/fieldType'
import { FieldClassMap } from '@sprucelabs/schema'

import CallbackField from '#spruce/../src/fields/CallbackField'
import ElementTypeField from '#spruce/../src/fields/ElementTypeField'
import EventCallbackField from '#spruce/../src/fields/EventCallbackField'
import NodeField from '#spruce/../src/fields/NodeField'

/** Value for looking up field classes by field type */
FieldClassMap[FieldType.Callback] = CallbackField
FieldClassMap[FieldType.ElementType] = ElementTypeField
FieldClassMap[FieldType.EventCallback] = EventCallbackField
FieldClassMap[FieldType.Node] = NodeField


