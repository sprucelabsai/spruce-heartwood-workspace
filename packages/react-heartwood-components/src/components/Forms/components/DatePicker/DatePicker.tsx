import { SpruceSchemas, defaultProps } from '@sprucelabs/heartwood-skill'
import moment from 'moment'
import React, { Component } from 'react'
import 'react-dates/initialize'
import {
	DayPickerSingleDateController,
	DayPickerRangeController
} from 'react-dates'
import ArrowBack from '../../../../../static/assets/icons/ic_arrow_back.svg'
import ArrowNext from '../../../../../static/assets/icons/ic_arrow_forward.svg'

interface IDatePickerState {
	date: Record<string, any>
	startDate?: Record<string, any>
	endDate?: Record<string, any>
	isFocused: boolean
	focusedInput: string
}

export default class DatePicker extends Component<
	SpruceSchemas.Local.IDatePicker,
	IDatePickerState
> {
	public static defaultProps = defaultProps(
		SpruceSchemas.Local.DatePicker.definition
	)

	public datePickerRef: any

	public constructor(props) {
		super(props)
		this.state = {
			isFocused: true,
			date: this.props.date || moment(),
			startDate: this.props.startDate ?? undefined,
			endDate: this.props.endDate ?? undefined,
			focusedInput: 'startDate'
		}

		this.datePickerRef = React.createRef()
	}

	public componentWillReceiveProps(nextProps) {
		if (this.props.date !== nextProps.date) {
			this.setState({ date: nextProps.date })
		}
	}

	public toggleFocus = () => {
		this.setState(prevState => ({
			isFocused: !prevState.isFocused
		}))
	}

	public handleFocusChange = focusedInput => {
		this.setState({
			// Force the focusedInput to always be truthy so that dates are always selectable
			focusedInput: !focusedInput ? 'startDate' : focusedInput
		})
	}

	public handleDateChange = async (date: any) => {
		this.datePickerRef.current.setState({ currentMonth: date })

		this.setState({
			date
		})
		if (this.props.onSelectDate) {
			this.props.onSelectDate(date)
		}
	}

	public handleDatesChange = async ({ startDate, endDate }) => {
		this.setState({
			startDate,
			endDate
		})

		if (this.props.onSelectDateRange) {
			this.props.onSelectDateRange({ startDate, endDate })
		}
	}

	public render() {
		const { isFocused, focusedInput, date, startDate, endDate } = this.state
		const { kind, ...rest } = this.props

		return kind === 'singleDate' ? (
			<DayPickerSingleDateController
				ref={this.datePickerRef}
				date={date}
				initialVisibleMonth={() => date}
				focused={isFocused}
				onDateChange={date => this.handleDateChange(date)}
				onFocusChange={this.toggleFocus}
				navNext={<ArrowNext />}
				navPrev={<ArrowBack />}
				hideKeyboardShortcutsPanel={true}
				{...rest}
			/>
		) : (
			<DayPickerRangeController
				onDatesChange={this.handleDatesChange}
				onFocusChange={this.handleFocusChange}
				focusedInput={focusedInput}
				startDate={startDate}
				endDate={endDate}
				navNext={<ArrowNext />}
				navPrev={<ArrowBack />}
				hideKeyboardShortcutsPanel={true}
				{...rest}
			/>
		)
	}
}
