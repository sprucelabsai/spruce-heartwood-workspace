import {
	withKnobs,
	text,
	boolean,
	number,
	object,
	array
} from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React, { Component } from 'react'
import Dropzone from './Dropzone'

interface IDropzoneExampleProps {}
interface IDropzoneExampleState {
	uploadProgress: number
	fileWasUploaded: boolean
}

class DropzoneExample extends Component<
	IDropzoneExampleProps,
	IDropzoneExampleState
> {
	public interval: any
	public state = {
		uploadProgress: 0,
		fileWasUploaded: false
	}

	public fakeUpload = () => {
		const { uploadProgress } = this.state
		if (uploadProgress >= 100) {
			clearInterval(this.interval)
			this.setState({
				uploadProgress: 0,
				fileWasUploaded: true
			})
		} else {
			this.setState(prevState => ({
				uploadProgress: prevState.uploadProgress + 1
			}))
		}
	}

	public onDropAccepted = () => {
		this.interval = setInterval(this.fakeUpload, 10)
	}

	public render() {
		const { uploadProgress, fileWasUploaded } = this.state
		return (
			<Dropzone
				id={text('id', 'photos')}
				label={object('label', { text: 'Profile Photo' })}
				acceptedMimeTypes={array('acceptedMimeTypes', ['image/*'])}
				onDropAccepted={this.onDropAccepted}
				uploadButtonText={text('buttonText', 'Upload an Image')}
				fileWasUploaded={fileWasUploaded}
				uploadProgress={uploadProgress}
				errorMessage={text('error', 'Please upload an image file.')}
				isSmall={boolean('isSmall', false)}
				isCircular={boolean('isCircular', false)}
			/>
		)
	}
}

const stories = storiesOf('Dropzone', module)

stories.addDecorator(withKnobs)

stories

	.add('Static', () => (
		<Dropzone
			id={text('id', 'photos')}
			label={object('label', { text: 'Profile Photo' })}
			acceptedMimeTypes={text('acceptedMimeTypes', 'image/*')}
			onDropAccepted={() => console.log('onDropAccepted')}
			uploadButtonText={text('buttonText', 'Upload an Image')}
			fileWasUploaded={boolean('fileWasUploaded', false)}
			uploadProgress={number('uploadProgress', 0)}
			errorMessage={text('error', 'Please upload an image file.')}
			isSmall={boolean('isSmall', false)}
			isCircular={boolean('isCircular', false)}
		/>
	))
	.add('Dynamic', () => <DropzoneExample />)
