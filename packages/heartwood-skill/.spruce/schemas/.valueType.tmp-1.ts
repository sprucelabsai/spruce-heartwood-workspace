/** Field Types */
export enum FieldType {
	/** An address with geocoding ability *coming soon* */
	Address = 'address',
	/** A true/false. Converts false string to false, all other strings to true. */
	Boolean = 'boolean',
	/** Date and time support. */
	DateTime = 'dateTime',
	/** A span of time represented in { hours, minutes, seconds, ms } */
	Duration = 'duration',
	/** A way to handle files. Supports mime-type lookups. */
	File = 'file',
	/** A unique identifier field, UUID\'s in our case. */
	Id = 'id',
	/** Handles all types of numbers with min/max and clamp support */
	Number = 'number',
	/** Takes anything close to a phone number and formats it. Also great at validating numbers. */
	Phone = 'phone',
	/** Deprecated. For internal purposes only (will be deleted soon) */
	Raw = 'raw',
	/** A way to map relationships. */
	Schema = 'schema',
	/** Stored as string, lets user select between available options. */
	Select = 'select',
	/** A text field. Converts non-strings into strings by calling toString(). Size set by options. */
	Text = 'text',
}


import * as SpruceSchema from '@sprucelabs/schema'

			const templateItems = [{"namespace":"core","id":"profileImage","definition":{"id":"profileImage","name":"Profile Image Sizes","description":"Profile images at various helpful sizes and resolutions.","fields":{"profile60":{"label":"60x60","type":"text","isRequired":true},"profile150":{"label":"150x150","type":"text","isRequired":true},"profile60@2x":{"label":"60x60","type":"text","isRequired":true},"profile150@2x":{"label":"150x150","type":"text","isRequired":true}}},"pascalName":"ProfileImage","camelName":"profileImage","readableName":"Profile Image Sizes"},{"namespace":"core","id":"user","definition":{"id":"user","name":"User","description":"A human being.","fields":{"id":{"label":"Id","type":"id","isRequired":true},"firstName":{"label":"First name","type":"text","isRequired":false},"lastName":{"label":"Last name","type":"text","isRequired":false},"casualName":{"label":"Casual name","type":"text","hint":"Generated name that defaults to Friend!","isRequired":true},"phoneNumber":{"label":"Phone","type":"phone","hint":"The person's phone number!"},"profileImages":{"label":"Profile photos","type":"schema","options":{"schemaIds":["profileImage"]}},"defaultProfileImages":{"label":"Default profile photos","type":"schema","isRequired":true,"options":{"schemaIds":["profileImage"]}}}},"pascalName":"User","camelName":"user","readableName":"User"},{"namespace":"core","id":"skill","definition":{"id":"skill","name":"Skill","description":"An ability Sprucebot has learned.","fields":{"id":{"label":"Id","type":"id","isRequired":true},"apiKey":{"label":"Id","isPrivate":true,"type":"id","isRequired":true},"name":{"label":"Name","type":"text","isRequired":true},"description":{"label":"Description","type":"text","isRequired":false},"slug":{"label":"Slug","type":"text","isRequired":false},"icon":{"label":"Icon","type":"text","isRequired":false}}},"pascalName":"Skill","camelName":"skill","readableName":"Skill"},{"namespace":"core","id":"location","definition":{"id":"location","name":"Location","description":"A physical location where people meet. An organization has at least one of them.","fields":{"id":{"label":"Id","type":"id"},"name":{"label":"Name","type":"text","isRequired":true},"num":{"label":"Store number","type":"text","hint":"You can use other symbols, like # or dashes. #123 or 32-US-5"},"isPublic":{"label":"Public","type":"boolean","hint":"Is this location viewable by guests?","defaultValue":false},"phone":{"label":"Main Phone","type":"phone"},"timezone":{"label":"Timezone","type":"select","options":{"choices":[{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}]}},"address":{"label":"Address","type":"address","isRequired":true}}},"pascalName":"Location","camelName":"location","readableName":"Location"},{"namespace":"core","id":"acl","definition":{"id":"acl","name":"Access control list lookup table","dynamicKeySignature":{"type":"text","isArray":true,"label":"Permissions grouped by slug","key":"slug"}},"pascalName":"Acl","camelName":"acl","readableName":"Access control list lookup table"},{"namespace":"core","id":"job","definition":{"id":"job","name":"Job","description":"A position at a company. The answer to the question; What is your job?","fields":{"id":{"label":"Id","type":"id"},"isDefault":{"label":"Is default","hint":"Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest).","type":"text","isRequired":true},"name":{"label":"Name","type":"text","isRequired":true},"role":{"label":"Role","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}},"inStoreAcls":{"label":"On work permissions","type":"schema","options":{"schemaIds":["acl"]}},"acls":{"label":"Off work permissions","type":"schema","options":{"schemaIds":["acl"]}}}},"pascalName":"Job","camelName":"job","readableName":"Job"},{"namespace":"core","id":"userLocation","definition":{"id":"userLocation","name":"User location","description":"A location a person has given access to themselves.","fields":{"id":{"label":"Id","type":"id"},"role":{"label":"Name","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}},"status":{"label":"Status","type":"text"},"visits":{"label":"Total visits","type":"number","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}},"lastRecordedVisit":{"label":"Last visit","type":"dateTime"},"job":{"label":"Job","type":"schema","isRequired":true,"options":{"schemaIds":["job"]}},"location":{"label":"Location","type":"schema","isRequired":true,"options":{"schemaIds":["location"]}},"user":{"label":"User","type":"schema","isRequired":true,"options":{"schemaIds":["user"]}}}},"pascalName":"UserLocation","camelName":"userLocation","readableName":"User location"},{"namespace":"local","id":"avatar","definition":{"id":"avatar","name":"Avatar","description":"A photo of a person that is generally round","fields":{"src":{"type":"text","label":"Source","isRequired":true},"alt":{"type":"text","label":"Alternate text","isRequired":true,"hint":"Provides alternative information for an image if a user for some reason cannot view it"},"isLarge":{"type":"boolean","label":"Is large","hint":"True will show large variation of the avatar"},"isVertical":{"type":"boolean","label":"Is large","hint":"Align text and name center"},"showIndicator":{"type":"boolean","label":"Show online indicator","hint":"Should I should the status indicator"},"status":{"type":"select","label":"Status","options":{"choices":[{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}]}},"name":{"type":"text","label":"Name"},"text":{"type":"text","label":"Text","hint":"Additional text to show below the name"},"className":{"type":"text","label":"Class name","isPrivate":true,"hint":"Set the \"class\" attribute"},"width":{"type":"number","label":"Width"},"height":{"type":"number","label":"Height"}}},"pascalName":"Avatar","camelName":"avatar","readableName":"Avatar"},{"namespace":"local","id":"checkbox","definition":{"id":"checkbox","name":"Checkbox","description":"The one, the only, checkbox!","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique identifier"},"name":{"type":"text","label":"Name","hint":"A name attached to this checkbox"},"label":{"type":"text","label":"Label","hint":"Input label and text after checkbox icon"},"postText":{"type":"text","label":"Post text","hint":"Optional text to show below the label"},"isDisabled":{"type":"boolean","label":"Is disabled","hint":"is this checkbox disabled"},"isIndeterminate":{"type":"boolean","label":"Is indeterminate","isRequired":true,"hint":"Set true if the checkbox is indeterminate (the half checked thing you've seen in some places)"},"isChecked":{"type":"boolean","label":"Is checked","hint":"is this checkbox checked?"},"onClick":{"label":"On click","hint":"Optional action to invoke when tapped"}}},"pascalName":"Checkbox","camelName":"checkbox","readableName":"Checkbox"},{"namespace":"local","id":"confirm Modal","definition":{"id":"confirm Modal","name":"ConfirmModal","description":"a confirmation dialog","fields":{"title":{"type":"text","label":"Title","hint":"Title of the confirmation dialog"},"text":{"type":"text","label":"Text","hint":"Text shown in the dialog"}}},"pascalName":"ConfirmModal","camelName":"confirmModal","readableName":"ConfirmModal"},{"namespace":"local","id":"Icon","definition":{"id":"Icon","name":"Icon","description":"**missing description**","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Id for ui caching"},"name":{"type":"text","label":"Name","hint":"The name of the icon to render. If not found, this will return null."},"isLineIcon":{"type":"boolean","label":"Is line icon","hint":"Set true to render an icon with a stroke, but no fill"},"className":{"type":"text","isPrivate":true},"customIcon":{"isPrivate":true,"hint":"Lets you pass an icon node"}}},"pascalName":"Icon","camelName":"icon","readableName":"Icon"},{"namespace":"local","id":"button","definition":{"id":"button","name":"Button","description":"A interactive element you can touch or click to invoke an Action","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique ID for rendering in lists"},"kind":{"type":"select","label":"Kind","hint":"Sets the visual appearance of the button. May be primary, secondary, simple, or caution.","options":{"choices":[{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}]}},"isSmall":{"type":"boolean","label":"Is small","hint":"Set true to make the button less tall."},"isFullWidth":{"type":"boolean","label":"Is full width","hint":"Set true to make the button fill its parent's width."},"isLoading":{"type":"boolean","label":"Is loading","hint":"Set true to hide any text or icon in the button and show a loader instead."},"isIconOnly":{"type":"boolean","label":"Is icon only","hint":"Set true to hide any text in the button. Text should still be provided for accessibility."},"text":{"type":"text","label":"Text","hint":"Text for the button."},"href":{"type":"text","label":"Href","hint":"Will render a link. May be relative or absolute."},"icon":{"type":"schema","label":"Icon","hint":"Icon for the button.","options":{"schemaIds":["Icon"]}},"type":{"type":"select","label":"Type","hint":"Type attribute for HTML button element. Defaults to 'button'.","options":{"choices":[{"label":"Button","value":"button"},{"label":"Submit","value":"submit"},{"label":"Reset","value":"reset"}]}},"isDisabled":{"type":"boolean","label":"Is disabled","hint":"Set true to disable the button"},"className":{"type":"text","label":"classname","isPrivate":true},"onClick":{"label":"On click handler"},"children":{"isPrivate":true},"AnchorComponent":{"hint":"Lets you override the element used when rendering a link","isPrivate":true}}},"pascalName":"Button","camelName":"button","readableName":"Button"},{"namespace":"local","id":"ContextMenu","definition":{"id":"ContextMenu","name":"ContextMenu","description":"A contextual menu comprised of buttons (tip: set the action on each button).","fields":{"buttons":{"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"options":{"schemaIds":["button"]}},"size":{"type":"select","label":"Size","hint":"Set the width of the menu. Helpful for longer text in buttons","options":{"choices":[{"label":"Medium","value":"medium"},{"label":"Large","value":"large"}]}},"text":{"type":"text","label":"Text","hint":"Adds text to the collapsed menu"},"icon":{"type":"schema","label":"Icon","hint":"Overrides the default icon","options":{"schemaIds":["Icon"]}},"isSimple":{"type":"boolean","label":"Is simple","hint":"Set true to make the button blue"},"isSmall":{"type":"boolean","label":"Is small","hint":"Set true to make the button smaller"},"closeOnSelect":{"type":"boolean","label":"Close on select","hint":"Set to true makes the menu close when any option is selected"},"className":{"type":"text","label":"Classname","isPrivate":true},"onClick":{"hint":"Invoked when the button is clicked","isPrivate":true}}},"pascalName":"ContextMenu","camelName":"contextMenu","readableName":"ContextMenu"},{"namespace":"local","id":"emptyState","definition":{"id":"emptyState","name":"Empty state","description":"Used for the empty state of lists","fields":{"heading":{"type":"text","label":"Heading","isRequired":true},"subheading":{"type":"text","label":"Subheading"},"icon":{"type":"schema","label":"Icon","options":{"schemaIds":["Icon"]}},"primaryButton":{"type":"schema","label":"Primary button","options":{"schemaIds":["button"]}}}},"pascalName":"EmptyState","camelName":"emptyState","readableName":"Empty state"},{"namespace":"local","id":"Heading","definition":{"id":"Heading","name":"Heading","description":"**missing description**","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Id for view caching"},"html":{"type":"text","label":"Html","hint":"HTML rendered directly","isPrivate":true},"text":{"type":"text","label":"Text","hint":"Text rendered in the header"},"className":{"type":"text","isPrivate":true},"children":{"isPrivate":true},"weight":{"type":"select","label":"Weight","hint":"The weight of the heading, H1 and beyond","options":{"choices":[{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"}]}}}},"pascalName":"Heading","camelName":"heading","readableName":"Heading"},{"namespace":"local","id":"Image","definition":{"id":"Image","name":"Image","description":"A basic image tag","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"For UI caching"},"src":{"type":"text","label":"Src","isRequired":true,"hint":"Where to pull the image from"},"alt":{"type":"text","label":"Alt","hint":"Rendered as the alt tag for hovers"},"width":{"type":"number","isPrivate":true},"height":{"type":"number","isPrivate":true}}},"pascalName":"Image","camelName":"image","readableName":"Image"},{"namespace":"local","id":"layoutSection","definition":{"id":"layoutSection","name":"Layout section","description":"","fields":{"id":{"type":"text","label":"Id","isRequired":true},"children":{"label":"Children","isPrivate":true},"className":{"type":"text","label":"Classname","isPrivate":true},"isSecondary":{"type":"boolean","label":"Is secondary","hint":"Makes this section thinner"}}},"pascalName":"LayoutSection","camelName":"layoutSection","readableName":"Layout section"},{"namespace":"local","id":"layout","definition":{"id":"layout","name":"Layout","description":"Layout ","fields":{"children":{"label":"Children","isPrivate":true},"isCentered":{"type":"boolean","label":"Is centered","isRequired":true,"hint":"A hint"},"isFullBleed":{"type":"boolean","label":"Is full bleed","isPrivate":true},"sections":{"type":"schema","label":"Sections","hint":"Layout sections that makeup this layout","isArray":true,"options":{"schemaIds":["layoutSection"]}},"className":{"type":"text","isPrivate":true},"width":{"type":"select","label":"Width","isPrivate":true,"options":{"choices":[{"value":"base","label":"Base"},{"value":"wide","label":"Wide"},{"value":"tight","label":"Tight"},{"value":"fullWidth","label":"Full width"}]}}}},"pascalName":"Layout","camelName":"layout","readableName":"Layout"},{"namespace":"local","id":"markdown","definition":{"id":"markdown","name":"Markdown","description":"Render markdown beautifully","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique ID for view caching."},"source":{"type":"text","label":"Source","isRequired":true,"hint":"Markdown text to be rendered"}}},"pascalName":"Markdown","camelName":"markdown","readableName":"Markdown"},{"namespace":"local","id":"sprucebotAvatar","definition":{"id":"sprucebotAvatar","name":"SprucebotAvatar","description":"Make it great!","fields":{"id":{"type":"id","label":"Id","isRequired":true},"stateOfMind":{"type":"select","label":"Second Field","isRequired":true,"hint":"A hint","options":{"choices":[{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}]}},"size":{"type":"select","label":"Size","isRequired":true,"options":{"choices":[{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}]}}}},"pascalName":"SprucebotAvatar","camelName":"sprucebotAvatar","readableName":"SprucebotAvatar"},{"namespace":"local","id":"sprucebotTypedMessageSentence","definition":{"id":"sprucebotTypedMessageSentence","name":"Sprucebot Typed sentence","fields":{"avatar":{"type":"schema","hint":"A way to override the Sprucebot avatar for this sentence","options":{"schemaIds":["sprucebotAvatar"]}},"words":{"type":"text","label":"Words","hint":"The words being typed out"},"endDelay":{"type":"duration","label":"End delay","hint":"How long should I hold on this sentence after it's typed?"}}},"pascalName":"SprucebotTypedMessageSentence","camelName":"sprucebotTypedMessageSentence","readableName":"Sprucebot Typed sentence"},{"namespace":"local","id":"sprucebotTypedMessage","definition":{"id":"sprucebotTypedMessage","name":"Sprucebot typed message","description":"","fields":{"id":{"type":"id","label":"Id","isRequired":true},"sentences":{"type":"schema","label":"Sentences","isRequired":true,"isArray":true,"hint":"Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)","options":{"schemaIds":["sprucebotTypedMessageSentence"]}},"defaultAvatar":{"type":"schema","label":"Default avatar","hint":"How should Sprucebot be rendered by default","options":{"schemaIds":["sprucebotAvatar"]}},"startDelay":{"type":"duration","label":"Start delay","hint":"How long should I wait before starting to type?"},"loop":{"type":"boolean","label":"Loop"},"size":{"type":"select","label":"Size","options":{"choices":[{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}]}},"paused":{"type":"boolean","label":"Paused"}}},"pascalName":"SprucebotTypedMessage","camelName":"sprucebotTypedMessage","readableName":"Sprucebot typed message"},{"namespace":"local","id":"Text","definition":{"id":"Text","name":"Text","description":"Basic text to be rendered","fields":{"id":{"type":"text","label":"Id","isRequired":true,"hint":"Unique id for UI caching"},"text":{"type":"text","label":"Text","hint":"the text to render"}}},"pascalName":"Text","camelName":"text","readableName":"Text"},{"namespace":"local","id":"Toast","definition":{"id":"Toast","name":"Toast","description":"Call out information so it's impossible to miss!","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique id for UI caching"},"headline":{"type":"text","label":"Headline","isRequired":true,"hint":"Headline text"},"text":{"type":"text","label":"Text","hint":"Optional; Text after the headline"},"canRemove":{"type":"boolean","label":"Can remove","hint":"Optional; controls whether the toast can be removed. Defaults to true"},"removeAction":{"label":"Remove action","hint":"Action to be invoked when hitting the dismiss button"},"kind":{"type":"text","label":"Kind","hint":"Sets the variation of toast"},"followupText":{"type":"text","label":"Followup text","hint":"Text for the followup action"},"followupAction":{"label":"Followup action","hint":"Action to be invoked when hitting the followup CTA"}}},"pascalName":"Toast","camelName":"toast","readableName":"Toast"},{"namespace":"local","id":"listHeader","definition":{"id":"listHeader","name":"List header","description":"The header of a list","fields":{"title":{"type":"text","label":"Title","isRequired":true,"hint":"Title to render in the header"},"subtitle":{"type":"text","label":"Subtitle","hint":"Optional subtitle text"},"isSmall":{"type":"boolean","label":"Is small","hint":"Set true for small lists"},"buttons":{"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"hint":"Buttons to associate with the list header","options":{"schemaIds":["button"]}}}},"pascalName":"ListHeader","camelName":"listHeader","readableName":"List header"},{"namespace":"local","id":"Radio","definition":{"id":"Radio","name":"Radio","description":"A radio control. Give a bunch the same name to keep them as part of the same group","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique identifier"},"name":{"type":"text","label":"Name","hint":"A name attached to this radio button"},"label":{"type":"text","label":"Label","hint":"Label and text for the radio"},"postText":{"type":"text","label":"Post text","hint":"Optional text to show after the label"},"isDisabled":{"type":"boolean","label":"Is disabled","hint":"is this control disabled?"},"isChecked":{"type":"boolean","label":"Is checked","hint":"Is this control checked?"},"onClick":{"label":"Action","hint":"Optional action to invoke when tapped"}}},"pascalName":"Radio","camelName":"radio","readableName":"Radio"},{"namespace":"local","id":"list","definition":{"id":"list","name":"List","description":"A list of information or inputs","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique id for UI caching"},"header":{"type":"schema","label":"Header","hint":"List Header","options":{"schemaIds":["listHeader"]}},"items":{"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"List items","options":{"schemasIds":["listItem","expandableListItem"],"schemaIds":[]}},"isSmall":{"type":"boolean","label":"Is small","hint":"Set true to make the list smaller"},"areSeparatorsVisible":{"type":"boolean","label":"Are separators visible","hint":"Set to true to show separators between list items"},"className":{"type":"text","label":"Class name","isPrivate":true},"children":{"isPrivate":true},"isLoading":{"type":"boolean","label":"Is loading","hint":"Show loading"},"selectable":{"type":"schema","label":"Selectable","hint":"Optional: set whether to use checkbox or radio for selectable list items","options":{"schemaIds":["checkbox","Radio"]}}}},"pascalName":"List","camelName":"list","readableName":"List"},{"namespace":"local","id":"splitButton","definition":{"id":"splitButton","name":"Split button","description":"A button with a dropdown of actions on the right","fields":{"id":{"type":"id","label":"Id","isRequired":true},"defaultButton":{"type":"schema","label":"Default action","isRequired":true,"hint":"The main action readily surfaced to the user","options":{"schemaIds":["button"]}},"buttons":{"type":"schema","label":"Actions","isArray":true,"hint":"All the secondary nested buttons","options":{"schemaIds":["button"]}},"kind":{"type":"select","label":"Kind","hint":"Sets the visual hierarchy of the button","options":{"choices":[{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}]}},"isFullWidth":{"type":"boolean","label":"Is full width","hint":"Set true to fill the parent's width"},"isSmall":{"type":"boolean","label":"Is small","hint":"Sets the visual hierarchy of the button"}}},"pascalName":"SplitButton","camelName":"splitButton","readableName":"Split button"},{"namespace":"local","id":"CardHeader","definition":{"id":"CardHeader","name":"CardHeader","description":"Header of a card","fields":{"title":{"type":"text","label":"Title","hint":"Title for the card"},"labelText":{"type":"text","label":"Label text","hint":"Optional label to show above title"},"labelIcon":{"type":"schema","label":"Label icon","hint":"Optional icon to show above the title and before the label","options":{"schemaIds":["Icon"]}},"buttons":{"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"hint":"Render buttons in the Card Header","options":{"schemaIds":["button"]}},"contextMenu":{"type":"schema","label":"Context menu","hint":"Renders a Context Menu in the Card Header","options":{"schemaIds":["ContextMenu"]}}}},"pascalName":"CardHeader","camelName":"cardHeader","readableName":"CardHeader"},{"namespace":"local","id":"OnboardingCardStep","definition":{"id":"OnboardingCardStep","name":"OnboardingCardStep","description":"Header of a card","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique identifier"},"tabTitle":{"type":"text","label":"Tab title","isRequired":true,"hint":"Title that shows in the tab"},"tabIcon":{"type":"schema","label":"Tab icon","hint":"Icon for the tab","options":{"schemaIds":["Icon"]}},"panelTitle":{"type":"text","label":"Panel title","isRequired":true,"hint":"Title that shows in the panel"},"panelCopy":{"type":"text","label":"Panel copy","isRequired":true,"hint":"Copy describing the step in the card's body"},"panelCTA":{"type":"schema","label":"Panel c t a","hint":"Primary CTA of this step","options":{"schemaIds":["Button"]}},"isComplete":{"type":"boolean","label":"Is complete","hint":"Is this step complete?"}}},"pascalName":"OnboardingCardStep","camelName":"onboardingCardStep","readableName":"OnboardingCardStep"},{"namespace":"local","id":"OnboardingCard","definition":{"id":"OnboardingCard","name":"OnboardingCard","description":"Header of a card","fields":{"title":{"type":"text","label":"Title","hint":"Title of the entire card"},"steps":{"type":"schema","label":"Steps","isRequired":true,"isArray":true,"hint":"Steps for onboarding","options":{"schemaIds":["onboardingCardStep"]}}}},"pascalName":"OnboardingCard","camelName":"onboardingCard","readableName":"OnboardingCard"},{"namespace":"local","id":"ScoreCardPanel","definition":{"id":"ScoreCardPanel","name":"ScoreCardPanel","description":"Header of a card","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique id for React loops"},"label":{"type":"text","label":"Label","hint":"The label for this score, e.g. Today's Sales"},"value":{"type":"text","label":"Value","hint":"The score, e.g. $234.30"}}},"pascalName":"ScoreCardPanel","camelName":"scoreCardPanel","readableName":"ScoreCardPanel"},{"namespace":"local","id":"ScoreCard","definition":{"id":"ScoreCard","name":"ScoreCard","description":"Header of a card","fields":{"scores":{"type":"schema","label":"Scores","isRequired":true,"isArray":true,"options":{"schemaIds":["ScoreCardPanel"]}}}},"pascalName":"ScoreCard","camelName":"scoreCard","readableName":"ScoreCard"},{"namespace":"local","id":"cardBody","definition":{"id":"cardBody","name":"Card body","description":"The builder of Cards, a fundamental visualization concept pervasive in the Heartwood design system.","fields":{"items":{"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"Children to show in the Card","options":{"schemaIds":["button","image","heading","text","scoreCard","toast","list"]}},"isSectioned":{"type":"boolean","label":"Is sectioned","hint":"Whether to wrap children in CardSection"},"areSectionSeparatorsVisible":{"type":"boolean","label":"Are section separators visible","hint":"Set true to display line separators between CardSection components"},"hasTopPadding":{"type":"boolean","label":"Has top padding","hint":"Does card include top padding"},"hasBottomPadding":{"type":"boolean","label":"Has bottom padding","hint":"Does card include bottom padding"},"isFullBleed":{"type":"boolean","label":"Is full bleed","hint":"Set to true to remove horizontal padding"}}},"pascalName":"CardBody","camelName":"cardBody","readableName":"Card body"},{"namespace":"local","id":"buttonGroup","definition":{"id":"buttonGroup","name":"Button group","description":"A group of buttons presented in a few cool ways (see kind)","fields":{"buttons":{"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"options":{"schemaIds":["button"]}},"kind":{"type":"select","label":"Kind","hint":"Visual appearance of the group.","options":{"choices":[{"label":"Default","value":"default"},{"label":"Segmented","value":"segmented"},{"label":"Floating","value":"floating"}]}},"isFullWidth":{"type":"boolean","label":"Is full width","hint":"Set true to fill parent width"},"highlightedIndex":{"type":"number","label":"Highlighted index","hint":"Index of the button that is currently highlighted, e.g. by arrow keys"},"onClick":{"isPrivate":true}}},"pascalName":"ButtonGroup","camelName":"buttonGroup","readableName":"Button group"},{"namespace":"local","id":"cardFooter","definition":{"id":"cardFooter","name":"cardFooter","description":"Header of a card","fields":{"buttonGroup":{"type":"schema","label":"Button group","hint":"Render buttons in the Card Footer","options":{"schemaIds":["buttonGroup"]}},"helper":{"type":"text","label":"Helper","hint":"Helper for the footer"}}},"pascalName":"CardFooter","camelName":"cardFooter","readableName":"cardFooter"},{"namespace":"local","id":"cardBuilder","definition":{"id":"cardBuilder","name":"CardBuilder","description":"Build a card to show something to the user","fields":{"id":{"type":"id","label":"Id","isRequired":true},"header":{"type":"schema","label":"Header","hint":"Card Header props","options":{"schemaIds":["cardHeader"]}},"headerImage":{"type":"schema","label":"Header image","hint":"optionally pass props to an image tag to be rendered in the header","options":{"schemaIds":["image"]}},"onboarding":{"type":"schema","label":"Onboarding","hint":"all onboarding props","options":{"schemaIds":["OnboardingCard"]}},"body":{"type":"schema","label":"Body","hint":"Card Body props","options":{"schemaIds":["cardBody"]}},"footer":{"type":"schema","label":"Footer","hint":"The footer of the card","options":{"schemaIds":["cardFooter"]}}}},"pascalName":"CardBuilder","camelName":"cardBuilder","readableName":"CardBuilder"},{"namespace":"local","id":"uIEnhancementSection","definition":{"id":"uIEnhancementSection","name":"User interface enhancement section","description":"Some front end components emit uiEnhancement events to allow skills to enhance them during presentation.","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"The ID of the section that is acting as a placeholder for ui enhancements"},"calendarEventDetailItems":{"type":"schema","label":"Calendar event details items","isRequired":true,"isArray":true,"hint":"Calendar items to add as enhancements","options":{"schemaIds":["list","button","splitButton","cardBuilder","toast","text","markdown"]}},"cardBuilderBodyItems":{"type":"schema","label":"Card builder body items","isRequired":true,"isArray":true,"hint":"Card builder items to add as enhancements","options":{"schemaIds":[]}},"contextMenuItems":{"type":"schema","label":"Context menu items","isRequired":true,"isArray":true,"hint":"Context menu items to add as enhancements","options":{"schemaIds":["button"]}}}},"pascalName":"UIEnhancementSection","camelName":"uIEnhancementSection","readableName":"User interface enhancement section"},{"namespace":"local","id":"userAvatar","definition":{"id":"userAvatar","name":"User avatar","description":"Avatar tied to a core user","fields":{"user":{"type":"schema","label":"User","isRequired":true,"options":{"schemaIds":["user"]}},"src":{"type":"text","label":"Source","isRequired":true},"alt":{"type":"text","label":"Alternate text","isRequired":true,"hint":"Provides alternative information for an image if a user for some reason cannot view it"},"isLarge":{"type":"boolean","label":"Is large","hint":"True will show large variation of the avatar"},"isVertical":{"type":"boolean","label":"Is large","hint":"Align text and name center"},"showIndicator":{"type":"boolean","label":"Show online indicator","hint":"Should I should the status indicator"},"status":{"type":"select","label":"Status","options":{"choices":[{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}]}},"name":{"type":"text","label":"Name"},"text":{"type":"text","label":"Text","hint":"Additional text to show below the name"},"className":{"type":"text","label":"Class name","isPrivate":true,"hint":"Set the \"class\" attribute"},"width":{"type":"number","label":"Width"},"height":{"type":"number","label":"Height"}}},"pascalName":"UserAvatar","camelName":"userAvatar","readableName":"User avatar"},{"namespace":"local","id":"calendarEventBlock","definition":{"id":"calendarEventBlock","name":"Calendar event block","description":"A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks.","fields":{"id":{"type":"id","label":"Id","hint":"An optional identifier for this block"},"title":{"type":"text","label":"Title","hint":"Any title rendered on the event"},"subtitle":{"type":"text","label":"Subtitle","hint":"Displayed right under the title"},"durationSec":{"type":"duration","label":"Duration sec","isRequired":true,"hint":"How long this block is for, in seconds"},"leftIcons":{"type":"schema","label":"Left icons","isRequired":true,"isArray":true,"hint":"All the icons show on the left of the calendar event","options":{"schemaIds":["icon"]}},"rightIcons":{"type":"schema","label":"Right icons","isRequired":true,"isArray":true,"hint":"All the icons shown on the right of the calendar event","options":{"schemaIds":["icon"]}},"isBusy":{"type":"boolean","label":"Is busy","hint":"Is the person associated to this event busy during this time (to keep from double booking)?"}}},"pascalName":"CalendarEventBlock","camelName":"calendarEventBlock","readableName":"Calendar event block"},{"namespace":"local","id":"calendarEventDetails","definition":{"id":"calendarEventDetails","name":"Calendar event details","description":"All the details attached to an event. Shown on click of the event.","fields":{"id":{"type":"text","label":"Id","hint":"An optional ID for this item; used to allow association with UI Enhancements"},"items":{"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"The items that make up the event details","options":{"schemaIds":["list","button","splitButton","cardBuilder","toast","text","markdown"]}}}},"pascalName":"CalendarEventDetails","camelName":"calendarEventDetails","readableName":"Calendar event details"},{"namespace":"local","id":"CalendarEvent","definition":{"id":"CalendarEvent","name":"CalendarEvent","description":"How an event will be rendered in the calendar. Each time represents a standard state of an event.","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Id of the calendar event"},"startAt":{"type":"dateTime","label":"Starts at","isRequired":true},"collection":{"type":"text","label":"Collection","hint":"A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar"},"isResizable":{"type":"boolean","label":"Is resizable","hint":"Can this event be resized on the calendar?"},"kind":{"type":"select","label":"Kind","hint":"The kind on an event impacts it's visual representation","options":{"choices":[{"label":"How a calendar event renders by default.","value":"default"},{"label":"If an event is not confirmed.","value":"tentative"},{"label":"When an event is happening right now","value":"active"},{"label":"If the event represents a time when the person is not available for additional events (usually matches isBusy)","value":"unavailable"},{"label":"If the event represents a time where the user us unavailable (break or block)","value":"blocked"},{"label":"The event is ready to go, everyone has confirmed, it just hasn't happened yet","value":"upcoming"},{"label":"If the event is in the past","value":"past"},{"label":"The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)","value":"warn"},{"label":"Renders the event in red (the event could have already started but attendees have not confirmed)","value":"critical"}]}},"blocks":{"type":"schema","label":"Blocks","isRequired":true,"isArray":true,"hint":"A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.","options":{"schemaIds":["calendarEventBlock"]}},"details":{"type":"schema","label":"Details","hint":"Additional details shown after someone taps on an event","options":{"schemaIds":["calendarEventDetails"]}},"userId":{"type":"id","label":"User id","isRequired":true,"hint":"The ID of the user this event will render under"},"isDraft":{"type":"boolean","label":"Is draft","hint":"If this is a draft event (meaning it's not booked, but being setup)"},"hasBorder":{"type":"boolean","label":"Has border","hint":"Should I render a border for this event?"}}},"pascalName":"CalendarEvent","camelName":"calendarEvent","readableName":"CalendarEvent"},{"namespace":"local","id":"card","definition":{"id":"card","name":"Card","description":"I universal way to hold visual information, use card builder to create cards","fields":{"children":{"isPrivate":true},"isCentered":{"type":"boolean","label":"Centered","hint":"Is all content centered?","default":false},"isCritical":{"type":"boolean","label":"Critical","hint":"Call attention to this card by making it standout!"},"isSmall":{"type":"boolean","label":"Small","hint":"A small variation of a card"},"className":{"type":"text","label":"Class name","isPrivate":true},"isExpandable":{"type":"boolean","label":"Expandable","hint":"Allows this card to collapse at the header","default":false},"defaultExpanded":{"type":"boolean","label":"Expanded by default","hint":"Should this thing start expanded","default":true},"header":{"type":"schema","label":"Header","options":{"schemaIds":["CardHeader"]}}}},"pascalName":"Card","camelName":"card","readableName":"Card"},{"namespace":"local","id":"Toggle","definition":{"id":"Toggle","name":"Toggle","description":"A great way to render a on/off style question or control","fields":{"id":{"type":"id","label":"Id","isRequired":true,"hint":"Unique id for UI caching"},"postText":{"type":"text","label":"Post text","hint":"Text after the toggle"},"onClick":{"label":"On click","hint":"Optional on click to invoke when tapped"}}},"pascalName":"Toggle","camelName":"toggle","readableName":"Toggle"},{"namespace":"local","id":"listItemWarning","definition":{"id":"listItemWarning","name":"List item warning","description":"A warning message that can go on a list item","fields":{"title":{"type":"boolean","label":"Title"},"subtitle":{"type":"boolean","label":"Subtitle"},"note":{"type":"boolean","label":"Note"}}},"pascalName":"ListItemWarning","camelName":"listItemWarning","readableName":"List item warning"},{"namespace":"local","id":"listItem","definition":{"id":"listItem","name":"List item","description":"A list is comprised of list items (or expandable list items). This is that list item.","fields":{"id":{"type":"id","label":"Id","isRequired":true},"title":{"type":"text","label":"Title","isRequired":true,"hint":"Title text"},"subtitle":{"type":"text","label":"Subtitle","hint":"Optional subtitle text"},"note":{"type":"text","label":"Note","hint":"Optional note text"},"isExpandable":{"type":"boolean","label":"Is expandable","hint":"Can render this item as expandable"},"avatar":{"type":"schema","label":"Avatar","options":{"schemaIds":["avatar"]}},"image":{"type":"text","label":"Image","hint":"URL to show an image"},"icon":{"type":"schema","label":"Icon","hint":"Inline svg icon","options":{"schemaIds":["Icon"]}},"isIconHidden":{"type":"boolean","label":"Is icon hidden","hint":"Optional; visually hides the icon without removing it"},"isLeftIndented":{"type":"boolean","label":"Is left indented","hint":"Set true to add left spacing. useful in aligning with other list items that have icons or images"},"isDraggable":{"type":"boolean","label":"Is draggable","hint":"Set true when the list can be reordered"},"isDisabled":{"type":"boolean","label":"Is disabled","hint":"Set true when the list can be reordered"},"toggle":{"type":"schema","label":"Toggle props","hint":"Props passed to the toggle if toggleId is set","options":{"schemaIds":["Toggle"]}},"primaryButton":{"type":"schema","label":"Primary button","hint":"A primary button that turns the entire list item into a clickable button","options":{"schemaIds":["button"]}},"buttons":{"type":"schema","label":"Buttons","isArray":true,"hint":"Actions associated with the list item","options":{"schemaIds":["button"]}},"contextMenu":{"type":"schema","label":"Context menu","hint":"Context Menu associated with the list it","options":{"schemaIds":["ContextMenu"]}},"isSeparatorVisible":{"type":"boolean","label":"Is separator visible","hint":"Set to true to show separator for this list item if followed by another list item."},"className":{"type":"text","label":"Class name","isPrivate":true,"hint":"Optional class name for list item"},"selectable":{"type":"schema","label":"Selectable element","hint":"Any props you want sent down to the selectable component being rendered","options":{"schemaIds":["Radio","checkbox"]}},"warnings":{"type":"schema","label":"Warnings","hint":"Highlight title, subtitle, note with warning colors","options":{"schemaIds":["listItemWarning"]}},"list":{"type":"schema","label":"List","hint":"Optional; adds a nested list","options":{"schemaIds":["list"]}},"lists":{"type":"schema","label":"Lists","isRequired":true,"isArray":true,"hint":"Optional; adds multiple lists nested at the same level","options":{"schemaIds":["list"]}}}},"pascalName":"ListItem","camelName":"listItem","readableName":"List item"},{"namespace":"local","id":"expandableListItem","definition":{"id":"expandableListItem","name":"Expandable list item","fields":{"item":{"type":"schema","label":"List item","isRequired":true,"options":{"schemaIds":["listItem"]}},"collapsedIcon":{"type":"schema","label":"Collapsed icon","options":{"schemaIds":["Icon"]}},"expandedIcon":{"type":"schema","label":"Expanded icon","options":{"schemaIds":["Icon"]}},"onClick":{}}},"pascalName":"ExpandableListItem","camelName":"expandableListItem","readableName":"Expandable list item"}]
			const language = 'ts'
			const globalNamespace = 'SpruceSchemas'

			export const valueTypes = {}

			let definition
			let renderAs
			let importAs

		

							// Value type for TextField
							definition = {"label":"60x60","type":"text","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['c58b613248f94c5c54cd9b093828be6e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"60x60","type":"text","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['81b84290b86bbb48d0215670385c14a7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"60x60","type":"text","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e99e0a0a23097053ca9c961eea05f49c'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"150x150","type":"text","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e044008403c8d60764c9c28d69d5d1f1'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"150x150","type":"text","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['60f457e42d8a21170a179f2114ef77a1'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"150x150","type":"text","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['79316d76893ee4854166897e43c153a4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","type":"id","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['60102dd62835a7cd94bdb3fede8ef2a3'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","type":"id","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['94459b6842e65f51a383106816a71ae7'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","type":"id","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a782e1bcfcf9ba1ee0b31e41625277ec'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"First name","type":"text","isRequired":false}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5d441743e22a479bd145072abc8d7c98'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"First name","type":"text","isRequired":false}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['29f20cd357954404cbecd210a73c9cc5'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"First name","type":"text","isRequired":false}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['33adcc82185c21f34f5c076760298311'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Last name","type":"text","isRequired":false}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['695b339c26225dbe3c76352845862455'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Last name","type":"text","isRequired":false}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f2739d49e00c48956e317af79b5c402d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Last name","type":"text","isRequired":false}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['812422d280b1f9be172d35e93b09337b'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Casual name","type":"text","hint":"Generated name that defaults to Friend!","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['6d4fa23b702568936feb1688ca05a5b4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Casual name","type":"text","hint":"Generated name that defaults to Friend!","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['6d872af43c178d29284c95e56e39f17b'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Casual name","type":"text","hint":"Generated name that defaults to Friend!","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['6b51263b7efb2e416b66b8370d0755e3'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for PhoneField
							definition = {"label":"Phone","type":"phone","hint":"The person's phone number!"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2fb9d6406aa010aafa7e8fcb5ecb9f1c'] = SpruceSchema.PhoneField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for PhoneField
							definition = {"label":"Phone","type":"phone","hint":"The person's phone number!"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['0f0875329a023aebcae8e4fc89416a51'] = SpruceSchema.PhoneField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for PhoneField
							definition = {"label":"Phone","type":"phone","hint":"The person's phone number!"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['166d331074747ac499feb9379d1a4a37'] = SpruceSchema.PhoneField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Profile photos","type":"schema","options":{"schemaIds":["profileImage"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['3da6ef37dab56c213cf54663169fc153'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Profile photos","type":"schema","options":{"schemaIds":["profileImage"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['6396133a0300ff552ff16966e5ce3538'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Profile photos","type":"schema","options":{"schemaIds":["profileImage"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['b5dc214b937d9dcc8878b44633b2ca40'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Default profile photos","type":"schema","isRequired":true,"options":{"schemaIds":["profileImage"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b33a303192e2e1001534d0ff891f18ab'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Default profile photos","type":"schema","isRequired":true,"options":{"schemaIds":["profileImage"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['cda2485eb4a58321cc3b676db87a88ea'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Default profile photos","type":"schema","isRequired":true,"options":{"schemaIds":["profileImage"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['ce71b5b415f69e2d359ce1e39a11a698'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","isPrivate":true,"type":"id","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e8714ba8c67794d4acf99ac8a25bb853'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","isPrivate":true,"type":"id","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['175b5f5708d59707c82bfd1222e37b2a'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","isPrivate":true,"type":"id","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['5db0b8b0ce74b992c3617fa2164964fc'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Name","type":"text","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d3606f98db2e50570664ad4c6460aedd'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Name","type":"text","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['e7148c7a1daa5422ef1359fa6acc587c'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Name","type":"text","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['69cc58cd5aa20d58216516f7870586f9'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Description","type":"text","isRequired":false}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['656311613426480f12164d5611ab2e26'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Description","type":"text","isRequired":false}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['86a5486b49abcfbd538a07aaafb58bad'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Description","type":"text","isRequired":false}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['57f67c05178ea82f49bcb46b1ffdde84'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Slug","type":"text","isRequired":false}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['6482313a9b9fd8ad3d4b218e0cd5bf51'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Slug","type":"text","isRequired":false}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b98dcc5fd7b233bea6478252094d5525'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Slug","type":"text","isRequired":false}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['4456213a48a976a3cb7d8893ca4967c8'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Icon","type":"text","isRequired":false}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5836743fd90cd2f3c795a1442636615c'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Icon","type":"text","isRequired":false}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['4b51c4a1ca10d54a34cc2a33d63878a3'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Icon","type":"text","isRequired":false}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['5c4a86c4dc29b59f3f1af1b7b7693d78'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","type":"id"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['a33888096aadb4dcdf818fa4beda9ee9'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","type":"id"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['63be39ddd9d7ec1320bd0505ab950a9b'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"label":"Id","type":"id"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['176bcdd946c0029fe8f297dac87e61a6'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Store number","type":"text","hint":"You can use other symbols, like # or dashes. #123 or 32-US-5"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['58bded7d14da082b03eee8d386aecafe'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Store number","type":"text","hint":"You can use other symbols, like # or dashes. #123 or 32-US-5"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['51500d4c936efa28f3901f1e7bd3d927'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Store number","type":"text","hint":"You can use other symbols, like # or dashes. #123 or 32-US-5"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['75c76cbfc589bc85ed1757b44297fb59'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"label":"Public","type":"boolean","hint":"Is this location viewable by guests?","defaultValue":false}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['05c19d6fb050de316c20206da0790dd0'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"label":"Public","type":"boolean","hint":"Is this location viewable by guests?","defaultValue":false}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['616f223aa741dcfc1ffacc5939efc256'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"label":"Public","type":"boolean","hint":"Is this location viewable by guests?","defaultValue":false}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['482f4125d2c88a35a2cd553d645627d6'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for PhoneField
							definition = {"label":"Main Phone","type":"phone"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['f5ad192805cb0a76c4a7edbb2a071364'] = SpruceSchema.PhoneField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for PhoneField
							definition = {"label":"Main Phone","type":"phone"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d2eb03f0d70160b619890faad2a14424'] = SpruceSchema.PhoneField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for PhoneField
							definition = {"label":"Main Phone","type":"phone"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['ed88ca9287e572e92d3a937ea4d7fbf0'] = SpruceSchema.PhoneField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Timezone","type":"select","options":{"choices":[{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['693d963313cf46b3c3eb642188336c61'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Timezone","type":"select","options":{"choices":[{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['6b036b542c6a5fbea0fa86b828a08960'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Timezone","type":"select","options":{"choices":[{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a45698bf19899ee03d88cf7271c76de2'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for AddressField
							definition = {"label":"Address","type":"address","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['49fd2f6e1a34dfc0ed75c3bb36b92702'] = SpruceSchema.AddressField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for AddressField
							definition = {"label":"Address","type":"address","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['faff16111d07eb0a803b80c8a075fdf3'] = SpruceSchema.AddressField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for AddressField
							definition = {"label":"Address","type":"address","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['2180484b330e5ca65dee122add98048e'] = SpruceSchema.AddressField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Is default","hint":"Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest).","type":"text","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2eb705427cc7842481c35b3b2ee4cd67'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Is default","hint":"Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest).","type":"text","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['64775c25cc9e4b037123e6256247c69b'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Is default","hint":"Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest).","type":"text","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e2b7629143298882d1624a46a5153957'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Role","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0a267731738581c46ba187bbbbe5da04'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Role","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['35c32efb30342e942adc834e7f8b6fc4'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Role","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['12671d127a37c1910da8cab2fe68c5a7'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"On work permissions","type":"schema","options":{"schemaIds":["acl"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0eb35e70b9d12bee0bea08634121a50d'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"On work permissions","type":"schema","options":{"schemaIds":["acl"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['2549a4ef32a98587078925f06a02a957'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"On work permissions","type":"schema","options":{"schemaIds":["acl"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a9e5ca8af8e740d9babb92b1c212c0e9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Off work permissions","type":"schema","options":{"schemaIds":["acl"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['31ada5da5e2224e286ea5ab845ad51ae'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Off work permissions","type":"schema","options":{"schemaIds":["acl"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['c3aeb3bf42d7f8b3ea75f80c829b6765'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Off work permissions","type":"schema","options":{"schemaIds":["acl"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['11155c6da2170e6bada83f9d01a966dd'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Name","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['678267c5ceeee33ccff5c23272cfe37a'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Name","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['7e7e6461e2ba7697f90979f9d9524dd4'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"label":"Name","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a70b49b34125e628fb3bde9aa9c03137'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Status","type":"text"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['093398f7cba37b08d8642631c7b4c99a'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Status","type":"text"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['2ed255111cf318bdc37558352cfff968'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"label":"Status","type":"text"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e60dbd3e4f8836147d72ce7ed66a6832'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"label":"Total visits","type":"number","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['9392eb70287f11f0a24665716570cda0'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"label":"Total visits","type":"number","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['539ddd3c8bdc3403c9f6b1bfd3a8ba15'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"label":"Total visits","type":"number","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['50ba28253103969c9938107444fe7e46'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DateTimeField
							definition = {"label":"Last visit","type":"dateTime"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['55f2a1770f02eb1f4793f77b4dd9243f'] = SpruceSchema.DateTimeField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DateTimeField
							definition = {"label":"Last visit","type":"dateTime"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a4168326eba0ab071973520f430fdb6b'] = SpruceSchema.DateTimeField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DateTimeField
							definition = {"label":"Last visit","type":"dateTime"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a344baadca62616281f710b01376c117'] = SpruceSchema.DateTimeField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Job","type":"schema","isRequired":true,"options":{"schemaIds":["job"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0915a22cbf1c86fdbc34ccff76acff9a'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Job","type":"schema","isRequired":true,"options":{"schemaIds":["job"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['af7824f6d2a10e1b12c83f444d310061'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Job","type":"schema","isRequired":true,"options":{"schemaIds":["job"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['8c595574518b80f568f1b96a82916b64'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Location","type":"schema","isRequired":true,"options":{"schemaIds":["location"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['bc459826953c3e3667e6c2f0fbd68950'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Location","type":"schema","isRequired":true,"options":{"schemaIds":["location"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['501101b7bc701dbdf0daffdcffc496d6'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"Location","type":"schema","isRequired":true,"options":{"schemaIds":["location"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['d053c191a60dce09ac756a88eedcc31e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"User","type":"schema","isRequired":true,"options":{"schemaIds":["user"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['bb41235478925a13c3ff64907c737404'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"User","type":"schema","isRequired":true,"options":{"schemaIds":["user"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['1c5ac9c14b16925a29c6ea10e65353ab'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"label":"User","type":"schema","isRequired":true,"options":{"schemaIds":["user"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['6964758e50c583e0f127e59d56bb397a'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Source","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e3e4611f9d94b2ce35f2f5303c26cc02'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Source","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['36b318708f7e1d9b43e0b6dcae0251ef'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Source","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['4437647b912fdb499d37d822f60c5293'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Alternate text","isRequired":true,"hint":"Provides alternative information for an image if a user for some reason cannot view it"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d01b873838fd48d75801b7499eb498ed'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Alternate text","isRequired":true,"hint":"Provides alternative information for an image if a user for some reason cannot view it"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f3e53e5c42dfd094525c9f8f9c6bbbda'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Alternate text","isRequired":true,"hint":"Provides alternative information for an image if a user for some reason cannot view it"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['454d0386e6e1bd909f54cd4a0837c6d7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is large","hint":"True will show large variation of the avatar"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5a8831a48d2d16665adda02bd46dfa5a'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is large","hint":"True will show large variation of the avatar"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d7cf4ae22991db622eb3d37615d840d6'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is large","hint":"True will show large variation of the avatar"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e6ad919153cbb91af271a969893d0145'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is large","hint":"Align text and name center"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['4a18a8b4da2b918e537da76cd6baf461'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is large","hint":"Align text and name center"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['fd066b7276600c3e73fdcdadf956b55c'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is large","hint":"Align text and name center"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['1a588ba75cf6a8a024132a5e3ae2770b'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Show online indicator","hint":"Should I should the status indicator"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['1818f7acdf3b013f164ae8a0b51860f4'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Show online indicator","hint":"Should I should the status indicator"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['544cf8c5322159dfe51568f3a7838cfc'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Show online indicator","hint":"Should I should the status indicator"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['dcd294a8d28ebcf8b3ddeeb32e36e270'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Status","options":{"choices":[{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d6adafd0ba87877e0706b02d093f8ee5'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Status","options":{"choices":[{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['47ef0d2e2cda0f64e4f99bddf9ce20ce'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Status","options":{"choices":[{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['3bac32842bffca096285f2bfca179f2d'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0d0b99ed85e486cd4a7b7cd7290784e8'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['2dd99208ba3bed24aae79769f067da55'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['774fbf2871559850fb1c605a56ea9b65'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Additional text to show below the name"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['59a7e4c0d9bbf591e2543f5648c918e8'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Additional text to show below the name"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['2d8225637955dafaf3876864e77e06c4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Additional text to show below the name"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['08a8b0de1674c348ea23b1d89a6cd873'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true,"hint":"Set the \"class\" attribute"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0f80982a7f3a93ce6b45c8fbd259c163'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true,"hint":"Set the \"class\" attribute"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['faa4a1932dcc5d986a7f72ef0af25f87'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true,"hint":"Set the \"class\" attribute"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['0ed1dde7b7a1d809a98de8aee77fd5b7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Width"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0349575917ac23d6ed27f19ec080e301'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Width"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['97bab1d917ea854ae1beb9ab3e06622e'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Width"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['d7ffb6424f9152694e25a057b1fcfab0'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Height"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['812e18bb4c1f9394b29dbff99cfcc699'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Height"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['e2a05c9b8a99ab7d01f6379e81b855a9'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Height"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['01e6034a1451ebf6f5c6303f1ac6afd8'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique identifier"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e28bb2eec29ca082a0e83bfd3c239272'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique identifier"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['274988ca4dd8d6342ee19dbd8c597cfc'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique identifier"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['2f7acd513ccc9293f6338b53e3a517c4'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"A name attached to this checkbox"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['10402c8865f97193985ec47e4223540d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"A name attached to this checkbox"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['87bd564a23787d4482e54b3c2ddf4f03'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"A name attached to this checkbox"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['c0537780bab1d5336217a49311c4967d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"Input label and text after checkbox icon"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b7348c06e4a90a689ecefb638da34667'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"Input label and text after checkbox icon"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f5761f9b0721d81d9095981fb810dac2'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"Input label and text after checkbox icon"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e3ed88f5cc8e864e266c12696ee5cf98'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Optional text to show below the label"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2ee3eab1a0c43be1695ece494ba55309'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Optional text to show below the label"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['96dcfa16e06d1f7514a7ec440eb3b9fc'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Optional text to show below the label"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['d1e5017b606a1903f45bba69b2fef868'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"is this checkbox disabled"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0228e14caeacf2fbb00b4f068271f2c4'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"is this checkbox disabled"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['56025fa72cde11e29aaa55312ee34119'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"is this checkbox disabled"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['8826efe739f22c02627c14b20a6fe7ac'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is indeterminate","isRequired":true,"hint":"Set true if the checkbox is indeterminate (the half checked thing you've seen in some places)"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['88a62dde4c44aa80a4281026c41acd76'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is indeterminate","isRequired":true,"hint":"Set true if the checkbox is indeterminate (the half checked thing you've seen in some places)"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['ee47c3f7fc39146873fa0f054e41c712'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is indeterminate","isRequired":true,"hint":"Set true if the checkbox is indeterminate (the half checked thing you've seen in some places)"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['069dbf2dcd4c38dc03505752dcb336a7'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is checked","hint":"is this checkbox checked?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['f5e523c0de3f6fb49683921ce48d23fd'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is checked","hint":"is this checkbox checked?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['7c539b3aed6ec0b29241b7f6b5f55ab9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is checked","hint":"is this checkbox checked?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7f39ee6f85b345309f545289aee7f873'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title of the confirmation dialog"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['63cf1527e24ce6c2bb6fd8d11801ffca'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title of the confirmation dialog"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['271335e89d766fa28bc2ea9151f5f37f'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title of the confirmation dialog"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7a669c4d94ed035c656494ea48fe92e6'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text shown in the dialog"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['a1f102b88735d44cddebb573f25f5601'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text shown in the dialog"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['8013cd96c883d469ae50d2f4e3bd8d3a'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text shown in the dialog"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['8df29d8a3967c216f1928039aa885b6e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id for ui caching"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d87314515466abf71b99c89544b7f517'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id for ui caching"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['12bc104e67c9de761d36cd834997253d'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id for ui caching"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7ec4770a4db4d12c3553555745641c81'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"The name of the icon to render. If not found, this will return null."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e46b467bb0864df78b05cd7f5028b618'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"The name of the icon to render. If not found, this will return null."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['2d5585e8713634fa8b94ea38c9cd5c57'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"The name of the icon to render. If not found, this will return null."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7173cd218ed1ab26d68c87024a58d1d6'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is line icon","hint":"Set true to render an icon with a stroke, but no fill"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['73242c17153a5ebdb1c427c3f7295106'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is line icon","hint":"Set true to render an icon with a stroke, but no fill"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a909c79c7837a9329873e61c32a530a0'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is line icon","hint":"Set true to render an icon with a stroke, but no fill"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['bc8e5598b32a921e4bd3dab1e0607937'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","isPrivate":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2ad6c89a9ce47f7304f514877f63d83e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","isPrivate":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['efebb52a43c5992573daaec6b986c9e4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","isPrivate":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['c19c7771718641346ddcbbf031825593'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique ID for rendering in lists"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['6fb0f76e0672efe9631f105c07fc7b20'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique ID for rendering in lists"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['188bcf79373f0fd7c2daaffc07fe8fd1'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique ID for rendering in lists"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['3a4872c709b9cecf4077610cfd99deba'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Sets the visual appearance of the button. May be primary, secondary, simple, or caution.","options":{"choices":[{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['bcf7fca5de781c50245166332e64f69b'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Sets the visual appearance of the button. May be primary, secondary, simple, or caution.","options":{"choices":[{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['affbbfdca0562dd784cfb355d78a97e3'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Sets the visual appearance of the button. May be primary, secondary, simple, or caution.","options":{"choices":[{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['8a08ef7aea101caeeacea696edd8e168'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the button less tall."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5068d0520e44512ed0e87ece2aa80812'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the button less tall."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['ff49b381da0a5ed3f4576bcf47e8db3d'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the button less tall."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['56a5f470361517936ccabc347d977d66'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to make the button fill its parent's width."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2d14e10f1a1d16607f01f42e95fb5e28'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to make the button fill its parent's width."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b434de61aa3bbc8421b19bf4bcaf2c65'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to make the button fill its parent's width."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['db5529546ac07a34cc4a441f12130aa5'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is loading","hint":"Set true to hide any text or icon in the button and show a loader instead."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['98dd43b58751e930ab787550274c21ca'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is loading","hint":"Set true to hide any text or icon in the button and show a loader instead."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['e65474475397e3a8e525b134ae8b96bc'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is loading","hint":"Set true to hide any text or icon in the button and show a loader instead."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['ffeb169d3e01d0b4f8959286cbaad385'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is icon only","hint":"Set true to hide any text in the button. Text should still be provided for accessibility."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d014f71705a99e3fe24b0b7823d1c3a9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is icon only","hint":"Set true to hide any text in the button. Text should still be provided for accessibility."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b4bf26563f2e7e4f193c8f505056e4ca'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is icon only","hint":"Set true to hide any text in the button. Text should still be provided for accessibility."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['147898405f293e9c863248b673e0fa93'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text for the button."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['511b8afc36286497259f20aee5cc1682'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text for the button."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['c29a525c0402cfbbb34c7da0eb6bf670'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text for the button."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['c94f28d4480f12c9106f85c55a81bdc7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Href","hint":"Will render a link. May be relative or absolute."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['a0f8e86b96551745e56c20b784f5c20e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Href","hint":"Will render a link. May be relative or absolute."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['500e961dffacf598f6563c981fb0960c'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Href","hint":"Will render a link. May be relative or absolute."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['728108c0be811c5bd6f9c3c21007ddc4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Icon for the button.","options":{"schemaIds":["Icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['8fdc9156fa05ca6371c9a5865d4bede2'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Icon for the button.","options":{"schemaIds":["Icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f157a5ce3d362193559f72319c51679c'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Icon for the button.","options":{"schemaIds":["Icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['f3cc72e701a04648638acb199d73c90b'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Type","hint":"Type attribute for HTML button element. Defaults to 'button'.","options":{"choices":[{"label":"Button","value":"button"},{"label":"Submit","value":"submit"},{"label":"Reset","value":"reset"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['c6ac8ffbc348cddd151b773b421688e2'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Type","hint":"Type attribute for HTML button element. Defaults to 'button'.","options":{"choices":[{"label":"Button","value":"button"},{"label":"Submit","value":"submit"},{"label":"Reset","value":"reset"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['ea59e38f4421878be9e31b54ef806889'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Type","hint":"Type attribute for HTML button element. Defaults to 'button'.","options":{"choices":[{"label":"Button","value":"button"},{"label":"Submit","value":"submit"},{"label":"Reset","value":"reset"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['2f36b0ea9d52fcdbfc570035ee53da54'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"Set true to disable the button"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['7b7d3fb6c62c399dcfab5c56664685c1'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"Set true to disable the button"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['019bebaf5f9a666479b478cd0bcc42f3'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"Set true to disable the button"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['ef58b3052457d26178403f75497596cd'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"classname","isPrivate":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['1c6ebf78913e7d030d1aaba3aa6257a2'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"classname","isPrivate":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['4fe78ed8644f0f3c59ffc6f01b97dfaf'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"classname","isPrivate":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a8a27aaf107c37a569cd24c19bd35035'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['07a777e66cc266036a549bae7b1ae211'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['beabc6ee7fa7ae381af0001a1039ae20'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['4d089e028103dc4705ab67f8bbf6d0ab'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","hint":"Set the width of the menu. Helpful for longer text in buttons","options":{"choices":[{"label":"Medium","value":"medium"},{"label":"Large","value":"large"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['412b44bc9d0b734b2e99c351216103d4'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","hint":"Set the width of the menu. Helpful for longer text in buttons","options":{"choices":[{"label":"Medium","value":"medium"},{"label":"Large","value":"large"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['852ae94cc8cb063865aae48444751e29'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","hint":"Set the width of the menu. Helpful for longer text in buttons","options":{"choices":[{"label":"Medium","value":"medium"},{"label":"Large","value":"large"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['de2d142671e45f69d4ba1d61afc53b24'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Adds text to the collapsed menu"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['3842743b3428bd648fa838e222ba3e1d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Adds text to the collapsed menu"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['7a56dcf481378ef71a9558c7c0344e79'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Adds text to the collapsed menu"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['445231fffd9c2d09c224608e0151daf0'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Overrides the default icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['3c810ae9ccb015e2daad2b815b5d4825'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Overrides the default icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['505c75e490402b7462d4a9008e00cb8f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Overrides the default icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e33caddb0cc3eb6f080f3a203e60ed00'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is simple","hint":"Set true to make the button blue"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['86b275e235ad538c6e1bc5b46712a994'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is simple","hint":"Set true to make the button blue"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['55f31fd3b5d24a2792560edcb5af3f7d'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is simple","hint":"Set true to make the button blue"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['1736b0c811914ae8907970cc963c9b4c'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the button smaller"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['10798e9e4e1967b429e068415b3b96bc'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the button smaller"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['7d0a4706545af7c933c87cbd6098da1a'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the button smaller"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e2e3e46cc064b1b0f197786894be6193'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Close on select","hint":"Set to true makes the menu close when any option is selected"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e5309d06b727b05ed165726d747a90d9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Close on select","hint":"Set to true makes the menu close when any option is selected"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a1caa317cc82975b7aedf751df85e186'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Close on select","hint":"Set to true makes the menu close when any option is selected"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['3f4cb9a391f28a9a0ce5cf5f483c773e'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Classname","isPrivate":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['bda2d1ee06d5f3d23c46576e917df038'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Classname","isPrivate":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['22391c31571cd5941153c44707ef10d3'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Classname","isPrivate":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a9bf840420fcb01384d7a72e9b0c8f46'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Heading","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['3604064c8b5fbd30aac4564ef19ae8e7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Heading","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f2adad0510d80d0a7c58b207db44b308'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Heading","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['9ecc91f7e1f324a31026691543c87455'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subheading"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['a7b636860e1d5c5195760b231c1e6460'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subheading"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['4ec433d6e4c22a4e4eb1156cc89822a2'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subheading"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['d5137db0984a49b9a85633ab480771df'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5feb0a43c2bb119aad7d0b9a8e8a7c80'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['3460e1796ff9a359e69669d7e2a3e467'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['c514599b6dc9959261bedf3963554b9a'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Primary button","options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['7bff3d00dfea25fd928254a7c75897d3'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Primary button","options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['1ecae37b67eb9907ef68d60a2fd5c969'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Primary button","options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7e4aeddc9577906e5e177c640e38cd5c'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id for view caching"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['a13d48d2efa65b5dd360030957fdcfd4'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id for view caching"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['2f9a10097a7ca43c1c479b5b711d13f8'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id for view caching"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a7dd00b4bb947a711ce3a0d0a3f18919'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Html","hint":"HTML rendered directly","isPrivate":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['9a4cce12916cf9ce9ff8f0958f000562'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Html","hint":"HTML rendered directly","isPrivate":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['4e72763437b10189da08680d6b62b2d4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Html","hint":"HTML rendered directly","isPrivate":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['4d1686719c501c9ad5e8ccebdb49919d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text rendered in the header"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['4b0e42414e7003a9afc35d2a8d47aea2'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text rendered in the header"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['c005daeab151fe0d6abf4bf973f840db'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Text rendered in the header"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['fecc7448637361b9027d85c0a58fdb17'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"For UI caching"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0baeabd7c087b1b1b1c2a2047191ef6c'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"For UI caching"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['344f63e9c50dcfbc34c90dac4831e4dc'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"For UI caching"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7e518b7ccfa6ecdee3748499bced3031'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Src","isRequired":true,"hint":"Where to pull the image from"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5849f013e59981afac4c78ab344c99dd'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Src","isRequired":true,"hint":"Where to pull the image from"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['da08cb430e82d298de9aae4d2b813ff2'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Src","isRequired":true,"hint":"Where to pull the image from"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['996f5f57cd0be1269efef5117099c829'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Alt","hint":"Rendered as the alt tag for hovers"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ae9795d4e6c6835b5dee3fe551da62e6'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Alt","hint":"Rendered as the alt tag for hovers"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['37b92c2d9c100517ba5d255f9c8a463f'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Alt","hint":"Rendered as the alt tag for hovers"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['1989fada0b01947b08253ce8cff0be50'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","isPrivate":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['f986e89862c3af65d3bab0bec37a3481'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","isPrivate":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['dfcd7fcc35934b5c06d951f0ba96b42b'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","isPrivate":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['cea555c20c1fb2c9985fce20c1e8d962'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['c5f2cd862e60949a5875cf398e7d2ab4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['4a51e53792292ff9978667e20ae11713'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['68050667a4a63160e4ff4ad9fededc39'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique ID for view caching."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ce47844a02574a62e77c79fab57ecd9e'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique ID for view caching."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b01d028b0ed2bd826fa555a8448e6bd3'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique ID for view caching."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e8b2b9d70c25022e24640f787d35bef3'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Source","isRequired":true,"hint":"Markdown text to be rendered"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['37c1fd595240871eaff35e57a45b59ab'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Source","isRequired":true,"hint":"Markdown text to be rendered"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['ab7aa69c9662c98fe3ed52ce28e78988'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Source","isRequired":true,"hint":"Markdown text to be rendered"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['5c36dc9a2ec822e866e7cc60bfb8cdce'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e90ab9d8c398f72ff615d5a87e6aa6c1'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['e97331aaa3fd3f18cfe628bebb46b480'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['3fb8f021add39e18b0bca3047cb2a61a'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Second Field","isRequired":true,"hint":"A hint","options":{"choices":[{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d20128b5f1e48bf8e812ce4e9c37de9e'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Second Field","isRequired":true,"hint":"A hint","options":{"choices":[{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['fc98ec241b244e2e87af7fa83eb3aea6'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Second Field","isRequired":true,"hint":"A hint","options":{"choices":[{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['6ed2ce4cc0895f6723196ddfa1dff9c5'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","isRequired":true,"options":{"choices":[{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['718c32493ac417c9b26b189069c98f44'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","isRequired":true,"options":{"choices":[{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d91c372c2bf41d2b037c8bcb87006be9'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","isRequired":true,"options":{"choices":[{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['73135241a3ca813dab9ab6dff0c511e6'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","hint":"A way to override the Sprucebot avatar for this sentence","options":{"schemaIds":["sprucebotAvatar"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['db73b18e7ce7f4e9de48d97eb52806f4'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","hint":"A way to override the Sprucebot avatar for this sentence","options":{"schemaIds":["sprucebotAvatar"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['ff0516df9eb456be4eec6aec7f54345e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","hint":"A way to override the Sprucebot avatar for this sentence","options":{"schemaIds":["sprucebotAvatar"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['8ec4815f4de152a0d134e82323b730b8'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Words","hint":"The words being typed out"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5f1f8e1672791a69101c09179add677c'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Words","hint":"The words being typed out"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d46241029c50284473a2cf6ddfeb9612'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Words","hint":"The words being typed out"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['4c2c0cf85595d9cc9281273ffe2043ac'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"End delay","hint":"How long should I hold on this sentence after it's typed?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['cf4ad066f853a4cbfe1f3a5fe07d0591'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"End delay","hint":"How long should I hold on this sentence after it's typed?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d5cf0e220e82401782170a13fab64cc1'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"End delay","hint":"How long should I hold on this sentence after it's typed?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['af40e696b3707893c3bb6f7f830313f6'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Sentences","isRequired":true,"isArray":true,"hint":"Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)","options":{"schemaIds":["sprucebotTypedMessageSentence"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['9b838a09c901db94122c63a29c4f6dcb'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Sentences","isRequired":true,"isArray":true,"hint":"Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)","options":{"schemaIds":["sprucebotTypedMessageSentence"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['82c4534bc9897c0cc8488a3e7b2098a3'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Sentences","isRequired":true,"isArray":true,"hint":"Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)","options":{"schemaIds":["sprucebotTypedMessageSentence"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['b40e8ed212c6c8b52e82bdf08b6a3b98'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Default avatar","hint":"How should Sprucebot be rendered by default","options":{"schemaIds":["sprucebotAvatar"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['dc38f877491f16505dc01c85ecb26ce1'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Default avatar","hint":"How should Sprucebot be rendered by default","options":{"schemaIds":["sprucebotAvatar"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b4dba197f62b90585c3ab09f13271742'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Default avatar","hint":"How should Sprucebot be rendered by default","options":{"schemaIds":["sprucebotAvatar"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a780fca3b19c1c179efd079cee864a4f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"Start delay","hint":"How long should I wait before starting to type?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['6ce345aca4edf040a3dd99487f584bd4'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"Start delay","hint":"How long should I wait before starting to type?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['9750ae43a1ca2a89c3561e6bbf5fce8f'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"Start delay","hint":"How long should I wait before starting to type?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['ca03d59d3651a138ed84f38a1f489a4d'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Loop"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2ff3aad9eda08f76f88d353a53fd066a'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Loop"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['26ae6ecedcc21766734810f4e74a6913'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Loop"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['70903230de3d8f3ff7848ca05539c613'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","options":{"choices":[{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d582f26d3424dcd76e1c1e1f52f9a771'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","options":{"choices":[{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['94dab55c6b1e17628a60abf01dc2fad1'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Size","options":{"choices":[{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['5fdef662cd0e00fb32011c0b1a68944e'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Paused"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b12df37ae45bf612e8e650a3ac0b65b3'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Paused"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['91ce1385d29583bbed5aea58f1589c66'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Paused"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['9e72bb96ca8f191d8023a45d0240242e'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","isRequired":true,"hint":"Unique id for UI caching"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['60413ee8a1f5664752fd8e74d109f42e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","isRequired":true,"hint":"Unique id for UI caching"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['575e39ecd184aa6f28d1480579fec123'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","isRequired":true,"hint":"Unique id for UI caching"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e3b1d1d14c75d536dd90bb46d8af9dc0'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"the text to render"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b6d5dab4185f8890ce25cec6e439c697'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"the text to render"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['1d20360487453b067d5590365b4118bb'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"the text to render"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['9c4c1ad9c070935411b0746bb9416e0e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique id for UI caching"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['3fe325f966ed3790f6dacc5f6c93c26c'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique id for UI caching"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['c3b6d62ced70c01000f01ea72279b081'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique id for UI caching"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['52979b05c4c0a2fa28402c5d7f6bd914'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Headline","isRequired":true,"hint":"Headline text"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0277216f97f9a56a8b62ad07b7cdc51d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Headline","isRequired":true,"hint":"Headline text"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['1cc38bae09108000d0e9eb8116df814f'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Headline","isRequired":true,"hint":"Headline text"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['258e0240f927bbb201ddb2be5015c7e6'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Optional; Text after the headline"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ba86924ef196ff459311fdee73fa98d7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Optional; Text after the headline"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['ec07d416f86c04811e2ac74c4efb7a36'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Text","hint":"Optional; Text after the headline"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a67e956a0a113fd0995e8c23d87ed021'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Can remove","hint":"Optional; controls whether the toast can be removed. Defaults to true"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['dec05193beec36230d5360fb9c3b532b'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Can remove","hint":"Optional; controls whether the toast can be removed. Defaults to true"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['27edc1e0214d9a25bae06297d5af5d13'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Can remove","hint":"Optional; controls whether the toast can be removed. Defaults to true"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['c7b2fb24970429f52041f059f8120e11'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","isRequired":true,"hint":"Title to render in the header"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0244b075086e8989dcf5f51264b766a4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","isRequired":true,"hint":"Title to render in the header"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['7f40be22af1c00d697638bbd39043952'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","isRequired":true,"hint":"Title to render in the header"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['ab0bc3c8d553dc3b797203bd8d28b117'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subtitle","hint":"Optional subtitle text"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['976347ab776eb7fa512c2e9acac7328e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subtitle","hint":"Optional subtitle text"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['34a9beba969f62bc0e44cde1dda4fd34'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subtitle","hint":"Optional subtitle text"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['ca6d719619b96e077fd27477a35bb495'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true for small lists"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['01f9eab201d4b262a3e89485b016a006'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true for small lists"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['76f68c0c5a960064aa081449b657f08a'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true for small lists"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['29669c8d804acc13688574bfa37e1c7c'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"hint":"Buttons to associate with the list header","options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d7e7ed3620987f0190de393a290d8d09'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"hint":"Buttons to associate with the list header","options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['28a31a25a6e53bde0697c9ef13db3a1e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"hint":"Buttons to associate with the list header","options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['d1bbe9d5985a72ddb777983a1f94f167'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"A name attached to this radio button"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ad9cf491c766e93bcb87bea3731403b3'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"A name attached to this radio button"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['35043c8f2a7005db6333847e85825a7b'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Name","hint":"A name attached to this radio button"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['23b5a84cceb740b099b6eb2dd394042f'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"Label and text for the radio"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['54104aec89c0b914cc7d19b396ff5e01'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"Label and text for the radio"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['83aaf35df23d05ce3c4ccec9c7ac12d1'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"Label and text for the radio"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['2dc9c710ed9298735ae568e7b091e095'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Optional text to show after the label"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ad5d1990f92bf7749fdee54b223ebfb1'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Optional text to show after the label"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['710ae02f6e17d9a2f912d4b9dd70ffbb'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Optional text to show after the label"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['12ad8ce8ccdb17ad5cef1ad901808d58'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"is this control disabled?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ebff104e064813891d81f2c27c61e432'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"is this control disabled?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['020513ca48252f201290a27f560b5b90'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"is this control disabled?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['c20d004d4bec9d8e7d7ae93df012b9ca'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is checked","hint":"Is this control checked?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['efe81d583ef0f4d367c6c24b1682837b'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is checked","hint":"Is this control checked?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['5c003d1d70515592f04b168d4249bad4'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is checked","hint":"Is this control checked?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['328743b1c876dd1be2ab3fc6ca40f65c'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header","hint":"List Header","options":{"schemaIds":["listHeader"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['4b57c2073db4334e682f1e90f0879d16'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header","hint":"List Header","options":{"schemaIds":["listHeader"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['91c7614737a1f5f827a645f92deeba45'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header","hint":"List Header","options":{"schemaIds":["listHeader"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['56229d07e7540a28881a7e5a32d01eb8'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"List items","options":{"schemasIds":["listItem","expandableListItem"],"schemaIds":[]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['4db804c7b06a10d1bae9188b0c2a0f8d'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"List items","options":{"schemasIds":["listItem","expandableListItem"],"schemaIds":[]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['55ae93d80e28b4c9feb04e4416d427f7'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"List items","options":{"schemasIds":["listItem","expandableListItem"],"schemaIds":[]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['76fb4d452ca864f7484bc76354b649e8'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the list smaller"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['8c173a9526daac24e8000edee21023c9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the list smaller"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['eaa5fd550d1316026a0ed9e2ae5f83d0'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Set true to make the list smaller"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['19f3ae5c24922098f337f479d04aae31'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Are separators visible","hint":"Set to true to show separators between list items"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e262c5349529d47b55864e9a00ea31d2'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Are separators visible","hint":"Set to true to show separators between list items"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['58fd015e4cb2857f70d152b915364512'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Are separators visible","hint":"Set to true to show separators between list items"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['bdac129d1ab4fcea4d6ba93531601b57'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['fd8a814fc793038ea4dfe97a8d970328'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['05584a696e1b98b70669f6045a68823f'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['1a085d443815f7472fd66161bae4b181'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Default action","isRequired":true,"hint":"The main action readily surfaced to the user","options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['cf1c763656a29dafb3e198e0a8d42cc4'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Default action","isRequired":true,"hint":"The main action readily surfaced to the user","options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['8fc169f7179c51189ca909404e743270'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Default action","isRequired":true,"hint":"The main action readily surfaced to the user","options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['17a805088ff1dd9aea1a4f0fc27ef2fc'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Actions","isArray":true,"hint":"All the secondary nested buttons","options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e1362e96928235b7f790b86626b368ab'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Actions","isArray":true,"hint":"All the secondary nested buttons","options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['98469286d732f3962eb4282868c38a20'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Actions","isArray":true,"hint":"All the secondary nested buttons","options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['23a0ba970cb22a58e387162bb56bc788'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Sets the visual hierarchy of the button","options":{"choices":[{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['4ce4ac59b836a6855a62a7310ffaa7fc'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Sets the visual hierarchy of the button","options":{"choices":[{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b273aca0d23245ac5a501b771f3e5f77'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Sets the visual hierarchy of the button","options":{"choices":[{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['c2ccad90898662d2ff35cdf54a89ae1d'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to fill the parent's width"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['8f3fb7ed88dd4e7fb0cc6271fa0342eb'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to fill the parent's width"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['fecec7f3e4e443a0cb5a7898bea9a543'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to fill the parent's width"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e964a6a89e00ed2c598d3868241a8590'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Sets the visual hierarchy of the button"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['6a29a028cb75cb77432cfea48c4aa2fd'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Sets the visual hierarchy of the button"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['daf890d270a3bacee4ceb6cf463b235f'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is small","hint":"Sets the visual hierarchy of the button"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['382d940bbb8dc0fdd86bbbce951a6580'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title for the card"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2e3b52fc40c95bb4932bbd44d76d650d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title for the card"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['03c50c78386cb8b28bfe7bd246f700a8'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title for the card"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['327e38948f522a502a1d1ca61022e894'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label text","hint":"Optional label to show above title"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['513774dec633d62af8586378e3f00ac5'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label text","hint":"Optional label to show above title"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['0ecd069f9fc792d1f49422ff5c3161bc'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label text","hint":"Optional label to show above title"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['20230344eb2cbcc5efe06068c61ba352'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Label icon","hint":"Optional icon to show above the title and before the label","options":{"schemaIds":["Icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['4db198307bc8208ca6d275d64dffc701'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Label icon","hint":"Optional icon to show above the title and before the label","options":{"schemaIds":["Icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['0b54ee42dc5622c0bc26d3c59fc34b92'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Label icon","hint":"Optional icon to show above the title and before the label","options":{"schemaIds":["Icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['24ab2d86c4570b1075b591c39215c46c'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"hint":"Render buttons in the Card Header","options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e2ff8a13e2cd0f4f3c31a224091cf911'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"hint":"Render buttons in the Card Header","options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a655b40c519ba4f35896e509dd6c3ff9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isRequired":true,"isArray":true,"hint":"Render buttons in the Card Header","options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['10303183b67ae95e0ce5a11afbaf9ac4'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu","hint":"Renders a Context Menu in the Card Header","options":{"schemaIds":["ContextMenu"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['bb57974c462c33616d213e1a0753d539'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu","hint":"Renders a Context Menu in the Card Header","options":{"schemaIds":["ContextMenu"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['bfd186c552661d85c3eb0701560a6f5a'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu","hint":"Renders a Context Menu in the Card Header","options":{"schemaIds":["ContextMenu"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['1af0915aa1bea727a01dc5e79f16b96b'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Tab title","isRequired":true,"hint":"Title that shows in the tab"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b753c01f03c8684bb1dedf844a3a54c1'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Tab title","isRequired":true,"hint":"Title that shows in the tab"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f97c1958c6d1b69a3265e26ee8f48ac1'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Tab title","isRequired":true,"hint":"Title that shows in the tab"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['f81951b12a41b50c17180416cc0888cb'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Tab icon","hint":"Icon for the tab","options":{"schemaIds":["Icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['3cbf8434039c210c10878cca61a1a330'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Tab icon","hint":"Icon for the tab","options":{"schemaIds":["Icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['0907787ac87993528405125dca2ca350'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Tab icon","hint":"Icon for the tab","options":{"schemaIds":["Icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['285f4fc8209b42d645d2afa9c203b41d'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Panel title","isRequired":true,"hint":"Title that shows in the panel"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['29f945cff805b0a352c9c48bd80bacf6'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Panel title","isRequired":true,"hint":"Title that shows in the panel"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f606995776b083393b59c53890816d9a'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Panel title","isRequired":true,"hint":"Title that shows in the panel"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['326cb73540efc645f00a06af4d976394'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Panel copy","isRequired":true,"hint":"Copy describing the step in the card's body"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['9e83b90c5781f54ed3a436f92c4b0963'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Panel copy","isRequired":true,"hint":"Copy describing the step in the card's body"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['1dfedbbcd739919e01ce28ae88cc2bcc'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Panel copy","isRequired":true,"hint":"Copy describing the step in the card's body"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['5ce30a7f237c4115f8bd84a6fdf45377'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Panel c t a","hint":"Primary CTA of this step","options":{"schemaIds":["Button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['3f1b33f1e16957c06aec0bd361e7e285'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Panel c t a","hint":"Primary CTA of this step","options":{"schemaIds":["Button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['6d426ed1444fa39420edfa8497fa63bf'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Panel c t a","hint":"Primary CTA of this step","options":{"schemaIds":["Button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7f2318b60728abd4d81cd02bf40595b0'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is complete","hint":"Is this step complete?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['4817ba34f42f35116a92ec0343cdb519'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is complete","hint":"Is this step complete?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['957a453943eed3c56ea0a562234dc6a9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is complete","hint":"Is this step complete?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['66ada7ae3455b484facf1d2155e1fcdd'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title of the entire card"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['1f7d9609239aecb4ed284f2be710ef06'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title of the entire card"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['acd888ebea4bff773640842957e0629d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Title of the entire card"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['81707d770099d1bc8ae97a6a65a5b50b'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Steps","isRequired":true,"isArray":true,"hint":"Steps for onboarding","options":{"schemaIds":["onboardingCardStep"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2e9b92c0d6f7d04853b22514aea08a0b'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Steps","isRequired":true,"isArray":true,"hint":"Steps for onboarding","options":{"schemaIds":["onboardingCardStep"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a00a1d5307300d988b9ee11803d7b774'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Steps","isRequired":true,"isArray":true,"hint":"Steps for onboarding","options":{"schemaIds":["onboardingCardStep"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['eabdc2a8a99d4804403d5873b134d948'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique id for React loops"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e9568ee518806ae5d0a64b14c8435bd8'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique id for React loops"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['5a467c79dc5b65c1b216065eef95f8a8'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Unique id for React loops"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['b4f5b28f6db3a8a78606c27ccdc72c11'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"The label for this score, e.g. Today's Sales"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2bb560fb48c0647a5a98472cfe767271'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"The label for this score, e.g. Today's Sales"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['ae339bd745f4df67b1653b95fadf47fe'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Label","hint":"The label for this score, e.g. Today's Sales"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['775d814afdb742839008b001ce122c13'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Value","hint":"The score, e.g. $234.30"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['39ce523eb9a1d37f27dd709255c414c4'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Value","hint":"The score, e.g. $234.30"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['35cc7127b73db4e96e639f4aba89c5dd'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Value","hint":"The score, e.g. $234.30"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['d71c3d94d75b4f4edf8f77ef0fc80852'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Scores","isRequired":true,"isArray":true,"options":{"schemaIds":["ScoreCardPanel"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5a80589d64287eb34c9ec0b00dd27337'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Scores","isRequired":true,"isArray":true,"options":{"schemaIds":["ScoreCardPanel"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a3c9b223ad4f1bd1009fb1593d4013e8'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Scores","isRequired":true,"isArray":true,"options":{"schemaIds":["ScoreCardPanel"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['8729a1ddf616d3b74767dcbfd92462b5'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"Children to show in the Card","options":{"schemaIds":["button","image","heading","text","scoreCard","toast","list"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['1fade0231c97af17fc9dcb463ad30a8e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"Children to show in the Card","options":{"schemaIds":["button","image","heading","text","scoreCard","toast","list"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['02ae2351350556884aa40108e603f368'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"Children to show in the Card","options":{"schemaIds":["button","image","heading","text","scoreCard","toast","list"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['afbc20cee8736582dadee8fe48e31fd4'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is sectioned","hint":"Whether to wrap children in CardSection"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['8bb8fa932bee40a8cf4f1103ec32d16f'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is sectioned","hint":"Whether to wrap children in CardSection"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['962383f2e363e0fd9608d3a2dd91d2b5'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is sectioned","hint":"Whether to wrap children in CardSection"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['76d6d870efc5a5b0c896d4644a9175b4'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Are section separators visible","hint":"Set true to display line separators between CardSection components"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['f392c1ad5d53d576ba1bbcca4da143d8'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Are section separators visible","hint":"Set true to display line separators between CardSection components"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d4ac415a6f512ec7dc2bb14a736daccb'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Are section separators visible","hint":"Set true to display line separators between CardSection components"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['b0a6b215f44d736aead27782833326b8'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has top padding","hint":"Does card include top padding"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['7cd42e6d0fe882b7bb600b594e5baa5f'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has top padding","hint":"Does card include top padding"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['dab39879a28fc8518a13cdada99c4361'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has top padding","hint":"Does card include top padding"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['cf30ad415b1f359c3531bf0f33b3357f'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has bottom padding","hint":"Does card include bottom padding"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['c15340c5b8f360bd39fd106899c5f97e'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has bottom padding","hint":"Does card include bottom padding"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d91d8f668e22d41f16a9714087ece7da'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has bottom padding","hint":"Does card include bottom padding"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['b8a7e43f91924257ad02d4fe19646e9e'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full bleed","hint":"Set to true to remove horizontal padding"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['a4ed73cfbd1c0ef7510f677917a0cebb'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full bleed","hint":"Set to true to remove horizontal padding"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['e18ff282e3e55d03422dca00e3e14d2c'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full bleed","hint":"Set to true to remove horizontal padding"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['dd40a8e538570cbe534b8ca2bb053828'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Visual appearance of the group.","options":{"choices":[{"label":"Default","value":"default"},{"label":"Segmented","value":"segmented"},{"label":"Floating","value":"floating"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e7f0714d77f9dfa48fce6f2e8f589b81'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Visual appearance of the group.","options":{"choices":[{"label":"Default","value":"default"},{"label":"Segmented","value":"segmented"},{"label":"Floating","value":"floating"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['fe60b9ec67b0abbe359c2bada3c9f98a'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"Visual appearance of the group.","options":{"choices":[{"label":"Default","value":"default"},{"label":"Segmented","value":"segmented"},{"label":"Floating","value":"floating"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['e28e210340273879c6383188d4e7bbef'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to fill parent width"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2497114140f3122b8e95d3544f12237d'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to fill parent width"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['3ada4989fb3186666fd65ed66b2f128f'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is full width","hint":"Set true to fill parent width"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a6992e427921960089d8bf50d40ec1c9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Highlighted index","hint":"Index of the button that is currently highlighted, e.g. by arrow keys"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['24874ba5f4f8562c5592d44fe463e8f6'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Highlighted index","hint":"Index of the button that is currently highlighted, e.g. by arrow keys"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['87b67b93690f702a7fa6c7535722c943'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for NumberField
							definition = {"type":"number","label":"Highlighted index","hint":"Index of the button that is currently highlighted, e.g. by arrow keys"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['2e287d3f1d80cfc00d13b22b11e6a937'] = SpruceSchema.NumberField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Button group","hint":"Render buttons in the Card Footer","options":{"schemaIds":["buttonGroup"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2e59dba52f9ab6a7968893cde9acb51f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Button group","hint":"Render buttons in the Card Footer","options":{"schemaIds":["buttonGroup"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['4664bdc1622392ae2d06d0025687e487'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Button group","hint":"Render buttons in the Card Footer","options":{"schemaIds":["buttonGroup"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['41123c286a9e2fe716220b6272536787'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Helper","hint":"Helper for the footer"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d0c97b9e7a61ea1994838a09efbf92f9'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Helper","hint":"Helper for the footer"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b7e6d5d0c474ce8a9901bda31fda0d34'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Helper","hint":"Helper for the footer"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['04d5ef56b04d2ef055ffb15a6a4a90a8'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header","hint":"Card Header props","options":{"schemaIds":["cardHeader"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e5fac263e2bc54c0673c441432af8864'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header","hint":"Card Header props","options":{"schemaIds":["cardHeader"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['6ef896e85fc9987b83c3c49747e74c26'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header","hint":"Card Header props","options":{"schemaIds":["cardHeader"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['116c5d4c4f6f4fdbeaeea69c40d9c755'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header image","hint":"optionally pass props to an image tag to be rendered in the header","options":{"schemaIds":["image"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['8790bd5f0549e520de6fa3f0ef5730a9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header image","hint":"optionally pass props to an image tag to be rendered in the header","options":{"schemaIds":["image"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d1e26d4227c100d74e04eb137e70b410'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Header image","hint":"optionally pass props to an image tag to be rendered in the header","options":{"schemaIds":["image"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['998b2d56d51aeda0b3cad995005b442e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Onboarding","hint":"all onboarding props","options":{"schemaIds":["OnboardingCard"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['7c48b00caa0427df18ef9ba19096727f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Onboarding","hint":"all onboarding props","options":{"schemaIds":["OnboardingCard"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['61176583d8ea4705ce5976bf133eacbc'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Onboarding","hint":"all onboarding props","options":{"schemaIds":["OnboardingCard"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['0c6b8fcfaa4310d130ff76e7ec6b3f05'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Body","hint":"Card Body props","options":{"schemaIds":["cardBody"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['7cc3c74335e98f4c136de1e867a86cb9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Body","hint":"Card Body props","options":{"schemaIds":["cardBody"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d6c5b8374d6e16b7e362974f2558209b'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Body","hint":"Card Body props","options":{"schemaIds":["cardBody"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a86e529a9228ba791166343d2409cf09'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Footer","hint":"The footer of the card","options":{"schemaIds":["cardFooter"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d0ad0723c7498639b7a18763c4aeccfd'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Footer","hint":"The footer of the card","options":{"schemaIds":["cardFooter"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['8d84aae7db354c82d7a6e652406b865f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Footer","hint":"The footer of the card","options":{"schemaIds":["cardFooter"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['da86c71342c179377b6a989378cce8bb'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"The ID of the section that is acting as a placeholder for ui enhancements"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ed806ca2c124f2e089f87d9331598375'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"The ID of the section that is acting as a placeholder for ui enhancements"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['fab137a16e1547d98c8436d2bc7f4996'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"The ID of the section that is acting as a placeholder for ui enhancements"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['df5bcb03c73da5c3b5ad6921047beb5b'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Calendar event details items","isRequired":true,"isArray":true,"hint":"Calendar items to add as enhancements","options":{"schemaIds":["list","button","splitButton","cardBuilder","toast","text","markdown"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['91a0fb7bad25654ff3678757def68ab9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Calendar event details items","isRequired":true,"isArray":true,"hint":"Calendar items to add as enhancements","options":{"schemaIds":["list","button","splitButton","cardBuilder","toast","text","markdown"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['0c0d3221e702c198372b7953b8cf92c9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Calendar event details items","isRequired":true,"isArray":true,"hint":"Calendar items to add as enhancements","options":{"schemaIds":["list","button","splitButton","cardBuilder","toast","text","markdown"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a2002ffad4418b69d5823f009226de81'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Card builder body items","isRequired":true,"isArray":true,"hint":"Card builder items to add as enhancements","options":{"schemaIds":[]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['c122595b48374d4a06d18142d79b5ae8'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Card builder body items","isRequired":true,"isArray":true,"hint":"Card builder items to add as enhancements","options":{"schemaIds":[]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['12b788e7a140e34dea83ec9c4c8619b9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Card builder body items","isRequired":true,"isArray":true,"hint":"Card builder items to add as enhancements","options":{"schemaIds":[]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['be7cac2643aab23162ab5d015b02ff73'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu items","isRequired":true,"isArray":true,"hint":"Context menu items to add as enhancements","options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['55c89bb0483dbf2d88145162d2810245'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu items","isRequired":true,"isArray":true,"hint":"Context menu items to add as enhancements","options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['21c90542be884cc76a5655d5fa541c26'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu items","isRequired":true,"isArray":true,"hint":"Context menu items to add as enhancements","options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['dc62c31b60ce866266858002044584df'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"User","isRequired":true,"options":{"schemaIds":["user"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['a73993471572000fa9aeec5bf51b39e7'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"User","isRequired":true,"options":{"schemaIds":["user"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d7f44127203a67f54bfe22f4022241c5'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"User","isRequired":true,"options":{"schemaIds":["user"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['4a2f844d94243c809e7d7b0998fee826'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","hint":"An optional identifier for this block"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b99fbddef100bdd81f03ec8d14726a56'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","hint":"An optional identifier for this block"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['1707c43b28e88175a3e6e3d9d92be909'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","hint":"An optional identifier for this block"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['5853bcb335971044d763363b6538cc9b'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Any title rendered on the event"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['01d1ba462606fed437a44537ce3767b6'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Any title rendered on the event"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['ee17d5a21eb8a018af23e49b395904c1'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","hint":"Any title rendered on the event"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['813cdda319f455c5b4330dddf5ef1e2e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subtitle","hint":"Displayed right under the title"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['38d5ff21327f0224102164a7cecea0cd'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subtitle","hint":"Displayed right under the title"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['313ec00b48b547d68f9ef0269c79a6e1'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Subtitle","hint":"Displayed right under the title"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['f2b8ae86cd0ee011c79268ce2f5525f8'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"Duration sec","isRequired":true,"hint":"How long this block is for, in seconds"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['5acfb75ecd214ef7feb474e21ec87ef0'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"Duration sec","isRequired":true,"hint":"How long this block is for, in seconds"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d2c7e34e6f44b838d091481631bf28ab'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DurationField
							definition = {"type":"duration","label":"Duration sec","isRequired":true,"hint":"How long this block is for, in seconds"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['3c296de37a7030c171323e63705689fb'] = SpruceSchema.DurationField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Left icons","isRequired":true,"isArray":true,"hint":"All the icons show on the left of the calendar event","options":{"schemaIds":["icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['2077e97de4e9fd7a2d25cb8ca26799ce'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Left icons","isRequired":true,"isArray":true,"hint":"All the icons show on the left of the calendar event","options":{"schemaIds":["icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a30da0a3a5338f98691f85fc15326a8f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Left icons","isRequired":true,"isArray":true,"hint":"All the icons show on the left of the calendar event","options":{"schemaIds":["icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['80204ea037f29e3d21dd553ec756ba1b'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Right icons","isRequired":true,"isArray":true,"hint":"All the icons shown on the right of the calendar event","options":{"schemaIds":["icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b9f405941097c51a2f2b4a46263c1cdf'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Right icons","isRequired":true,"isArray":true,"hint":"All the icons shown on the right of the calendar event","options":{"schemaIds":["icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['10de40832627057c38b3d2204ad3ab10'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Right icons","isRequired":true,"isArray":true,"hint":"All the icons shown on the right of the calendar event","options":{"schemaIds":["icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['30b3db0ae29025cc348a86f3a4fb0ab4'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is busy","hint":"Is the person associated to this event busy during this time (to keep from double booking)?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['1c36d807fa91474aed9c7a2be496a0b1'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is busy","hint":"Is the person associated to this event busy during this time (to keep from double booking)?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['7eea20ef06055180d0d0b7fa803bfbeb'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is busy","hint":"Is the person associated to this event busy during this time (to keep from double booking)?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['4761d8eee9c0d09e12e36a4b1ce0f89c'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","hint":"An optional ID for this item; used to allow association with UI Enhancements"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['fc73027ccac350398393d1d82566182f'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","hint":"An optional ID for this item; used to allow association with UI Enhancements"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['5d1715b4affc40d8c1f4e6f69730aa83'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Id","hint":"An optional ID for this item; used to allow association with UI Enhancements"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['958512e55b16cfb9d9b738a9f61378df'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"The items that make up the event details","options":{"schemaIds":["list","button","splitButton","cardBuilder","toast","text","markdown"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['18ee49b2ab8b8ad0b4ccec0a3126a37a'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"The items that make up the event details","options":{"schemaIds":["list","button","splitButton","cardBuilder","toast","text","markdown"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['e65f38b0566515b79d9bd746520d9372'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Items","isRequired":true,"isArray":true,"hint":"The items that make up the event details","options":{"schemaIds":["list","button","splitButton","cardBuilder","toast","text","markdown"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['d05f19187f42d5109eb4b25f00723e94'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id of the calendar event"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['aa3cb811524e4e0643e95cedc4752d66'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id of the calendar event"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['096f2c49dfa9e24544c4ef1a02cb7b26'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"Id","isRequired":true,"hint":"Id of the calendar event"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7728db22800afcf7aa8e9813f9962f4b'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DateTimeField
							definition = {"type":"dateTime","label":"Starts at","isRequired":true}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ba02e595f9c0643e76a896d8c27fbc89'] = SpruceSchema.DateTimeField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DateTimeField
							definition = {"type":"dateTime","label":"Starts at","isRequired":true}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d239a539cd46d875e688ff5eb435a4df'] = SpruceSchema.DateTimeField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for DateTimeField
							definition = {"type":"dateTime","label":"Starts at","isRequired":true}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['b7dbbc02c06bc18e19bf96b1efbd2723'] = SpruceSchema.DateTimeField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Collection","hint":"A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['78dabe52fd4e6546ef8cea781f44f4a3'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Collection","hint":"A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['8e5a2ea6ea7e4b5c3f9a4db78dd16242'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Collection","hint":"A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['2d94958a857a717d61cc3a2300f7f9e7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is resizable","hint":"Can this event be resized on the calendar?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ccdb540f944af3ab96d1cdb0597fc457'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is resizable","hint":"Can this event be resized on the calendar?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['95fed7d5123aa898736e20ca7c0ae462'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is resizable","hint":"Can this event be resized on the calendar?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['36f77ea1f3d1bb837cfac6fd5ae26fd6'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"The kind on an event impacts it's visual representation","options":{"choices":[{"label":"How a calendar event renders by default.","value":"default"},{"label":"If an event is not confirmed.","value":"tentative"},{"label":"When an event is happening right now","value":"active"},{"label":"If the event represents a time when the person is not available for additional events (usually matches isBusy)","value":"unavailable"},{"label":"If the event represents a time where the user us unavailable (break or block)","value":"blocked"},{"label":"The event is ready to go, everyone has confirmed, it just hasn't happened yet","value":"upcoming"},{"label":"If the event is in the past","value":"past"},{"label":"The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)","value":"warn"},{"label":"Renders the event in red (the event could have already started but attendees have not confirmed)","value":"critical"}]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ad1199b13a47a1a655bcb187594a484a'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"The kind on an event impacts it's visual representation","options":{"choices":[{"label":"How a calendar event renders by default.","value":"default"},{"label":"If an event is not confirmed.","value":"tentative"},{"label":"When an event is happening right now","value":"active"},{"label":"If the event represents a time when the person is not available for additional events (usually matches isBusy)","value":"unavailable"},{"label":"If the event represents a time where the user us unavailable (break or block)","value":"blocked"},{"label":"The event is ready to go, everyone has confirmed, it just hasn't happened yet","value":"upcoming"},{"label":"If the event is in the past","value":"past"},{"label":"The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)","value":"warn"},{"label":"Renders the event in red (the event could have already started but attendees have not confirmed)","value":"critical"}]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['8f6c15df7de6b61627fe38d0a3172e6c'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SelectField
							definition = {"type":"select","label":"Kind","hint":"The kind on an event impacts it's visual representation","options":{"choices":[{"label":"How a calendar event renders by default.","value":"default"},{"label":"If an event is not confirmed.","value":"tentative"},{"label":"When an event is happening right now","value":"active"},{"label":"If the event represents a time when the person is not available for additional events (usually matches isBusy)","value":"unavailable"},{"label":"If the event represents a time where the user us unavailable (break or block)","value":"blocked"},{"label":"The event is ready to go, everyone has confirmed, it just hasn't happened yet","value":"upcoming"},{"label":"If the event is in the past","value":"past"},{"label":"The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)","value":"warn"},{"label":"Renders the event in red (the event could have already started but attendees have not confirmed)","value":"critical"}]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['9d289365eb135f12f8af526c42f07b62'] = SpruceSchema.SelectField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Blocks","isRequired":true,"isArray":true,"hint":"A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.","options":{"schemaIds":["calendarEventBlock"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['3b6b221ec709df7c823f84e50dadf7a3'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Blocks","isRequired":true,"isArray":true,"hint":"A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.","options":{"schemaIds":["calendarEventBlock"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['4e80948386f86d8f75598fe5c691690f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Blocks","isRequired":true,"isArray":true,"hint":"A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.","options":{"schemaIds":["calendarEventBlock"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7b35071c80e6a9234fd34a6f90e8c475'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Details","hint":"Additional details shown after someone taps on an event","options":{"schemaIds":["calendarEventDetails"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['976c04fccac916e39c564260bf404477'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Details","hint":"Additional details shown after someone taps on an event","options":{"schemaIds":["calendarEventDetails"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['92246936c658c73d2caa890fa389be65'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Details","hint":"Additional details shown after someone taps on an event","options":{"schemaIds":["calendarEventDetails"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['dabe698ea594b953f71360a49403617e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"User id","isRequired":true,"hint":"The ID of the user this event will render under"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['aeaeaacb06d21cdc554d0fe314a6a21a'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"User id","isRequired":true,"hint":"The ID of the user this event will render under"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['4536b70a2f30959d4c8e15f5e934a3d8'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for IdField
							definition = {"type":"id","label":"User id","isRequired":true,"hint":"The ID of the user this event will render under"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['8842a68cbd0879ed5e2a8664c42b7610'] = SpruceSchema.IdField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is draft","hint":"If this is a draft event (meaning it's not booked, but being setup)"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['cd16823a11724ecd5ab39900a0b6662d'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is draft","hint":"If this is a draft event (meaning it's not booked, but being setup)"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d198f849d2f2850e3c0a8fd6ab6216ec'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is draft","hint":"If this is a draft event (meaning it's not booked, but being setup)"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['6304ba7130bca6eaa5cbb1903ca65ecf'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has border","hint":"Should I render a border for this event?"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['6fa5d6ebd7a8762ee722ea6f8ccdf1be'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has border","hint":"Should I render a border for this event?"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['8fe85e2cfedc60ee7b85a22032fd0ab9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Has border","hint":"Should I render a border for this event?"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['330f5cccafb6e953ad2c059eafbc2e9f'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Text after the toggle"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['30dcfbdbc0579bc63a1ac829e794bbe7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Text after the toggle"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['d1d6688d2d1b6cc5c6c32a208bf89f70'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Post text","hint":"Text after the toggle"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['3c18f7ad7d8955f5be241a5c4d8e9dd7'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Title"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['e704a1b6b4eaf4d7d9a1925abf003c3a'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Title"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['bc589976c820ca487caac2bc352f1f06'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Title"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['b1bc8030ef536021bd7a84d2473817ae'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Subtitle"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['06bd68ae3d3049d650faa7068ebf55a4'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Subtitle"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a89a81d6e377871e80068a7f32a39c3f'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Subtitle"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['fa672740d8d932b6154f79f4e9029f4c'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Note"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['aa6507e300f611bdaa00877aa6be889b'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Note"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['c91e04839f81316d4ff7157b5cab42f2'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Note"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['51d0b69c89f37228172c86c75a17c3f7'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","isRequired":true,"hint":"Title text"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['350be84880d93983335037b011ca57de'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","isRequired":true,"hint":"Title text"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f378c6e7b46fbabed2097623cc8f40a8'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Title","isRequired":true,"hint":"Title text"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['cfd3c4cfb61dfdc0c58750ee49db1ace'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Note","hint":"Optional note text"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['6e745a2ceb9d3bb619266de487cd39e9'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Note","hint":"Optional note text"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['81e50a107e8bd2fa58cfd499b8827bb0'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Note","hint":"Optional note text"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['38522ed7005a2fa8cb6a9c07281e161d'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is expandable","hint":"Can render this item as expandable"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['f39657c576628d34da215206aec47a25'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is expandable","hint":"Can render this item as expandable"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['f1dc10ab05c10ca9978c3bec3a3fe0fe'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is expandable","hint":"Can render this item as expandable"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['05a3bc6c88202f45d350aafa82be53b5'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Avatar","options":{"schemaIds":["avatar"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['21b99e33ad2914a765bad2a2ff4bdbe5'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Avatar","options":{"schemaIds":["avatar"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['e65ed20648ecb77edfab465e68bb5f77'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Avatar","options":{"schemaIds":["avatar"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['1c5475878d55ab7105c0faabf834c7ea'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Image","hint":"URL to show an image"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['7a7b8c3784f1481c76fe9e33335fd343'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Image","hint":"URL to show an image"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['048211bea851c593de8c2d8becf5601e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Image","hint":"URL to show an image"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['3f5a564ae0f4b4f169bd3b459c82ad2b'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Inline svg icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b4cef23f93b7fd8e6966e67e8a830c1e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Inline svg icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['0629a164c44f04eea96ff7fbfeb7b8c3'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Icon","hint":"Inline svg icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['b18905d6047d4baba229b7943e355ce6'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is icon hidden","hint":"Optional; visually hides the icon without removing it"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['63669aaa552a6d7df3f74c6493cefdd9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is icon hidden","hint":"Optional; visually hides the icon without removing it"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['c9d9412a2156bf4db79efa455e1c53f9'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is icon hidden","hint":"Optional; visually hides the icon without removing it"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['7e0bd348375859b10f90ef1e29fcb4f8'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is left indented","hint":"Set true to add left spacing. useful in aligning with other list items that have icons or images"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['4ab6ad3bce19fcd1b01b28d6c873be15'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is left indented","hint":"Set true to add left spacing. useful in aligning with other list items that have icons or images"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['70ccdfbd70b4edd1d2bfe2bf876d0ed4'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is left indented","hint":"Set true to add left spacing. useful in aligning with other list items that have icons or images"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['605d6205da4cb1f45c4224a6f6a3ead5'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is draggable","hint":"Set true when the list can be reordered"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['aeff60a3877c6b68402a4f3daceba0ba'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is draggable","hint":"Set true when the list can be reordered"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['624abd654289f83f99c7cb3e1439a042'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is draggable","hint":"Set true when the list can be reordered"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['9ba147808b2ad3bf519d9a4ee3238774'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"Set true when the list can be reordered"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['753769bac6960226b360d8c060897d54'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"Set true when the list can be reordered"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['21605c2bb8733e9e0cc95d8abd70f7f1'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is disabled","hint":"Set true when the list can be reordered"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['ee05b2c6f841126d1520fa25ab812bd5'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Toggle props","hint":"Props passed to the toggle if toggleId is set","options":{"schemaIds":["Toggle"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['6fdd0852b323219ba453af7beb823551'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Toggle props","hint":"Props passed to the toggle if toggleId is set","options":{"schemaIds":["Toggle"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['79d9bbadaac43cbdc2ac899159eb49d6'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Toggle props","hint":"Props passed to the toggle if toggleId is set","options":{"schemaIds":["Toggle"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['de6650cf30a3d9035ea57dea50649907'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Primary button","hint":"A primary button that turns the entire list item into a clickable button","options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b14323ce6f8cffa7c6dfca290f7e99d5'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Primary button","hint":"A primary button that turns the entire list item into a clickable button","options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['52b71987236046ad3882ef0f1c06e4ee'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Primary button","hint":"A primary button that turns the entire list item into a clickable button","options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['96114150fc5a29984a6c3a18b763e4af'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isArray":true,"hint":"Actions associated with the list item","options":{"schemaIds":["button"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['acefa53ad2daf062eea1202f54bf38e3'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isArray":true,"hint":"Actions associated with the list item","options":{"schemaIds":["button"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['a6c770854c84e6073c515b9c9ae3808e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Buttons","isArray":true,"hint":"Actions associated with the list item","options":{"schemaIds":["button"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['0c969af7d3d04e6859be1408af37be97'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu","hint":"Context Menu associated with the list it","options":{"schemaIds":["ContextMenu"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['f2d3eabc5141ed515f8d2582e7868a1c'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu","hint":"Context Menu associated with the list it","options":{"schemaIds":["ContextMenu"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['1310bfa9b60ab0576f4ca78a3e9a51d3'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Context menu","hint":"Context Menu associated with the list it","options":{"schemaIds":["ContextMenu"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['a91a557eb8215c873e079f5e26d82c16'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is separator visible","hint":"Set to true to show separator for this list item if followed by another list item."}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d27df9286f07106223985fe293498621'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is separator visible","hint":"Set to true to show separator for this list item if followed by another list item."}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['7c1e5643c46345550340eafc7b919f41'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for BooleanField
							definition = {"type":"boolean","label":"Is separator visible","hint":"Set to true to show separator for this list item if followed by another list item."}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['3c1462f6a5fa91fb92250a89c042adbe'] = SpruceSchema.BooleanField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true,"hint":"Optional class name for list item"}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['b958fe3422d82481569b49246853d165'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true,"hint":"Optional class name for list item"}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['9a439a755018de305e96704495cb272a'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for TextField
							definition = {"type":"text","label":"Class name","isPrivate":true,"hint":"Optional class name for list item"}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['1938cf5d79049d8b8588de586d00412e'] = SpruceSchema.TextField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Selectable element","hint":"Any props you want sent down to the selectable component being rendered","options":{"schemaIds":["Radio","checkbox"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['0703735e7b9b794459142a3f78371aee'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Selectable element","hint":"Any props you want sent down to the selectable component being rendered","options":{"schemaIds":["Radio","checkbox"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['35e69a9abf8aeb88533125e8a9c58a9f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Selectable element","hint":"Any props you want sent down to the selectable component being rendered","options":{"schemaIds":["Radio","checkbox"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['5426fe16edc703efc80edfb3699ae740'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Warnings","hint":"Highlight title, subtitle, note with warning colors","options":{"schemaIds":["listItemWarning"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['d57ee03dc03c094a0fc02786c6291579'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Warnings","hint":"Highlight title, subtitle, note with warning colors","options":{"schemaIds":["listItemWarning"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['cdd86bed87fcabc10770593a6100955f'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Warnings","hint":"Highlight title, subtitle, note with warning colors","options":{"schemaIds":["listItemWarning"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['d697bc0d77c9fa4f1c289d1656e230ee'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"List","hint":"Optional; adds a nested list","options":{"schemaIds":["list"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['ff5daefdf712088ebaa236ea773bd73e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"List","hint":"Optional; adds a nested list","options":{"schemaIds":["list"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['7d8776a66f16589cd246737ce21ed336'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"List","hint":"Optional; adds a nested list","options":{"schemaIds":["list"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['9535599dce649a2a5b72386bc0bd1b53'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Lists","isRequired":true,"isArray":true,"hint":"Optional; adds multiple lists nested at the same level","options":{"schemaIds":["list"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['f900683e15a463731c64f191aad87bf9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Lists","isRequired":true,"isArray":true,"hint":"Optional; adds multiple lists nested at the same level","options":{"schemaIds":["list"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['71145a7966d9fcd58a85c96153475761'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Lists","isRequired":true,"isArray":true,"hint":"Optional; adds multiple lists nested at the same level","options":{"schemaIds":["list"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['1ffb37024f812f22408b88abf96be696'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"List item","isRequired":true,"options":{"schemaIds":["listItem"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['c2486486afc7d4d7028f1edba03abbc6'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"List item","isRequired":true,"options":{"schemaIds":["listItem"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['eabc2d1f6585dea137f32220c45710dd'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"List item","isRequired":true,"options":{"schemaIds":["listItem"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['fcc739785f71bfd5bcd9ba05a3ba8928'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Collapsed icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['91734a0d79ef159b3402df315d028181'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Collapsed icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b1d165defd802b5bf2c805a321b290c4'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Collapsed icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['4f4c3e06ee259825ef7b00c164fc7d9e'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Expanded icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'type'
							importAs = 'SpruceSchema'

							valueTypes['7baaa5c2356107c5b68200dcac01f2a9'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Expanded icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'value'
							importAs = 'SpruceSchema'

							valueTypes['b724c1df7920419c2307b37bcbec630d'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							

							// Value type for SchemaField
							definition = {"type":"schema","label":"Expanded icon","options":{"schemaIds":["Icon"]}}
							renderAs = 'definitionType'
							importAs = 'SpruceSchema'

							valueTypes['2b4b1bd2add2c550c2e70f1317da56d5'] = SpruceSchema.SchemaField.templateDetails({
								language,
								templateItems,
								globalNamespace,
								definition,
								renderAs,
								importAs
							}).valueType

							