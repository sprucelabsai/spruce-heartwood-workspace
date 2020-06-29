import { buildDuration, SpruceSchemas } from '@sprucelabs/heartwood-skill'
import cx from 'classnames'
import React from 'react'
import SprucebotTypedMessage from '../../SprucebotTypedMessage/SprucebotTypedMessage'

export interface IBigFormSlideHeaderProps {
	/** What question are we asking (fed to typed message) */
	question: string
	/** The state of mind of sprucebot for this header */
	sprucebotStateOfMind?: SpruceSchemas.Local.ISprucebotAvatar['stateOfMind']
	/** How big should sprucebot be? */
	sprucebotSize?: SpruceSchemas.Local.ISprucebotTypedMessage['size']
	/** All children */
	children?: React.ReactElement
}

const defaults = {
	sprucebotSize: 'medium',
	sprucebotStateOfMind: 'chill'
}

class BigFormSlideHeader extends React.Component<
	IBigFormSlideHeaderProps & typeof defaults
> {
	public static defaultProps = defaults

	public messageRef = React.createRef<SprucebotTypedMessage>()

	public focus = async () => {
		if (this.messageRef.current) {
			await this.messageRef.current.reset()
			await this.messageRef.current.play()
		}
	}
	public blur = () => {
		return this.messageRef.current && this.messageRef.current.pause()
	}

	public render(): React.ReactElement {
		const {
			question,
			sprucebotSize,
			sprucebotStateOfMind,
			children
		} = this.props

		return (
			<div className={cx('slide-header')}>
				<SprucebotTypedMessage
					ref={this.messageRef}
					paused={true}
					startDelay={buildDuration({ ms: 300 })}
					id="top-question"
					size={sprucebotSize}
					defaultAvatar={{
						id: 'question',
						stateOfMind: sprucebotStateOfMind
					}}
					sentences={[
						{
							words: question
						}
					]}
				/>
				{children}
			</div>
		)
	}
}

export default BigFormSlideHeader
