import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'
import iconDefinition from './icon.builder'

const dragCallback = `(event?: React.DragEvent<HTMLElement>) => void`

const dropzoneDefinition = buildSchemaDefinition({
	id: 'dropzone',
	name: 'Dropzone',
	description: 'Drop a file to upload',
	fields: {
		id: {
			type: FieldType.Id,
			label: 'Id'
		},
		uploadButtonText: {
			type: FieldType.Text,
			label: 'Upload btn text',
			hint: 'Text '
		},
		uploadProgress: {
			type: FieldType.Number,
			label: 'Upload progress'
		},
		errorMessage: {
			type: FieldType.Text,
			label: 'Error message',
			hint: 'Output an error message',
			defaultValue: 'Oops, something went wrong!'
		},
		onDragEnter: {
			type: FieldType.Raw,
			label: 'On drag enter',
			isPrivate: true,
			options: {
				valueType: dragCallback
			}
		},
		onDragLeave: {
			type: FieldType.Raw,
			label: 'On drag leave',
			isPrivate: true,
			options: {
				valueType: dragCallback
			}
		},
		onDragOver: {
			type: FieldType.Raw,
			label: 'On drag over',
			isPrivate: true,
			options: {
				valueType: dragCallback
			}
		},
		onDrop: {
			type: FieldType.Raw,
			label: 'On drop',
			options: {
				valueType: `(acceptedFiles: File[], rejectedFiles: File[], event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void`
			}
		},
		onDropAccepted: {
			type: FieldType.Raw,
			options: {
				valueType:
					'(files?: File[], event?: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void'
			}
		},
		onDropRejected: {
			type: FieldType.Raw,
			options: {
				valueType:
					'(files?: File[], event?: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void'
			}
		},
		onFileDialogCancel: {
			type: FieldType.Raw,
			options: {
				valueType: '() => void'
			}
		},
		label: {
			type: FieldType.Schema,
			label: 'Label',
			options: {
				schemaId: 'label'
			}
		},
		isSmall: {
			type: FieldType.Boolean,
			label: 'Small',
			defaultValue: false
		},
		isCircular: {
			type: FieldType.Boolean,
			label: 'Circular',
			hint: 'Render upload as a circle (only use if isSmall is true)',
			defaultValue: false
		},
		fileWasUploaded: {
			type: FieldType.Boolean,
			label: 'File uploaded',
			hint: 'Show file uploaded',
			defaultValue: false
		},
		acceptedMimeTypes: {
			type: FieldType.Text,
			label: 'Accept types',
			isArray: true,
			defaultValue: ['image/*']
		},
		defaultIcon: {
			type: FieldType.Schema,
			label: 'Default icon',
			hint: 'The icon shown before anything is dropped.',
			options: {
				schema: iconDefinition
			}
		}
	}
})

export default dropzoneDefinition
