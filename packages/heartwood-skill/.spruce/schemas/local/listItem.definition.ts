import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import * as SpruceSchema from '@sprucelabs/schema'
import avatarDefinitionLocal from '#spruce/schemas/local/avatar.definition'
import imageDefinitionLocal from '#spruce/schemas/local/image.definition'
import iconDefinitionLocal from '#spruce/schemas/local/icon.definition'
import toggleDefinitionLocal from '#spruce/schemas/local/toggle.definition'
import buttonDefinitionLocal from '#spruce/schemas/local/button.definition'
import contextMenuDefinitionLocal from '#spruce/schemas/local/contextMenu.definition'
import listItemRadioDefinitionLocal from '#spruce/schemas/local/listItemRadio.definition'
import listItemCheckboxDefinitionLocal from '#spruce/schemas/local/listItemCheckbox.definition'
import listItemWarningDefinitionLocal from '#spruce/schemas/local/listItemWarning.definition'
import listDefinitionLocal from '#spruce/schemas/local/list.definition'

const listItemDefinition: SpruceSchemas.Local.ListItem.IDefinition  = {
	id: 'listItem',
	name: 'List item',
	description: 'A list is comprised of list items (or expandable list items). This is that list item.',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: SpruceSchema.FieldType.Id,
	                options: undefined
	            },
	            /** Title. Title text */
	            'title': {
	                label: 'Title',
	                type: SpruceSchema.FieldType.Text,
	                isRequired: true,
	                hint: 'Title text',
	                options: undefined
	            },
	            /** Subtitle. Optional subtitle text */
	            'subtitle': {
	                label: 'Subtitle',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Optional subtitle text',
	                options: undefined
	            },
	            /** Note. Optional note text */
	            'note': {
	                label: 'Note',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Optional note text',
	                options: undefined
	            },
	            /** Is expandable. Can render this item as expandable */
	            'isExpandable': {
	                label: 'Is expandable',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Can render this item as expandable',
	                options: undefined
	            },
	            /** Avatar. */
	            'avatar': {
	                label: 'Avatar',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [avatarDefinitionLocal],}
	            },
	            /** Image. */
	            'image': {
	                label: 'Image',
	                type: SpruceSchema.FieldType.Schema,
	                options: {schemas: [imageDefinitionLocal],}
	            },
	            /** Icon. Inline svg icon */
	            'icon': {
	                label: 'Icon',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Inline svg icon',
	                options: {schemas: [iconDefinitionLocal],}
	            },
	            /** Is icon hidden. Optional; visually hides the icon without removing it */
	            'isIconHidden': {
	                label: 'Is icon hidden',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Optional; visually hides the icon without removing it',
	                options: undefined
	            },
	            /** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
	            'isLeftIndented': {
	                label: 'Is left indented',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true to add left spacing. useful in aligning with other list items that have icons or images',
	                options: undefined
	            },
	            /** Is draggable. Set true when the list can be reordered */
	            'isDraggable': {
	                label: 'Is draggable',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true when the list can be reordered',
	                options: undefined
	            },
	            /** Is disabled. Set true when the list can be reordered */
	            'isDisabled': {
	                label: 'Is disabled',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set true when the list can be reordered',
	                options: undefined
	            },
	            /** Toggle props. Props passed to the toggle if toggleId is set */
	            'toggle': {
	                label: 'Toggle props',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Props passed to the toggle if toggleId is set',
	                options: {schemas: [toggleDefinitionLocal],}
	            },
	            /** Primary button. A primary button that turns the entire list item into a clickable button */
	            'primaryButton': {
	                label: 'Primary button',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'A primary button that turns the entire list item into a clickable button',
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Buttons. Additional buttons that get dropped into this item */
	            'buttons': {
	                label: 'Buttons',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Additional buttons that get dropped into this item',
	                isArray: true,
	                options: {schemas: [buttonDefinitionLocal],}
	            },
	            /** Context menu. Context Menu associated with the list it */
	            'contextMenu': {
	                label: 'Context menu',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Context Menu associated with the list it',
	                options: {schemas: [contextMenuDefinitionLocal],}
	            },
	            /** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
	            'isSeparatorVisible': {
	                label: 'Is separator visible',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Set to true to show separator for this list item if followed by another list item.',
	                options: undefined
	            },
	            /** Class name. Optional class name for list item */
	            'className': {
	                label: 'Class name',
	                type: SpruceSchema.FieldType.Text,
	                hint: 'Optional class name for list item',
	                options: undefined
	            },
	            /** Loading. Makes the item look like a loading placeholder */
	            'isLoading': {
	                label: 'Loading',
	                type: SpruceSchema.FieldType.Boolean,
	                hint: 'Makes the item look like a loading placeholder',
	                options: undefined
	            },
	            /** Selectable element. Any props you want sent down to the selectable component being rendered */
	            'selectable': {
	                label: 'Selectable element',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Any props you want sent down to the selectable component being rendered',
	                options: {schemas: [listItemRadioDefinitionLocal, listItemCheckboxDefinitionLocal],}
	            },
	            /** Warnings. Highlight title, subtitle, note with warning colors */
	            'warnings': {
	                label: 'Warnings',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Highlight title, subtitle, note with warning colors',
	                options: {schemas: [listItemWarningDefinitionLocal],}
	            },
	            /** List. Optional; adds a nested list */
	            'list': {
	                label: 'List',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Optional; adds a nested list',
	                options: {schemas: [listDefinitionLocal],}
	            },
	            /** Lists. Optional; adds multiple lists nested at the same level */
	            'lists': {
	                label: 'Lists',
	                type: SpruceSchema.FieldType.Schema,
	                hint: 'Optional; adds multiple lists nested at the same level',
	                isArray: true,
	                options: {schemas: [listDefinitionLocal],}
	            },
	            /** Click handler. */
	            'onClick': {
	                label: 'Click handler',
	                type: SpruceSchema.FieldType.EventCallback,
	                options: {event: `React.MouseEvent<...>`,element: `Element`,}
	            },
	    }
}

export default listItemDefinition
