import {
	SpruceSchemas,
	defaultProps,
	DefaultProps
} from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React, { Component } from 'react'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'
import CardHeader from './components/CardHeader'
import CardSection from './components/CardSection'

interface ICardDefaultProps {
	isCentered: boolean
	expandable: boolean
	defaultExpanded: boolean
}

interface ICardState {
	/** Is the card expanded? */
	isExpanded: boolean
}

export default class Card extends Component<
	SpruceSchemas.Local.ICard,
	ICardState
> {
	public static Header = CardHeader
	public static Body = CardBody
	public static Section = CardSection
	public static Footer = CardFooter

	public static defaultProps = defaultProps(SpruceSchemas.Local.Card.definition)

	public constructor(
		props: SpruceSchemas.Local.ICard &
			DefaultProps<SpruceSchemas.Local.Card.IDefinition>
	) {
		super(props)
		this.state = {
			isExpanded: props.defaultExpanded ?? true
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
			header = {}
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
						buttons={[
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
