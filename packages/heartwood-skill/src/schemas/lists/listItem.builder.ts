import { buildSchemaDefinition, FieldType } from '@sprucelabs/schema'
import buttonDefinition from '../forms/button.definition'
import iconDefinition from '../icon.definition'
import toggleDefinition from '../forms/toggle.definition'
import contextMenuDefinition from '../contextMenu.definition'
import radioDefinition from '../forms/radio.definition'
import checkboxDefinition from '../forms/checkbox.definition'
import listItemWarningDefinition from './listItemWarning.definition'
import avatarDefinition from '../avatar.definition'
import imageDefinition from '../image.definition'

const listItemDefinition = buildSchemaDefinition({
	id: 'listItem',
	name: 'List item',
	description:
		'A list is comprised of list items (or expandable list items). This is that list item.',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
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
			type: FieldType.Schema,
			label: 'Avatar',
			options: {
				schema: avatarDefinition
			}
		},
		image: {
			type: FieldType.Schema,
			label: 'Image',
			options: {
				schema: imageDefinition
			}
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
		toggle: {
			type: FieldType.Schema,
			label: 'Toggle props',
			hint: 'Props passed to the toggle if toggleId is set',
			options: {
				schema: toggleDefinition
			}
		},
		primaryButton: {
			type: FieldType.Schema,
			label: 'Primary button',
			hint:
				'A primary button that turns the entire list item into a clickable button',
			options: {
				schema: buttonDefinition
			}
		},
		buttons: {
			type: FieldType.Schema,
			label: 'Buttons',
			isArray: true,
			hint: 'Additional buttons that get dropped into this item',
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
		isLoading: {
			type: FieldType.Boolean,
			label: 'Loading',
			hint: 'Makes the item look like a loading placeholder'
		},
		selectable: {
			type: FieldType.Schema,
			label: 'Selectable element',
			hint:
				'Any props you want sent down to the selectable component being rendered',
			options: {
				schemas: [
					{
						...radioDefinition,
						id: 'listItemRadio',
						fields: {
							...radioDefinition.fields,
							id: { ...radioDefinition.fields.id, isRequired: true }
						}
					},
					{
						...checkboxDefinition,
						id: 'listItemCheckbox',
						fields: {
							...checkboxDefinition.fields,
							id: { ...checkboxDefinition.fields.id, isRequired: true }
						}
					}
				]
			}
		},
		warnings: {
			type: FieldType.Schema,
			label: 'Warnings',
			hint: 'Highlight title, subtitle, note with warning colors',
			options: {
				schema: listItemWarningDefinition
			}
		},
		list: {
			type: FieldType.Schema,
			label: 'List',
			hint: 'Optional; adds a nested list',
			options: {
				schemaId: 'list'
			}
		},
		lists: {
			type: FieldType.Schema,
			label: 'Lists',
			isArray: true,
			hint: 'Optional; adds multiple lists nested at the same level',
			options: {
				schemaId: 'list'
			}
		},
		onClick: {
			...buttonDefinition.fields.onClick,
			label: 'Click handler'
		}
	}
})

export default listItemDefinition
