import {
	SpruceSchemas,
	buildEventDetailsItem,
	buildEventDetails,
} from '@sprucelabs/heartwood-skill'

const avatar: SpruceSchemas.Local.IAvatar = {
	src:
		'https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&auto=format&fit=crop&w=96&h=96&q=80',
	alt: 'dummy avatar',
}

const services = buildEventDetailsItem('list', {
	items: [
		{
			id: 'first',
			icon: {
				name: 'unordered_list',
				isLineIcon: true,
				id: 'unordered',
			},
			title: 'Accent Highlight',
			subtitle: '$65 | 1hr',
			note: 'Vicenta Maggio',
			contextMenu: {
				icon: { id: 'edit', name: 'edit', isLineIcon: true },
				isSimple: true,
				isSmall: true,
				size: 'large',
				buttons: [
					{
						id: 'save-teammate',
						text: 'Change teammate',
					},
					{
						id: 'remove-appointment',
						text: 'Remove from appointment',
					},
				],
			},
		},
		{
			id: 'second',
			icon: {
				id: 'second-icon',
				name: 'unordered_list',
				isLineIcon: true,
			},
			isIconHidden: true,
			title: 'Haircut',
			subtitle: '$40 | 1hr',
			note: 'Vicenta Maggio',
			contextMenu: {
				icon: { id: 'edit', name: 'edit', isLineIcon: true },
				isSimple: true,
				isSmall: true,
				size: 'large',
				buttons: [
					{
						id: 'change-teammate',
						text: 'Change teammate',
					},
					{
						id: 'remove',
						text: 'Remove from appointment',
					},
				],
			},
		},
		{
			id: 'last',
			title: 'Add service',
			icon: { id: 'add', name: 'add' },
			primaryAction: {
				id: 'add',
				icon: { id: 'add', name: 'add' },
				kind: 'simple',
			},
		},
	],
})

const inclusiveStatuses = buildEventDetailsItem('list', {
	items: [
		{
			id: 'status',
			title: 'Confirmed',
			selectable: {
				schemaId: 'listItemCheckbox',
				values: {
					id: 'confirmed',
					isChecked: true,
				},
			},
		},
		{
			id: 'checked-in',
			title: 'Checked in',
			selectable: {
				schemaId: 'listItemCheckbox',
				values: {
					id: 'checked-in',
					isChecked: false,
				},
			},
		},
	],
})

const exclusiveStatuses = buildEventDetailsItem('list', {
	items: [
		{
			id: 'on-time',
			title: 'On time',
			selectableId: 'onTime',
			selectable: {
				schemaId: 'listItemRadio',
				values: {
					id: 'onTime',
				},
			},
		},
		{
			id: 'late',
			title: 'Late',
			selectable: {
				schemaId: 'listItemRadio',
				values: {
					id: 'late',
				},
			},
		},
		{
			id: 'ghosted',
			title: 'Ghosted 👻',
			selectable: {
				schemaId: 'listItemRadio',
				values: {
					id: 'ghosted',
				},
			},
		},
	],
})

const paidStatuses: SpruceSchemas.Local.IListItem[] = [
	{
		id: 'unpaid',
		title: 'Unpaid',
		icon: { name: 'edit' },
		isIconHidden: true,
	},
]

const statusLists: SpruceSchemas.Local.IList[] = [
	{
		selectable: {
			schemaId: 'checkbox',
			values: {
				id: 'first',
			},
		},
		items: inclusiveStatuses.items,
		areSeparatorsVisible: false,
	},
	{
		selectable: {
			schemaId: 'radio',
			values: {},
		},
		items: exclusiveStatuses.items,
		areSeparatorsVisible: false,
	},
	{
		items: paidStatuses,
		areSeparatorsVisible: false,
	},
]

