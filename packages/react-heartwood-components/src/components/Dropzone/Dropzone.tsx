import React, { Component, Fragment } from 'react'
import ReactDropzone, { DropEvent } from 'react-dropzone'
import cx from 'classnames'
import Button from '../Button/Button'
import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import DefaultIcon from '../../../static/assets/icons/Interface-Essential/Time-Files/time-clock-file-upload.svg'
import UploadedIcon from '../../../static/assets/icons/Interface-Essential/Time-Files/time-clock-file-check.svg'
import DropIcon from '../../../static/assets/icons/Interface-Essential/Select/cursor-select-4.svg'
import WarnIcon from '../../../static/assets/icons/Interface-Essential/Alerts/alert-triangle--56w.svg'
import Label from '../Forms/components/Label/Label'

interface IDropZoneState {
	userCanDrop: boolean
}

const defaults = defaultProps

export default class Dropzone extends Component<
	SpruceSchemas.Local.IDropzone & typeof defaults,
	IDropZoneState
> {
	public static defaultProps = defaults
	public dropzone: any

	public onDragEnter = (event: React.DragEvent<HTMLElement>) => {
		const { onDragEnter } = this.props
		if (onDragEnter) {
			onDragEnter(event)
		}
		this.setState({
			userCanDrop: true
		})
	}
	public onDragLeave = (event: React.DragEvent<HTMLElement>) => {
		const { onDragLeave } = this.props
		if (onDragLeave) {
			onDragLeave(event)
		}
		this.setState({
			userCanDrop: false
		})
	}
	public onDragOver = (event: React.DragEvent<HTMLElement>) => {
		const { onDragOver } = this.props
		if (onDragOver) {
			onDragOver(event)
		}
	}

	public onDrop = (
		acceptedFiles: File[],
		rejectedFiles: File[],
		event: DropEvent
	) => {
		const { onDrop } = this.props
		if (onDrop) {
			onDrop(acceptedFiles, rejectedFiles, event)
		}
	}
	public onDropRejected = (files?: File[], event?: DropEvent) => {
		const { onDropRejected } = this.props
		if (onDropRejected) {
			onDropRejected(files, event)
		}
		this.setState({
			userCanDrop: false
		})
	}
	public onFileDialogCancel = () => {
		const { onFileDialogCancel } = this.props
		if (onFileDialogCancel) {
			onFileDialogCancel()
		}
	}
	public render() {
		const {
			label,
			uploadButtonText,
			errorMessage,
			isSmall,
			isCircular,
			fileWasUploaded,
			uploadProgress,
			defaultIcon,
			children
		} = this.props

		const defaultClass: string = cx('dropzone', {
			'dropzone-small': isSmall,
			'dropzone-circular': isCircular
		})
		return (
			<Fragment>
				{label && <Label {...label} />}
				{children}
				<ReactDropzone
					ref={ref => (this.dropzone = ref)}
					onDragEnter={this.onDragEnter}
					onDragLeave={this.onDragLeave}
					onDragOver={this.onDragOver}
					onDrop={this.onDrop}
					onDropRejected={this.onDropRejected}
					onFileDialogCancel={this.onFileDialogCancel}
					disabled={!!uploadProgress}
				>
					{({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
						<div
							{...getRootProps({
								className: defaultClass
							})}
						>
							<input {...getInputProps()} />

							{!!uploadProgress && (
								<Fragment>
									<p className="dropzone__helper-text">Uploading…</p>
									<div className="dropzone__uploading-progress-wrapper">
										<div
											className="dropzone__uploading-progress"
											style={{ width: `${uploadProgress}%` }}
										/>
									</div>
								</Fragment>
							)}
							<div className="dropzone__icons">
								{!uploadProgress && !isDragActive && !isDragReject && (
									<Fragment>
										{fileWasUploaded ? (
											<UploadedIcon className="dropzone__icon dropzone__did-upload-icon" />
										) : (
											defaultIcon ?? <DefaultIcon className="dropzone__icon" />
										)}
									</Fragment>
								)}
								{isDragActive && (
									<DropIcon className="dropzone__icon dropzone__allow-drop-icon" />
								)}
								{isDragReject && (
									<WarnIcon className="dropzone__icon dropzone__warn-drop-icon" />
								)}
							</div>
							<Button
								kind={isSmall ? 'simple' : 'secondary'}
								isSmall={isSmall}
								text={uploadButtonText}
								className="dropzone__btn"
								isDisabled={!!uploadProgress}
							/>
							{!isCircular && (
								<Fragment>
									<p className="dropzone__text">or drop files to upload</p>
									{isDragActive && (
										<p className="dropzone__helper-text-bottom dropzone__helper-text-	ed">
											Drop files to upload them
										</p>
									)}
									{isDragReject && (
										<p className="dropzone__helper-text-bottom dropzone__helper-text-rejected">
											{errorMessage}
										</p>
									)}
								</Fragment>
							)}
						</div>
					)}
				</ReactDropzone>
			</Fragment>
		)
	}
}
