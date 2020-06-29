import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React, { Component } from 'react'
import ShopIcon from '../../../static/assets/icons/Shopping-E-Commerce/Shops/shop-1--56w.svg'
import AvatarIcon from '../../../static/assets/icons/Users/Geometric-Close-Up-Single-User-Actions-Neutral/single-neutral-actions-image--56w.svg'
import ImageCropper from './ImageCropper'

const stories = storiesOf('ImageCropper', module)

interface IImageCropperExampleProps {
	isCircular: boolean
	width: number
	height: number
}

interface IImageCropperExampleState {
	image: string | ArrayBuffer | null
}

class ImageCropperExample extends Component<
	IImageCropperExampleProps,
	IImageCropperExampleState
> {
	public state = {
		image: null
	}

	public handleDrop = (files: any) => {
		files.forEach(file => {
			const reader = new FileReader()
			reader.onload = () => {
				const fileAsDataURL = reader.result
				this.setState({
					image: fileAsDataURL
				})
			}
			reader.readAsDataURL(file)
		})
	}

	public render() {
		const { isCircular, width, height } = this.props

		return (
			<ImageCropper
				image={text(
					'image',
					'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d43ec18ec2cf6ff854513b9e8395c1e&auto=format&fit=crop&w=320&h=320&q=80'
				)}
				width={width}
				height={height}
				isCircular={isCircular}
				dropzone={{
					id: 'dropzone',
					onDrop: () => console.log('onDrop'),
					onDragEnter: () => console.log('onDragEnter'),
					onDragOver: () => console.log('onDragOver'),
					onDragLeave: () => console.log('onDragLeave'),
					onDropAccepted: this.handleDrop,
					uploadButtonText: 'Add Image',
					isSmall: true,
					isCircular,
					errorMessage: 'Upload an image',
					defaultIcon: {
						customIcon: isCircular ? (
							<AvatarIcon className="dropzone__icon" />
						) : (
							<ShopIcon className="dropzone__icon" />
						)
					}
				}}
				color={[249, 250, 252, 1]}
			/>
		)
	}
}

stories.addDecorator(withKnobs)

stories
	.add('Static', () => (
		<ImageCropper
			image={text(
				'image',
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d43ec18ec2cf6ff854513b9e8395c1e&auto=format&fit=crop&w=320&h=320&q=80'
			)}
			width={number('width', 160)}
			height={number('height', 160)}
			isCircular={boolean('isCircular', true)}
			dropzone={{
				id: 'dropzone',
				onDrop: () => console.log('onDrop'),
				onDragEnter: () => console.log('onDragEnter'),
				onDragOver: () => console.log('onDragOver'),
				onDragLeave: () => console.log('onDragLeave'),
				onDropAccepted: () => console.log('onDropAccepted'),
				uploadButtonText: 'Add Image',
				isSmall: true,
				isCircular: boolean('isCircular', true),
				errorMessage: 'Upload an image',
				defaultIcon: {
					customIcon: boolean('isCircular', true) ? (
						<AvatarIcon className="dropzone__icon" />
					) : (
						<ShopIcon className="dropzone__icon" />
					)
				}
			}}
			color={[249, 250, 252, 1]}
		/>
	))
	.add('Dynamic', () => (
		<ImageCropperExample
			width={number('width', 160)}
			height={number('height', 160)}
			isCircular={boolean('isCircular', true)}
		/>
	))
