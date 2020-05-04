// NOTE: Relies on https://github.com/mosch/react-avatar-editor
import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'
import Button from '../Button/Button'
import Dropzone from '../Dropzone/Dropzone'
import { Slider } from '../Forms'
import RotateLeftIcon from '../../../static/assets/icons/Design/Rotate/rotate-back.svg'
import RotateRightIcon from '../../../static/assets/icons/Design/Rotate/rotate-forward.svg'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

interface IImageCropperProps {
	/** The image. If null, this will render a Dropzone. */
	image?: string

	/** Width of the image */
	width: number

	/** Height of the image */
	height: number

	/** Properties for the Dropzone */
	dropzone: SpruceSchemas.Local.IDropzone

	/** Set true for circular image */
	isCircular?: boolean

	/** Callback when save button is clicked */
	onSubmit?: Function

	/** Callback when upload new button is clicked */
	onUploadNewImage?: SpruceSchemas.Local.IButton['onClick']

	/** Optional color */
	color?: [number, number, number, number]
}

interface IImageCropperState {
	scale: number
	rotate: number
	isSubmitting: boolean
	sliderValue: number
}

export default class ImageCropper extends Component<
	IImageCropperProps,
	IImageCropperState
> {
	public state = {
		scale: 1,
		sliderValue: 0,
		rotate: 0,
		isSubmitting: false
	}

	private avatarEditor: any

	public handleScale = (e: any) => {
		const newVal = e.currentTarget.value

		this.setState({
			scale: newVal / 100 + 1,
			sliderValue: newVal
		})
	}

	public handleRotate = (dir: 'left' | 'right') => {
		this.setState(prevState => {
			const newRotate =
				dir === 'left' ? prevState.rotate - 90 : prevState.rotate + 90
			return {
				rotate: newRotate
			}
		})
	}

	public handleSubmit = async () => {
		const canvasImg = this.avatarEditor.getImageScaledToCanvas()

		if (this.props.onSubmit) {
			this.setState({ isSubmitting: true })
			await this.props.onSubmit(canvasImg)
			this.setState({ isSubmitting: false })
		}
	}

	public render() {
		const {
			image,
			width,
			height,
			isCircular,
			dropzone: dropzoneProps,
			onUploadNewImage,
			...rest
		} = this.props
		const { scale, rotate, isSubmitting, sliderValue } = this.state
		return (
			<div className="image-cropper">
				<div className="image-cropper__dropzone-wrapper">
					{image ? (
						<AvatarEditor
							image={image}
							width={width}
							height={height}
							scale={scale}
							rotate={rotate}
							border={0}
							borderRadius={isCircular ? 100 : 0}
							color={[255, 255, 255, 1]}
							{...rest}
							ref={editor => {
								this.avatarEditor = editor
							}}
						/>
					) : (
						<Dropzone {...dropzoneProps} />
					)}
				</div>
				<div className="image-cropper__controls-row">
					<Button
						kind={'secondary'}
						className="image-cropper__rotate-btn"
						text="Rotate Left"
						icon={{
							customIcon: RotateLeftIcon,
							isLineIcon: true
						}}
						isDisabled={!image || isSubmitting}
						onClick={() => this.handleRotate('left')}
					/>
					<Button
						kind={'secondary'}
						className="image-cropper__rotate-btn"
						text="Rotate Right"
						icon={{
							customIcon: RotateRightIcon,
							isLineIcon: true
						}}
						isDisabled={!image || isSubmitting}
						onClick={() => this.handleRotate('right')}
					/>
				</div>
				<div className="image-cropper__controls-row">
					<Slider
						label={{ text: 'Scale', postLabel: `${Math.round(scale * 100)}%` }}
						id="scale"
						min={0}
						max={100}
						value={sliderValue}
						isDisabled={!image || isSubmitting}
						onChange={this.handleScale}
					/>
				</div>
				<div className="image-cropper__controls-row">
					{image && (
						<Button
							kind={'simple'}
							text="Upload another image"
							isDisabled={isSubmitting}
							onClick={onUploadNewImage}
						/>
					)}
					<Button
						kind={'primary'}
						isFullWidth={image ? false : true}
						text="Save Image"
						isDisabled={!image || isSubmitting}
						isLoading={isSubmitting}
						onClick={() => this.handleSubmit()}
					/>
				</div>
			</div>
		)
	}
}
