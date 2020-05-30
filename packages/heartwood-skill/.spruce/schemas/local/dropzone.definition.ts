import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { FieldType } from '#spruce/schemas/fields/fieldType'
import labelDefinitionLocal from '#spruce/schemas/local/label.definition'
import iconDefinitionLocal from '#spruce/schemas/local/icon.definition'

const dropzoneDefinition: SpruceSchemas.Local.Dropzone.IDefinition = {
	id: 'dropzone',
	name: 'Dropzone',
	description: 'Drop a file to upload',
	fields: {
		/** Id. */
		id: {
			label: 'Id',
			type: FieldType.Id,
			options: undefined
		},
		/** Upload btn text. Text  */
		uploadButtonText: {
			label: 'Upload btn text',
			type: FieldType.Text,
			hint: 'Text ',
			options: undefined
		},
		/** Upload progress. */
		uploadProgress: {
			label: 'Upload progress',
			type: FieldType.Number,
			options: undefined
		},
		/** Error message. Output an error message */
		errorMessage: {
			label: 'Error message',
			type: FieldType.Text,
			hint: 'Output an error message',
			defaultValue: 'Oops, something went wrong!',
			options: undefined
		},
		/** On drag enter. */
		onDragEnter: {
			label: 'On drag enter',
			type: FieldType.Raw,
			options: { valueType: `(event?: React.DragEvent<HTMLElement>) => void` }
		},
		/** On drag leave. */
		onDragLeave: {
			label: 'On drag leave',
			type: FieldType.Raw,
			options: { valueType: `(event?: React.DragEvent<HTMLElement>) => void` }
		},
		/** On drag over. */
		onDragOver: {
			label: 'On drag over',
			type: FieldType.Raw,
			options: { valueType: `(event?: React.DragEvent<HTMLElement>) => void` }
		},
		/** On drop. */
		onDrop: {
			label: 'On drop',
			type: FieldType.Raw,
			options: {
				valueType: `(acceptedFiles: File[], rejectedFiles: File[], event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void`
			}
		},
		/** . */
		onDropAccepted: {
			type: FieldType.Raw,
			options: {
				valueType: `(files?: File[], event?: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void`
			}
		},
		/** . */
		onDropRejected: {
			type: FieldType.Raw,
			options: {
				valueType: `(files?: File[], event?: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void`
			}
		},
		/** . */
		onFileDialogCancel: {
			type: FieldType.Raw,
			options: { valueType: `() => void` }
		},
		/** Label. */
		label: {
			label: 'Label',
			type: FieldType.Schema,
			options: { schemas: [labelDefinitionLocal] }
		},
		/** Small. */
		isSmall: {
			label: 'Small',
			type: FieldType.Boolean,
			defaultValue: false,
			options: undefined
		},
		/** Circular. Render upload as a circle (only use if isSmall is true) */
		isCircular: {
			label: 'Circular',
			type: FieldType.Boolean,
			hint: 'Render upload as a circle (only use if isSmall is true)',
			defaultValue: false,
			options: undefined
		},
		/** File uploaded. Show file uploaded */
		fileWasUploaded: {
			label: 'File uploaded',
			type: FieldType.Boolean,
			hint: 'Show file uploaded',
			defaultValue: false,
			options: undefined
		},
		/** Accept types. */
		acceptedMimeTypes: {
			label: 'Accept types',
			type: FieldType.Text,
			defaultValue: ['image/*'],
			isArray: true,
			options: undefined
		},
		/** Default icon. The icon shown before anything is dropped. */
		defaultIcon: {
			label: 'Default icon',
			type: FieldType.Schema,
			hint: 'The icon shown before anything is dropped.',
			options: { schemas: [iconDefinitionLocal] }
		}
	}
}

export default dropzoneDefinition
