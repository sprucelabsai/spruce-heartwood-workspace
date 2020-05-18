import { FieldType } from '#spruce:schema/fields/fieldType'

import { IAddressFieldDefinition, AddressField } from '@sprucelabs/schema'
import { IBooleanFieldDefinition, BooleanField } from '@sprucelabs/schema'
import { IDateFieldDefinition, DateField } from '@sprucelabs/schema'
import { IDateTimeFieldDefinition, DateTimeField } from '@sprucelabs/schema'
import { IDirectoryFieldDefinition, DirectoryField } from '@sprucelabs/schema'
import { IDurationFieldDefinition, DurationField } from '@sprucelabs/schema'
import { IFileFieldDefinition, FileField } from '@sprucelabs/schema'
import { IIdFieldDefinition, IdField } from '@sprucelabs/schema'
import { INumberFieldDefinition, NumberField } from '@sprucelabs/schema'
import { IPhoneFieldDefinition, PhoneField } from '@sprucelabs/schema'
import { IRawFieldDefinition, RawField } from '@sprucelabs/schema'
import { ISchemaFieldDefinition, SchemaField } from '@sprucelabs/schema'
import { ISelectFieldDefinition, SelectField } from '@sprucelabs/schema'
import { ITextFieldDefinition, TextField } from '@sprucelabs/schema'
import CallbackField, { ICallbackFieldDefinition } from '#spruce/../src/fields/CallbackField'
import ElementTypeField, { IElementTypeFieldDefinition } from '#spruce/../src/fields/ElementTypeField'
import EventCallbackField, { IEventCallbackFieldDefinition } from '#spruce/../src/fields/EventCallbackField'
import NodeField, { INodeFieldDefinition } from '#spruce/../src/fields/NodeField'


/** Field definition union */
export type FieldDefinition = | IAddressFieldDefinition| IBooleanFieldDefinition| IDateFieldDefinition| IDateTimeFieldDefinition| IDirectoryFieldDefinition| IDurationFieldDefinition| IFileFieldDefinition| IIdFieldDefinition| INumberFieldDefinition| IPhoneFieldDefinition| IRawFieldDefinition| ISchemaFieldDefinition| ISelectFieldDefinition| ITextFieldDefinition| ICallbackFieldDefinition| IElementTypeFieldDefinition| IEventCallbackFieldDefinition| INodeFieldDefinition

/** Field class union */
export type FieldClass = | typeof AddressField| typeof BooleanField| typeof DateField| typeof DateTimeField| typeof DirectoryField| typeof DurationField| typeof FileField| typeof IdField| typeof NumberField| typeof PhoneField| typeof RawField| typeof SchemaField| typeof SelectField| typeof TextField| typeof CallbackField| typeof ElementTypeField| typeof EventCallbackField| typeof NodeField

/** Field instance union **/
export type Field = | AddressField| BooleanField| DateField| DateTimeField| DirectoryField| DurationField| FileField| IdField| NumberField| PhoneField| RawField| SchemaField| SelectField| TextField| CallbackField| ElementTypeField| EventCallbackField| NodeField


/** Type for looking up field definitions by field type */
export type FieldDefinitionMap = {
	[FieldType.Address]: IAddressFieldDefinition
	[FieldType.Boolean]: IBooleanFieldDefinition
	[FieldType.Date]: IDateFieldDefinition
	[FieldType.DateTime]: IDateTimeFieldDefinition
	[FieldType.Directory]: IDirectoryFieldDefinition
	[FieldType.Duration]: IDurationFieldDefinition
	[FieldType.File]: IFileFieldDefinition
	[FieldType.Id]: IIdFieldDefinition
	[FieldType.Number]: INumberFieldDefinition
	[FieldType.Phone]: IPhoneFieldDefinition
	[FieldType.Raw]: IRawFieldDefinition
	[FieldType.Schema]: ISchemaFieldDefinition
	[FieldType.Select]: ISelectFieldDefinition
	[FieldType.Text]: ITextFieldDefinition
	[FieldType.Callback]: ICallbackFieldDefinition
	[FieldType.ElementType]: IElementTypeFieldDefinition
	[FieldType.EventCallback]: IEventCallbackFieldDefinition
	[FieldType.Node]: INodeFieldDefinition
}


/** Type for looking up field definitions by field type */
export interface IFieldDefinitionMap {
	[FieldType.Address]: IAddressFieldDefinition
	[FieldType.Boolean]: IBooleanFieldDefinition
	[FieldType.Date]: IDateFieldDefinition
	[FieldType.DateTime]: IDateTimeFieldDefinition
	[FieldType.Directory]: IDirectoryFieldDefinition
	[FieldType.Duration]: IDurationFieldDefinition
	[FieldType.File]: IFileFieldDefinition
	[FieldType.Id]: IIdFieldDefinition
	[FieldType.Number]: INumberFieldDefinition
	[FieldType.Phone]: IPhoneFieldDefinition
	[FieldType.Raw]: IRawFieldDefinition
	[FieldType.Schema]: ISchemaFieldDefinition
	[FieldType.Select]: ISelectFieldDefinition
	[FieldType.Text]: ITextFieldDefinition
	[FieldType.Callback]: ICallbackFieldDefinition
	[FieldType.ElementType]: IElementTypeFieldDefinition
	[FieldType.EventCallback]: IEventCallbackFieldDefinition
	[FieldType.Node]: INodeFieldDefinition
}

/** All field instances */
export interface IFieldMap {
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

