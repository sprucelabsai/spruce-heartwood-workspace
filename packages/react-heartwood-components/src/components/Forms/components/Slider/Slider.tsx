import React, { Component } from 'react'
import { SpruceSchemas, stripNulls } from '@sprucelabs/heartwood-skill'
import Label from '../Label/Label'

interface ISliderState {
	uncontrolledValue: number
}

export default class Slider extends Component<
	SpruceSchemas.Local.ISlider,
	ISliderState
> {
	public state = {
		uncontrolledValue: this.props.value
	}

	public handleUncontrolledChange = (e: any) => {
		this.setState({
			uncontrolledValue: e.target.value
		})
	}

	public render() {
		const { uncontrolledValue } = this.state
		const {
			label,
			min,
			max,
			value,
			onChange,
			isDisabled,
			...rest
		} = stripNulls(this.props)

		const styles: Record<string, string | number> = {
			'--min': min,
			'--max': max,
			'--val': onChange ? value : uncontrolledValue
		}

		return (
			<div className="slider-wrapper slider--split-color">
				{label && <Label {...label} />}
				<input
					{...rest}
					type="range"
					disabled={isDisabled}
					min={min}
					max={max}
					value={onChange ? value : uncontrolledValue}
					className="slider"
					style={styles}
					onChange={onChange ? onChange : this.handleUncontrolledChange}
				/>
			</div>
		)
	}
}
