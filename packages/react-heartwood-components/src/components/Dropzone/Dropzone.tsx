import React, { Component, Fragment } from 'react'
import ReactDropzone from 'react-dropzone'
import cx from 'classnames'
import { InputPre } from '../Forms/FormPartials'
import Button from '../Button/Button'
import DefaultIcon from '../../../static/assets/icons/Interface-Essential/Time-Files/time-clock-file-upload.svg'
import UploadedIcon from '../../../static/assets/icons/Interface-Essential/Time-Files/time-clock-file-check.svg'
import DropIcon from '../../../static/assets/icons/Interface-Essential/Select/cursor-select-4.svg'
import WarnIcon from '../../../static/assets/icons/Interface-Essential/Alerts/alert-triangle--56w.svg'

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
	onDragEnter?: Function

	/** OnDragLeave callback */
	onDragLeave?: Function

	/** OnDragOver callback */
	onDragOver?: Function

	/** Callback when file(s) are dropped */
	onDrop?: Function

	/** OnDropAccepted callback */
	onDropAccepted: Function

	/** OnDropRejected callback */
	onDropRejected?: Function

	/** OnFileDialogCancel callback */
	onFileDialogCancel?: Function

	/** OnDragStart callback */
	onDragStart?: Function

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

	public onDragEnter = () => {
		const { onDragEnter } = this.props
		if (onDragEnter) {
			onDragEnter()
		}
		this.setState({
			userCanDrop: true
		})
	}
	public onDragLeave = (...args) => {
		const { onDragLeave } = this.props
		if (onDragLeave) {
			onDragLeave(...args)
		}
		this.setState({
			userCanDrop: false
		})
	}
	public onDragOver = (...args) => {
		const { onDragOver } = this.props
		if (onDragOver) {
			onDragOver(...args)
		}
	}
	public onDragStart = (...args) => {
		const { onDragStart } = this.props
		if (onDragStart) {
			onDragStart(...args)
		}
	}
	public onDrop = (...args) => {
		const { onDrop } = this.props
		if (onDrop) {
			onDrop(...args)
		}
	}
	public onDropAccepted = (...args) => {
		const { onDropAccepted } = this.props
		if (onDropAccepted) {
			onDropAccepted(...args)
		}
		this.setState({
			userCanDrop: false
		})
	}
	public onDropRejected = (...args) => {
		const { onDropRejected } = this.props
		if (onDropRejected) {
			onDropRejected(...args)
		}
		this.setState({
			userCanDrop: false
		})
	}
	public onFileDialogCancel = (...args) => {
		const { onFileDialogCancel } = this.props
		if (onFileDialogCancel) {
			onFileDialogCancel(...args)
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
		const defaultClass = cx('dropzone', {
			'dropzone-small': isSmall,
			'dropzone-circular': isCircular
		})
		return (
			<Fragment>
				{label && <InputPre id={id} label={label} postLabel={postLabel} />}
				<ReactDropzone
					ref={ref => (this.dropzone = ref)}
					className={defaultClass}
					activeClassName="dropzone--is-hovered"
					rejectClassName="dropzone--has-error"
					disabledClassName="dropzone--is-disabled"
				>
					{({ isDragAccept, isDragReject }) => (
						<Fragment>
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
								kind={isSmall ? 'simple' : 'secondary'}
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
						</Fragment>
					)}
				</ReactDropzone>
			</Fragment>
		)
	}
}
