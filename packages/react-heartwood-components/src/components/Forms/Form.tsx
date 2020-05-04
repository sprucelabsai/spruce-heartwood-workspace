import React, { Fragment } from 'react'
import { Formik } from 'formik'
import Layout from '../Layout/Layout'
import { SaveBar } from '../Core'
import Modal from '../Modal/Modal'
import { SpruceSchemas, defaultProps, stripNulls } from '@sprucelabs/heartwood-skill'

const defaults = defaultProps(SpruceSchemas.Local.Form.definition)

const Form = (props: SpruceSchemas.Local.IForm) => {
	const {
		renderAs,
		onSubmit,
		dialogButtons,
		validate,
		children,
		initialValues
	} = stripNulls(props)

	return (
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={onSubmit}
			validateOnBlur={true}
			validateOnChange={false}
			render={props => {
				const {
					handleSubmit,
					handleReset,
					dirty,
					isValid,
					isSubmitting
				} = props

				return (
					<form className="form" onSubmit={handleSubmit} onReset={handleReset}>
						{renderAs === 'page' && (
							<Layout>
								{{ children }}
								<SaveBar
									isVisible={dirty}
									// TODO: Figure out the proper signature to convert formik submit handler
									// @ts-ignore
									onSave={handleSubmit}
									onDiscard={handleReset}
									isSaveDisabled={!isValid}
									isSaving={isSubmitting}
									isDiscardDisabled={isSubmitting}
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
											isDisabled: !isValid || isSubmitting,
											isLoading: isSubmitting
										}}
										secondaryAction={
											dialogButtons?.secondary && {
												...dialogButtons.secondary,
												isDisabled: isSubmitting
											}
										}
									/>
								)}
							</Fragment>
						)}
					</form>
				)
			}}
		/>
	)
}

Form.defaultProps = defaults

export default Form
