module.exports = {
	title: 'Phone Input',
	status: 'wip',
	collated: true,
	collator(markup, item) {
		return `<!-- Start: @${item.handle} -->\n<div style="margin-top: 1rem;">${markup}</div>\n<!-- End: @${item.handle} -->\n`
	},
	context: {
		label: 'Phone Number',
		placeholder: '(555) 555-5555',
		type: 'tel',
		phoneNumber: true,
		id: 'phone-number',
		name: 'phoneNumber'
	},
	variants: [
		{
			name: 'small',
			context: {
				class: 'text-input-small'
			}
		},
		{
			name: 'focused',
			context: {
				class: 'text-input--is-focused'
			}
		}
	]
}
