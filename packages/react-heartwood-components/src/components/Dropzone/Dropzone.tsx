import React, { Component, Fragment } from 'react'
import ReactDropzone, { DropEvent } from 'react-dropzone'
import cx from 'classnames'
import { InputPre } from '../Forms/FormPartials'
import Button from '../Button/Button'
import DefaultIcon from '../../../static/assets/icons/Interface-Essential/Time-Files/time-clock-file-upload.svg'
import UploadedIcon from '../../../static/assets/icons/Interface-Essential/Time-Files/time-clock-file-check.svg'
import DropIcon from '../../../static/assets/icons/Interface-Essential/Select/cursor-select-4.svg'
import WarnIcon from '../../../static/assets/icons/Interface-Essential/Alerts/alert-triangle--56w.svg'
import { IHWButtonKinds } from '@sprucelabs/spruce-types'

export interface IDropzoneProps {
	/** Unique identifier for the dropzone */
	id: string

	/** Text for the button */
	buttonText: string

	/** Text shown when file(s) are dropped that aren't accepted */
	error: string

	/** Displays progress while uploading */
	uploadProgress: number

	/** OnDragEnter callback */
	onDragEnter?: (event?: React.DragEvent<HTMLElement>) => void

	/** OnDragLeave callback */
	onDragLeave?: (event?: React.DragEvent<HTMLElement>) => void

	/** OnDragOver callback */
	onDragOver?: (event?: React.DragEvent<HTMLElement>) => void

	/** Callback when file(s) are dropped */
	onDrop?: (
		acceptedFiles: File[],
		rejecFileedFiles: File[],
		event: DropEvent
	) => void

	/** OnDropAccepted callback */
	onDropAccepted: (files?: File[], event?: DropEvent) => void

	/** OnDropRejected callback */
	onDropRejected?: (files?: File[], event?: DropEvent) => void

	/** OnFileDialogCancel callback */
	onFileDialogCancel?: () => void

	/** OnDragStart callback */
	onDragStart?: (...args: any) => void

	/** Optional label for the Dropzone */
	label?: string

	/** Optional text to show after the label */
	postLabel?: string

	/** Set true to use a smaller Dropzone */
	isSmall?: boolean

	/** Set true to make the Dropzone circular. Should only be used when isSmall is set to true */
	isCircular?: boolean

	/** Set true when a file has been successfully uploaded */
	fileWasUploaded?: boolean

	/** The icon to display before an upload has happened */
	defaultIcon?: React.ReactNode

	/** Type of files to accept */
	accept?: string
}

interface IDropZoneState {
	userCanDrop: boolean
}

export default class Dropzone extends Component<
	IDropzoneProps,
	IDropZoneState
> {
	public static defaultProps = {
		fileWasUploaded: false,
		isSmall: false,
		isCircular: false
	}
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
	public onDragStart = (...args: any) => {
		const { onDragStart } = this.props
		if (onDragStart) {
			onDragStart(...args)
		}
	}
	public onDrop = (
		acceptedFiles: File[],
		rejecFileedFiles: File[],
		event: DropEvent
	) => {
		const { onDrop } = this.props
		if (onDrop) {
			onDrop(acceptedFiles, rejecFileedFiles, event)
		}
	}
	public onDropAccepted = (files: File[], event: DropEvent) => {
		const { onDropAccepted } = this.props
		if (onDropAccepted) {
			onDropAccepted(files, event)
		}
		this.setState({
			userCanDrop: false
		})
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
			id,
			label,
			postLabel,
			buttonText,
			error,
			isSmall,
			isCircular,
			fileWasUploaded,
			uploadProgress,
			defaultIcon,
			...rest
		} = this.props

		const defaultClass: string = cx('dropzone', {
			'dropzone-small': isSmall,
			'dropzone-circular': isCircular
		})
		return (
			<Fragment>
				{label && <InputPre id={id} label={label} postLabel={postLabel} />}
				<ReactDropzone
					ref={ref => (this.dropzone = ref)}
					onDragEnter={this.onDragEnter}
					onDragLeave={this.onDragLeave}
					onDragOver={this.onDragOver}
					onDragStart={this.onDragStart}
					onDrop={this.onDrop}
					onDropAccepted={this.onDropAccepted}
					onDropRejected={this.onDropRejected}
					onFileDialogCancel={this.onFileDialogCancel}
					disabled={!!uploadProgress}
					{...rest}
				>
					{({ getRootProps, getInputProps, isDragAccept, isDragReject }) => (
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
								{!uploadProgress && !isDragAccept && !isDragReject && (
									<Fragment>
										{fileWasUploaded ? (
											<UploadedIcon className="dropzone__icon dropzone__did-upload-icon" />
										) : (
											defaultIcon || <DefaultIcon className="dropzone__icon" />
										)}
									</Fragment>
								)}
								{isDragAccept && (
									<DropIcon className="dropzone__icon dropzone__allow-drop-icon" />
								)}
								{isDragReject && (
									<WarnIcon className="dropzone__icon dropzone__warn-drop-icon" />
								)}
							</div>
							<Button
								kind={
									isSmall ? IHWButtonKinds.Simple : IHWButtonKinds.Secondary
								}
								isSmall={isSmall}
								text={buttonText}
								className="dropzone__btn"
								isDisabled={!!uploadProgress}
							/>
							{!isCircular && (
								<Fragment>
									<p className="dropzone__text">or drop files to upload</p>
									{isDragAccept && (
										<p className="dropzone__helper-text-bottom dropzone__helper-text-accepted">
											Drop files to upload them
										</p>
									)}
									{isDragReject && (
										<p className="dropzone__helper-text-bottom dropzone__helper-text-rejected">
											{error}
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
