const itemActions = [
	{
		icon:
			'<path fill="none" fill-rule="evenodd" clip-rule="evenodd" d="M14.375 17.5H5.625C4.93464 17.5 4.375 16.9404 4.375 16.25V5H15.625V16.25C15.625 16.9404 15.0654 17.5 14.375 17.5Z" stroke="#0076D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" d="M8.125 13.75V8.75" stroke="#0076D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" d="M11.875 13.75V8.75" stroke="#0076D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" d="M1.875 5H18.125" stroke="#0076D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" fill-rule="evenodd" clip-rule="evenodd" d="M11.875 2.5H8.125C7.43464 2.5 6.875 3.05964 6.875 3.75V5H13.125V3.75C13.125 3.05964 12.5654 2.5 11.875 2.5Z" stroke="#0076D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		width: '20',
		height: '20'
	},
	{
		icon:
			'<path fill="none" fill-rule="evenodd" clip-rule="evenodd" d="M11.8708 12.7801L8.7775 13.2226L9.21916 10.1284L17.1742 2.17345C17.9064 1.44121 19.0936 1.44121 19.8258 2.17345C20.5581 2.90568 20.5581 4.09287 19.8258 4.82511L11.8708 12.7801Z" stroke="#0076D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" d="M16.29 3.05762L18.9417 5.70928" stroke="#0076D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" d="M16.625 12.875V19.125C16.625 19.8154 16.0654 20.375 15.375 20.375H2.875C2.18464 20.375 1.625 19.8154 1.625 19.125V6.625C1.625 5.93464 2.18464 5.375 2.875 5.375H9.125" stroke="#0076D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		width: '22',
		height: '22'
	}
]

module.exports = {
	title: 'Services List',
	context: {
		listHeaderTitle: 'Services',
		actions: [
			{
				class: 'btn-simple',
				text: 'Change Order'
			}
		],
		items: [
			{
				title: 'Poodle Afro',
				subtitle:
					'<span class="u-color-secondary">Free</span> <span class="u-td-strikethrough">$20</span> | 25min',
				actions: itemActions
			},
			{
				title: 'Spruced Up Shave',
				subtitle: '$40 | 1hr 20min',
				actions: itemActions
			},
			{
				title: 'Brow Wax',
				subtitle: '$12 | 30min',
				actions: itemActions
			},
			{
				title: 'The Regular',
				subtitle: '$32.55 | 50min',
				actions: itemActions
			},
			{
				title: 'Nose Wax',
				subtitle:
					'<span class="u-color-secondary">$7</span> <span class="u-td-strikethrough">$12</span> | 30min',
				actions: itemActions
			}
		]
	}
}