export const appointmentDetails = buildEventDetails({
	items: [
		{
			schemaId: 'list',
			values: {
				id: 'guestInfo',
				items: [
					{
						id: 'first',
						avatar,
						title: 'Alejandra Pollich',
						subtitle: '(605) 230-5253',
						contextMenu: {
							icon: { name: 'edit', isLineIcon: true },
							isSimple: true,
							isSmall: true,
							size: 'large',
							buttons: [
								{
									text: 'Edit guest',
								},
								{
									text: 'Book for someone else',
								},
							],
						},
					},
					{
						id: 'pinned-note',
						icon: { name: 'note', isLineIcon: true },
						title: 'Prefers products that aren’t tested on animals.',
						subtitle: 'Caleigh Jerde, 4 months ago',
						buttons: [
							{
								icon: { name: 'edit' },
								kind: 'simple',
							},
						],
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				items: [
					{
						id: 'first',
						avatar,
						title: 'Alejandra Pollich',
						subtitle: '(605) 230-5253',
						contextMenu: {
							icon: { name: 'edit', isLineIcon: true },
							isSimple: true,
							isSmall: true,
							size: 'large',
							buttons: [
								{
									text: 'Edit guest',
								},
								{
									text: 'Book for someone else',
								},
							],
						},
					},
					{
						id: 'pinned-note',
						icon: { name: 'note', isLineIcon: true },
						title: 'Prefers products that aren’t tested on animals.',
						subtitle: 'Caleigh Jerde, 4 months ago',
						buttons: [
							{
								icon: { name: 'edit' },
								kind: 'simple',
							},
						],
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				items: [
					{
						id: 'first',
						icon: { name: 'calendar', isLineIcon: true },
						title: 'Web, Nov 28, 2018',
						subtitle: '11am–12:15pm',
						buttons: [
							{
								id: 'first',
								icon: { name: 'edit' },
								kind: 'simple',
							},
						],
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				items: services.items,
			},
		},
		{
			schemaId: 'list',
			values: {
				items: [
					{
						id: 'first',
						icon: { name: 'status' },
						title: 'Status',
						subtitle: 'Confirmed',
						collapsedIcon: { name: 'edit' },
						expandedIcon: { name: 'close' },
						lists: statusLists,
						isExpandable: true,
					},
				],
			},
		},
		{
			schemaId: 'markdown',
			values: {
				source: '**Subtotal: ** $65\n\n**Duration: ** 2hr',
			},
		},
		{
			schemaId: 'splitButton',
			values: {
				kind: 'primary',
				isFullWidth: true,
				defaultButton: {
					text: 'Check guest in',
					isFullWidth: true,
				},
				buttons: [
					{
						text: 'Unconfirm appointment',
					},
					{
						text: 'Mark guest as late',
					},
					{
						text: 'Mark as no show',
					},
					{
						text: 'Book again',
					},
					{
						text: 'Cancel appointment',
					},
				],
			},
		},
	],
})

export const warningAppointmentDetails = buildEventDetails({
	items: [
		{
			schemaId: 'list',
			values: {
				items: [
					{
						id: 'first',
						avatar,
						title: 'Alejandra Pollich',
						subtitle: '(605) 230-5253',
						contextMenu: {
							icon: { name: 'edit', isLineIcon: true },
							isSimple: true,
							isSmall: true,
							size: 'large',
							buttons: [
								{
									text: 'Edit guest',
								},
								{
									text: 'Book for someone else',
								},
							],
						},
					},
					{
						id: 'second',
						icon: { name: 'note', isLineIcon: true },
						title: 'Prefers products that aren’t tested on animals.',
						subtitle: 'Caleigh Jerde, 4 months ago',
						buttons: [
							{
								icon: { name: 'edit' },
								kind: 'simple',
							},
						],
					},
				],
			},
		},
		{
			schemaId: 'cardBuilder',
			values: {
				body: {
					items: [
						{
							schemaId: 'list',
							values: {
								id: 'list',
								items: [
									{
										id: '1',
										icon: {
											id: 'foo',
											name: 'calendar',
											isLineIcon: true,
										},
										title: 'Web, Nov 28, 2018',
										subtitle: '11am–12:15pm',
										buttons: [
											{
												id: 'foo',
												icon: {
													id: 'foo',
													name: 'edit',
												},
												kind: 'simple',
											},
										],
										warnings: {
											title: true,
										},
									},
								],
							},
						},
						{
							schemaId: 'toast',
							values: {
								id: 'toastWarning',
								headline: 'Uh-oh',
								text: 'Vicenta Maggio will be double-booked at this time',
								kind: 'warn',
								canRemove: false,
							},
						},
					],
				},
				footer: {
					buttonGroup: {
						buttons: [
							{
								text: 'Dismiss',
								kind: 'simple',
								isSmall: true,
								id: 'foo',
							},
							{
								text: 'Find a different time',
								kind: 'secondary',
								isSmall: true,
								id: 'bar',
							},
						],
					},
				},
			},
		},
		{
			schemaId: 'list',
			values: {
				id: 'status',
				items: [
					{
						id: 'first',
						icon: { name: 'status' },
						title: 'Status',
						subtitle: 'Confirmed',
						collapsedIcon: { name: 'edit' },
						expandedIcon: { name: 'close' },
						lists: statusLists,
					},
				],
			},
		},
		{
			schemaId: 'markdown',
			values: {
				source: '**Subtotal: ** $65\n\n**Duration: ** 2hr',
			},
		},
		{
			schemaId: 'splitButton',
			values: {
				kind: 'primary',
				isFullWidth: true,
				defaultButton: {
					text: 'Check guest in',
					isFullWidth: true,
				},
				buttons: [
					{
						text: 'Unconfirm appointment',
					},
					{
						text: 'Mark guest as late',
					},
					{
						text: 'Mark as no show',
					},
					{
						text: 'Book again',
					},
					{
						text: 'Cancel appointment',
					},
				],
			},
		},
	],
})

export const pastAppointmentDetails = buildEventDetails({
	items: [
		{
			schemaId: 'list',
			values: {
				id: 'guestInfo',
				items: [
					{
						id: 'first',
						avatar,
						title: 'Alejandra Pollich',
						subtitle: '(605) 230-5253',
						buttons: [
							{
								icon: { name: 'edit' },
								kind: 'simple',
							},
						],
					},
					{
						id: 'second',
						icon: { name: 'note', isLineIcon: true },
						title: 'Prefers products that aren’t tested on animals.',
						subtitle: 'Caleigh Jerde, 4 months ago',
						buttons: [
							{
								icon: { name: 'edit' },
								kind: 'simple',
							},
						],
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				id: 'dateAndTime',
				items: [
					{
						id: 'first',
						icon: { name: 'calendar', isLineIcon: true },
						title: 'Web, Nov 28, 2018',
						subtitle: '11am–12:15pm',
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				id: 'services',
				items: [
					{
						id: 'first',
						icon: { name: 'unordered_list', isLineIcon: true },
						title: 'Accent Highlight',
						subtitle: '$65 | 1hr',
						note: 'Vicenta Maggio',
					},
					{
						id: 'second',
						icon: { name: 'unordered_list', isLineIcon: true },
						isIconHidden: true,
						title: 'Haircut',
						subtitle: '$40 | 1hr',
						note: 'Vicenta Maggio',
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				id: 'status',
				items: [
					{
						id: 'first',
						icon: { name: 'payment_success_solid' },
						title: 'Status',
						subtitle: 'Paid',
					},
				],
			},
		},
		{
			schemaId: 'markdown',
			values: {
				id: 'subtotalAndDuration',
				source: '**Subtotal: ** $65\n\n**Duration: ** 2hr',
			},
		},
		{
			schemaId: 'splitButton',
			values: {
				id: 'primaryCTA',
				kind: 'primary',
				isFullWidth: true,
				defaultButton: {
					text: 'Book again',
					isFullWidth: true,
				},
				actions: [
					{
						text: 'Edit past appointment',
					},
				],
			},
		},
	],
})

export const lunchBreakDetails = buildEventDetails({
	items: [
		{
			schemaId: 'list',
			values: {
				id: 'dateAndTime',
				items: [
					{
						id: 'first',
						icon: { name: 'calendar' },
						title: 'Sat, Jul 6, 2019',
						subtitle: '8am–8pm',
						note: 'Repeats every Saturday until 8/31/2019',
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				id: 'person',
				items: [
					{
						id: 'first',
						avatar,
						title: 'Vicenta Maggio',
						subtitle: 'Stylist',
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				id: 'breakType',
				items: [
					{
						id: 'first',
						icon: { name: 'info' },
						title: 'Paid break',
						subtitle: 'Teammates are paid during their lunch breaks',
					},
				],
			},
		},
		{
			schemaId: 'button',
			values: {
				id: 'actions',
				text: 'Reschedule',
				kind: 'secondary',
				isFullWidth: true,
			},
		},
	],
})

export const ptoBlockDetails = buildEventDetails({
	items: [
		{
			schemaId: 'list',
			values: {
				id: 'dateAndTime',
				items: [
					{
						id: 'first',
						icon: { name: 'calendar' },
						title: 'Sat, Jul 6, 2019',
						subtitle: '8am–8pm',
						note: 'Repeats every Saturday until 8/31/2019',
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				id: 'person',
				items: [
					{
						id: 'person',
						avatar,
						title: 'Vicenta Maggio',
						subtitle: 'Stylist',
					},
				],
			},
		},
		{
			schemaId: 'list',
			values: {
				id: 'breakType',
				items: [
					{
						id: 'breakType',
						icon: { name: 'info' },
						title: 'Paid time off',
						subtitle: '32 hours of PTO',
					},
				],
			},
		},
		{
			schemaId: 'button',
			values: {
				id: 'actions',
				text: 'Edit PTO Block',
				kind: 'secondary',
				isFullWidth: true,
			},
		},
	],
})
