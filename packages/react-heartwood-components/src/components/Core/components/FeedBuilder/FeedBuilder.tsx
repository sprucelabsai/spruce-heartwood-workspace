import { SpruceSchemas } from '@sprucelabs/heartwood-skill'
import React, { Component } from 'react'
import {
	List,
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache,
	InfiniteLoader,
} from 'react-virtualized'
import MessageBuilder, {
	IMessageProps,
	IFromProps,
} from '../../../Message/Message'
import Text from '../../../Text/Text'

interface IFeedBuilderMessageProps extends IMessageProps {
	/** Unique id for the message */
	id: string
}

interface IFeedBuilderProps {
	/** Messages for the feed */
	messages?: Array<IFeedBuilderMessageProps>

	/** Text for the empty state of this feed */
	emptyText?: string

	/** Callback to load rows */
	onRowsRequested: Function

	/** Number of messages to load at a time */
	pageSize?: number
}

interface IFeedBuilderState {
	rows: Array<IFeedBuilderMessageProps>
	groups: Record<string, any>
	rowCount: number
	scrollToIndex: number
	isLoading: boolean
	allLoaded: boolean
}

// The difference in minutes between two message where only the first one
// should include an image
const compareDiff = 30

export interface IFormattedMessage {
	id: string
	children: React.ReactNode
	from: IFromProps
	dateSent?: any
	replies?: any
	attachments?: any
	detail?: string | undefined
	primaryAction?: SpruceSchemas.Local.IButton | undefined
	className?: string | undefined
	isFromSprucebot?: boolean | undefined
}

const formatMessages = (messages: Array<IFeedBuilderMessageProps>) => {
	const formattedMessages: IFormattedMessage[] = []
	messages.forEach((message, idx) => {
		const formattedMessage = { ...message }
		// Check if messages are from the same source
		if (
			idx + 1 < messages.length &&
			message.from &&
			messages[idx + 1].from &&
			message.from.id === messages[idx + 1].from.id
		) {
			// Check if the messages were sent within the minimum difference to hide the image
			const nextMessage = messages[idx + 1]
			const diff = message.dateSent.diff(nextMessage.dateSent, 'minutes')
			if (diff <= compareDiff) {
				// Remove the image
				formattedMessage.from = {
					...formattedMessage.from,
					image: null,
				}
			}
		}

		formattedMessages.push(formattedMessage)
	})
	return formattedMessages
}

const groupMessages = (messages: IFeedBuilderMessageProps[]) => {
	const groupedMessages: {
		name: string
		messages: number[]
	}[] = []
	const groups = {}

	messages.forEach((message, idx) => {
		const daySent = message.dateSent.calendar(null, {
			sameDay: '[Today]',
			lastDay: '[Yesterday]',
			lastWeek: '[Last] dddd',
			sameElse: message.dateSent.isSame(new Date(), 'year')
				? 'ddd, MMMM DD'
				: 'ddd, MMMM DD, YYYY',
		})
		const match = Object.values(groups).findIndex((value) => value === daySent)
		if (match === -1) {
			groups[idx] = daySent
		}
	})

	messages.forEach((message, idx) => {
		const daySent = message.dateSent.calendar(null, {
			sameDay: '[Today]',
			lastDay: '[Yesterday]',
			lastWeek: '[Last] dddd',
			sameElse: message.dateSent.isSame(new Date(), 'year')
				? 'ddd, MMMM DD'
				: 'ddd, MMMM DD, YYYY',
		})
		const match = groupedMessages.find((group) => group.name === daySent)
		if (!match) {
			groupedMessages.push({
				name: daySent,
				messages: [idx],
			})
		} else {
			match.messages.push(idx)
		}
	})

	return groups
}

export default class FeedBuilder extends Component<
	IFeedBuilderProps,
	IFeedBuilderState
> {
	public static defaultProps = {
		messages: [],
		emptyText: 'No messages',
		pageSize: 50,
	}
	public list: any
	public cache = new CellMeasurerCache({
		fixedWidth: true,
	})
	public state = {
		rows: [],
		groups: {},
		rowCount: 0,
		scrollToIndex: 1,
		isLoading: false,
		allLoaded: false,
	}

	private infiniteLoader?: React.RefObject<HTMLDivElement>

	public static getDerivedStateFromProps(
		props: IFeedBuilderProps,
		state: IFeedBuilderState
	) {
		const { messages = [] } = props
		const { rowCount } = state
		const formattedMessages = formatMessages(messages)
		const reversedMessages = [...formattedMessages].reverse()
		const groups = groupMessages(reversedMessages)
		if (messages.length === rowCount) {
			// Stop loading — there are no more messages to add
			return {
				rows: reversedMessages,
				rowCount: messages.length,
				scrollToIndex: messages.length + 1,
				groups,
				isLoading: false,
				allLoaded: true,
			}
		}
		return {
			rows: reversedMessages,
			rowCount: messages.length,
			scrollToIndex: messages.length + 1,
			groups,
			isLoading: false,
		}
	}

	public onResize = () => {
		if (this.list && this.cache) {
			this.cache.clearAll()
			this.list.recomputeRowHeights(0)
			this.list.forceUpdateGrid()
		}
	}

	public isRowLoaded = ({ index }) => {
		return index > 0
	}

	public loadMoreRows = () => {
		const { onRowsRequested } = this.props
		const { isLoading, allLoaded } = this.state
		// Do API Stuff™

		if (isLoading || allLoaded) {
			return
		}

		if (this.list) {
			this.setState({
				isLoading: true,
			})
			onRowsRequested()
			this.cache.clearAll()
			this.list.recomputeRowHeights(0)
			this.list.forceUpdateGrid()
		}
		return new Promise((resolve) => resolve)
	}

	public renderRow = ({ index, key, parent, style, isScrolling }) => {
		const { rows, groups } = this.state
		const groupMatch = groups[index]

		return (
			<CellMeasurer
				cache={this.cache}
				columnIndex={0}
				key={key}
				parent={parent}
				rowIndex={index}
			>
				<div
					className="message-feed__message-wrapper"
					style={{
						...style,
						visibility: isScrolling ? 'visible' : 'visible',
					}}
				>
					{groupMatch && (
						<Text className="message-feed__day-header">{groupMatch}</Text>
					)}
					<MessageBuilder {...rows[index]} />
				</div>
			</CellMeasurer>
		)
	}

	public render() {
		const { pageSize = FeedBuilder.defaultProps.pageSize } = this.props
		const { rowCount } = this.state
		return (
			<div className="message-feed__wrapper">
				<div className="message-feed">
					<InfiniteLoader
						ref={(ref) => (this.infiniteLoader = ref)}
						isRowLoaded={this.isRowLoaded}
						loadMoreRows={this.loadMoreRows}
						rowCount={rowCount + 1}
						threshold={1}
					>
						{({ onRowsRendered, registerChild }) => (
							<AutoSizer
								className="message-feed__autosizer"
								onResize={this.onResize}
							>
								{({ height, width }) => (
									<div ref={registerChild}>
										<List
											ref={(ref) => (this.list = ref)}
											className="message-feed__virtual-list"
											deferredMeasurementCache={this.cache}
											height={height}
											width={width}
											rowCount={rowCount}
											rowHeight={this.cache.rowHeight}
											rowRenderer={this.renderRow}
											scrollToIndex={pageSize + 5}
											scrollToAlignment="end"
											onRowsRendered={onRowsRendered}
										/>
									</div>
								)}
							</AutoSizer>
						)}
					</InfiniteLoader>
				</div>
			</div>
		)
	}
}
