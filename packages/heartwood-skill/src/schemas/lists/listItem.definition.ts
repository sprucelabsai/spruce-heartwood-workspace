import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from '../forms/button.definition'
import iconDefinition from '../icon.definition'
import toggleDefinition from '../forms/toggle.definition'
import contextMenuDefinition from '../contextMenu.definition'

const listItemDefinition = buildSchemaDefinition({
	id: 'listItem',
	name: 'List item',
	description:
		'A list is comprised of list items (or expandable list items). This is that list item.',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id',
			isRequired: true
		},
		title: {
			type: FieldType.Text,
			label: 'Title',
			isRequired: true,
			hint: 'Title text'
		},
		subtitle: {
			type: FieldType.Text,
			label: 'Subtitle',
			hint: 'Optional subtitle text'
		},
		note: {
			type: FieldType.Text,
			label: 'Note',
			hint: 'Optional note text'
		},
		isExpandable: {
			type: FieldType.Boolean,
			label: 'Is expandable',
			hint: 'Can render this item as expandable'
		},
		avatar: {
			type: FieldType.Text,
			label: 'Avatar',
			hint: 'URL to show a user avatar'
		},
		image: {
			type: FieldType.Text,
			label: 'Image',
			hint: 'URL to show an image'
		},
		icon: {
			type: FieldType.Schema,
			label: 'Icon',
			hint: 'Inline svg icon',
			options: {
				schema: iconDefinition
			}
		},
		isIconHidden: {
			type: FieldType.Boolean,
			label: 'Is icon hidden',
			hint: 'Optional; visually hides the icon without removing it'
		},
		isLeftIndented: {
			type: FieldType.Boolean,
			label: 'Is left indented',
			hint:
				'Set true to add left spacing. useful in aligning with other list items that have icons or images'
		},
		isDraggable: {
			type: FieldType.Boolean,
			label: 'Is draggable',
			hint: 'Set true when the list can be reordered'
		},
		isDisabled: {
			type: FieldType.Boolean,
			label: 'Is disabled',
			hint: 'Set true when the list can be reordered'
		},
		toggleId: {
			type: FieldType.Text,
			label: 'Toggle id',
			hint: 'Makes the list item a setting'
		},
		toggleProps: {
			type: FieldType.Schema,
			label: 'Toggle props',
			hint: 'Props passed to the toggle if toggleId is set',
			options: {
				schema: toggleDefinition
			}
		},
		primaryAction: {
			type: FieldType.Action,
			label: 'Primary action',
			hint:
				'A primary action that turns the entire list item into a clickable action'
		},
		buttons: {
			type: FieldType.Schema,
			label: 'Buttons',
			isArray: true,
			hint: 'Actions associated with the list item',
			options: {
				schema: buttonDefinition
			}
		},
		contextMenu: {
			type: FieldType.Schema,
			label: 'Context menu',
			hint: 'Context Menu associated with the list it',
			options: {
				schema: contextMenuDefinition
			}
		},
		isSeparatorVisible: {
			type: FieldType.Boolean,
			label: 'Is separator visible',
			hint:
				'Set to true to show separator for this list item if followed by another list item.'
		},
		className: {
			type: FieldType.Text,
			label: 'Class name',
			isPrivate: true,
			hint: 'Optional class name for list item'
		},
		selectableType: {
			type: FieldType.Select,
			label: 'Selectable type',
			hint:
				'Optional: set whether to use checkbox or radio for selectable list items',
			options: {
				choices: [
					{
						label: 'Checkbox',
						value: 'checkbox'
					},
					{
						label: 'Radio',
						value: 'radio'
					}
				]
			}
		},
		selectableProps: {
			type: FieldType.Schema,
			label: 'Selectable props',
			hint:
				'Any props you want sent down to the selectable component being rendered',
			options: {
				schemaId: 'ListItemSelectablePropsType'
			}
		},
		warnings: {
			type: FieldType.Schema,
			label: 'Warnings',
			hint: 'Highlight title, subtitle, note with warning colors',
			options: {
				schemaId: 'ListItemWarningConfig'
			}
		},
		list: {
			type: FieldType.Schema,
			label: 'List',
			hint: 'Optional; adds a nested list',
			options: {
				schemaId: 'List'
			}
		},
		lists: {
			type: FieldType.Schema,
			label: 'Lists',
			isRequired: true,
			isArray: true,
			hint: 'Optional; adds multiple lists nested at the same level',
			options: {
				schemaId: 'List'
			}
		}
	}
})

export default listItemDefinition
