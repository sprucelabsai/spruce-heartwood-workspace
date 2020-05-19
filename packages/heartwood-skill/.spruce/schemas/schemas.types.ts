/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

// @ts-ignore
import { default as Schema } from '@sprucelabs/schema'
// @ts-ignore
import * as SpruceSchema from '@sprucelabs/schema'
// @ts-ignore
import * as generated_import_0 from '#spruce/../src/fields/CallbackField'
// @ts-ignore
import * as generated_import_1 from '#spruce/../src/fields/ElementTypeField'
// @ts-ignore
import * as generated_import_2 from '#spruce/../src/fields/EventCallbackField'
import * as generated_import_3 from '#spruce/../src/fields/NodeField'


	export namespace SpruceSchemas.Core {
		/** Profile images at various helpful sizes and resolutions. */
		export interface IProfileImage {

				/** 60x60. */
				'profile60': string
				/** 150x150. */
				'profile150': string
				/** 60x60. */
				'profile60@2x': string
				/** 150x150. */
				'profile150@2x': string
		}
	}


	export namespace SpruceSchemas.Core {
		/** A human being. */
		export interface IUser {

				/** Id. */
				'id': string
				/** First name. */
				'firstName'?: string| undefined | null
				/** Last name. */
				'lastName'?: string| undefined | null
				/** Casual name. Generated name that defaults to Friend! */
				'casualName': string
				/** Phone. The person's phone number! */
				'phoneNumber'?: string| undefined | null
				/** Profile photos. */
				'profileImages'?: SpruceSchemas.Core.IProfileImage| undefined | null
				/** Default profile photos. */
				'defaultProfileImages': SpruceSchemas.Core.IProfileImage
		}
	}


	export namespace SpruceSchemas.Core {
		/** An ability Sprucebot has learned. */
		export interface ISkill {

				/** Id. */
				'id': string
				/** Id. */
				'apiKey': string
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Slug. */
				'slug'?: string| undefined | null
				/** Icon. */
				'icon'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Core {
		/** A physical location where people meet. An organization has at least one of them. */
		export interface ILocation {

				/** Id. */
				'id'?: string| undefined | null
				/** Name. */
				'name': string
				/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string| undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean| undefined | null
				/** Main Phone. */
				'phone'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("etc/gmt+12" | "pacific/midway" | "pacific/honolulu" | "us/alaska" | "america/los_Angeles" | "america/tijuana" | "us/arizona" | "america/chihuahua" | "us/mountain" | "america/managua" | "us/central" | "america/mexico_City" | "Canada/Saskatchewan" | "america/bogota" | "us/eastern" | "us/east-indiana" | "Canada/atlantic" | "america/caracas" | "america/manaus" | "america/Santiago" | "Canada/Newfoundland" | "america/Sao_Paulo" | "america/argentina/buenos_Aires" | "america/godthab" | "america/montevideo" | "america/Noronha" | "atlantic/cape_Verde" | "atlantic/azores" | "africa/casablanca" | "etc/gmt" | "europe/amsterdam" | "europe/belgrade" | "europe/brussels" | "europe/Sarajevo" | "africa/lagos" | "asia/amman" | "europe/athens" | "asia/beirut" | "africa/cairo" | "africa/Harare" | "europe/Helsinki" | "asia/Jerusalem" | "europe/minsk" | "africa/Windhoek" | "asia/Kuwait" | "europe/moscow" | "africa/Nairobi" | "asia/tbilisi" | "asia/tehran" | "asia/muscat" | "asia/baku" | "asia/Yerevan" | "asia/Kabul" | "asia/Yekaterinburg" | "asia/Karachi" | "asia/calcutta" | "asia/calcutta" | "asia/Katmandu" | "asia/almaty" | "asia/Dhaka" | "asia/Rangoon" | "asia/bangkok" | "asia/Krasnoyarsk" | "asia/Hong_Kong" | "asia/Kuala_Lumpur" | "asia/Irkutsk" | "Australia/Perth" | "asia/taipei" | "asia/tokyo" | "asia/Seoul" | "asia/Yakutsk" | "Australia/adelaide" | "Australia/Darwin" | "Australia/brisbane" | "Australia/canberra" | "Australia/Hobart" | "pacific/guam" | "asia/Vladivostok" | "asia/magadan" | "pacific/auckland" | "pacific/Fiji" | "pacific/tongatapu")| undefined | null
				/** Address. */
				'address': SpruceSchema.IAddressFieldValue
		}
	}


	export namespace SpruceSchemas.Core {
		/**  */
		export interface IAcl {
				/** Permissions grouped by slug. */
				[slug:string]: string[]
		}
	}


	export namespace SpruceSchemas.Core {
		/** A position at a company. The answer to the question; What is your job? */
		export interface IJob {

				/** Id. */
				'id'?: string| undefined | null
				/** Is default. Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest). */
				'isDefault': string
				/** Name. */
				'name': string
				/** Role. */
				'role': ("owner" | "groupManager" | "manager" | "teammate" | "guest")
				/** On work permissions. */
				'inStoreAcls'?: SpruceSchemas.Core.IAcl| undefined | null
				/** Off work permissions. */
				'acls'?: SpruceSchemas.Core.IAcl| undefined | null
		}
	}


	export namespace SpruceSchemas.Core {
		/** A location a person has given access to themselves. */
		export interface IUserLocation {

				/** Id. */
				'id'?: string| undefined | null
				/** Name. */
				'role': ("owner" | "groupManager" | "manager" | "teammate" | "guest")
				/** Status. */
				'status'?: string| undefined | null
				/** Total visits. */
				'visits': number
				/** Last visit. */
				'lastRecordedVisit'?: SpruceSchema.IDateTimeFieldValue| undefined | null
				/** Job. */
				'job': SpruceSchemas.Core.IJob
				/** Location. */
				'location': SpruceSchemas.Core.ILocation
				/** User. */
				'user': SpruceSchemas.Core.IUser
		}
	}


	export namespace SpruceSchemas.Local {
		/** A photo of a person that is generally round */
		export interface IAvatar {

				/** Source. */
				'src': string
				/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
				'alt': string
				/** Is large. True will show large variation of the avatar */
				'isLarge'?: boolean| undefined | null
				/** Is large. Align text and name center */
				'isVertical'?: boolean| undefined | null
				/** Show online indicator. Should I should the status indicator */
				'showIndicator'?: boolean| undefined | null
				/** Status. */
				'status'?: ("online" | "offline")| undefined | null
				/** Name. */
				'name'?: string| undefined | null
				/** Text. Additional text to show below the name */
				'text'?: string| undefined | null
				/** Class name. Set the "class" attribute */
				'className'?: string| undefined | null
				/** Width. */
				'width'?: number| undefined | null
				/** Height. */
				'height'?: number| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface IBigFormControls {

				/** Enable go back. Will enable/disable the back button to go to a previous question */
				'canGoBack'?: boolean| undefined | null
				/** Enable go next. Will enable/disable the button to go to the next question */
				'canGoNext'?: boolean| undefined | null
				/** Back handler. */
				'onBack'?: (() => void)| undefined | null
				/** Next handler. */
				'onNext'?: (() => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Ask questions one at a time */
		export interface IBigForm {

				/** Header controls. */
				'controls'?: SpruceSchemas.Local.IBigFormControls| undefined | null
				/** Use one Sprucebot. Sprucebot will stay in place and delete, then type each question */
				'useOneSprucebot'?: boolean| undefined | null
				/** Transition style. */
				'transitionStyle'?: ("stack" | "slide-left" | "slide-up" | "swap")| undefined | null
				/** Current slide. */
				'currentSlide'?: number| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** a confirmation dialog */
		export interface IConfirmModal {

				/** Title. Title of the confirmation dialog */
				'title'?: string| undefined | null
				/** Text. Text shown in the dialog */
				'text'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** **missing description** */
		export interface IIcon {

				/** Id. */
				'id'?: string| undefined | null
				/** Name. The name of the icon to render. If not found, this will return null. */
				'name'?: string| undefined | null
				/** Is line icon. Set true to render an icon with a stroke, but no fill */
				'isLineIcon'?: boolean| undefined | null

				'className'?: string| undefined | null
				/** . Lets you pass an icon node */
				'customIcon'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A interactive element you can touch or click to invoke an Action */
		export interface IButton {

				/** Id. */
				'id'?: string| undefined | null
				/** Kind. Sets the visual appearance of the button. May be primary, secondary, simple, or caution. */
				'kind'?: ("primary" | "secondary" | "simple" | "caution")| undefined | null
				/** Is small. Set true to make the button less tall. */
				'isSmall'?: boolean| undefined | null
				/** Is full width. Set true to make the button fill its parent's width. */
				'isFullWidth'?: boolean| undefined | null
				/** Is loading. Set true to hide any text or icon in the button and show a loader instead. */
				'isLoading'?: boolean| undefined | null
				/** Is icon only. Set true to hide any text in the button. Text should still be provided for accessibility. */
				'isIconOnly'?: boolean| undefined | null
				/** Text. Text for the button. */
				'text'?: string| undefined | null
				/** Href. Will render a link. May be relative or absolute. */
				'href'?: string| undefined | null
				/** Icon. Icon for the button. */
				'icon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Type. Type attribute for HTML button element. Defaults to 'button'. */
				'type'?: ("button" | "submit" | "reset")| undefined | null
				/** Is disabled. Set true to disable the button */
				'isDisabled'?: boolean| undefined | null
				/** classname. */
				'className'?: string| undefined | null
				/** On click handler. */
				'onClick'?: ((e: React.MouseEvent<Element>) => void)| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** . Lets you override the element used when rendering a link */
				'AnchorComponent'?: React.ElementType| undefined | null
				/** Target. _blank|_self|_parent|_top|framename */
				'target'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A contextual menu comprised of buttons (tip: set the action on each button). */
		export interface IContextMenu {

				/** Buttons. */
				'buttons': SpruceSchemas.Local.IButton[]
				/** Size. Set the width of the menu. Helpful for longer text in buttons */
				'size'?: ("medium" | "large")| undefined | null
				/** Text. Adds text to the collapsed menu */
				'text'?: string| undefined | null
				/** Icon. Overrides the default icon */
				'icon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Is simple. Set true to make the button blue */
				'isSimple'?: boolean| undefined | null
				/** Is small. Set true to make the button smaller */
				'isSmall'?: boolean| undefined | null
				/** Close on select. Set to true makes the menu close when any option is selected */
				'closeOnSelect'?: boolean| undefined | null
				/** Classname. */
				'className'?: string| undefined | null
				/** . Invoked when the button is clicked */
				'onClick'?: ((e: React.MouseEvent<HTMLDivElement>) => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** The label for any input */
		export interface ILabel {

				/** Id. */
				'id'?: string| undefined | null
				/** Label. */
				'text': string
				/** Post label text. */
				'postLabel'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Drop a file to upload */
		export interface IDropzone {

				/** Id. */
				'id'?: string| undefined | null
				/** Upload btn text. Text  */
				'uploadButtonText'?: string| undefined | null
				/** Upload progress. */
				'uploadProgress'?: number| undefined | null
				/** Error message. Output an error message */
				'errorMessage'?: string| undefined | null
				/** On drag enter. */
				'onDragEnter'?: ((event?: React.DragEvent<HTMLElement>) => void)| undefined | null
				/** On drag leave. */
				'onDragLeave'?: ((event?: React.DragEvent<HTMLElement>) => void)| undefined | null
				/** On drag over. */
				'onDragOver'?: ((event?: React.DragEvent<HTMLElement>) => void)| undefined | null
				/** On drop. */
				'onDrop'?: ((
								acceptedFiles: File[],
								rejectedFiles: File[],
								event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event
							) => void)| undefined | null

				'onDropAccepted'?: ((files?: File[], event?: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void)| undefined | null

				'onDropRejected'?: ((files?: File[], event?: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void)| undefined | null

				'onFileDialogCancel'?: (() => void)| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Small. */
				'isSmall'?: boolean| undefined | null
				/** Circular. Render upload as a circle (only use if isSmall is true) */
				'isCircular'?: boolean| undefined | null
				/** File uploaded. Show file uploaded */
				'fileWasUploaded'?: boolean| undefined | null
				/** Accept types. */
				'acceptedMimeTypes'?: string[]| undefined | null
				/** Default icon. The icon shown before anything is dropped. */
				'defaultIcon'?: SpruceSchemas.Local.IIcon| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Used for the empty state of lists */
		export interface IEmptyState {

				/** Heading. */
				'heading': string
				/** Subheading. */
				'subheading'?: string| undefined | null
				/** Icon. */
				'icon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Primary button. */
				'primaryButton'?: SpruceSchemas.Local.IButton| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** **missing description** */
		export interface IHeading {

				/** Id. */
				'id'?: string| undefined | null
				/** Html. HTML rendered directly */
				'html'?: string| undefined | null
				/** Text. Text rendered in the header */
				'text'?: string| undefined | null

				'className'?: string| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Weight. The weight of the heading, H1 and beyond */
				'weight'?: ("h1" | "h2" | "h3" | "h4" | "h5" | "h6")| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A basic image tag */
		export interface IImage {

				/** Id. */
				'id'?: string| undefined | null
				/** Src. Where to pull the image from */
				'src': string
				/** Alt. Rendered as the alt tag for hovers */
				'alt'?: string| undefined | null

				'width'?: number| undefined | null

				'height'?: number| undefined | null

				'className'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Render markdown beautifully */
		export interface IMarkdown {

				/** Id. Unique ID for view caching. */
				'id'?: string| undefined | null
				/** Source. Markdown text to be rendered */
				'source': string
		}
	}


	export namespace SpruceSchemas.Local {
		/** Holds buttons and spans the top or bottom of the screen. */
		export interface ISaveBar {

				/** Message. Show a custom message across the bar */
				'message'?: string| undefined | null
				/** Visible. */
				'isVisible'?: boolean| undefined | null
				/** Disable discard. */
				'isDiscardDisabled'?: boolean| undefined | null
				/** Disable save. */
				'isSaveDisabled'?: boolean| undefined | null
				/** Discard in progress. */
				'isDiscarding'?: boolean| undefined | null
				/** Save in progress. */
				'isSaving'?: boolean| undefined | null
				/** Discard handler. */
				'onDiscard'?: ((e: React.MouseEvent<Element>) => void)| undefined | null
				/** Save handler. */
				'onSave'?: ((e: React.MouseEvent<Element>) => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Defaults to h2 */
		export interface ISubheading {

				/** Id. */
				'id'?: string| undefined | null
				/** Html. HTML rendered directly */
				'html'?: string| undefined | null
				/** Text. Text rendered in the header */
				'text'?: string| undefined | null

				'className'?: string| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Weight. The weight of the sub heading, H2 and beyond */
				'weight'?: ("h1" | "h2" | "h3" | "h4" | "h5" | "h6")| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A tabs control */
		export interface ITab {

				/** Text. The text shown on the tab */
				'text': string
				/** Icon. An icon shown on the tab next to the text */
				'icon'?: SpruceSchemas.Local.IIcon| undefined | null

				'AnchorComponent'?: React.ElementType| undefined | null
				/** Is current. Is the currently selected tab */
				'isCurrent'?: boolean| undefined | null

				'className'?: string| undefined | null
				/** Panel. Rendered as the body of the selected tab */
				'panel'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A tabs control */
		export interface ITabs {

				/** Tabs. */
				'tabs': SpruceSchemas.Local.ITab[]
				/** Horizontal padding. Adds horizontal padding */
				'isPadded'?: boolean| undefined | null
				/** Truncate tabs. Should tabs render 3 dots if they all don't fit */
				'isTruncatable'?: boolean| undefined | null

				'className'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Basic text to be rendered */
		export interface IText {

				/** Id. */
				'id'?: string| undefined | null
				/** Text. the text to render, supports {{handlebars}} and pulls off {{context}} */
				'text'?: string| undefined | null

				'className'?: string| undefined | null
				/** Inline. If true, renders text in a <span /> vs a <p /> */
				'isInline'?: boolean| undefined | null
				/** Context. A key/value pair used to populate the {{handlebars}} placeholders of the text prop */
				'context'?: (Record<string, any>)| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** The header of a list */
		export interface IListHeader {

				/** Title. Title to render in the header */
				'title': string
				/** Subtitle. Optional subtitle text */
				'subtitle'?: string| undefined | null
				/** Is small. Set true for small lists */
				'isSmall'?: boolean| undefined | null
				/** Buttons. Buttons to associate with the list header */
				'buttons'?: SpruceSchemas.Local.IButton[]| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** For hints and error messages after inputs (if both set, only error shows) */
		export interface IInputHelper {

				/** Hint. */
				'hint'?: string| undefined | null
				/** Error message. */
				'error'?: string| undefined | null

				'className'?: string| undefined | null

				'htmlFor'?: string| undefined | null

				'ElementTag'?: ("p" | "label")| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A great way to render a on/off style question or control */
		export interface IToggle {

				/** Id. */
				'id'?: string| undefined | null
				/** Name. */
				'name'?: string| undefined | null

				'className'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
				/** On click. Optional on click to invoke when tapped */
				'onClick'?: ((e: React.MouseEvent<HTMLInputElement>) => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A radio control. Give a bunch the same name to keep them as part of the same group */
		export interface IListItemRadio {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null
				/** Id. */
				'id': string
				/** Name. A name attached to this radio button */
				'name'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Is disabled. is this control disabled? */
				'isDisabled'?: boolean| undefined | null
				/** Is checked. Is this control checked? */
				'isChecked'?: boolean| undefined | null

				'className'?: string| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A checkbox! */
		export interface IListItemCheckbox {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null

				'id': string
				/** Name. */
				'name'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Disabled. */
				'isDisabled'?: boolean| undefined | null
				/** Indeterminate. Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it. */
				'isIndeterminate'?: boolean| undefined | null
				/** Checked. */
				'isChecked'?: boolean| undefined | null

				'className'?: string| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A warning message that can go on a list item */
		export interface IListItemWarning {

				/** Title. */
				'title'?: boolean| undefined | null
				/** Subtitle. */
				'subtitle'?: boolean| undefined | null
				/** Note. */
				'note'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface IExpandableListItem {

				/** Id. */
				'id'?: string| undefined | null
				/** Title. Title text */
				'title': string
				/** Subtitle. Optional subtitle text */
				'subtitle'?: string| undefined | null
				/** Note. Optional note text */
				'note'?: string| undefined | null
				/** Expandable. Enables a little disclosure triangle to hide/show the item */
				'isExpandable'?: boolean| undefined | null
				/** Avatar. */
				'avatar'?: SpruceSchemas.Local.IAvatar| undefined | null
				/** Image. */
				'image'?: SpruceSchemas.Local.IImage| undefined | null
				/** Icon. Inline svg icon */
				'icon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Is icon hidden. Optional; visually hides the icon without removing it */
				'isIconHidden'?: boolean| undefined | null
				/** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
				'isLeftIndented'?: boolean| undefined | null
				/** Is draggable. Set true when the list can be reordered */
				'isDraggable'?: boolean| undefined | null
				/** Is disabled. Set true when the list can be reordered */
				'isDisabled'?: boolean| undefined | null
				/** Toggle props. Props passed to the toggle if toggleId is set */
				'toggle'?: SpruceSchemas.Local.IToggle| undefined | null
				/** Primary button. A primary button that turns the entire list item into a clickable button */
				'primaryButton'?: SpruceSchemas.Local.IButton| undefined | null
				/** Buttons. Additional buttons that get dropped into this item */
				'buttons'?: SpruceSchemas.Local.IButton[]| undefined | null
				/** Context menu. Context Menu associated with the list it */
				'contextMenu'?: SpruceSchemas.Local.IContextMenu| undefined | null
				/** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
				'isSeparatorVisible'?: boolean| undefined | null
				/** Class name. Optional class name for list item */
				'className'?: string| undefined | null
				/** Loading. Makes the item look like a loading placeholder */
				'isLoading'?: boolean| undefined | null
				/** Selectable element. Any props you want sent down to the selectable component being rendered */
				'selectable'?: { schemaId: 'listItemRadio', values: SpruceSchemas.Local.IListItemRadio } | { schemaId: 'listItemCheckbox', values: SpruceSchemas.Local.IListItemCheckbox }| undefined | null
				/** Warnings. Highlight title, subtitle, note with warning colors */
				'warnings'?: SpruceSchemas.Local.IListItemWarning| undefined | null

				'onClick'?: ((e: React.MouseEvent<HTMLDivElement>) => void)| undefined | null
				/** Expanded. If Expandable is true, will open or close the item */
				'isExpanded'?: boolean| undefined | null
				/** Collapsed icon. */
				'collapsedIcon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Expanded icon. */
				'expandedIcon'?: SpruceSchemas.Local.IIcon| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A checkbox! */
		export interface ICheckbox {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null

				'id'?: string| undefined | null
				/** Name. */
				'name'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Disabled. */
				'isDisabled'?: boolean| undefined | null
				/** Indeterminate. Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it. */
				'isIndeterminate'?: boolean| undefined | null
				/** Checked. */
				'isChecked'?: boolean| undefined | null

				'className'?: string| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A radio control. Give a bunch the same name to keep them as part of the same group */
		export interface IRadio {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null
				/** Id. */
				'id'?: string| undefined | null
				/** Name. A name attached to this radio button */
				'name'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Is disabled. is this control disabled? */
				'isDisabled'?: boolean| undefined | null
				/** Is checked. Is this control checked? */
				'isChecked'?: boolean| undefined | null

				'className'?: string| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A list of information or inputs */
		export interface IList {

				/** Id. */
				'id'?: string| undefined | null
				/** Header. List Header */
				'header'?: SpruceSchemas.Local.IListHeader| undefined | null
				/** Items. List items */
				'items': SpruceSchemas.Local.IExpandableListItem[]
				/** Is small. Set true to make the list smaller */
				'isSmall'?: boolean| undefined | null
				/** Are separators visible. Set to true to show separators between list items */
				'areSeparatorsVisible'?: boolean| undefined | null
				/** Class name. */
				'className'?: string| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Is loading. Show loading */
				'isLoading'?: boolean| undefined | null
				/** Selectable. Optional: set whether to use checkbox or radio for selectable list items */
				'selectable'?: { schemaId: 'checkbox', values: SpruceSchemas.Local.ICheckbox } | { schemaId: 'radio', values: SpruceSchemas.Local.IRadio }| undefined | null
				/** Click handler. */
				'onClick'?: ((e: React.MouseEvent<HTMLDivElement>) => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A button with a dropdown of actions on the right */
		export interface ISplitButton {

				/** Id. */
				'id'?: string| undefined | null
				/** Default action. The main action readily surfaced to the user */
				'defaultButton': SpruceSchemas.Local.IButton
				/** Actions. All the secondary nested buttons */
				'buttons'?: SpruceSchemas.Local.IButton[]| undefined | null
				/** Kind. Sets the visual hierarchy of the button */
				'kind'?: ("primary" | "secondary" | "simple" | "caution")| undefined | null
				/** Is full width. Set true to fill the parent's width */
				'isFullWidth'?: boolean| undefined | null
				/** Is small. Sets the visual hierarchy of the button */
				'isSmall'?: boolean| undefined | null
				/** Click handler. */
				'onClick'?: ((e: React.MouseEvent<Element>) => void)| undefined | null
				/** Portal. Render in a react-portal, not sure why this is needed or not just always true */
				'usePortal'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Header of a card */
		export interface ICardHeader {

				/** Title. Title for the card */
				'title'?: string| undefined | null
				/** Label text. Optional label to show above title */
				'labelText'?: string| undefined | null
				/** Label icon. Optional icon to show above the title and before the label */
				'labelIcon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Buttons. Render buttons in the Card Header */
				'buttons'?: SpruceSchemas.Local.IButton[]| undefined | null
				/** Context menu. Renders a Context Menu in the Card Header */
				'contextMenu'?: SpruceSchemas.Local.IContextMenu| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Header of a card */
		export interface IOnboardingCardStep {

				/** Id. */
				'id'?: string| undefined | null
				/** Tab title. Title that shows in the tab */
				'tabTitle': string
				/** Tab icon. Icon for the tab */
				'tabIcon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Panel title. Title that shows in the panel */
				'panelTitle': string
				/** Panel text. Copy describing the step in the card's body */
				'panelCopy': string
				/** Panel CTA. Primary CTA of this step */
				'panelCTA'?: SpruceSchemas.Local.IButton| undefined | null
				/** Is complete. Is this step complete? */
				'isComplete'?: boolean| undefined | null

				'className'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Header of a card */
		export interface IOnboardingCard {

				/** Title. Title of the entire card */
				'title'?: string| undefined | null
				/** Steps. Steps for onboarding */
				'steps': SpruceSchemas.Local.IOnboardingCardStep[]
		}
	}


	export namespace SpruceSchemas.Local {
		/** Header of a card */
		export interface IScoreCardPanel {

				/** Id. */
				'id'?: string| undefined | null
				/** Label. The label for this score, e.g. Today's Sales */
				'label'?: string| undefined | null
				/** Value. The score, e.g. $234.30 */
				'value'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Header of a card */
		export interface IScoreCard {

				/** Scores. */
				'scores': SpruceSchemas.Local.IScoreCardPanel[]
		}
	}


	export namespace SpruceSchemas.Local {
		/** Call out information so it&#x27;s impossible to miss! */
		export interface IToast {

				/** Headline. Headline text */
				'headline': string
				/** Remove action. Action to be invoked when hitting the dismiss button */
				'onClickDismiss'?: ((e: React.MouseEvent<Element>) => void)| undefined | null
				/** Id. Unique id for UI caching */
				'id': string
				/** Text. Optional; Text after the headline */
				'text'?: string| undefined | null
				/** Kind. Sets the variation of toast */
				'kind'?: string| undefined | null
				/** Followup text. Text for the followup action */
				'followupText'?: string| undefined | null
				/** Followup handler. Callback to be invoked when hitting the followup CTA */
				'onClickFollowup'?: ((e: React.MouseEvent<Element>) => void)| undefined | null
				/** Remove handler. Callback invoked when remove is clicked (cannot block the removal) */
				'onRemove'?: ((e: React.MouseEvent<Element>) => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Hold all the information for creating body components */
		export interface ICardBuilderBody {

				/** Id. */
				'id'?: string| undefined | null
				/** children. Children to show in the Card */
				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Is sectioned. Whether to wrap children in CardSection */
				'isSectioned'?: boolean| undefined | null
				/** Are section separators visible. Set true to display line separators between CardSection components */
				'areSectionSeparatorsVisible'?: boolean| undefined | null
				/** Has top padding. Does card include top padding */
				'hasTopPadding'?: boolean| undefined | null
				/** Has bottom padding. Does card include bottom padding */
				'hasBottomPadding'?: boolean| undefined | null
				/** Is full bleed. Set to true to remove horizontal padding */
				'isFullBleed'?: boolean| undefined | null
				/** Items. Children to show in the Card */
				'items': ({ schemaId: 'button', values: SpruceSchemas.Local.IButton } | { schemaId: 'image', values: SpruceSchemas.Local.IImage } | { schemaId: 'heading', values: SpruceSchemas.Local.IHeading } | { schemaId: 'text', values: SpruceSchemas.Local.IText } | { schemaId: 'scoreCard', values: SpruceSchemas.Local.IScoreCard } | { schemaId: 'toast', values: SpruceSchemas.Local.IToast } | { schemaId: 'list', values: SpruceSchemas.Local.IList })[]
		}
	}


	export namespace SpruceSchemas.Local {
		/** A group of buttons presented in a few cool ways (see kind) */
		export interface IButtonGroup {

				/** Buttons. */
				'buttons': SpruceSchemas.Local.IButton[]
				/** Kind. Visual appearance of the group. */
				'kind'?: ("default" | "segmented" | "floating")| undefined | null
				/** Is full width. Set true to fill parent width */
				'isFullWidth'?: boolean| undefined | null
				/** Highlighted index. Index of the button that is currently highlighted, e.g. by arrow keys */
				'highlightedIndex'?: number| undefined | null

				'onClick'?: ((e: React.MouseEvent<HTMLInputElement>) => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Footer used for the card builder */
		export interface ICardBuilderFooter {

				/** Button group. Render buttons in the Card Footer */
				'buttonGroup'?: SpruceSchemas.Local.IButtonGroup| undefined | null
				/** Helper. Helper for the footer */
				'helper'?: string| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Build a card to show something to the user */
		export interface ICardBuilder {

				/** Id. */
				'id'?: string| undefined | null
				/** Header. Card Header props */
				'header'?: SpruceSchemas.Local.ICardHeader| undefined | null
				/** Header image. optionally pass props to an image tag to be rendered in the header */
				'headerImage'?: SpruceSchemas.Local.IImage| undefined | null
				/** Onboarding. all onboarding props */
				'onboarding'?: SpruceSchemas.Local.IOnboardingCard| undefined | null
				/** Body. Card Body props */
				'body'?: SpruceSchemas.Local.ICardBuilderBody| undefined | null
				/** Footer. The footer of the card */
				'footer'?: SpruceSchemas.Local.ICardBuilderFooter| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Some front end components emit uiEnhancement events to allow skills to enhance them during presentation. */
		export interface IUIEnhancementSection {

				/** Id. The ID of the section that is acting as a placeholder for ui enhancements */
				'id'?: string| undefined | null
				/** Calendar event details items. Calendar items to add as enhancements */
				'calendarEventDetailItems': ({ schemaId: 'list', values: SpruceSchemas.Local.IList } | { schemaId: 'button', values: SpruceSchemas.Local.IButton } | { schemaId: 'splitButton', values: SpruceSchemas.Local.ISplitButton } | { schemaId: 'cardBuilder', values: SpruceSchemas.Local.ICardBuilder } | { schemaId: 'toast', values: SpruceSchemas.Local.IToast } | { schemaId: 'text', values: SpruceSchemas.Local.IText } | { schemaId: 'markdown', values: SpruceSchemas.Local.IMarkdown })[]
				/** Card builder body items. Card builder items to add as enhancements */
				'cardBuilderBodyItems': ({ schemaId: 'button', values: SpruceSchemas.Local.IButton } | { schemaId: 'image', values: SpruceSchemas.Local.IImage } | { schemaId: 'heading', values: SpruceSchemas.Local.IHeading } | { schemaId: 'text', values: SpruceSchemas.Local.IText } | { schemaId: 'scoreCard', values: SpruceSchemas.Local.IScoreCard } | { schemaId: 'toast', values: SpruceSchemas.Local.IToast } | { schemaId: 'list', values: SpruceSchemas.Local.IList })[]
				/** Context menu items. Context menu items to add as enhancements */
				'contextMenuItems': SpruceSchemas.Local.IButton[]
		}
	}


	export namespace SpruceSchemas.Local {
		/** Avatar tied to a core user */
		export interface IUserAvatar {

				/** User. */
				'user': SpruceSchemas.Core.IUser
				/** Source. */
				'src': string
				/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
				'alt': string
				/** Is large. True will show large variation of the avatar */
				'isLarge'?: boolean| undefined | null
				/** Is large. Align text and name center */
				'isVertical'?: boolean| undefined | null
				/** Show online indicator. Should I should the status indicator */
				'showIndicator'?: boolean| undefined | null
				/** Status. */
				'status'?: ("online" | "offline")| undefined | null
				/** Name. */
				'name'?: string| undefined | null
				/** Text. Additional text to show below the name */
				'text'?: string| undefined | null
				/** Class name. Set the "class" attribute */
				'className'?: string| undefined | null
				/** Width. */
				'width'?: number| undefined | null
				/** Height. */
				'height'?: number| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks. */
		export interface ICalendarEventBlock {

				/** Id. An optional identifier for this block */
				'id'?: string| undefined | null
				/** Title. Any title rendered on the event */
				'title'?: string| undefined | null
				/** Subtitle. Displayed right under the title */
				'subtitle'?: string| undefined | null
				/** Duration sec. How long this block is for, in seconds */
				'durationSec': SpruceSchema.IDurationFieldValue
				/** Left icons. All the icons show on the left of the calendar event */
				'leftIcons': SpruceSchemas.Local.IIcon[]
				/** Right icons. All the icons shown on the right of the calendar event */
				'rightIcons': SpruceSchemas.Local.IIcon[]
				/** Is busy. Is the person associated to this event busy during this time (to keep from double booking)? */
				'isBusy'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** All the details attached to an event. Shown on click of the event. */
		export interface ICalendarEventDetails {

				/** Id. An optional ID for this item; used to allow association with UI Enhancements */
				'id'?: string| undefined | null
				/** Loading. Hides everything while loading */
				'isLoading'?: boolean| undefined | null
				/** Items. The items that make up the event details */
				'items': ({ schemaId: 'list', values: SpruceSchemas.Local.IList } | { schemaId: 'button', values: SpruceSchemas.Local.IButton } | { schemaId: 'splitButton', values: SpruceSchemas.Local.ISplitButton } | { schemaId: 'cardBuilder', values: SpruceSchemas.Local.ICardBuilder } | { schemaId: 'toast', values: SpruceSchemas.Local.IToast } | { schemaId: 'text', values: SpruceSchemas.Local.IText } | { schemaId: 'markdown', values: SpruceSchemas.Local.IMarkdown })[]
		}
	}


	export namespace SpruceSchemas.Local {
		/** How an event will be rendered in the calendar. Each time represents a standard state of an event. */
		export interface ICalendarEvent {

				/** Id. Id of the calendar event */
				'id'?: string| undefined | null
				/** Starts at. */
				'startAt': SpruceSchema.IDateTimeFieldValue
				/** Collection. A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar */
				'collection'?: string| undefined | null
				/** Is resizable. Can this event be resized on the calendar? */
				'isResizable'?: boolean| undefined | null
				/** Kind. The kind on an event impacts it's visual representation */
				'kind'?: ("default" | "tentative" | "active" | "unavailable" | "blocked" | "upcoming" | "past" | "warn" | "critical")| undefined | null
				/** Blocks. A calendar is comprised of blocks of time. You need at least 1 block to have a valid event. */
				'blocks': SpruceSchemas.Local.ICalendarEventBlock[]
				/** Details. Additional details shown after someone taps on an event */
				'details'?: SpruceSchemas.Local.ICalendarEventDetails| undefined | null
				/** User id. The ID of the user this event will render under */
				'userId': string
				/** Is draft. If this is a draft event (meaning it's not booked, but being setup) */
				'isDraft'?: boolean| undefined | null
				/** Has border. Should I render a border for this event? */
				'hasBorder'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** I universal way to hold visual information, use card builder to create cards */
		export interface ICard {


				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Centered. Is all content centered? */
				'isCentered'?: boolean| undefined | null
				/** Critical. Call attention to this card by making it standout! */
				'isCritical'?: boolean| undefined | null
				/** Small. A small variation of a card */
				'isSmall'?: boolean| undefined | null
				/** Class name. */
				'className'?: string| undefined | null
				/** Expandable. Allows this card to collapse at the header */
				'isExpandable'?: boolean| undefined | null
				/** Expanded by default. Should this thing start expanded */
				'defaultExpanded'?: boolean| undefined | null
				/** Header. */
				'header'?: SpruceSchemas.Local.ICardHeader| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** The body of a card. */
		export interface ICardBody {

				/** Id. */
				'id'?: string| undefined | null
				/** children. Children to show in the Card */
				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Is sectioned. Whether to wrap children in CardSection */
				'isSectioned'?: boolean| undefined | null
				/** Are section separators visible. Set true to display line separators between CardSection components */
				'areSectionSeparatorsVisible'?: boolean| undefined | null
				/** Has top padding. Does card include top padding */
				'hasTopPadding'?: boolean| undefined | null
				/** Has bottom padding. Does card include bottom padding */
				'hasBottomPadding'?: boolean| undefined | null
				/** Is full bleed. Set to true to remove horizontal padding */
				'isFullBleed'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Header of a card */
		export interface ICardFooter {


				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A card body is made up of several sections */
		export interface ICardSection {


				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** . Set to true to remove horizontal padding */
				'isFullBleed'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** An input with autosuggest capabilities! */
		export interface IAutosuggest {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null
				/** Id. */
				'id'?: string| undefined | null
				/** Value. */
				'value'?: string| undefined | null
				/** Suggestion getter. Invoked while person is typing. Is expected to return search results */
				'getSuggestions': ((query: string) => Promise<Record<string, any>[]> | Record<string, any>[])
				/** Suggestion value reducer. Takes a suggestion (returned from the suggestion getter) and turns it into a single string value to show in the search input after selection */
				'getSuggestionValue': ((suggestion: Record<string, any>) => string)
				/** Suggestion renderer. Renders a single suggestion, return a React.ReactNode */
				'renderSuggestion': ((suggestion: Record<string, any>, params: { query:string, isHighlighted: boolean }) => React.ReactNode)
				/** Selection handler. Invoked when a person select a suggestion */
				'onSuggestionSelected'?: ((
								event: React.FormEvent<any>,
								data: {
									suggestion: Record<string, any>;
									suggestionValue: string;
									suggestionIndex: number;
									sectionIndex: number | null;
									method: 'click' | 'enter';
								}
							) => void)| undefined | null
				/** Render suggestions. Should I even show the suggestions when typing */
				'shouldRenderSuggestions'?: boolean| undefined | null
				/** Default suggestions. Suggestions to show before anyone types */
				'defaultSuggestions'?: (Record<string, any>)[]| undefined | null
				/** Placeholder. */
				'placeholder'?: string| undefined | null
				/** Default value. */
				'defaultValue'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
				/** Small. Render small variation */
				'isSmall'?: boolean| undefined | null
				/** Wrapper class name. */
				'wrapperClassName'?: string| undefined | null

				'className'?: string| undefined | null
				/** Disable. Disable this field by setting to true */
				'isDisabled'?: boolean| undefined | null
				/** Icon. */
				'icon'?: SpruceSchemas.Local.IIcon| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Pick a date, any date! wrapper for react-dates */
		export interface IDatePicker {


				'kind'?: ("singleDate" | "dateRange")| undefined | null
				/** Date selection callback. */
				'onSelectDate'?: ((date: Date) => Promise<void> | void)| undefined | null
				/** Date range selection callback. */
				'onSelectDateRange'?: ((range: { startDate: Date, endDate: Date }) => Promise<void> | void)| undefined | null
				/** Selected date. Use this when kind is "Single date" */
				'date'?: SpruceSchema.IDateFieldValue| undefined | null
				/** Start date. Used this when kind is "Date range" */
				'startDate'?: SpruceSchema.IDateFieldValue| undefined | null
				/** End date. Used when kind is "Date range" */
				'endDate'?: SpruceSchema.IDateFieldValue| undefined | null
				/** Day size. The size of the cell for each day */
				'daySize'?: number| undefined | null
				/** Number of months. Number of months to show */
				'numberOfMonths'?: number| undefined | null
				/** Day blocker. */
				'isDayBlocked'?: ((day: Date) => boolean)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface IFormDialogButtons {

				/** Primary button. */
				'primary'?: SpruceSchemas.Local.IButton| undefined | null
				/** Secondary button. */
				'secondary'?: SpruceSchemas.Local.IButton| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A form with fields */
		export interface IForm {

				/** Submit handler. */
				'onSubmit': ((e: React.FormEvent<HTMLFormElement>) => void)

				'className'?: string| undefined | null
				/** Reset handler. */
				'onReset'?: (() => void)| undefined | null
				/** Validate. */
				'onValidate'?: ((values: Record<string, any>) => Promise<void> | void)| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Initial values. */
				'initialValues'?: (Record<string, any>)| undefined | null
				/** Render type. Set this to tell the Form where it'll be rendered */
				'renderAs'?: ("page" | "default" | "dialog")| undefined | null
				/** Dirty. Has this field been edited/updated? */
				'isDirty'?: boolean| undefined | null
				/** Valid. Is the form valid (will disable submit buttons) */
				'isValid'?: boolean| undefined | null
				/** Busy. Is the form busy (will show progress over buttons) */
				'isBusy'?: boolean| undefined | null
				/** Dialog buttons. */
				'dialogButtons'?: SpruceSchemas.Local.IFormDialogButtons| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface IFormBuilderSection {

				/** Title. */
				'title'?: string| undefined | null
				/** Spacing. */
				'spacing'?: ("tight" | "base")| undefined | null

				'fields'?: boolean[]| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Build a form to collect some deets */
		export interface IFormBuilder {

				/** Submit handler. */
				'onSubmit': ((e: React.FormEvent<HTMLFormElement>) => void)

				'className'?: string| undefined | null
				/** Reset handler. */
				'onReset'?: (() => void)| undefined | null
				/** Validate. */
				'onValidate'?: ((values: Record<string, any>) => Promise<void> | void)| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Initial values. */
				'initialValues'?: (Record<string, any>)| undefined | null
				/** Render type. Set this to tell the Form where it'll be rendered */
				'renderAs'?: ("page" | "default" | "dialog")| undefined | null
				/** Dirty. Has this field been edited/updated? */
				'isDirty'?: boolean| undefined | null
				/** Valid. Is the form valid (will disable submit buttons) */
				'isValid'?: boolean| undefined | null
				/** Busy. Is the form busy (will show progress over buttons) */
				'isBusy'?: boolean| undefined | null
				/** Dialog buttons. */
				'dialogButtons'?: SpruceSchemas.Local.IFormDialogButtons| undefined | null
				/** Schema definition. */
				'schema': (SpruceSchema.ISchemaDefinition)
				/** Sections. */
				'sections': SpruceSchemas.Local.IFormBuilderSection[]
		}
	}


	export namespace SpruceSchemas.Local {
		/** Mixin for inputs that support events */
		export interface IInputEvents {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Collect a phone number with area and country codes */
		export interface IPhoneInput {

				/** Label. */
				'label': SpruceSchemas.Local.ILabel
				/** Small. Render a small variation of the phone input */
				'isSmall'?: boolean| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
				/** Value. */
				'value'?: string| undefined | null
				/** Placeholder. */
				'placeholder'?: string| undefined | null
				/** Autofocus. Focus when paid loads */
				'autoFocus'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Show a text input as a search field */
		export interface ISearch {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null
				/** Id. */
				'id'?: string| undefined | null
				/** Name. */
				'name'?: string| undefined | null
				/** Autocomplete. */
				'enableAutoComplete'?: boolean| undefined | null
				/** Placeholder. */
				'placeholder'?: string| undefined | null
				/** Type. */
				'type': `search`
				/** Before icon. The icon shown before the input */
				'iconBefore'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Clear button. Drops in a clear button after the field, but requires you to handle the clear. */
				'clearButton'?: SpruceSchemas.Local.IButton| undefined | null
				/** Appendix. Shown under the input. */
				'appendix'?: string| undefined | null
				/** Helper. Shows hints or error messages. If both set, error wins. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null

				'className'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Small. Render a small variation */
				'isSmall'?: boolean| undefined | null
				/** Value. */
				'value'?: string| undefined | null
				/** Read only. */
				'isReadOnly'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface ISelectOption {

				/** Value. */
				'value': string
				/** Label. */
				'label': string
		}
	}


	export namespace SpruceSchemas.Local {
		/** A form select */
		export interface ISelect {


				'id'?: string| undefined | null
				/** Simple. Render a simpler variation */
				'isSimple'?: boolean| undefined | null
				/** Disabled. */
				'isDisabled'?: boolean| undefined | null

				'className'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Value. */
				'value'?: string| undefined | null
				/** Placeholder. */
				'placeholder'?: string| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
				/** Options. */
				'options': SpruceSchemas.Local.ISelectOption
		}
	}


	export namespace SpruceSchemas.Local {
		/** A simple sliding control */
		export interface ISlider {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null
				/** Id. */
				'id'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Name. */
				'name'?: string| undefined | null
				/** Minimum. The left most value of the slider */
				'min': number
				/** Maximum. The right most value of the slider */
				'max': number
				/** Value. The value of the slider */
				'value': number
				/** Disabled. */
				'isDisabled'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Small pill like control with text and onClick functionality */
		export interface ITag {

				/** Id. */
				'id'?: string| undefined | null

				'className'?: string| undefined | null
				/** Text. */
				'text'?: string| undefined | null
				/** Kind. */
				'kind'?: ("primary" | "secondary")| undefined | null
				/** Small. Render small variation of the tag */
				'isSmall'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A reusable component that holds an html &lt;input /&gt; element and decorates it. */
		export interface ITextInput {

				/** Change handler. */
				'onChange'?: ((e: React.ChangeEvent<HTMLInputElement>) => void)| undefined | null
				/** Blur handler. */
				'onBlur'?: ((e: React.FocusEvent<HTMLInputElement>) => void)| undefined | null
				/** Id. */
				'id'?: string| undefined | null
				/** Name. */
				'name'?: string| undefined | null
				/** Autocomplete. */
				'enableAutoComplete'?: boolean| undefined | null
				/** Placeholder. */
				'placeholder'?: string| undefined | null
				/** Type. */
				'type'?: ("button" | "search" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week")| undefined | null
				/** Before icon. The icon shown before the input */
				'iconBefore'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Clear button. Drops in a clear button after the field, but requires you to handle the clear. */
				'clearButton'?: SpruceSchemas.Local.IButton| undefined | null
				/** Appendix. Shown under the input. */
				'appendix'?: string| undefined | null
				/** Helper. Shows hints or error messages. If both set, error wins. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null

				'className'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Small. Render a small variation */
				'isSmall'?: boolean| undefined | null
				/** Value. */
				'value'?: string| undefined | null
				/** Read only. */
				'isReadOnly'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Big box to type lots of text (with voice support) */
		export interface ITextarea {

				/** id. */
				'id'?: string| undefined | null

				'className'?: string| undefined | null
				/** Label. */
				'label'?: SpruceSchemas.Local.ILabel| undefined | null
				/** Helper. */
				'helper'?: SpruceSchemas.Local.IInputHelper| undefined | null
				/** Resize'able. */
				'isResizeable'?: boolean| undefined | null
				/** Placeholder. */
				'placeholder'?: string| undefined | null
				/** Rows (height). Number of rows of text that will show before scrolling */
				'rows'?: number| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A section that makes up a layout */
		export interface ILayoutSection {

				/** Id. */
				'id'?: string| undefined | null
				/** Children. */
				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Classname. */
				'className'?: string| undefined | null
				/** Is secondary. Makes this section thinner */
				'isSecondary'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A layout is the start of it all */
		export interface ILayout {

				/** Children. */
				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Is centered. A hint */
				'isCentered'?: boolean| undefined | null
				/** Is full bleed. */
				'isFullBleed'?: boolean| undefined | null
				/** Sections. Layout sections that makeup this layout */
				'sections'?: SpruceSchemas.Local.ILayoutSection[]| undefined | null

				'className'?: string| undefined | null
				/** Width. */
				'width'?: ("base" | "wide" | "tight" | "fullWidth")| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A way to build layouts */
		export interface ILayoutBuilder {

				/** items. */
				'items'?: ({ schemaId: 'button', values: SpruceSchemas.Local.IButton } | { schemaId: 'cardBuilder', values: SpruceSchemas.Local.ICardBuilder } | { schemaId: 'layout', values: SpruceSchemas.Local.ILayout } | { schemaId: 'layoutSpacing', values: SpruceSchemas.Local.ILayoutSpacing } | { schemaId: 'sidebarHeader', values: SpruceSchemas.Local.ISidebarHeader } | { schemaId: 'sidebarSection', values: SpruceSchemas.Local.ISidebarSection })[]| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A way to add spacing to your layouts */
		export interface ILayoutSpacing {

				/** Direction. */
				'direction'?: ("all" | "horizontal" | "vertical" | "top" | "right" | "bottom" | "left")| undefined | null
				/** Spacing amount. The amount of spacing to apply (0-12) */
				'amount': number
				/** Layout builder. */
				'layoutBuilder'?: SpruceSchemas.Local.ILayoutBuilder| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface ISidebarHeader {

				/** Title. */
				'title': string
				/** Button. */
				'button'?: SpruceSchemas.Local.IButton| undefined | null
				/** Close handler. */
				'onClose'?: (() => void)| undefined | null
				/** Go back handler. */
				'onGoBack'?: (() => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** An element that makes up the sidebar */
		export interface ISidebarSection {

				/** items. */
				'items'?: ({ schemaId: 'button', values: SpruceSchemas.Local.IButton } | { schemaId: 'cardBuilder', values: SpruceSchemas.Local.ICardBuilder } | { schemaId: 'layout', values: SpruceSchemas.Local.ILayout } | { schemaId: 'layoutSpacing', values: SpruceSchemas.Local.ILayoutSpacing } | { schemaId: 'sidebarHeader', values: SpruceSchemas.Local.ISidebarHeader } | { schemaId: 'sidebarSection', values: SpruceSchemas.Local.ISidebarSection })[]| undefined | null

				'className'?: string| undefined | null
				/** Centered. Center everything horizontally */
				'isCentered'?: boolean| undefined | null
				/** Mobile only. Will hide on desktop if true */
				'isOnlyForMobile'?: boolean| undefined | null

				'horizontalSpacing'?: ("base" | "loose")| undefined | null

				'verticalSpacing'?: ("base" | "loose")| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A list is comprised of list items (or expandable list items). This is that list item. */
		export interface IListItem {

				/** Id. */
				'id'?: string| undefined | null
				/** Title. Title text */
				'title': string
				/** Subtitle. Optional subtitle text */
				'subtitle'?: string| undefined | null
				/** Note. Optional note text */
				'note'?: string| undefined | null
				/** Is expandable. Can render this item as expandable */
				'isExpandable'?: boolean| undefined | null
				/** Avatar. */
				'avatar'?: SpruceSchemas.Local.IAvatar| undefined | null
				/** Image. */
				'image'?: SpruceSchemas.Local.IImage| undefined | null
				/** Icon. Inline svg icon */
				'icon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Is icon hidden. Optional; visually hides the icon without removing it */
				'isIconHidden'?: boolean| undefined | null
				/** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
				'isLeftIndented'?: boolean| undefined | null
				/** Is draggable. Set true when the list can be reordered */
				'isDraggable'?: boolean| undefined | null
				/** Is disabled. Set true when the list can be reordered */
				'isDisabled'?: boolean| undefined | null
				/** Toggle props. Props passed to the toggle if toggleId is set */
				'toggle'?: SpruceSchemas.Local.IToggle| undefined | null
				/** Primary button. A primary button that turns the entire list item into a clickable button */
				'primaryButton'?: SpruceSchemas.Local.IButton| undefined | null
				/** Buttons. Additional buttons that get dropped into this item */
				'buttons'?: SpruceSchemas.Local.IButton[]| undefined | null
				/** Context menu. Context Menu associated with the list it */
				'contextMenu'?: SpruceSchemas.Local.IContextMenu| undefined | null
				/** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
				'isSeparatorVisible'?: boolean| undefined | null
				/** Class name. Optional class name for list item */
				'className'?: string| undefined | null
				/** Loading. Makes the item look like a loading placeholder */
				'isLoading'?: boolean| undefined | null
				/** Selectable element. Any props you want sent down to the selectable component being rendered */
				'selectable'?: { schemaId: 'listItemRadio', values: SpruceSchemas.Local.IListItemRadio } | { schemaId: 'listItemCheckbox', values: SpruceSchemas.Local.IListItemCheckbox }| undefined | null
				/** Warnings. Highlight title, subtitle, note with warning colors */
				'warnings'?: SpruceSchemas.Local.IListItemWarning| undefined | null
				/** Click handler. */
				'onClick'?: ((e: React.MouseEvent<Element>) => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** An element that makes up the sidebar */
		export interface ISidebarItem {

				/** Subitems. Rendered under the text as subitems */
				'items'?: SpruceSchemas.Local.ISidebarItem[]| undefined | null
				/** Icon. */
				'icon'?: SpruceSchemas.Local.IIcon| undefined | null
				/** Button. */
				'button'?: SpruceSchemas.Local.IButton| undefined | null

				'className'?: string| undefined | null
				/** Text. Rendered in the body of this item */
				'text'?: string| undefined | null
				/** href. */
				'href'?: string| undefined | null
				/** Current. If this item is the current one, it is rendered differently to call it out */
				'isCurrent'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** On the left or right side of a layout */
		export interface ISidebar {

				/** . Optional header that will only appear on mobile */
				'mobileHeader'?: SpruceSchemas.Local.ISidebarHeader| undefined | null
				/** Label. Items to display in the sidebar */
				'items'?: SpruceSchemas.Local.ISidebarItem[]| undefined | null
				/** Sections. Sections to display in the sidebar */
				'sections'?: SpruceSchemas.Local.ISidebarSection[]| undefined | null
				/** Back link. Back link item to handle navigation back to previous location */
				'backLink'?: SpruceSchemas.Local.ISidebarItem| undefined | null
				/** Side. Set which side the sidebar is on. Must be either 'left' or 'right' */
				'side'?: ("left" | "right")| undefined | null
				/** Large. Set true to make the sidebar larger. Defaults to false. */
				'isLarge'?: boolean| undefined | null
				/** Collapsed. Enables the user to collapse the sidebar on desktop. Defaults to true. */
				'isCollapsible'?: boolean| undefined | null
				/** Expanded on desktop. Set true to expand the sidebar (large screens only) */
				'isExpanded'?: boolean| undefined | null
				/** Expanded on mobile. Set true to expand the sidebar on small screens */
				'isMobileExpanded'?: boolean| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null

				'footerChildren'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Expander handler. Expected to expand/collapse the sidebar by setting (isExpanded to true/false) */
				'onToggleExpanded'?: (() => void)| undefined | null
				/** Force close handler. Expect you to collapse the bar no matter what (isExpanded to false) */
				'onForceCollapse'?: (() => void)| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface ISkillViewHeader {

				/** Title. */
				'title'?: string| undefined | null
				/** Back link href. */
				'backLinkHref'?: string| undefined | null
				/** Back link text. */
				'backLinkText'?: string| undefined | null
				/** Collapsed. */
				'isCollapsed'?: boolean| undefined | null

				'className'?: string| undefined | null
				/** Primary button. */
				'primaryButton'?: SpruceSchemas.Local.IButton| undefined | null
				/** Bottom border. */
				'hasBottomBorder'?: boolean| undefined | null
				/** Sidebar expander button. The button I'll use to let the person toggle the sidebar's visibility. */
				'sidebarExpanderButton'?: SpruceSchemas.Local.IButton| undefined | null
				/** Back click handler. */
				'onClickBack'?: ((e: React.MouseEvent<HTMLButtonElement>) => void)| undefined | null
				/** Tabs. */
				'tabs'?: SpruceSchemas.Local.ITab[]| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A view you&#x27;re presenting to a person on an unknown set of devices */
		export interface ISkillView {

				/** Centered. Is all content centered? */
				'isCentered'?: boolean| undefined | null

				'className'?: string| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null

				'sidebarChildren'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Header. */
				'header'?: SpruceSchemas.Local.ISkillViewHeader| undefined | null
				/** Collapse sidebar. Will hide the sidebar */
				'isSidebarCollapsed'?: boolean| undefined | null
				/** Collapse header. Will hide the header */
				'isHeaderCollapsed'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** A view you&#x27;re presenting to a person on an unknown set of devices */
		export interface ISkillViewBuilder {

				/** Centered. Is all content centered? */
				'isCentered'?: boolean| undefined | null

				'className'?: string| undefined | null

				'children'?: generated_import_3.INodeFieldDefinitionValue| undefined | null

				'sidebarChildren'?: generated_import_3.INodeFieldDefinitionValue| undefined | null
				/** Header. */
				'header'?: SpruceSchemas.Local.ISkillViewHeader| undefined | null
				/** Collapse sidebar. Will hide the sidebar */
				'isSidebarCollapsed'?: boolean| undefined | null
				/** Collapse header. Will hide the header */
				'isHeaderCollapsed'?: boolean| undefined | null
				/** Content layout. */
				'contentLayout'?: SpruceSchemas.Local.ILayoutBuilder| undefined | null
				/** Content layout. */
				'sidebarLayout'?: SpruceSchemas.Local.ILayoutBuilder| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Make it great! */
		export interface ISprucebotAvatar {

				/** Id. */
				'id'?: string| undefined | null
				/** Second Field. A hint */
				'stateOfMind': ("chill" | "contemplative" | "curious" | "accomplished")
				/** Size. */
				'size': ("small" | "medium" | "large")
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface ISprucebotTypedMessageSentence {

				/** . A way to override the Sprucebot avatar for this sentence */
				'avatar'?: SpruceSchemas.Local.ISprucebotAvatar| undefined | null
				/** Words. The words being typed out */
				'words': string
				/** End delay. How long should I hold on this sentence after it's typed? */
				'endDelay'?: SpruceSchema.IDurationFieldValue| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/** Avatar that makes size optional for use with the Sprucebot Typed Message component */
		export interface ISprucebotTypedMessageAvatar {

				/** Id. */
				'id'?: string| undefined | null
				/** Second Field. A hint */
				'stateOfMind': ("chill" | "contemplative" | "curious" | "accomplished")
				/** Size. */
				'size'?: ("small" | "medium" | "large")| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface ISprucebotTypedMessage {

				/** Id. */
				'id'?: string| undefined | null
				/** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
				'sentences': SpruceSchemas.Local.ISprucebotTypedMessageSentence[]
				/** Default avatar. How should Sprucebot be rendered by default */
				'defaultAvatar'?: SpruceSchemas.Local.ISprucebotTypedMessageAvatar| undefined | null
				/** Start delay. How long should I wait before starting to type? */
				'startDelay'?: SpruceSchema.IDurationFieldValue| undefined | null
				/** Loop. */
				'loop'?: boolean| undefined | null
				/** Size. */
				'size'?: ("small" | "medium" | "large")| undefined | null
				/** Paused. */
				'paused'?: boolean| undefined | null
		}
	}


	export namespace SpruceSchemas.Local {
		/**  */
		export interface IToastHeader {

				/** Headline. Headline text */
				'headline': string
				/** Remove action. Action to be invoked when hitting the dismiss button */
				'onClickDismiss'?: ((e: React.MouseEvent<Element>) => void)| undefined | null
		}
	}




