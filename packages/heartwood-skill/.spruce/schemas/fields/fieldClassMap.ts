import { FieldType } from '#spruce:schema/fields/fieldType'
import { FieldClass } from '#spruce:schema/fields/fields.types'

import { AddressField } from '@sprucelabs/schema'
import { BooleanField } from '@sprucelabs/schema'
import { DateField } from '@sprucelabs/schema'
import { DateTimeField } from '@sprucelabs/schema'
import { DirectoryField } from '@sprucelabs/schema'
import { DurationField } from '@sprucelabs/schema'
import { FileField } from '@sprucelabs/schema'
import { IdField } from '@sprucelabs/schema'
import { NumberField } from '@sprucelabs/schema'
import { PhoneField } from '@sprucelabs/schema'
import { RawField } from '@sprucelabs/schema'
import { SchemaField } from '@sprucelabs/schema'
import { SelectField } from '@sprucelabs/schema'
import { TextField } from '@sprucelabs/schema'
import CallbackField from '#spruce/../src/fields/CallbackField'
import ElementTypeField from '#spruce/../src/fields/ElementTypeField'
import EventCallbackField from '#spruce/../src/fields/EventCallbackField'
import NodeField from '#spruce/../src/fields/NodeField'

/** Value for looking up field classes by field type */
export const FieldClassMap: Record<FieldType, FieldClass> = {
	[FieldType.Address]: AddressField,
	[FieldType.Boolean]: BooleanField,
	[FieldType.Date]: DateField,
	[FieldType.DateTime]: DateTimeField,
	[FieldType.Directory]: DirectoryField,
	[FieldType.Duration]: DurationField,
	[FieldType.File]: FileField,
	[FieldType.Id]: IdField,
	[FieldType.Number]: NumberField,
	[FieldType.Phone]: PhoneField,
	[FieldType.Raw]: RawField,
	[FieldType.Schema]: SchemaField,
	[FieldType.Select]: SelectField,
	[FieldType.Text]: TextField,
	[FieldType.Callback]: CallbackField,
	[FieldType.ElementType]: ElementTypeField,
	[FieldType.EventCallback]: EventCallbackField,
	[FieldType.Node]: NodeField
}

/** Interface for looking up classes by field type */
export interface IFieldClassMap {
	[FieldType.Address]: AddressField
	[FieldType.Boolean]: BooleanField
	[FieldType.Date]: DateField
	[FieldType.DateTime]: DateTimeField
	[FieldType.Directory]: DirectoryField
	[FieldType.Duration]: DurationField
	[FieldType.File]: FileField
	[FieldType.Id]: IdField
	[FieldType.Number]: NumberField
	[FieldType.Phone]: PhoneField
	[FieldType.Raw]: RawField
	[FieldType.Schema]: SchemaField
	[FieldType.Select]: SelectField
	[FieldType.Text]: TextField
	[FieldType.Callback]: CallbackField
	[FieldType.ElementType]: ElementTypeField
	[FieldType.EventCallback]: EventCallbackField
	[FieldType.Node]: NodeField
}
