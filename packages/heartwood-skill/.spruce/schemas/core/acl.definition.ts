import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'


const aclDefinition: SpruceSchemas.Core.Acl.IDefinition  = {
	id: 'acl',
	name: 'Access control list lookup table',
	dynamicKeySignature: { 
	    label: 'Permissions grouped by slug',
	    type: SpruceSchema.FieldType.Text,
	    key: 'slug',
	    isArray: true,
	    options: undefined
	}}

export default aclDefinition
