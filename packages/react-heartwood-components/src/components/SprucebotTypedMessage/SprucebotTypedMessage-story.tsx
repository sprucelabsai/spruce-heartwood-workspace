import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object, boolean, select } from '@storybook/addon-knobs'
import SprucebotTypedMessage from './SprucebotTypedMessage'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import { TextInput } from '../Forms'
import Card, { CardBody, CardFooter } from '../Card'
import { SpruceSchemas, buildDuration } from '@sprucelabs/heartwood-skill'
import SkillView from '../SkillView'
import Layout from '../Layout/Layout'

const stories = storiesOf('SprucebotTypedMessage', module)

stories.addDecorator(withKnobs)

stories.add('SprucebotTypedMessage', () => (
	<SprucebotTypedMessage
		id="typed-message"
		loop={boolean('loop', true)}
		paused={boolean('paused', false)}
		size={select(
			'size',
			SpruceSchemas.Local.SprucebotTypedMessage.definition.fields.size.options.choices.map(
				c => c.value
			),
			'medium'
		)}
		startDelay={object('startDelay', buildDuration({ ms: 1000 }))}
		defaultAvatar={object('defaultAvatar', {
			id: 'default-avatar',
			stateOfMind: 'chill'
		})}
		sentences={[
			object('sentences[0]', {
				words: 'Hey there! How are you?',
				endDelayMs: 2000
			}),
			object('sentences[1]', {
				words: 'Hey there! Wait, before you answer that I wanted to say...',
				endDelayMs: 4000
			}),
			object('sentences[2]', {
				words: 'Experience!!',
				endDelayMs: 2500
			})
		]}
	/>
))

interface IMessageControllerProps {}

interface IMessageControllerState {
	playing: boolean
}

class MessageController extends React.Component<
	IMessageControllerProps,
	IMessageControllerState
> {
	public messageRef = React.createRef<SprucebotTypedMessage>()

	public constructor(props: IMessageControllerState) {
		super(props)
		this.state = {
			playing: true
		}
	}

	public play = () => {
		this.setState({ playing: true })
		this.messageRef.current && this.messageRef.current.play()
	}

	public pause = () => {
		this.setState({ playing: false })
		this.messageRef.current && this.messageRef.current.pause()
	}

	public reset = () => {
		this.messageRef.current && this.messageRef.current.reset()
	}

	public render(): React.ReactElement {
		const { playing } = this.state
		return (
			<>
				<SprucebotTypedMessage
					ref={this.messageRef}
					id={'controlled'}
					loop={true}
					size={'large'}
					defaultAvatar={{
						id: 'avatar',
						stateOfMind: 'chill'
					}}
					sentences={[
						{
							words: 'this is the first sentence',
							endDelay: buildDuration({ ms: 2000 })
						},
						{
							words: 'this is the second sentence',
							endDelay: buildDuration({ ms: 2000 })
						},
						{
							words: 'this is the third sentence',
							endDelay: buildDuration({ ms: 2000 })
						}
					]}
				/>
				<div className="controls">
					<ButtonGroup
						buttons={[
							{
								text: 'Play',
								kind: playing ? 'primary' : 'secondary',
								onClick: this.play
							},
							{
								text: 'Pause',
								kind: !playing ? 'primary' : 'secondary',
								onClick: this.pause
							},
							{
								text: 'Reset',
								kind: 'secondary',
								onClick: this.reset
							}
						]}
					/>
				</div>
			</>
		)
	}
}

stories.add('Controlling Typed Message', () => <MessageController />)

interface IAddSentenceControllerProps {}
interface IAddSentenceControllerState {
	nextSentence: string
	sentences: SpruceSchemas.Local.ISprucebotTypedMessageSentence[]
}

class AddSentenceController extends React.Component<
	IAddSentenceControllerProps,
	IAddSentenceControllerState
> {
	public messageRef = React.createRef<SprucebotTypedMessage>()

	public constructor(props: IMessageControllerState) {
		super(props)
		this.state = {
			nextSentence: 'this is the next sentence',
			sentences: [
				{
					words: 'this is the first sentence'
				}
			]
		}
	}

	public addSentence = async () => {
		const { nextSentence } = this.state

		if (this.messageRef.current) {
			await this.messageRef.current.addToTypingQueue({
				words: nextSentence
			})

			this.messageRef.current.play()
		}
	}

	public render(): React.ReactElement {
		const { nextSentence, sentences } = this.state
		return (
			<>
				<SprucebotTypedMessage
					ref={this.messageRef}
					id={'controlled'}
					loop={false}
					size={'large'}
					defaultAvatar={{
						id: 'avatar',
						stateOfMind: 'chill'
					}}
					sentences={sentences}
				/>
				<Card>
					<CardBody>
						<TextInput
							id="next-sentence"
							label={{ text: 'next sentence' }}
							onChange={e =>
								this.setState({
									nextSentence: (e.target as HTMLInputElement).value
								})
							}
							value={nextSentence}
						/>
					</CardBody>
					<CardFooter>
						<ButtonGroup
							buttons={[
								{
									text: 'Add sentence',
									kind: 'primary',
									onClick: this.addSentence
								}
							]}
						/>
					</CardFooter>
				</Card>
			</>
		)
	}
}

stories.add('Add Sentence', () => (
	<SkillView>
		<SkillView.Content>
			<Layout>
				<Layout.Section>
					<AddSentenceController />
				</Layout.Section>
			</Layout>
		</SkillView.Content>
	</SkillView>
))
