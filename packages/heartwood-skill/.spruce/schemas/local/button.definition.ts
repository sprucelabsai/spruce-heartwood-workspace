import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import iconDefinitionLocal from '#spruce/schemas/local/icon.definition'

const buttonDefinition: SpruceSchemas.Local.Button.IDefinition  = {
	id: 'button',
	name: 'Button',
	description: 'A interactive element you can touch or click to invoke an Action',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Kind. Sets the visual appearance of the button. May be primary, secondary, simple, or caution. */
	            'kind': {
	                label: 'Kind',
	                type: SpruceSchema.FieldType.Select,
	                hint: 'Sets the visual appearance of the button. May be primary, secondary, simple, or caution.',
	                options: {choices: [{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}],}
	            },
	            /** Is small. Set true to make the button less tall. */
	            'isSmall': {
	                label: 'Is small',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to make the button less tall.',
	                options: undefined
	            },
	            /** Is full width. Set true to make the button fill its parent's width. */
	            'isFullWidth': {
	                label: 'Is full width',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to make the button fill its parent\'s width.',
	                options: undefined
	            },
	            /** Is loading. Set true to hide any text or icon in the button and show a loader instead. */
	            'isLoading': {
	                label: 'Is loading',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to hide any text or icon in the button and show a loader instead.',
	                options: undefined
	            },
	            /** Is icon only. Set true to hide any text in the button. Text should still be provided for accessibility. */
	            'isIconOnly': {
	                label: 'Is icon only',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to hide any text in the button. Text should still be provided for accessibility.',
	                options: undefined
	            },
	            /** Text. Text for the button. */
	            'text': {
	                label: 'Text',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Text for the button.',
	                options: undefined
	            },
	            /** Href. Will render a link. May be relative or absolute. */
	            'href': {
	                label: 'Href',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Will render a link. May be relative or absolute.',
	                options: undefined
	            },
	            /** Icon. Icon for the button. */
	            'icon': {
	                label: 'Icon',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Icon for the button.',
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Type. Type attribute for HTML button element. Defaults to 'button'. */
	            'type': {
	                label: 'Type',
	                type: SpruceSchema.FieldType.Select,
	                hint: 'Type attribute for HTML button element. Defaults to \'button\'.',
	                defaultValue: "button",
	                options: {choices: [{"label":"Button","value":"button"},{"label":"Submit","value":"submit"},{"label":"Reset","value":"reset"}],}
	            },
	            /** Is disabled. Set true to disable the button */
	            'isDisabled': {
	                label: 'Is disabled',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to disable the button',
	                options: undefined
	            },
	            /** classname. */
	            'className': {
	                label: 'classname',
	                type: SpruceSchema.FieldType.Text,
	                options: undefined
	            },
	            /** On click handler. */
	            'onClick': {
	                label: 'On click handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	            /** . */
	            'children': {
	                type: SpruceSchema.FieldType.Node,
	                options: undefined
	            },
	            /** . Lets you override the element used when rendering a link */
	            'AnchorComponent': {
	                type: SpruceSchema.FieldType.ElementType,
	                hint: 'Lets you override the element used when rendering a link',
	                options: undefined
	            },
	            /** Target. _blank|_self|_parent|_top|framename */
	            'target': {
	                label: 'Target',
	                type: SpruceSchema.FieldType.Text,
	                hint: '_blank|_self|_parent|_top|framename',
	                options: undefined
	            },
	    }
}

export default buttonDefinition
