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

			const templateItems = [{"namespace":"core","id":"profileImage","definition":{"id":"profileImage","name":"Profile Image Sizes","description":"Profile images at various helpful sizes and resolutions.","fields":{"profile60":{"label":"60x60","type":"text","isRequired":true},"profile150":{"label":"150x150","type":"text","isRequired":true},"profile60@2x":{"label":"60x60","type":"text","isRequired":true},"profile150@2x":{"label":"150x150","type":"text","isRequired":true}}},"pascalName":"ProfileImage","camelName":"profileImage","readableName":"Profile Image Sizes"},{"namespace":"core","id":"user","definition":{"id":"user","name":"User","description":"A human being.","fields":{"id":{"label":"Id","type":"id","isRequired":true},"firstName":{"label":"First name","type":"text","isRequired":false},"lastName":{"label":"Last name","type":"text","isRequired":false},"casualName":{"label":"Casual name","type":"text","hint":"Generated name that defaults to Friend!","isRequired":true},"phoneNumber":{"label":"Phone","type":"phone","hint":"The person's phone number!"},"profileImages":{"label":"Profile photos","type":"schema","options":{"schemaIds":["profileImage"]}},"defaultProfileImages":{"label":"Default profile photos","type":"schema","isRequired":true,"options":{"schemaIds":["profileImage"]}}}},"pascalName":"User","camelName":"user","readableName":"User"},{"namespace":"core","id":"skill","definition":{"id":"skill","name":"Skill","description":"An ability Sprucebot has learned.","fields":{"id":{"label":"Id","type":"id","isRequired":true},"apiKey":{"label":"Id","isPrivate":true,"type":"id","isRequired":true},"name":{"label":"Name","type":"text","isRequired":true},"description":{"label":"Description","type":"text","isRequired":false},"slug":{"label":"Slug","type":"text","isRequired":false},"icon":{"label":"Icon","type":"text","isRequired":false}}},"pascalName":"Skill","camelName":"skill","readableName":"Skill"},{"namespace":"core","id":"location","definition":{"id":"location","name":"Location","description":"A physical location where people meet. An organization has at least one of them.","fields":{"id":{"label":"Id","type":"id"},"name":{"label":"Name","type":"text","isRequired":true},"num":{"label":"Store number","type":"text","hint":"You can use other symbols, like # or dashes. #123 or 32-US-5"},"isPublic":{"label":"Public","type":"boolean","hint":"Is this location viewable by guests?","defaultValue":false},"phone":{"label":"Main Phone","type":"phone"},"timezone":{"label":"Timezone","type":"select","options":{"choices":[{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}]}},"address":{"label":"Address","type":"address","isRequired":true}}},"pascalName":"Location","camelName":"location","readableName":"Location"},{"namespace":"core","id":"acl","definition":{"id":"acl","name":"Access control list lookup table","dynamicKeySignature":{"type":"text","isArray":true,"label":"Permissions grouped by slug","key":"slug"}},"pascalName":"Acl","camelName":"acl","readableName":"Access control list lookup table"},{"namespace":"core","id":"job","definition":{"id":"job","name":"Job","description":"A position at a company. The answer to the question; What is your job?","fields":{"id":{"label":"Id","type":"id"},"isDefault":{"label":"Is default","hint":"Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest).","type":"text","isRequired":true},"name":{"label":"Name","type":"text","isRequired":true},"role":{"label":"Role","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}},"inStoreAcls":{"label":"On work permissions","type":"schema","options":{"schemaIds":["acl"]}},"acls":{"label":"Off work permissions","type":"schema","options":{"schemaIds":["acl"]}}}},"pascalName":"Job","camelName":"job","readableName":"Job"},{"namespace":"core","id":"userLocation","definition":{"id":"userLocation","name":"User location","description":"A location a person has given access to themselves.","fields":{"id":{"label":"Id","type":"id"},"role":{"label":"Name","type":"select","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}},"status":{"label":"Status","type":"text"},"visits":{"label":"Total visits","type":"number","isRequired":true,"options":{"choices":[{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}]}},"lastRecordedVisit":{"label":"Last visit","type":"dateTime"},"job":{"label":"Job","type":"schema","isRequired":true,"options":{"schemaIds":["job"]}},"location":{"label":"Location","type":"schema","isRequired":true,"options":{"schemaIds":["location"]}},"user":{"label":"User","type":"schema","isRequired":true,"options":{"schemaIds":["user"]}}}},"pascalName":"UserLocation","camelName":"userLocation","readableName":"User location"}]
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

							