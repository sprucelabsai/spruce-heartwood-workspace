import React from 'react'

import {
	TextInput,
	FormLayout,
	FormLayoutGroup,
	FormLayoutItem,
	Select,
	DurationInput
} from '../../../../index'

import { List } from '../../../../../List'

import Button from '../../../../../Button/Button'

import { FormikProps } from 'formik'
import { IFormLayoutProps } from '../../../FormLayout/FormLayout'
import { SpruceSchemas } from '@sprucelabs/heartwood-skill'

interface IFormValues {
	[key: string]: string
}

export interface IFormInnerFieldProps {
	/** Unique name/id for the field */
	name: string

	/** The type of element to render */
	type: string

	/** Props to pass through to the field */
	props?: Record<string, any>
}

export interface IFormInnerProps {
	/** Fields in this form */
	fields: IFormInnerFieldProps[]

	/** Layout properties for the form layout */
	formLayout: IFormLayoutProps

	/** Props to pass through from Formik */
	formikProps: FormikProps<IFormValues>

	/** Optional when using a primary cta in the form */
	primaryCTA?: SpruceSchemas.Local.IButton

	/** Optional when including a secondary cta in the form */
	secondaryCTA?: SpruceSchemas.Local.IButton

	/** Handle some on change */
	onChange?: Function
}

type BooleanProps = SpruceSchemas.Local.IToggle & {
	name: string
	label?: string
	value?: boolean
	helper?: string
	defaultValue?: boolean
	defaultChecked?: boolean
	onBlur: Function
	formikProps: FormikProps<IFormValues>
}

class BooleanField extends React.PureComponent<BooleanProps> {
	public handleChange = (e: any) => {
		const { onBlur, name } = this.props
		const {
			formikProps: { setFieldValue }
		} = this.props
		setFieldValue(name, e.target.checked)
		onBlur(e)
	}
	public render() {
		const { label, helper, value, ...rest } = this.props
		const toggleProps = { ...rest, onChange: this.handleChange }
		if (value) {
			toggleProps.defaultChecked = true
		}

		return (
			<List
				items={[
					{
						title: label || '',
						subtitle: helper,
						toggle: toggleProps
					}
				]}
			/>
		)
	}
}

class FormInner extends React.PureComponent<IFormInnerProps> {
	public static defaultProps = {
		primaryCTA: null,
		secondaryCTA: null
	}

	public handleChange = (
		name: string,
		type: string,
		eOrValue: KeyboardEvent | any,
		eOrNull: KeyboardEvent | null
	) => {
		let value: any = eOrNull ? eOrValue : eOrValue.target.value
		let shouldValidate = true
		switch (type) {
			case 'boolean':
				value = value === 'on'
				shouldValidate = false // It can only be valid values
				break
		}
		const {
			formikProps: { setFieldValue }
		} = this.props

		setFieldValue(name, value, shouldValidate)
		const { onChange } = this.props
		onChange && onChange(value, eOrNull || eOrValue)
	}

	public renderChild = (child: IFormInnerFieldProps) => {
		const Elements = {
			text: TextInput,
			boolean: BooleanField,
			select: Select,
			duration: DurationInput
		}
		const { formikProps } = this.props
		const Handler = (child && child.type && Elements[child.type]) || TextInput
		const props = { ...child.props, name: child.name, formikProps }
		return !Handler.prototype.render ? Handler(props) : <Handler {...props} />
	}

	public render() {
		const {
			formLayout,
			formikProps,
			fields,
			primaryCTA,
			secondaryCTA
		} = this.props

		const {
			handleBlur,
			values,
			errors,
			touched,
			isValid,
			isSubmitting
		} = formikProps

		return (
			<FormLayout {...formLayout}>
				{fields &&
					fields.length > 0 &&
					fields.map(field => {
						const { type, props } = field
						return (
							<FormLayoutItem key={field.name}>
								{this.renderChild({
									type,
									name: field.name,
									props: {
										...props,
										onChange: (eOrValue, eOrNull) => {
											this.handleChange(
												field.name,
												field.type,
												eOrValue,
												eOrNull
											)
										},
										onBlur: handleBlur,
										value: values ? values[field.name] : '',
										error: touched[field.name] && errors[field.name]
									}
								})}
							</FormLayoutItem>
						)
					})}
				{primaryCTA && (
					<FormLayoutGroup>
						{secondaryCTA && (
							<FormLayoutItem>
								<Button isDisabled={isSubmitting} {...secondaryCTA} />
							</FormLayoutItem>
						)}
						<FormLayoutItem>
							<Button
								kind={'primary'}
								type={'submit'}
								isDisabled={!isValid || isSubmitting}
								isLoading={isSubmitting}
								{...primaryCTA}
							/>
						</FormLayoutItem>
					</FormLayoutGroup>
				)}
			</FormLayout>
		)
	}
}

export default FormInner
