import { buildSchemaDefinition } from '@sprucelabs/schema'
import FieldType from '#spruce:schema/fields/fieldType'

const bigFormDefinition = buildSchemaDefinition({
	id: 'bigForm',
	name: 'Big form',
	description: 'Ask questions one at a time',
	fields: {
		controls: {
			type: FieldType.Schema,
			label: 'Header controls',
			options: {
				schema: buildSchemaDefinition({
					id: 'bigFormControls',
					name: 'Big form controls',
					fields: {
						canGoBack: {
							type: FieldType.Boolean,
							label: 'Enable go back',
							hint:
								'Will enable/disable the back button to go to a previous question'
						},
						canGoNext: {
							type: FieldType.Boolean,
							label: 'Enable go next',
							hint: 'Will enable/disable the button to go to the next question'
						},
						onBack: {
							type: FieldType.Callback,
							label: 'Back handler',
							options: {
								signature: '() => void'
							}
						},
						onNext: {
							type: FieldType.Callback,
							label: 'Next handler',
							options: {
								signature: '() => void'
							}
						}
					}
				})
			}
		},
		useOneSprucebot: {
			type: FieldType.Boolean,
			label: 'Use one Sprucebot',
			hint: 'Sprucebot will stay in place and delete, then type each question'
		},
		transitionStyle: {
			type: FieldType.Select,
			label: 'Transition style',
			defaultValue: 'stack',
			options: {
				choices: [
					{ label: 'Stack', value: 'stack' },
					{ label: 'SlideLeft', value: 'slide-left' },
					{ label: 'SlideUp', value: 'slide-up' },
					{ label: 'Swap', value: 'swap' }
				]
			}
		},
		currentSlide: {
			type: FieldType.Number,
			label: 'Current slide',
			defaultValue: 0
		},
		children: {
			type: FieldType.Node
		}
	}
})

export default bigFormDefinition
