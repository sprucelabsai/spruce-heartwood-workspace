import React, { Fragment } from 'react'
import Layout from '../Layout/Layout'
import { SaveBar } from '../Core'
import Modal from '../Modal/Modal'
import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'

const defaults = {} // DefaultProps(SpruceSchemas.Local.Form.definition)

export default class Form extends React.Component<SpruceSchemas.Local.IForm> {
	public static defaultProps = defaults
	public handleSubmit = (e: React.SyntheticEvent<Element>) => {
		console.log('handleSubmit', e)
	}

	public handleReset = (e: React.SyntheticEvent<Element>) => {
		console.log('handleReset', e)
	}

	public render() {
		const {
			renderAs,
			dialogButtons,
			isDirty,
			children,
			isValid,
			isBusy
		} = this.props

		return (
			<form
				className="form"
				onSubmit={this.handleSubmit}
				onReset={this.handleReset}
			>
				{renderAs === 'page' && (
					<Layout>
						{{ children }}
						<SaveBar
							isVisible={isDirty}
							onSave={this.handleSubmit}
							onDiscard={this.handleReset}
							isSaveDisabled={!isValid}
							isSaving={isBusy}
							isDiscardDisabled={isBusy}
						/>
						{/* NOTE: The form won't submit on enter key pressed without this hidden button */}
						<button type="submit" style={{ display: 'none' }} />
					</Layout>
				)}
				{renderAs === 'default' && children}
				{renderAs === 'dialog' && (
					<Fragment>
						<Modal.Body>{{ children }}</Modal.Body>
						{dialogButtons?.primary && (
							<Modal.Footer
								primaryAction={{
									type: 'submit',
									...dialogButtons?.primary,
									isDisabled: !isValid || isBusy,
									isLoading: isBusy
								}}
								secondaryAction={
									dialogButtons?.secondary && {
										...dialogButtons.secondary,
										isDisabled: isBusy
									}
								}
							/>
						)}
					</Fragment>
				)}
			</form>
		)
	}
}
