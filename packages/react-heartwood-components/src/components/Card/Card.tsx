import React, { Component } from 'react'
import cx from 'classnames'
import CardHeader, { ICardHeaderProps } from './components/CardHeader'
import CardBody from './components/CardBody'
import CardSection from './components/CardSection'
import CardFooter from './components/CardFooter'
import {SpruceSchemas, defaultPropsForDefinition} from '@sprucelabs/heartwood-skill'

interface ICardDefaultProps {
	isCentered: boolean
	expandable: boolean
	defaultExpanded: boolean
}

interface ICardState {
	/** Is the card expanded? */
	isExpanded: boolean
}

export default class Card extends Component<SpruceSchemas.local.ICard, ICardState> {
	public static Header = CardHeader
	public static Body = CardBody
	public static Section = CardSection
	public static Footer = CardFooter

	public static defaultProps = defaultPropsForDefinition(SpruceSchemas.local.Card.definition)

	public constructor(props: SpruceSchemas.local.ICard & ICardDefaultProps) {
		super(props)

		this.state = {
			isExpanded: props.defaultExpanded
		}
	}

	public toggleExpanded = () => {
		this.setState(prevState => ({
			isExpanded: !prevState.isExpanded
		}))
	}

	public render(): React.ReactElement {
		const {
			children,
			isCentered,
			isCritical,
			isSmall,
			className,
			isExpandable,
			header
		} = this.props

		const { isExpanded } = this.state
		return (
			<div
				className={cx('card', className, {
					'card--centered': isCentered,
					'card--critical': isCritical,
					'card--small': isSmall,
					'card--is-collapsed': isExpandable && !isExpanded
				})}
			>
				{isExpandable && (
					<CardHeader
						{...header}
						actions={[
							{
								icon: {
									name: isExpanded
										? 'keyboard_arrow_down'
										: 'keyboard_arrow_right'
								},
								onClick: () => this.toggleExpanded()
							}
						]}
					/>
				)}
				{isExpanded && children}
			</div>
		)
	}
}
