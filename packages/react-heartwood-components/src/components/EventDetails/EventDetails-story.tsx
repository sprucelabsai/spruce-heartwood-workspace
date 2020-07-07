import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Sidebar, SidebarHeader } from '../Core'
import EventDetails from './EventDetails'
import {
	appointmentDetails,
	warningAppointmentDetails,
	pastAppointmentDetails,
	lunchBreakDetails,
	ptoBlockDetails,
} from './eventDetailsMock'

const stories = storiesOf('EventDetails', module)

// TODO: Turn off this decorator for specs. It obfuscates prop tables.
// stories.addDecorator(storyFn => (
// 	<Page STORYBOOKwrap={false} sidebar={storyFn()} />
// ))

stories.addDecorator(withKnobs)

stories
	.add('Booking: Appointment', () => (
		<Sidebar side={'right'} isCollapsible={false} isLarge>
			<SidebarHeader title="Appointment details" onClose={() => null} />
			<EventDetails
				isLoading={boolean('isLoading', false)}
				{...appointmentDetails}
			/>
		</Sidebar>
	))
	.add('Booking: Appointment has warning', () => (
		<Sidebar side={'right'} isCollapsible={false} isLarge>
			<SidebarHeader title="Appointment details" onClose={() => null} />
			<EventDetails
				isLoading={boolean('isLoading', false)}
				{...warningAppointmentDetails}
			/>
		</Sidebar>
	))
	.add('Booking: Past Appointment', () => (
		<Sidebar side={'right'} isCollapsible={false} isLarge>
			<SidebarHeader title="Appointment details" onClose={() => null} />
			<EventDetails
				isLoading={boolean('isLoading', false)}
				{...pastAppointmentDetails}
			/>
		</Sidebar>
	))
	.add('Scheduling: Lunch Break', () => (
		<Sidebar side={'right'} isCollapsible={false} isLarge>
			<SidebarHeader title="Lunch break" onClose={() => null} />
			<EventDetails
				isLoading={boolean('isLoading', false)}
				{...lunchBreakDetails}
			/>
		</Sidebar>
	))

	.add('Scheduling: PTO', () => (
		<Sidebar side={'right'} isCollapsible={false} isLarge>
			<SidebarHeader title="PTO" onClose={() => null} />
			<EventDetails
				isLoading={boolean('isLoading', false)}
				{...ptoBlockDetails}
			/>
		</Sidebar>
	))
