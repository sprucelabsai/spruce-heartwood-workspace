/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as Schema } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'
import * as generated_import_0 from '#spruce/../src/fields/CallbackField'
import * as generated_import_1 from '#spruce/../src/fields/ElementTypeField'
import * as generated_import_2 from '#spruce/../src/fields/EventCallbackField'
import * as generated_import_3 from '#spruce/../src/fields/NodeField'

export namespace SpruceSchemas.Core {
	/** Profile images at various helpful sizes and resolutions. */
	export interface IProfileImage {
		/** 60x60. */
		profile60: string
		/** 150x150. */
		profile150: string
		/** 60x60. */
		'profile60@2x': string
		/** 150x150. */
		'profile150@2x': string
	}
}

export namespace SpruceSchemas.Core.ProfileImage {
	/** The interface for the schema definition for a Profile Image Sizes */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'profileImage'
		name: 'Profile Image Sizes'
		description: 'Profile images at various helpful sizes and resolutions.'
		fields: {
			/** 60x60. */
			profile60: {
				label: '60x60'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** 150x150. */
			profile150: {
				label: '150x150'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** 60x60. */
			'profile60@2x': {
				label: '60x60'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** 150x150. */
			'profile150@2x': {
				label: '150x150'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Core.ProfileImage.IDefinition>
}

export namespace SpruceSchemas.Core {
	/** A human being. */
	export interface IUser {
		/** Id. */
		id: string
		/** First name. */
		firstName?: string | undefined | null
		/** Last name. */
		lastName?: string | undefined | null
		/** Casual name. Generated name that defaults to Friend! */
		casualName: string
		/** Phone. The person's phone number! */
		phoneNumber?: string | undefined | null
		/** Profile photos. */
		profileImages?: SpruceSchemas.Core.IProfileImage | undefined | null
		/** Default profile photos. */
		defaultProfileImages: SpruceSchemas.Core.IProfileImage
	}
}

export namespace SpruceSchemas.Core.User {
	/** The interface for the schema definition for a User */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'user'
		name: 'User'
		description: 'A human being.'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				isRequired: true
				options: undefined
			}
			/** First name. */
			firstName: {
				label: 'First name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Last name. */
			lastName: {
				label: 'Last name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Casual name. Generated name that defaults to Friend! */
			casualName: {
				label: 'Casual name'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Generated name that defaults to Friend!'
				options: undefined
			}
			/** Phone. The person's phone number! */
			phoneNumber: {
				label: 'Phone'
				type: SpruceSchema.FieldType.Phone
				hint: "The person's phone number!"
				options: undefined
			}
			/** Profile photos. */
			profileImages: {
				label: 'Profile photos'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Core.ProfileImage.IDefinition[] }
			}
			/** Default profile photos. */
			defaultProfileImages: {
				label: 'Default profile photos'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				options: { schemas: SpruceSchemas.Core.ProfileImage.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Core.User.IDefinition>
}

export namespace SpruceSchemas.Core {
	/** An ability Sprucebot has learned. */
	export interface ISkill {
		/** Id. */
		id: string
		/** Id. */
		apiKey: string
		/** Name. */
		name: string
		/** Description. */
		description?: string | undefined | null
		/** Slug. */
		slug?: string | undefined | null
		/** Icon. */
		icon?: string | undefined | null
	}
}

export namespace SpruceSchemas.Core.Skill {
	/** The interface for the schema definition for a Skill */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'skill'
		name: 'Skill'
		description: 'An ability Sprucebot has learned.'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				isRequired: true
				options: undefined
			}
			/** Id. */
			apiKey: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				isRequired: true
				options: undefined
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** Description. */
			description: {
				label: 'Description'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Slug. */
			slug: {
				label: 'Slug'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Icon. */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Core.Skill.IDefinition>
}

export namespace SpruceSchemas.Core {
	/** A physical location where people meet. An organization has at least one of them. */
	export interface ILocation {
		/** Id. */
		id?: string | undefined | null
		/** Name. */
		name: string
		/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
		num?: string | undefined | null
		/** Public. Is this location viewable by guests? */
		isPublic?: boolean | undefined | null
		/** Main Phone. */
		phone?: string | undefined | null
		/** Timezone. */
		timezone?:
			| (
					| 'etc/gmt+12'
					| 'pacific/midway'
					| 'pacific/honolulu'
					| 'us/alaska'
					| 'america/los_Angeles'
					| 'america/tijuana'
					| 'us/arizona'
					| 'america/chihuahua'
					| 'us/mountain'
					| 'america/managua'
					| 'us/central'
					| 'america/mexico_City'
					| 'Canada/Saskatchewan'
					| 'america/bogota'
					| 'us/eastern'
					| 'us/east-indiana'
					| 'Canada/atlantic'
					| 'america/caracas'
					| 'america/manaus'
					| 'america/Santiago'
					| 'Canada/Newfoundland'
					| 'america/Sao_Paulo'
					| 'america/argentina/buenos_Aires'
					| 'america/godthab'
					| 'america/montevideo'
					| 'america/Noronha'
					| 'atlantic/cape_Verde'
					| 'atlantic/azores'
					| 'africa/casablanca'
					| 'etc/gmt'
					| 'europe/amsterdam'
					| 'europe/belgrade'
					| 'europe/brussels'
					| 'europe/Sarajevo'
					| 'africa/lagos'
					| 'asia/amman'
					| 'europe/athens'
					| 'asia/beirut'
					| 'africa/cairo'
					| 'africa/Harare'
					| 'europe/Helsinki'
					| 'asia/Jerusalem'
					| 'europe/minsk'
					| 'africa/Windhoek'
					| 'asia/Kuwait'
					| 'europe/moscow'
					| 'africa/Nairobi'
					| 'asia/tbilisi'
					| 'asia/tehran'
					| 'asia/muscat'
					| 'asia/baku'
					| 'asia/Yerevan'
					| 'asia/Kabul'
					| 'asia/Yekaterinburg'
					| 'asia/Karachi'
					| 'asia/calcutta'
					| 'asia/calcutta'
					| 'asia/Katmandu'
					| 'asia/almaty'
					| 'asia/Dhaka'
					| 'asia/Rangoon'
					| 'asia/bangkok'
					| 'asia/Krasnoyarsk'
					| 'asia/Hong_Kong'
					| 'asia/Kuala_Lumpur'
					| 'asia/Irkutsk'
					| 'Australia/Perth'
					| 'asia/taipei'
					| 'asia/tokyo'
					| 'asia/Seoul'
					| 'asia/Yakutsk'
					| 'Australia/adelaide'
					| 'Australia/Darwin'
					| 'Australia/brisbane'
					| 'Australia/canberra'
					| 'Australia/Hobart'
					| 'pacific/guam'
					| 'asia/Vladivostok'
					| 'asia/magadan'
					| 'pacific/auckland'
					| 'pacific/Fiji'
					| 'pacific/tongatapu'
			  )
			| undefined
			| null
		/** Address. */
		address: SpruceSchema.IAddressFieldValue
	}
}

export namespace SpruceSchemas.Core.Location {
	/** The interface for the schema definition for a Location */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'location'
		name: 'Location'
		description: 'A physical location where people meet. An organization has at least one of them.'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			num: {
				label: 'Store number'
				type: SpruceSchema.FieldType.Text
				hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5'
				options: undefined
			}
			/** Public. Is this location viewable by guests? */
			isPublic: {
				label: 'Public'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is this location viewable by guests?'
				defaultValue: false
				options: undefined
			}
			/** Main Phone. */
			phone: {
				label: 'Main Phone'
				type: SpruceSchema.FieldType.Phone
				options: undefined
			}
			/** Timezone. */
			timezone: {
				label: 'Timezone'
				type: SpruceSchema.FieldType.Select
				options: {
					choices: [
						{ value: 'etc/gmt+12'; label: 'International Date Line West' },
						{ value: 'pacific/midway'; label: 'Midway Island, Samoa' },
						{ value: 'pacific/honolulu'; label: 'Hawaii' },
						{ value: 'us/alaska'; label: 'Alaska' },
						{
							value: 'america/los_Angeles'
							label: 'Pacific Time (US & Canada)'
						},
						{ value: 'america/tijuana'; label: 'Tijuana, Baja California' },
						{ value: 'us/arizona'; label: 'Arizona' },
						{
							value: 'america/chihuahua'
							label: 'Chihuahua, La Paz, Mazatlan'
						},
						{ value: 'us/mountain'; label: 'Mountain Time (US & Canada)' },
						{ value: 'america/managua'; label: 'Central America' },
						{ value: 'us/central'; label: 'Central Time (US & Canada)' },
						{
							value: 'america/mexico_City'
							label: 'Guadalajara, Mexico City, Monterrey'
						},
						{ value: 'Canada/Saskatchewan'; label: 'Saskatchewan' },
						{
							value: 'america/bogota'
							label: 'Bogota, Lima, Quito, Rio Branco'
						},
						{ value: 'us/eastern'; label: 'Eastern Time (US & Canada)' },
						{ value: 'us/east-indiana'; label: 'Indiana (East)' },
						{ value: 'Canada/atlantic'; label: 'Atlantic Time (Canada)' },
						{ value: 'america/caracas'; label: 'Caracas, La Paz' },
						{ value: 'america/manaus'; label: 'Manaus' },
						{ value: 'america/Santiago'; label: 'Santiago' },
						{ value: 'Canada/Newfoundland'; label: 'Newfoundland' },
						{ value: 'america/Sao_Paulo'; label: 'Brasilia' },
						{
							value: 'america/argentina/buenos_Aires'
							label: 'Buenos Aires, Georgetown'
						},
						{ value: 'america/godthab'; label: 'Greenland' },
						{ value: 'america/montevideo'; label: 'Montevideo' },
						{ value: 'america/Noronha'; label: 'Mid-Atlantic' },
						{ value: 'atlantic/cape_Verde'; label: 'Cape Verde Is.' },
						{ value: 'atlantic/azores'; label: 'Azores' },
						{
							value: 'africa/casablanca'
							label: 'Casablanca, Monrovia, Reykjavik'
						},
						{
							value: 'etc/gmt'
							label: 'Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London'
						},
						{
							value: 'europe/amsterdam'
							label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'
						},
						{
							value: 'europe/belgrade'
							label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague'
						},
						{
							value: 'europe/brussels'
							label: 'Brussels, Copenhagen, Madrid, Paris'
						},
						{
							value: 'europe/Sarajevo'
							label: 'Sarajevo, Skopje, Warsaw, Zagreb'
						},
						{ value: 'africa/lagos'; label: 'West Central Africa' },
						{ value: 'asia/amman'; label: 'Amman' },
						{ value: 'europe/athens'; label: 'Athens, Bucharest, Istanbul' },
						{ value: 'asia/beirut'; label: 'Beirut' },
						{ value: 'africa/cairo'; label: 'Cairo' },
						{ value: 'africa/Harare'; label: 'Harare, Pretoria' },
						{
							value: 'europe/Helsinki'
							label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius'
						},
						{ value: 'asia/Jerusalem'; label: 'Jerusalem' },
						{ value: 'europe/minsk'; label: 'Minsk' },
						{ value: 'africa/Windhoek'; label: 'Windhoek' },
						{ value: 'asia/Kuwait'; label: 'Kuwait, Riyadh, Baghdad' },
						{
							value: 'europe/moscow'
							label: 'Moscow, St. Petersburg, Volgograd'
						},
						{ value: 'africa/Nairobi'; label: 'Nairobi' },
						{ value: 'asia/tbilisi'; label: 'Tbilisi' },
						{ value: 'asia/tehran'; label: 'Tehran' },
						{ value: 'asia/muscat'; label: 'Abu Dhabi, Muscat' },
						{ value: 'asia/baku'; label: 'Baku' },
						{ value: 'asia/Yerevan'; label: 'Yerevan' },
						{ value: 'asia/Kabul'; label: 'Kabul' },
						{ value: 'asia/Yekaterinburg'; label: 'Yekaterinburg' },
						{ value: 'asia/Karachi'; label: 'Islamabad, Karachi, Tashkent' },
						{
							value: 'asia/calcutta'
							label: 'Chennai, Kolkata, Mumbai, New Delhi'
						},
						{ value: 'asia/calcutta'; label: 'Sri Jayawardenapura' },
						{ value: 'asia/Katmandu'; label: 'Kathmandu' },
						{ value: 'asia/almaty'; label: 'Almaty, Novosibirsk' },
						{ value: 'asia/Dhaka'; label: 'Astana, Dhaka' },
						{ value: 'asia/Rangoon'; label: 'Yangon (Rangoon)' },
						{ value: 'asia/bangkok'; label: 'Bangkok, Hanoi, Jakarta' },
						{ value: 'asia/Krasnoyarsk'; label: 'Krasnoyarsk' },
						{
							value: 'asia/Hong_Kong'
							label: 'Beijing, Chongqing, Hong Kong, Urumqi'
						},
						{ value: 'asia/Kuala_Lumpur'; label: 'Kuala Lumpur, Singapore' },
						{ value: 'asia/Irkutsk'; label: 'Irkutsk, Ulaan Bataar' },
						{ value: 'Australia/Perth'; label: 'Perth' },
						{ value: 'asia/taipei'; label: 'Taipei' },
						{ value: 'asia/tokyo'; label: 'Osaka, Sapporo, Tokyo' },
						{ value: 'asia/Seoul'; label: 'Seoul' },
						{ value: 'asia/Yakutsk'; label: 'Yakutsk' },
						{ value: 'Australia/adelaide'; label: 'Adelaide' },
						{ value: 'Australia/Darwin'; label: 'Darwin' },
						{ value: 'Australia/brisbane'; label: 'Brisbane' },
						{
							value: 'Australia/canberra'
							label: 'Canberra, Melbourne, Sydney'
						},
						{ value: 'Australia/Hobart'; label: 'Hobart' },
						{ value: 'pacific/guam'; label: 'Guam, Port Moresby' },
						{ value: 'asia/Vladivostok'; label: 'Vladivostok' },
						{
							value: 'asia/magadan'
							label: 'Magadan, Solomon Is., New Caledonia'
						},
						{ value: 'pacific/auckland'; label: 'Auckland, Wellington' },
						{ value: 'pacific/Fiji'; label: 'Fiji, Kamchatka, Marshall Is.' },
						{ value: 'pacific/tongatapu'; label: "Nuku'alofa" }
					]
				}
			}
			/** Address. */
			address: {
				label: 'Address'
				type: SpruceSchema.FieldType.Address
				isRequired: true
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Core.Location.IDefinition>
}

export namespace SpruceSchemas.Core {
	/**  */
	export interface IAcl {
		/** Permissions grouped by slug. */
		[slug: string]: string[]
	}
}

export namespace SpruceSchemas.Core.Acl {
	/** The interface for the schema definition for a Access control list lookup table */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'acl'
		name: 'Access control list lookup table'
		dynamicKeySignature: {
			label: 'Permissions grouped by slug'
			type: SpruceSchema.FieldType.Text
			key: 'slug'
			isArray: true
			options: undefined
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Core.Acl.IDefinition>
}

export namespace SpruceSchemas.Core {
	/** A position at a company. The answer to the question; What is your job? */
	export interface IJob {
		/** Id. */
		id?: string | undefined | null
		/** Is default. Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest). */
		isDefault: string
		/** Name. */
		name: string
		/** Role. */
		role: 'owner' | 'groupManager' | 'manager' | 'teammate' | 'guest'
		/** On work permissions. */
		inStoreAcls?: SpruceSchemas.Core.IAcl | undefined | null
		/** Off work permissions. */
		acls?: SpruceSchemas.Core.IAcl | undefined | null
	}
}

export namespace SpruceSchemas.Core.Job {
	/** The interface for the schema definition for a Job */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'job'
		name: 'Job'
		description: 'A position at a company. The answer to the question; What is your job?'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Is default. Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest). */
			isDefault: {
				label: 'Is default'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest).'
				options: undefined
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** Role. */
			role: {
				label: 'Role'
				type: SpruceSchema.FieldType.Select
				isRequired: true
				options: {
					choices: [
						{ value: 'owner'; label: 'Owner' },
						{ value: 'groupManager'; label: 'District/region manager' },
						{ value: 'manager'; label: 'Store manager' },
						{ value: 'teammate'; label: 'Teammate' },
						{ value: 'guest'; label: 'Guest' }
					]
				}
			}
			/** On work permissions. */
			inStoreAcls: {
				label: 'On work permissions'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Core.Acl.IDefinition[] }
			}
			/** Off work permissions. */
			acls: {
				label: 'Off work permissions'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Core.Acl.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Core.Job.IDefinition>
}

export namespace SpruceSchemas.Core {
	/** A location a person has given access to themselves. */
	export interface IUserLocation {
		/** Id. */
		id?: string | undefined | null
		/** Name. */
		role: 'owner' | 'groupManager' | 'manager' | 'teammate' | 'guest'
		/** Status. */
		status?: string | undefined | null
		/** Total visits. */
		visits: number
		/** Last visit. */
		lastRecordedVisit?: SpruceSchema.IDateTimeFieldValue | undefined | null
		/** Job. */
		job: SpruceSchemas.Core.IJob
		/** Location. */
		location: SpruceSchemas.Core.ILocation
		/** User. */
		user: SpruceSchemas.Core.IUser
	}
}

export namespace SpruceSchemas.Core.UserLocation {
	/** The interface for the schema definition for a User location */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'userLocation'
		name: 'User location'
		description: 'A location a person has given access to themselves.'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Name. */
			role: {
				label: 'Name'
				type: SpruceSchema.FieldType.Select
				isRequired: true
				options: {
					choices: [
						{ value: 'owner'; label: 'Owner' },
						{ value: 'groupManager'; label: 'District/region manager' },
						{ value: 'manager'; label: 'Store manager' },
						{ value: 'teammate'; label: 'Teammate' },
						{ value: 'guest'; label: 'Guest' }
					]
				}
			}
			/** Status. */
			status: {
				label: 'Status'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Total visits. */
			visits: {
				label: 'Total visits'
				type: SpruceSchema.FieldType.Number
				isRequired: true
				options: {
					choices: [
						{ value: 'owner'; label: 'Owner' },
						{ value: 'groupManager'; label: 'District/region manager' },
						{ value: 'manager'; label: 'Store manager' },
						{ value: 'teammate'; label: 'Teammate' },
						{ value: 'guest'; label: 'Guest' }
					]
				}
			}
			/** Last visit. */
			lastRecordedVisit: {
				label: 'Last visit'
				type: SpruceSchema.FieldType.DateTime
				options: undefined
			}
			/** Job. */
			job: {
				label: 'Job'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				options: { schemas: SpruceSchemas.Core.Job.IDefinition[] }
			}
			/** Location. */
			location: {
				label: 'Location'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				options: { schemas: SpruceSchemas.Core.Location.IDefinition[] }
			}
			/** User. */
			user: {
				label: 'User'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				options: { schemas: SpruceSchemas.Core.User.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Core.UserLocation.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A photo of a person that is generally round */
	export interface IAvatar {
		/** Source. */
		src: string
		/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
		alt: string
		/** Is large. True will show large variation of the avatar */
		isLarge?: boolean | undefined | null
		/** Is large. Align text and name center */
		isVertical?: boolean | undefined | null
		/** Show online indicator. Should I should the status indicator */
		showIndicator?: boolean | undefined | null
		/** Status. */
		status?: ('online' | 'offline') | undefined | null
		/** Name. */
		name?: string | undefined | null
		/** Text. Additional text to show below the name */
		text?: string | undefined | null
		/** Class name. Set the "class" attribute */
		className?: string | undefined | null
		/** Width. */
		width?: number | undefined | null
		/** Height. */
		height?: number | undefined | null
	}
}

export namespace SpruceSchemas.Local.Avatar {
	/** The interface for the schema definition for a Avatar */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'avatar'
		name: 'Avatar'
		description: 'A photo of a person that is generally round'
		fields: {
			/** Source. */
			src: {
				label: 'Source'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
			alt: {
				label: 'Alternate text'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Provides alternative information for an image if a user for some reason cannot view it'
				options: undefined
			}
			/** Is large. True will show large variation of the avatar */
			isLarge: {
				label: 'Is large'
				type: SpruceSchema.FieldType.Boolean
				hint: 'True will show large variation of the avatar'
				options: undefined
			}
			/** Is large. Align text and name center */
			isVertical: {
				label: 'Is large'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Align text and name center'
				options: undefined
			}
			/** Show online indicator. Should I should the status indicator */
			showIndicator: {
				label: 'Show online indicator'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Should I should the status indicator'
				options: undefined
			}
			/** Status. */
			status: {
				label: 'Status'
				type: SpruceSchema.FieldType.Select
				options: {
					choices: [
						{ value: 'online'; label: 'Online' },
						{ value: 'offline'; label: 'Offline' }
					]
				}
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Text. Additional text to show below the name */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Additional text to show below the name'
				options: undefined
			}
			/** Class name. Set the "class" attribute */
			className: {
				label: 'Class name'
				type: SpruceSchema.FieldType.Text
				hint: 'Set the "class" attribute'
				options: undefined
			}
			/** Width. */
			width: {
				label: 'Width'
				type: SpruceSchema.FieldType.Number
				options: undefined
			}
			/** Height. */
			height: {
				label: 'Height'
				type: SpruceSchema.FieldType.Number
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Avatar.IDefinition>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface IBigFormControls {
		/** Enable go back. Will enable/disable the back button to go to a previous question */
		canGoBack?: boolean | undefined | null
		/** Enable go next. Will enable/disable the button to go to the next question */
		canGoNext?: boolean | undefined | null
		/** Back handler. */
		onBack?: (() => void) | undefined | null
		/** Next handler. */
		onNext?: (() => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.BigFormControls {
	/** The interface for the schema definition for a Big form controls */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'bigFormControls'
		name: 'Big form controls'
		fields: {
			/** Enable go back. Will enable/disable the back button to go to a previous question */
			canGoBack: {
				label: 'Enable go back'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Will enable/disable the back button to go to a previous question'
				options: undefined
			}
			/** Enable go next. Will enable/disable the button to go to the next question */
			canGoNext: {
				label: 'Enable go next'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Will enable/disable the button to go to the next question'
				options: undefined
			}
			/** Back handler. */
			onBack: {
				label: 'Back handler'
				type: SpruceSchema.FieldType.Callback
				options: { signature: `() => void` }
			}
			/** Next handler. */
			onNext: {
				label: 'Next handler'
				type: SpruceSchema.FieldType.Callback
				options: { signature: `() => void` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.BigFormControls.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Ask questions one at a time */
	export interface IBigForm {
		/** Header controls. */
		controls?: SpruceSchemas.Local.IBigFormControls | undefined | null
		/** Use one Sprucebot. Sprucebot will stay in place and delete, then type each question */
		useOneSprucebot?: boolean | undefined | null
		/** Transition style. */
		transitionStyle?:
			| ('stack' | 'slide-left' | 'slide-up' | 'swap')
			| undefined
			| null
		/** Current slide. */
		currentSlide?: number | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
	}
}

export namespace SpruceSchemas.Local.BigForm {
	/** The interface for the schema definition for a Big form */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'bigForm'
		name: 'Big form'
		description: 'Ask questions one at a time'
		fields: {
			/** Header controls. */
			controls: {
				label: 'Header controls'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.BigFormControls.IDefinition[] }
			}
			/** Use one Sprucebot. Sprucebot will stay in place and delete, then type each question */
			useOneSprucebot: {
				label: 'Use one Sprucebot'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Sprucebot will stay in place and delete, then type each question'
				options: undefined
			}
			/** Transition style. */
			transitionStyle: {
				label: 'Transition style'
				type: SpruceSchema.FieldType.Select
				defaultValue: 'stack'
				options: {
					choices: [
						{ label: 'Stack'; value: 'stack' },
						{ label: 'SlideLeft'; value: 'slide-left' },
						{ label: 'SlideUp'; value: 'slide-up' },
						{ label: 'Swap'; value: 'swap' }
					]
				}
			}
			/** Current slide. */
			currentSlide: {
				label: 'Current slide'
				type: SpruceSchema.FieldType.Number
				defaultValue: 0
				options: undefined
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.BigForm.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A confirmation dialog */
	export interface IConfirmModal {
		/** Title. Title of the confirmation dialog */
		title?: string | undefined | null
		/** Text. Text shown in the dialog */
		text?: string | undefined | null
	}
}

export namespace SpruceSchemas.Local.ConfirmModal {
	/** The interface for the schema definition for a ConfirmModal */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'confirm Modal'
		name: 'ConfirmModal'
		description: 'a confirmation dialog'
		fields: {
			/** Title. Title of the confirmation dialog */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				hint: 'Title of the confirmation dialog'
				options: undefined
			}
			/** Text. Text shown in the dialog */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Text shown in the dialog'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ConfirmModal.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** **Missing description** */
	export interface IIcon {
		/** Id. */
		id?: string | undefined | null
		/** Name. The name of the icon to render. If not found, this will return null. */
		name?: string | undefined | null
		/** Is line icon. Set true to render an icon with a stroke, but no fill */
		isLineIcon?: boolean | undefined | null

		className?: string | undefined | null
		/** . Lets you pass an icon node */
		customIcon?: generated_import_3.INodeFieldDefinitionValue | undefined | null
	}
}

export namespace SpruceSchemas.Local.Icon {
	/** The interface for the schema definition for a Icon */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'Icon'
		name: 'Icon'
		description: '**missing description**'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Name. The name of the icon to render. If not found, this will return null. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				hint: 'The name of the icon to render. If not found, this will return null.'
				options: undefined
			}
			/** Is line icon. Set true to render an icon with a stroke, but no fill */
			isLineIcon: {
				label: 'Is line icon'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to render an icon with a stroke, but no fill'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . Lets you pass an icon node */
			customIcon: {
				type: SpruceSchema.FieldType.Node
				hint: 'Lets you pass an icon node'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Icon.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A interactive element you can touch or click to invoke an Action */
	export interface IButton {
		/** Id. */
		id?: string | undefined | null
		/** Kind. Sets the visual appearance of the button. May be primary, secondary, simple, or caution. */
		kind?: ('primary' | 'secondary' | 'simple' | 'caution') | undefined | null
		/** Is small. Set true to make the button less tall. */
		isSmall?: boolean | undefined | null
		/** Is full width. Set true to make the button fill its parent's width. */
		isFullWidth?: boolean | undefined | null
		/** Is loading. Set true to hide any text or icon in the button and show a loader instead. */
		isLoading?: boolean | undefined | null
		/** Is icon only. Set true to hide any text in the button. Text should still be provided for accessibility. */
		isIconOnly?: boolean | undefined | null
		/** Text. Text for the button. */
		text?: string | undefined | null
		/** Href. Will render a link. May be relative or absolute. */
		href?: string | undefined | null
		/** Icon. Icon for the button. */
		icon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Type. Type attribute for HTML button element. Defaults to 'button'. */
		type?: ('button' | 'submit' | 'reset') | undefined | null
		/** Is disabled. Set true to disable the button */
		isDisabled?: boolean | undefined | null
		/** Classname. */
		className?: string | undefined | null
		/** On click handler. */
		onClick?: ((e: React.MouseEvent<Element>) => void) | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** . Lets you override the element used when rendering a link */
		AnchorComponent?: React.ElementType | undefined | null
		/** Target. _blank|_self|_parent|_top|framename */
		target?: string | undefined | null
	}
}

export namespace SpruceSchemas.Local.Button {
	/** The interface for the schema definition for a Button */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'button'
		name: 'Button'
		description: 'A interactive element you can touch or click to invoke an Action'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Kind. Sets the visual appearance of the button. May be primary, secondary, simple, or caution. */
			kind: {
				label: 'Kind'
				type: SpruceSchema.FieldType.Select
				hint: 'Sets the visual appearance of the button. May be primary, secondary, simple, or caution.'
				options: {
					choices: [
						{ label: 'Primary'; value: 'primary' },
						{ label: 'Secondary'; value: 'secondary' },
						{ label: 'Simple'; value: 'simple' },
						{ label: 'Caution'; value: 'caution' }
					]
				}
			}
			/** Is small. Set true to make the button less tall. */
			isSmall: {
				label: 'Is small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to make the button less tall.'
				options: undefined
			}
			/** Is full width. Set true to make the button fill its parent's width. */
			isFullWidth: {
				label: 'Is full width'
				type: SpruceSchema.FieldType.Boolean
				hint: "Set true to make the button fill its parent's width."
				options: undefined
			}
			/** Is loading. Set true to hide any text or icon in the button and show a loader instead. */
			isLoading: {
				label: 'Is loading'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to hide any text or icon in the button and show a loader instead.'
				options: undefined
			}
			/** Is icon only. Set true to hide any text in the button. Text should still be provided for accessibility. */
			isIconOnly: {
				label: 'Is icon only'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to hide any text in the button. Text should still be provided for accessibility.'
				options: undefined
			}
			/** Text. Text for the button. */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Text for the button.'
				options: undefined
			}
			/** Href. Will render a link. May be relative or absolute. */
			href: {
				label: 'Href'
				type: SpruceSchema.FieldType.Text
				hint: 'Will render a link. May be relative or absolute.'
				options: undefined
			}
			/** Icon. Icon for the button. */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'Icon for the button.'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Type. Type attribute for HTML button element. Defaults to 'button'. */
			type: {
				label: 'Type'
				type: SpruceSchema.FieldType.Select
				hint: "Type attribute for HTML button element. Defaults to 'button'."
				defaultValue: 'button'
				options: {
					choices: [
						{ label: 'Button'; value: 'button' },
						{ label: 'Submit'; value: 'submit' },
						{ label: 'Reset'; value: 'reset' }
					]
				}
			}
			/** Is disabled. Set true to disable the button */
			isDisabled: {
				label: 'Is disabled'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to disable the button'
				options: undefined
			}
			/** Classname. */
			className: {
				label: 'classname'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** On click handler. */
			onClick: {
				label: 'On click handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** . Lets you override the element used when rendering a link */
			AnchorComponent: {
				type: SpruceSchema.FieldType.ElementType
				hint: 'Lets you override the element used when rendering a link'
				options: undefined
			}
			/** Target. _blank|_self|_parent|_top|framename */
			target: {
				label: 'Target'
				type: SpruceSchema.FieldType.Text
				hint: '_blank|_self|_parent|_top|framename'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Button.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A contextual menu comprised of buttons (tip: set the action on each button). */
	export interface IContextMenu {
		/** Buttons. */
		buttons: SpruceSchemas.Local.IButton[]
		/** Size. Set the width of the menu. Helpful for longer text in buttons */
		size?: ('medium' | 'large') | undefined | null
		/** Text. Adds text to the collapsed menu */
		text?: string | undefined | null
		/** Icon. Overrides the default icon */
		icon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Is simple. Set true to make the button blue */
		isSimple?: boolean | undefined | null
		/** Is small. Set true to make the button smaller */
		isSmall?: boolean | undefined | null
		/** Close on select. Set to true makes the menu close when any option is selected */
		closeOnSelect?: boolean | undefined | null
		/** Classname. */
		className?: string | undefined | null
		/** . Invoked when the button is clicked */
		onClick?: ((e: React.MouseEvent<HTMLDivElement>) => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.ContextMenu {
	/** The interface for the schema definition for a ContextMenu */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'ContextMenu'
		name: 'ContextMenu'
		description: 'A contextual menu comprised of buttons (tip: set the action on each button).'
		fields: {
			/** Buttons. */
			buttons: {
				label: 'Buttons'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				isArray: true
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Size. Set the width of the menu. Helpful for longer text in buttons */
			size: {
				label: 'Size'
				type: SpruceSchema.FieldType.Select
				hint: 'Set the width of the menu. Helpful for longer text in buttons'
				options: {
					choices: [
						{ label: 'Medium'; value: 'medium' },
						{ label: 'Large'; value: 'large' }
					]
				}
			}
			/** Text. Adds text to the collapsed menu */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Adds text to the collapsed menu'
				options: undefined
			}
			/** Icon. Overrides the default icon */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'Overrides the default icon'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Is simple. Set true to make the button blue */
			isSimple: {
				label: 'Is simple'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to make the button blue'
				options: undefined
			}
			/** Is small. Set true to make the button smaller */
			isSmall: {
				label: 'Is small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to make the button smaller'
				options: undefined
			}
			/** Close on select. Set to true makes the menu close when any option is selected */
			closeOnSelect: {
				label: 'Close on select'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set to true makes the menu close when any option is selected'
				defaultValue: true
				options: undefined
			}
			/** Classname. */
			className: {
				label: 'Classname'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . Invoked when the button is clicked */
			onClick: {
				type: SpruceSchema.FieldType.EventCallback
				hint: 'Invoked when the button is clicked'
				options: { event: `React.MouseEvent<...>`; element: `HTMLDivElement` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ContextMenu.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** The label for any input */
	export interface ILabel {
		/** Id. */
		id?: string | undefined | null
		/** Label. */
		text: string
		/** Post label text. */
		postLabel?: string | undefined | null
	}
}

export namespace SpruceSchemas.Local.Label {
	/** The interface for the schema definition for a Label */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'label'
		name: 'Label'
		description: 'The label for any input'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Label. */
			text: {
				label: 'Label'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** Post label text. */
			postLabel: {
				label: 'Post label text'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Label.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Drop a file to upload */
	export interface IDropzone {
		/** Id. */
		id?: string | undefined | null
		/** Upload btn text. Text  */
		uploadButtonText?: string | undefined | null
		/** Upload progress. */
		uploadProgress?: number | undefined | null
		/** Error message. Output an error message */
		errorMessage?: string | undefined | null
		/** On drag enter. */
		onDragEnter?:
			| ((event?: React.DragEvent<HTMLElement>) => void)
			| undefined
			| null
		/** On drag leave. */
		onDragLeave?:
			| ((event?: React.DragEvent<HTMLElement>) => void)
			| undefined
			| null
		/** On drag over. */
		onDragOver?:
			| ((event?: React.DragEvent<HTMLElement>) => void)
			| undefined
			| null
		/** On drop. */
		onDrop?:
			| ((
					acceptedFiles: File[],
					rejectedFiles: File[],
					event:
						| React.DragEvent<HTMLElement>
						| React.ChangeEvent<HTMLInputElement>
						| DragEvent
						| Event
			  ) => void)
			| undefined
			| null

		onDropAccepted?:
			| ((
					files?: File[],
					event?:
						| React.DragEvent<HTMLElement>
						| React.ChangeEvent<HTMLInputElement>
						| DragEvent
						| Event
			  ) => void)
			| undefined
			| null

		onDropRejected?:
			| ((
					files?: File[],
					event?:
						| React.DragEvent<HTMLElement>
						| React.ChangeEvent<HTMLInputElement>
						| DragEvent
						| Event
			  ) => void)
			| undefined
			| null

		onFileDialogCancel?: (() => void) | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Small. */
		isSmall?: boolean | undefined | null
		/** Circular. Render upload as a circle (only use if isSmall is true) */
		isCircular?: boolean | undefined | null
		/** File uploaded. Show file uploaded */
		fileWasUploaded?: boolean | undefined | null
		/** Accept types. */
		acceptedMimeTypes?: string[] | undefined | null
		/** Default icon. The icon shown before anything is dropped. */
		defaultIcon?: SpruceSchemas.Local.IIcon | undefined | null
	}
}

export namespace SpruceSchemas.Local.Dropzone {
	/** The interface for the schema definition for a Dropzone */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'dropzone'
		name: 'Dropzone'
		description: 'Drop a file to upload'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Upload btn text. Text  */
			uploadButtonText: {
				label: 'Upload btn text'
				type: SpruceSchema.FieldType.Text
				hint: 'Text '
				options: undefined
			}
			/** Upload progress. */
			uploadProgress: {
				label: 'Upload progress'
				type: SpruceSchema.FieldType.Number
				options: undefined
			}
			/** Error message. Output an error message */
			errorMessage: {
				label: 'Error message'
				type: SpruceSchema.FieldType.Text
				hint: 'Output an error message'
				defaultValue: 'Oops, something went wrong!'
				options: undefined
			}
			/** On drag enter. */
			onDragEnter: {
				label: 'On drag enter'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `(event?: React.DragEvent<HTMLElement>) => void` }
			}
			/** On drag leave. */
			onDragLeave: {
				label: 'On drag leave'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `(event?: React.DragEvent<HTMLElement>) => void` }
			}
			/** On drag over. */
			onDragOver: {
				label: 'On drag over'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `(event?: React.DragEvent<HTMLElement>) => void` }
			}
			/** On drop. */
			onDrop: {
				label: 'On drop'
				type: SpruceSchema.FieldType.Raw
				options: {
					valueType: `(acceptedFiles: File[], rejectedFiles: File[], event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void`
				}
			}
			/** . */
			onDropAccepted: {
				type: SpruceSchema.FieldType.Raw
				options: {
					valueType: `(files?: File[], event?: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void`
				}
			}
			/** . */
			onDropRejected: {
				type: SpruceSchema.FieldType.Raw
				options: {
					valueType: `(files?: File[], event?: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement> | DragEvent | Event) => void`
				}
			}
			/** . */
			onFileDialogCancel: {
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `() => void` }
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Small. */
			isSmall: {
				label: 'Small'
				type: SpruceSchema.FieldType.Boolean
				defaultValue: false
				options: undefined
			}
			/** Circular. Render upload as a circle (only use if isSmall is true) */
			isCircular: {
				label: 'Circular'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Render upload as a circle (only use if isSmall is true)'
				defaultValue: false
				options: undefined
			}
			/** File uploaded. Show file uploaded */
			fileWasUploaded: {
				label: 'File uploaded'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Show file uploaded'
				defaultValue: false
				options: undefined
			}
			/** Accept types. */
			acceptedMimeTypes: {
				label: 'Accept types'
				type: SpruceSchema.FieldType.Text
				defaultValue: ['image/*']
				isArray: true
				options: undefined
			}
			/** Default icon. The icon shown before anything is dropped. */
			defaultIcon: {
				label: 'Default icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'The icon shown before anything is dropped.'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Dropzone.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Used for the empty state of lists */
	export interface IEmptyState {
		/** Heading. */
		heading: string
		/** Subheading. */
		subheading?: string | undefined | null
		/** Icon. */
		icon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Primary button. */
		primaryButton?: SpruceSchemas.Local.IButton | undefined | null
	}
}

export namespace SpruceSchemas.Local.EmptyState {
	/** The interface for the schema definition for a Empty state */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'emptyState'
		name: 'Empty state'
		description: 'Used for the empty state of lists'
		fields: {
			/** Heading. */
			heading: {
				label: 'Heading'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				defaultValue: 'Nothing to see here'
				options: undefined
			}
			/** Subheading. */
			subheading: {
				label: 'Subheading'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Icon. */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Schema
				defaultValue: { name: 'empty_box'; isLineIcon: true }
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Primary button. */
			primaryButton: {
				label: 'Primary button'
				type: SpruceSchema.FieldType.Schema
				defaultValue: { kind: 'simple' }
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.EmptyState.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** **Missing description** */
	export interface IHeading {
		/** Id. */
		id?: string | undefined | null
		/** Html. HTML rendered directly */
		html?: string | undefined | null
		/** Text. Text rendered in the header */
		text?: string | undefined | null

		className?: string | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Weight. The weight of the heading, H1 and beyond */
		weight?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') | undefined | null
	}
}

export namespace SpruceSchemas.Local.Heading {
	/** The interface for the schema definition for a Heading */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'Heading'
		name: 'Heading'
		description: '**missing description**'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Html. HTML rendered directly */
			html: {
				label: 'Html'
				type: SpruceSchema.FieldType.Text
				hint: 'HTML rendered directly'
				options: undefined
			}
			/** Text. Text rendered in the header */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Text rendered in the header'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Weight. The weight of the heading, H1 and beyond */
			weight: {
				label: 'Weight'
				type: SpruceSchema.FieldType.Select
				hint: 'The weight of the heading, H1 and beyond'
				defaultValue: 'h1'
				options: {
					choices: [
						{ label: 'H1'; value: 'h1' },
						{ label: 'H2'; value: 'h2' },
						{ label: 'H3'; value: 'h3' },
						{ label: 'H4'; value: 'h4' },
						{ label: 'H5'; value: 'h5' },
						{ label: 'H6'; value: 'h6' }
					]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Heading.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A basic image tag */
	export interface IImage {
		/** Id. */
		id?: string | undefined | null
		/** Src. Where to pull the image from */
		src: string
		/** Alt. Rendered as the alt tag for hovers */
		alt?: string | undefined | null

		width?: number | undefined | null

		height?: number | undefined | null

		className?: string | undefined | null
	}
}

export namespace SpruceSchemas.Local.Image {
	/** The interface for the schema definition for a Image */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'Image'
		name: 'Image'
		description: 'A basic image tag'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Src. Where to pull the image from */
			src: {
				label: 'Src'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Where to pull the image from'
				options: undefined
			}
			/** Alt. Rendered as the alt tag for hovers */
			alt: {
				label: 'Alt'
				type: SpruceSchema.FieldType.Text
				hint: 'Rendered as the alt tag for hovers'
				options: undefined
			}
			/** . */
			width: {
				type: SpruceSchema.FieldType.Number
				options: undefined
			}
			/** . */
			height: {
				type: SpruceSchema.FieldType.Number
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Image.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Render markdown beautifully */
	export interface IMarkdown {
		/** Id. Unique ID for view caching. */
		id?: string | undefined | null
		/** Source. Markdown text to be rendered */
		source: string
	}
}

export namespace SpruceSchemas.Local.Markdown {
	/** The interface for the schema definition for a Markdown */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'markdown'
		name: 'Markdown'
		description: 'Render markdown beautifully'
		fields: {
			/** Id. Unique ID for view caching. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				hint: 'Unique ID for view caching.'
				options: undefined
			}
			/** Source. Markdown text to be rendered */
			source: {
				label: 'Source'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Markdown text to be rendered'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Markdown.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Holds buttons and spans the top or bottom of the screen. */
	export interface ISaveBar {
		/** Message. Show a custom message across the bar */
		message?: string | undefined | null
		/** Visible. */
		isVisible?: boolean | undefined | null
		/** Disable discard. */
		isDiscardDisabled?: boolean | undefined | null
		/** Disable save. */
		isSaveDisabled?: boolean | undefined | null
		/** Discard in progress. */
		isDiscarding?: boolean | undefined | null
		/** Save in progress. */
		isSaving?: boolean | undefined | null
		/** Discard handler. */
		onDiscard?: ((e: React.MouseEvent<Element>) => void) | undefined | null
		/** Save handler. */
		onSave?: ((e: React.MouseEvent<Element>) => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.SaveBar {
	/** The interface for the schema definition for a Save bar */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'saveBar'
		name: 'Save bar'
		description: 'Holds buttons and spans the top or bottom of the screen.'
		fields: {
			/** Message. Show a custom message across the bar */
			message: {
				label: 'Message'
				type: SpruceSchema.FieldType.Text
				hint: 'Show a custom message across the bar'
				defaultValue: 'Unsaved changes'
				options: undefined
			}
			/** Visible. */
			isVisible: {
				label: 'Visible'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Disable discard. */
			isDiscardDisabled: {
				label: 'Disable discard'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Disable save. */
			isSaveDisabled: {
				label: 'Disable save'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Discard in progress. */
			isDiscarding: {
				label: 'Discard in progress'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Save in progress. */
			isSaving: {
				label: 'Save in progress'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Discard handler. */
			onDiscard: {
				label: 'Discard handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
			/** Save handler. */
			onSave: {
				label: 'Save handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SaveBar.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Defaults to h2 */
	export interface ISubheading {
		/** Id. */
		id?: string | undefined | null
		/** Html. HTML rendered directly */
		html?: string | undefined | null
		/** Text. Text rendered in the header */
		text?: string | undefined | null

		className?: string | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Weight. The weight of the sub heading, H2 and beyond */
		weight?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') | undefined | null
	}
}

export namespace SpruceSchemas.Local.Subheading {
	/** The interface for the schema definition for a Subheading */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'subheading'
		name: 'Subheading'
		description: 'Defaults to h2'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Html. HTML rendered directly */
			html: {
				label: 'Html'
				type: SpruceSchema.FieldType.Text
				hint: 'HTML rendered directly'
				options: undefined
			}
			/** Text. Text rendered in the header */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Text rendered in the header'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Weight. The weight of the sub heading, H2 and beyond */
			weight: {
				label: 'Weight'
				type: SpruceSchema.FieldType.Select
				hint: 'The weight of the sub heading, H2 and beyond'
				defaultValue: 'h2'
				options: {
					choices: [
						{ label: 'H1'; value: 'h1' },
						{ label: 'H2'; value: 'h2' },
						{ label: 'H3'; value: 'h3' },
						{ label: 'H4'; value: 'h4' },
						{ label: 'H5'; value: 'h5' },
						{ label: 'H6'; value: 'h6' }
					]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Subheading.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A tabs control */
	export interface ITab {
		/** Text. The text shown on the tab */
		text: string
		/** Icon. An icon shown on the tab next to the text */
		icon?: SpruceSchemas.Local.IIcon | undefined | null

		AnchorComponent?: React.ElementType | undefined | null
		/** Is current. Is the currently selected tab */
		isCurrent?: boolean | undefined | null

		className?: string | undefined | null
		/** Panel. Rendered as the body of the selected tab */
		panel?: generated_import_3.INodeFieldDefinitionValue | undefined | null
	}
}

export namespace SpruceSchemas.Local.Tab {
	/** The interface for the schema definition for a Tab */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'tab'
		name: 'Tab'
		description: 'A tabs control'
		fields: {
			/** Text. The text shown on the tab */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'The text shown on the tab'
				options: undefined
			}
			/** Icon. An icon shown on the tab next to the text */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'An icon shown on the tab next to the text'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** . */
			AnchorComponent: {
				type: SpruceSchema.FieldType.ElementType
				options: undefined
			}
			/** Is current. Is the currently selected tab */
			isCurrent: {
				label: 'Is current'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is the currently selected tab'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Panel. Rendered as the body of the selected tab */
			panel: {
				label: 'Panel'
				type: SpruceSchema.FieldType.Node
				hint: 'Rendered as the body of the selected tab'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Tab.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A tabs control */
	export interface ITabs {
		/** Tabs. */
		tabs: SpruceSchemas.Local.ITab[]
		/** Horizontal padding. Adds horizontal padding */
		isPadded?: boolean | undefined | null
		/** Truncate tabs. Should tabs render 3 dots if they all don't fit */
		isTruncatable?: boolean | undefined | null

		className?: string | undefined | null
	}
}

export namespace SpruceSchemas.Local.Tabs {
	/** The interface for the schema definition for a Tabs */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'tabs'
		name: 'Tabs'
		description: 'A tabs control'
		fields: {
			/** Tabs. */
			tabs: {
				label: 'Tabs'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				isArray: true
				options: { schemas: SpruceSchemas.Local.Tab.IDefinition[] }
			}
			/** Horizontal padding. Adds horizontal padding */
			isPadded: {
				label: 'Horizontal padding'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Adds horizontal padding'
				options: undefined
			}
			/** Truncate tabs. Should tabs render 3 dots if they all don't fit */
			isTruncatable: {
				label: 'Truncate tabs'
				type: SpruceSchema.FieldType.Boolean
				hint: "Should tabs render 3 dots if they all don't fit"
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Tabs.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Basic text to be rendered */
	export interface IText {
		/** Id. */
		id?: string | undefined | null
		/** Text. the text to render, supports {{handlebars}} and pulls off {{context}} */
		text?: string | undefined | null

		className?: string | undefined | null
		/** Inline. If true, renders text in a <span /> vs a <p /> */
		isInline?: boolean | undefined | null
		/** Context. A key/value pair used to populate the {{handlebars}} placeholders of the text prop */
		context?: Record<string, any> | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
	}
}

export namespace SpruceSchemas.Local.Text {
	/** The interface for the schema definition for a Text */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'text'
		name: 'Text'
		description: 'Basic text to be rendered'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Text. the text to render, supports {{handlebars}} and pulls off {{context}} */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'the text to render, supports {{handlebars}} and pulls off {{context}}'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Inline. If true, renders text in a <span /> vs a <p /> */
			isInline: {
				label: 'Inline'
				type: SpruceSchema.FieldType.Boolean
				hint: 'If true, renders text in a <span /> vs a <p />'
				defaultValue: false
				options: undefined
			}
			/** Context. A key/value pair used to populate the {{handlebars}} placeholders of the text prop */
			context: {
				label: 'Context'
				type: SpruceSchema.FieldType.Raw
				hint: 'A key/value pair used to populate the {{handlebars}} placeholders of the text prop'
				options: { valueType: `Record<string, any>` }
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Text.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** The header of a list */
	export interface IListHeader {
		/** Title. Title to render in the header */
		title: string
		/** Subtitle. Optional subtitle text */
		subtitle?: string | undefined | null
		/** Is small. Set true for small lists */
		isSmall?: boolean | undefined | null
		/** Buttons. Buttons to associate with the list header */
		buttons?: SpruceSchemas.Local.IButton[] | undefined | null
	}
}

export namespace SpruceSchemas.Local.ListHeader {
	/** The interface for the schema definition for a List header */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'listHeader'
		name: 'List header'
		description: 'The header of a list'
		fields: {
			/** Title. Title to render in the header */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Title to render in the header'
				options: undefined
			}
			/** Subtitle. Optional subtitle text */
			subtitle: {
				label: 'Subtitle'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional subtitle text'
				options: undefined
			}
			/** Is small. Set true for small lists */
			isSmall: {
				label: 'Is small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true for small lists'
				defaultValue: false
				options: undefined
			}
			/** Buttons. Buttons to associate with the list header */
			buttons: {
				label: 'Buttons'
				type: SpruceSchema.FieldType.Schema
				hint: 'Buttons to associate with the list header'
				isArray: true
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ListHeader.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A great way to render a on/off style question or control */
	export interface IToggle {
		/** Id. */
		id?: string | undefined | null
		/** Name. */
		name?: string | undefined | null

		className?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
		/** On click. Optional on click to invoke when tapped */
		onClick?:
			| ((e: React.MouseEvent<HTMLInputElement>) => void)
			| undefined
			| null
	}
}

export namespace SpruceSchemas.Local.Toggle {
	/** The interface for the schema definition for a Toggle */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'Toggle'
		name: 'Toggle'
		description: 'A great way to render a on/off style question or control'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
			/** On click. Optional on click to invoke when tapped */
			onClick: {
				label: 'On click'
				type: SpruceSchema.FieldType.EventCallback
				hint: 'Optional on click to invoke when tapped'
				options: { event: `React.MouseEvent<...>`; element: `HTMLInputElement` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Toggle.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A radio control. Give a bunch the same name to keep them as part of the same group */
	export interface IListItemRadio {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Id. */
		id: string
		/** Name. A name attached to this radio button */
		name?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Is disabled. is this control disabled? */
		isDisabled?: boolean | undefined | null
		/** Is checked. Is this control checked? */
		isChecked?: boolean | undefined | null

		className?: string | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
	}
}

export namespace SpruceSchemas.Local.ListItemRadio {
	/** The interface for the schema definition for a Radio */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'listItemRadio'
		name: 'Radio'
		description: 'A radio control. Give a bunch the same name to keep them as part of the same group'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				isRequired: true
				options: undefined
			}
			/** Name. A name attached to this radio button */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				hint: 'A name attached to this radio button'
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Is disabled. is this control disabled? */
			isDisabled: {
				label: 'Is disabled'
				type: SpruceSchema.FieldType.Boolean
				hint: 'is this control disabled?'
				options: undefined
			}
			/** Is checked. Is this control checked? */
			isChecked: {
				label: 'Is checked'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is this control checked?'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ListItemRadio.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A checkbox! */
	export interface IListItemCheckbox {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null

		id: string
		/** Name. */
		name?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Disabled. */
		isDisabled?: boolean | undefined | null
		/** Indeterminate. Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it. */
		isIndeterminate?: boolean | undefined | null
		/** Checked. */
		isChecked?: boolean | undefined | null

		className?: string | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
	}
}

export namespace SpruceSchemas.Local.ListItemCheckbox {
	/** The interface for the schema definition for a Checkbox */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'listItemCheckbox'
		name: 'Checkbox'
		description: 'A checkbox!'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
			/** . */
			id: {
				type: SpruceSchema.FieldType.Id
				isRequired: true
				options: undefined
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Disabled. */
			isDisabled: {
				label: 'Disabled'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Indeterminate. Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it. */
			isIndeterminate: {
				label: 'Indeterminate'
				type: SpruceSchema.FieldType.Boolean
				hint: "Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it."
				options: undefined
			}
			/** Checked. */
			isChecked: {
				label: 'Checked'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.ListItemCheckbox.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** A warning message that can go on a list item */
	export interface IListItemWarning {
		/** Title. */
		title?: boolean | undefined | null
		/** Subtitle. */
		subtitle?: boolean | undefined | null
		/** Note. */
		note?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.ListItemWarning {
	/** The interface for the schema definition for a List item warning */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'listItemWarning'
		name: 'List item warning'
		description: 'A warning message that can go on a list item'
		fields: {
			/** Title. */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Subtitle. */
			subtitle: {
				label: 'Subtitle'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Note. */
			note: {
				label: 'Note'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ListItemWarning.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A list of information or inputs */
	export interface IList {
		/** Id. */
		id?: string | undefined | null
		/** Header. List Header */
		header?: SpruceSchemas.Local.IListHeader | undefined | null
		/** Items. List items */
		items: SpruceSchemas.Local.IExpandableListItem[]
		/** Is small. Set true to make the list smaller */
		isSmall?: boolean | undefined | null
		/** Are separators visible. Set to true to show separators between list items */
		areSeparatorsVisible?: boolean | undefined | null
		/** Class name. */
		className?: string | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Is loading. Show loading */
		isLoading?: boolean | undefined | null
		/** Selectable. Optional: set whether to use checkbox or radio for selectable list items */
		selectable?:
			| { schemaId: 'checkbox'; values: SpruceSchemas.Local.ICheckbox }
			| { schemaId: 'radio'; values: SpruceSchemas.Local.IRadio }
			| undefined
			| null
		/** Click handler. */
		onClick?: ((e: React.MouseEvent<HTMLDivElement>) => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.List {
	/** The interface for the schema definition for a List */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'list'
		name: 'List'
		description: 'A list of information or inputs'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Header. List Header */
			header: {
				label: 'Header'
				type: SpruceSchema.FieldType.Schema
				hint: 'List Header'
				options: { schemas: SpruceSchemas.Local.ListHeader.IDefinition[] }
			}
			/** Items. List items */
			items: {
				label: 'Items'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'List items'
				isArray: true
				options: {
					schemas: SpruceSchemas.Local.ExpandableListItem.IDefinition[]
				}
			}
			/** Is small. Set true to make the list smaller */
			isSmall: {
				label: 'Is small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to make the list smaller'
				options: undefined
			}
			/** Are separators visible. Set to true to show separators between list items */
			areSeparatorsVisible: {
				label: 'Are separators visible'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set to true to show separators between list items'
				defaultValue: true
				options: undefined
			}
			/** Class name. */
			className: {
				label: 'Class name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Is loading. Show loading */
			isLoading: {
				label: 'Is loading'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Show loading'
				options: undefined
			}
			/** Selectable. Optional: set whether to use checkbox or radio for selectable list items */
			selectable: {
				label: 'Selectable'
				type: SpruceSchema.FieldType.Schema
				hint: 'Optional: set whether to use checkbox or radio for selectable list items'
				options: {
					schemas: (
						| SpruceSchemas.Local.Checkbox.IDefinition
						| SpruceSchemas.Local.Radio.IDefinition
					)[]
				}
			}
			/** Click handler. */
			onClick: {
				label: 'Click handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.MouseEvent<...>`; element: `HTMLDivElement` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.List.IDefinition>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface IExpandableListItem {
		/** Id. */
		id?: string | undefined | null
		/** Title. Title text */
		title: string
		/** Subtitle. Optional subtitle text */
		subtitle?: string | undefined | null
		/** Note. Optional note text */
		note?: string | undefined | null
		/** Expandable. Enables a little disclosure triangle to hide/show the item */
		isExpandable?: boolean | undefined | null
		/** Avatar. */
		avatar?: SpruceSchemas.Local.IAvatar | undefined | null
		/** Image. */
		image?: SpruceSchemas.Local.IImage | undefined | null
		/** Icon. Inline svg icon */
		icon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Is icon hidden. Optional; visually hides the icon without removing it */
		isIconHidden?: boolean | undefined | null
		/** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
		isLeftIndented?: boolean | undefined | null
		/** Is draggable. Set true when the list can be reordered */
		isDraggable?: boolean | undefined | null
		/** Is disabled. Set true when the list can be reordered */
		isDisabled?: boolean | undefined | null
		/** Toggle props. Props passed to the toggle if toggleId is set */
		toggle?: SpruceSchemas.Local.IToggle | undefined | null
		/** Primary button. A primary button that turns the entire list item into a clickable button */
		primaryButton?: SpruceSchemas.Local.IButton | undefined | null
		/** Buttons. Additional buttons that get dropped into this item */
		buttons?: SpruceSchemas.Local.IButton[] | undefined | null
		/** Context menu. Context Menu associated with the list it */
		contextMenu?: SpruceSchemas.Local.IContextMenu | undefined | null
		/** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
		isSeparatorVisible?: boolean | undefined | null
		/** Class name. Optional class name for list item */
		className?: string | undefined | null
		/** Loading. Makes the item look like a loading placeholder */
		isLoading?: boolean | undefined | null
		/** Selectable element. Any props you want sent down to the selectable component being rendered */
		selectable?:
			| {
					schemaId: 'listItemRadio'
					values: SpruceSchemas.Local.IListItemRadio
			  }
			| {
					schemaId: 'listItemCheckbox'
					values: SpruceSchemas.Local.IListItemCheckbox
			  }
			| undefined
			| null
		/** Warnings. Highlight title, subtitle, note with warning colors */
		warnings?: SpruceSchemas.Local.IListItemWarning | undefined | null
		/** List. Optional; adds a nested list */
		list?: SpruceSchemas.Local.IList | undefined | null
		/** Lists. Optional; adds multiple lists nested at the same level */
		lists?: SpruceSchemas.Local.IList[] | undefined | null

		onClick?: ((e: React.MouseEvent<HTMLDivElement>) => void) | undefined | null
		/** Expanded. If Expandable is true, will open or close the item */
		isExpanded?: boolean | undefined | null
		/** Collapsed icon. */
		collapsedIcon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Expanded icon. */
		expandedIcon?: SpruceSchemas.Local.IIcon | undefined | null
	}
}

export namespace SpruceSchemas.Local.ExpandableListItem {
	/** The interface for the schema definition for a Expandable list item */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'expandableListItem'
		name: 'Expandable list item'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Title. Title text */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Title text'
				options: undefined
			}
			/** Subtitle. Optional subtitle text */
			subtitle: {
				label: 'Subtitle'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional subtitle text'
				options: undefined
			}
			/** Note. Optional note text */
			note: {
				label: 'Note'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional note text'
				options: undefined
			}
			/** Expandable. Enables a little disclosure triangle to hide/show the item */
			isExpandable: {
				label: 'Expandable'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Enables a little disclosure triangle to hide/show the item'
				options: undefined
			}
			/** Avatar. */
			avatar: {
				label: 'Avatar'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Avatar.IDefinition[] }
			}
			/** Image. */
			image: {
				label: 'Image'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Image.IDefinition[] }
			}
			/** Icon. Inline svg icon */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'Inline svg icon'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Is icon hidden. Optional; visually hides the icon without removing it */
			isIconHidden: {
				label: 'Is icon hidden'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Optional; visually hides the icon without removing it'
				options: undefined
			}
			/** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
			isLeftIndented: {
				label: 'Is left indented'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to add left spacing. useful in aligning with other list items that have icons or images'
				options: undefined
			}
			/** Is draggable. Set true when the list can be reordered */
			isDraggable: {
				label: 'Is draggable'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true when the list can be reordered'
				options: undefined
			}
			/** Is disabled. Set true when the list can be reordered */
			isDisabled: {
				label: 'Is disabled'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true when the list can be reordered'
				options: undefined
			}
			/** Toggle props. Props passed to the toggle if toggleId is set */
			toggle: {
				label: 'Toggle props'
				type: SpruceSchema.FieldType.Schema
				hint: 'Props passed to the toggle if toggleId is set'
				options: { schemas: SpruceSchemas.Local.Toggle.IDefinition[] }
			}
			/** Primary button. A primary button that turns the entire list item into a clickable button */
			primaryButton: {
				label: 'Primary button'
				type: SpruceSchema.FieldType.Schema
				hint: 'A primary button that turns the entire list item into a clickable button'
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Buttons. Additional buttons that get dropped into this item */
			buttons: {
				label: 'Buttons'
				type: SpruceSchema.FieldType.Schema
				hint: 'Additional buttons that get dropped into this item'
				isArray: true
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Context menu. Context Menu associated with the list it */
			contextMenu: {
				label: 'Context menu'
				type: SpruceSchema.FieldType.Schema
				hint: 'Context Menu associated with the list it'
				options: { schemas: SpruceSchemas.Local.ContextMenu.IDefinition[] }
			}
			/** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
			isSeparatorVisible: {
				label: 'Is separator visible'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set to true to show separator for this list item if followed by another list item.'
				options: undefined
			}
			/** Class name. Optional class name for list item */
			className: {
				label: 'Class name'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional class name for list item'
				options: undefined
			}
			/** Loading. Makes the item look like a loading placeholder */
			isLoading: {
				label: 'Loading'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Makes the item look like a loading placeholder'
				options: undefined
			}
			/** Selectable element. Any props you want sent down to the selectable component being rendered */
			selectable: {
				label: 'Selectable element'
				type: SpruceSchema.FieldType.Schema
				hint: 'Any props you want sent down to the selectable component being rendered'
				options: {
					schemas: (
						| SpruceSchemas.Local.ListItemRadio.IDefinition
						| SpruceSchemas.Local.ListItemCheckbox.IDefinition
					)[]
				}
			}
			/** Warnings. Highlight title, subtitle, note with warning colors */
			warnings: {
				label: 'Warnings'
				type: SpruceSchema.FieldType.Schema
				hint: 'Highlight title, subtitle, note with warning colors'
				options: { schemas: SpruceSchemas.Local.ListItemWarning.IDefinition[] }
			}
			/** List. Optional; adds a nested list */
			list: {
				label: 'List'
				type: SpruceSchema.FieldType.Schema
				hint: 'Optional; adds a nested list'
				options: { schemas: SpruceSchemas.Local.List.IDefinition[] }
			}
			/** Lists. Optional; adds multiple lists nested at the same level */
			lists: {
				label: 'Lists'
				type: SpruceSchema.FieldType.Schema
				hint: 'Optional; adds multiple lists nested at the same level'
				isArray: true
				options: { schemas: SpruceSchemas.Local.List.IDefinition[] }
			}
			/** . */
			onClick: {
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.MouseEvent<...>`; element: `HTMLDivElement` }
			}
			/** Expanded. If Expandable is true, will open or close the item */
			isExpanded: {
				label: 'Expanded'
				type: SpruceSchema.FieldType.Boolean
				hint: 'If Expandable is true, will open or close the item'
				options: undefined
			}
			/** Collapsed icon. */
			collapsedIcon: {
				label: 'Collapsed icon'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Expanded icon. */
			expandedIcon: {
				label: 'Expanded icon'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.ExpandableListItem.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** For hints and error messages after inputs (if both set, only error shows) */
	export interface IInputHelper {
		/** Hint. */
		hint?: string | undefined | null
		/** Error message. */
		error?: string | undefined | null

		className?: string | undefined | null

		htmlFor?: string | undefined | null

		ElementTag?: ('p' | 'label') | undefined | null
	}
}

export namespace SpruceSchemas.Local.InputHelper {
	/** The interface for the schema definition for a Input helper */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'inputHelper'
		name: 'Input helper'
		description: 'For hints and error messages after inputs (if both set, only error shows)'
		fields: {
			/** Hint. */
			hint: {
				label: 'Hint'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Error message. */
			error: {
				label: 'Error message'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			htmlFor: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			ElementTag: {
				type: SpruceSchema.FieldType.Select
				defaultValue: 'p'
				options: {
					choices: [
						{ value: 'p'; label: '<p/>' },
						{ value: 'label'; label: '<label/>' }
					]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.InputHelper.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A checkbox! */
	export interface ICheckbox {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null

		id?: string | undefined | null
		/** Name. */
		name?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Disabled. */
		isDisabled?: boolean | undefined | null
		/** Indeterminate. Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it. */
		isIndeterminate?: boolean | undefined | null
		/** Checked. */
		isChecked?: boolean | undefined | null

		className?: string | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
	}
}

export namespace SpruceSchemas.Local.Checkbox {
	/** The interface for the schema definition for a Checkbox */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'checkbox'
		name: 'Checkbox'
		description: 'A checkbox!'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
			/** . */
			id: {
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Disabled. */
			isDisabled: {
				label: 'Disabled'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Indeterminate. Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it. */
			isIndeterminate: {
				label: 'Indeterminate'
				type: SpruceSchema.FieldType.Boolean
				hint: "Is showing that half checked state you've seen on checkboxes. It generally has a horizontal line through it."
				options: undefined
			}
			/** Checked. */
			isChecked: {
				label: 'Checked'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Checkbox.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A radio control. Give a bunch the same name to keep them as part of the same group */
	export interface IRadio {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Id. */
		id?: string | undefined | null
		/** Name. A name attached to this radio button */
		name?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Is disabled. is this control disabled? */
		isDisabled?: boolean | undefined | null
		/** Is checked. Is this control checked? */
		isChecked?: boolean | undefined | null

		className?: string | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
	}
}

export namespace SpruceSchemas.Local.Radio {
	/** The interface for the schema definition for a Radio */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'radio'
		name: 'Radio'
		description: 'A radio control. Give a bunch the same name to keep them as part of the same group'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Name. A name attached to this radio button */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				hint: 'A name attached to this radio button'
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Is disabled. is this control disabled? */
			isDisabled: {
				label: 'Is disabled'
				type: SpruceSchema.FieldType.Boolean
				hint: 'is this control disabled?'
				options: undefined
			}
			/** Is checked. Is this control checked? */
			isChecked: {
				label: 'Is checked'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is this control checked?'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Radio.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A button with a dropdown of actions on the right */
	export interface ISplitButton {
		/** Id. */
		id?: string | undefined | null
		/** Default action. The main action readily surfaced to the user */
		defaultButton: SpruceSchemas.Local.IButton
		/** Actions. All the secondary nested buttons */
		buttons?: SpruceSchemas.Local.IButton[] | undefined | null
		/** Kind. Sets the visual hierarchy of the button */
		kind?: ('primary' | 'secondary' | 'simple' | 'caution') | undefined | null
		/** Is full width. Set true to fill the parent's width */
		isFullWidth?: boolean | undefined | null
		/** Is small. Sets the visual hierarchy of the button */
		isSmall?: boolean | undefined | null
		/** Click handler. */
		onClick?: ((e: React.MouseEvent<Element>) => void) | undefined | null
		/** Portal. Render in a react-portal, not sure why this is needed or not just always true */
		usePortal?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.SplitButton {
	/** The interface for the schema definition for a Split button */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'splitButton'
		name: 'Split button'
		description: 'A button with a dropdown of actions on the right'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Default action. The main action readily surfaced to the user */
			defaultButton: {
				label: 'Default action'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'The main action readily surfaced to the user'
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Actions. All the secondary nested buttons */
			buttons: {
				label: 'Actions'
				type: SpruceSchema.FieldType.Schema
				hint: 'All the secondary nested buttons'
				defaultValue: []
				isArray: true
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Kind. Sets the visual hierarchy of the button */
			kind: {
				label: 'Kind'
				type: SpruceSchema.FieldType.Select
				hint: 'Sets the visual hierarchy of the button'
				options: {
					choices: [
						{ label: 'Primary'; value: 'primary' },
						{ label: 'Secondary'; value: 'secondary' },
						{ label: 'Simple'; value: 'simple' },
						{ label: 'Caution'; value: 'caution' }
					]
				}
			}
			/** Is full width. Set true to fill the parent's width */
			isFullWidth: {
				label: 'Is full width'
				type: SpruceSchema.FieldType.Boolean
				hint: "Set true to fill the parent's width"
				options: undefined
			}
			/** Is small. Sets the visual hierarchy of the button */
			isSmall: {
				label: 'Is small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Sets the visual hierarchy of the button'
				options: undefined
			}
			/** Click handler. */
			onClick: {
				label: 'Click handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
			/** Portal. Render in a react-portal, not sure why this is needed or not just always true */
			usePortal: {
				label: 'Portal'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Render in a react-portal, not sure why this is needed or not just always true'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SplitButton.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Header of a card */
	export interface ICardHeader {
		/** Title. Title for the card */
		title?: string | undefined | null
		/** Label text. Optional label to show above title */
		labelText?: string | undefined | null
		/** Label icon. Optional icon to show above the title and before the label */
		labelIcon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Buttons. Render buttons in the Card Header */
		buttons?: SpruceSchemas.Local.IButton[] | undefined | null
		/** Context menu. Renders a Context Menu in the Card Header */
		contextMenu?: SpruceSchemas.Local.IContextMenu | undefined | null
	}
}

export namespace SpruceSchemas.Local.CardHeader {
	/** The interface for the schema definition for a cardHeader */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'CardHeader'
		name: 'cardHeader'
		description: 'Header of a card'
		fields: {
			/** Title. Title for the card */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				hint: 'Title for the card'
				options: undefined
			}
			/** Label text. Optional label to show above title */
			labelText: {
				label: 'Label text'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional label to show above title'
				options: undefined
			}
			/** Label icon. Optional icon to show above the title and before the label */
			labelIcon: {
				label: 'Label icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'Optional icon to show above the title and before the label'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Buttons. Render buttons in the Card Header */
			buttons: {
				label: 'Buttons'
				type: SpruceSchema.FieldType.Schema
				hint: 'Render buttons in the Card Header'
				isArray: true
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Context menu. Renders a Context Menu in the Card Header */
			contextMenu: {
				label: 'Context menu'
				type: SpruceSchema.FieldType.Schema
				hint: 'Renders a Context Menu in the Card Header'
				options: { schemas: SpruceSchemas.Local.ContextMenu.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.CardHeader.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Header of a card */
	export interface IOnboardingCardStep {
		/** Id. */
		id?: string | undefined | null
		/** Tab title. Title that shows in the tab */
		tabTitle: string
		/** Tab icon. Icon for the tab */
		tabIcon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Panel title. Title that shows in the panel */
		panelTitle: string
		/** Panel text. Copy describing the step in the card's body */
		panelCopy: string
		/** Panel CTA. Primary CTA of this step */
		panelCTA?: SpruceSchemas.Local.IButton | undefined | null
		/** Is complete. Is this step complete? */
		isComplete?: boolean | undefined | null

		className?: string | undefined | null
	}
}

export namespace SpruceSchemas.Local.OnboardingCardStep {
	/** The interface for the schema definition for a OnboardingCardStep */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'onboardingCardStep'
		name: 'OnboardingCardStep'
		description: 'Header of a card'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Tab title. Title that shows in the tab */
			tabTitle: {
				label: 'Tab title'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Title that shows in the tab'
				options: undefined
			}
			/** Tab icon. Icon for the tab */
			tabIcon: {
				label: 'Tab icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'Icon for the tab'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Panel title. Title that shows in the panel */
			panelTitle: {
				label: 'Panel title'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Title that shows in the panel'
				options: undefined
			}
			/** Panel text. Copy describing the step in the card's body */
			panelCopy: {
				label: 'Panel text'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: "Copy describing the step in the card's body"
				options: undefined
			}
			/** Panel CTA. Primary CTA of this step */
			panelCTA: {
				label: 'Panel CTA'
				type: SpruceSchema.FieldType.Schema
				hint: 'Primary CTA of this step'
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Is complete. Is this step complete? */
			isComplete: {
				label: 'Is complete'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is this step complete?'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.OnboardingCardStep.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** Header of a card */
	export interface IOnboardingCard {
		/** Title. Title of the entire card */
		title?: string | undefined | null
		/** Steps. Steps for onboarding */
		steps: SpruceSchemas.Local.IOnboardingCardStep[]
	}
}

export namespace SpruceSchemas.Local.OnboardingCard {
	/** The interface for the schema definition for a OnboardingCard */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'OnboardingCard'
		name: 'OnboardingCard'
		description: 'Header of a card'
		fields: {
			/** Title. Title of the entire card */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				hint: 'Title of the entire card'
				options: undefined
			}
			/** Steps. Steps for onboarding */
			steps: {
				label: 'Steps'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'Steps for onboarding'
				isArray: true
				options: {
					schemas: SpruceSchemas.Local.OnboardingCardStep.IDefinition[]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.OnboardingCard.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Header of a card */
	export interface IScoreCard {
		/** Scores. */
		scores: SpruceSchemas.Local.IScoreCardPanel[]
	}
}

export namespace SpruceSchemas.Local.ScoreCard {
	/** The interface for the schema definition for a ScoreCard */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'ScoreCard'
		name: 'ScoreCard'
		description: 'Header of a card'
		fields: {
			/** Scores. */
			scores: {
				label: 'Scores'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				isArray: true
				options: { schemas: SpruceSchemas.Local.ScoreCardPanel.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ScoreCard.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Call out information so it&#x27;s impossible to miss! */
	export interface IToast {
		/** Headline. Headline text */
		headline: string
		/** Remove action. Action to be invoked when hitting the dismiss button */
		onClickDismiss?: ((e: React.MouseEvent<Element>) => void) | undefined | null
		/** Id. Unique id for UI caching */
		id: string
		/** Text. Optional; Text after the headline */
		text?: string | undefined | null
		/** Kind. Sets the variation of toast */
		kind?: string | undefined | null
		/** Followup text. Text for the followup action */
		followupText?: string | undefined | null
		/** Followup handler. Callback to be invoked when hitting the followup CTA */
		onClickFollowup?:
			| ((e: React.MouseEvent<Element>) => void)
			| undefined
			| null
		/** Remove handler. Callback invoked when remove is clicked (cannot block the removal) */
		onRemove?: ((e: React.MouseEvent<Element>) => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.Toast {
	/** The interface for the schema definition for a Toast */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'toast'
		name: 'Toast'
		description: "Call out information so it's impossible to miss!"
		fields: {
			/** Headline. Headline text */
			headline: {
				label: 'Headline'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Headline text'
				options: undefined
			}
			/** Remove action. Action to be invoked when hitting the dismiss button */
			onClickDismiss: {
				label: 'Remove action'
				type: SpruceSchema.FieldType.EventCallback
				hint: 'Action to be invoked when hitting the dismiss button'
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
			/** Id. Unique id for UI caching */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				isRequired: true
				hint: 'Unique id for UI caching'
				options: undefined
			}
			/** Text. Optional; Text after the headline */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional; Text after the headline'
				options: undefined
			}
			/** Kind. Sets the variation of toast */
			kind: {
				label: 'Kind'
				type: SpruceSchema.FieldType.Text
				hint: 'Sets the variation of toast'
				options: undefined
			}
			/** Followup text. Text for the followup action */
			followupText: {
				label: 'Followup text'
				type: SpruceSchema.FieldType.Text
				hint: 'Text for the followup action'
				options: undefined
			}
			/** Followup handler. Callback to be invoked when hitting the followup CTA */
			onClickFollowup: {
				label: 'Followup handler'
				type: SpruceSchema.FieldType.EventCallback
				hint: 'Callback to be invoked when hitting the followup CTA'
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
			/** Remove handler. Callback invoked when remove is clicked (cannot block the removal) */
			onRemove: {
				label: 'Remove handler'
				type: SpruceSchema.FieldType.EventCallback
				hint: 'Callback invoked when remove is clicked (cannot block the removal)'
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Toast.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Hold all the information for creating body components */
	export interface ICardBuilderBody {
		/** Id. */
		id?: string | undefined | null
		/** Children. Children to show in the Card */
		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Is sectioned. Whether to wrap children in CardSection */
		isSectioned?: boolean | undefined | null
		/** Are section separators visible. Set true to display line separators between CardSection components */
		areSectionSeparatorsVisible?: boolean | undefined | null
		/** Has top padding. Does card include top padding */
		hasTopPadding?: boolean | undefined | null
		/** Has bottom padding. Does card include bottom padding */
		hasBottomPadding?: boolean | undefined | null
		/** Is full bleed. Set to true to remove horizontal padding */
		isFullBleed?: boolean | undefined | null
		/** Items. Children to show in the Card */
		items: (
			| { schemaId: 'button'; values: SpruceSchemas.Local.IButton }
			| { schemaId: 'image'; values: SpruceSchemas.Local.IImage }
			| { schemaId: 'heading'; values: SpruceSchemas.Local.IHeading }
			| { schemaId: 'text'; values: SpruceSchemas.Local.IText }
			| { schemaId: 'scoreCard'; values: SpruceSchemas.Local.IScoreCard }
			| { schemaId: 'toast'; values: SpruceSchemas.Local.IToast }
			| { schemaId: 'list'; values: SpruceSchemas.Local.IList }
		)[]
	}
}

export namespace SpruceSchemas.Local.CardBuilderBody {
	/** The interface for the schema definition for a Card builder body */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'cardBuilderBody'
		name: 'Card builder body'
		description: 'Hold all the information for creating body components'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Children. Children to show in the Card */
			children: {
				label: 'children'
				type: SpruceSchema.FieldType.Node
				hint: 'Children to show in the Card'
				options: undefined
			}
			/** Is sectioned. Whether to wrap children in CardSection */
			isSectioned: {
				label: 'Is sectioned'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Whether to wrap children in CardSection'
				defaultValue: true
				options: undefined
			}
			/** Are section separators visible. Set true to display line separators between CardSection components */
			areSectionSeparatorsVisible: {
				label: 'Are section separators visible'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to display line separators between CardSection components'
				defaultValue: true
				options: undefined
			}
			/** Has top padding. Does card include top padding */
			hasTopPadding: {
				label: 'Has top padding'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Does card include top padding'
				defaultValue: true
				options: undefined
			}
			/** Has bottom padding. Does card include bottom padding */
			hasBottomPadding: {
				label: 'Has bottom padding'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Does card include bottom padding'
				defaultValue: true
				options: undefined
			}
			/** Is full bleed. Set to true to remove horizontal padding */
			isFullBleed: {
				label: 'Is full bleed'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set to true to remove horizontal padding'
				options: undefined
			}
			/** Items. Children to show in the Card */
			items: {
				label: 'Items'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'Children to show in the Card'
				isArray: true
				options: {
					schemas: (
						| SpruceSchemas.Local.Button.IDefinition
						| SpruceSchemas.Local.Image.IDefinition
						| SpruceSchemas.Local.Heading.IDefinition
						| SpruceSchemas.Local.Text.IDefinition
						| SpruceSchemas.Local.ScoreCard.IDefinition
						| SpruceSchemas.Local.Toast.IDefinition
						| SpruceSchemas.Local.List.IDefinition
					)[]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.CardBuilderBody.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A group of buttons presented in a few cool ways (see kind) */
	export interface IButtonGroup {
		/** Buttons. */
		buttons: SpruceSchemas.Local.IButton[]
		/** Kind. Visual appearance of the group. */
		kind?: ('default' | 'segmented' | 'floating') | undefined | null
		/** Is full width. Set true to fill parent width */
		isFullWidth?: boolean | undefined | null
		/** Highlighted index. Index of the button that is currently highlighted, e.g. by arrow keys */
		highlightedIndex?: number | undefined | null

		onClick?:
			| ((e: React.MouseEvent<HTMLInputElement>) => void)
			| undefined
			| null
	}
}

export namespace SpruceSchemas.Local.ButtonGroup {
	/** The interface for the schema definition for a Button group */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'buttonGroup'
		name: 'Button group'
		description: 'A group of buttons presented in a few cool ways (see kind)'
		fields: {
			/** Buttons. */
			buttons: {
				label: 'Buttons'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				isArray: true
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Kind. Visual appearance of the group. */
			kind: {
				label: 'Kind'
				type: SpruceSchema.FieldType.Select
				hint: 'Visual appearance of the group.'
				options: {
					choices: [
						{ label: 'Default'; value: 'default' },
						{ label: 'Segmented'; value: 'segmented' },
						{ label: 'Floating'; value: 'floating' }
					]
				}
			}
			/** Is full width. Set true to fill parent width */
			isFullWidth: {
				label: 'Is full width'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to fill parent width'
				options: undefined
			}
			/** Highlighted index. Index of the button that is currently highlighted, e.g. by arrow keys */
			highlightedIndex: {
				label: 'Highlighted index'
				type: SpruceSchema.FieldType.Number
				hint: 'Index of the button that is currently highlighted, e.g. by arrow keys'
				options: undefined
			}
			/** . */
			onClick: {
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.MouseEvent<...>`; element: `HTMLInputElement` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ButtonGroup.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Footer used for the card builder */
	export interface ICardBuilderFooter {
		/** Button group. Render buttons in the Card Footer */
		buttonGroup?: SpruceSchemas.Local.IButtonGroup | undefined | null
		/** Helper. Helper for the footer */
		helper?: string | undefined | null
	}
}

export namespace SpruceSchemas.Local.CardBuilderFooter {
	/** The interface for the schema definition for a CardBuilder footer */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'cardBuilderFooter'
		name: 'CardBuilder footer'
		description: 'Footer used for the card builder'
		fields: {
			/** Button group. Render buttons in the Card Footer */
			buttonGroup: {
				label: 'Button group'
				type: SpruceSchema.FieldType.Schema
				hint: 'Render buttons in the Card Footer'
				options: { schemas: SpruceSchemas.Local.ButtonGroup.IDefinition[] }
			}
			/** Helper. Helper for the footer */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Text
				hint: 'Helper for the footer'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.CardBuilderFooter.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** Build a card to show something to the user */
	export interface ICardBuilder {
		/** Id. */
		id?: string | undefined | null
		/** Header. Card Header props */
		header?: SpruceSchemas.Local.ICardHeader | undefined | null
		/** Header image. optionally pass props to an image tag to be rendered in the header */
		headerImage?: SpruceSchemas.Local.IImage | undefined | null
		/** Onboarding. all onboarding props */
		onboarding?: SpruceSchemas.Local.IOnboardingCard | undefined | null
		/** Body. Card Body props */
		body?: SpruceSchemas.Local.ICardBuilderBody | undefined | null
		/** Footer. The footer of the card */
		footer?: SpruceSchemas.Local.ICardBuilderFooter | undefined | null
	}
}

export namespace SpruceSchemas.Local.CardBuilder {
	/** The interface for the schema definition for a CardBuilder */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'cardBuilder'
		name: 'CardBuilder'
		description: 'Build a card to show something to the user'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Header. Card Header props */
			header: {
				label: 'Header'
				type: SpruceSchema.FieldType.Schema
				hint: 'Card Header props'
				options: { schemas: SpruceSchemas.Local.CardHeader.IDefinition[] }
			}
			/** Header image. optionally pass props to an image tag to be rendered in the header */
			headerImage: {
				label: 'Header image'
				type: SpruceSchema.FieldType.Schema
				hint: 'optionally pass props to an image tag to be rendered in the header'
				options: { schemas: SpruceSchemas.Local.Image.IDefinition[] }
			}
			/** Onboarding. all onboarding props */
			onboarding: {
				label: 'Onboarding'
				type: SpruceSchema.FieldType.Schema
				hint: 'all onboarding props'
				options: { schemas: SpruceSchemas.Local.OnboardingCard.IDefinition[] }
			}
			/** Body. Card Body props */
			body: {
				label: 'Body'
				type: SpruceSchema.FieldType.Schema
				hint: 'Card Body props'
				options: { schemas: SpruceSchemas.Local.CardBuilderBody.IDefinition[] }
			}
			/** Footer. The footer of the card */
			footer: {
				label: 'Footer'
				type: SpruceSchema.FieldType.Schema
				hint: 'The footer of the card'
				options: {
					schemas: SpruceSchemas.Local.CardBuilderFooter.IDefinition[]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.CardBuilder.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Some front end components emit uiEnhancement events to allow skills to enhance them during presentation. */
	export interface IUIEnhancementSection {
		/** Id. The ID of the section that is acting as a placeholder for ui enhancements */
		id?: string | undefined | null
		/** Calendar event details items. Calendar items to add as enhancements */
		calendarEventDetailItems: (
			| { schemaId: 'list'; values: SpruceSchemas.Local.IList }
			| { schemaId: 'button'; values: SpruceSchemas.Local.IButton }
			| { schemaId: 'splitButton'; values: SpruceSchemas.Local.ISplitButton }
			| { schemaId: 'cardBuilder'; values: SpruceSchemas.Local.ICardBuilder }
			| { schemaId: 'toast'; values: SpruceSchemas.Local.IToast }
			| { schemaId: 'text'; values: SpruceSchemas.Local.IText }
			| { schemaId: 'markdown'; values: SpruceSchemas.Local.IMarkdown }
		)[]
		/** Card builder body items. Card builder items to add as enhancements */
		cardBuilderBodyItems: (
			| { schemaId: 'button'; values: SpruceSchemas.Local.IButton }
			| { schemaId: 'image'; values: SpruceSchemas.Local.IImage }
			| { schemaId: 'heading'; values: SpruceSchemas.Local.IHeading }
			| { schemaId: 'text'; values: SpruceSchemas.Local.IText }
			| { schemaId: 'scoreCard'; values: SpruceSchemas.Local.IScoreCard }
			| { schemaId: 'toast'; values: SpruceSchemas.Local.IToast }
			| { schemaId: 'list'; values: SpruceSchemas.Local.IList }
		)[]
		/** Context menu items. Context menu items to add as enhancements */
		contextMenuItems: SpruceSchemas.Local.IButton[]
	}
}

export namespace SpruceSchemas.Local.UIEnhancementSection {
	/** The interface for the schema definition for a User interface enhancement section */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'uIEnhancementSection'
		name: 'User interface enhancement section'
		description: 'Some front end components emit uiEnhancement events to allow skills to enhance them during presentation.'
		fields: {
			/** Id. The ID of the section that is acting as a placeholder for ui enhancements */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				hint: 'The ID of the section that is acting as a placeholder for ui enhancements'
				options: undefined
			}
			/** Calendar event details items. Calendar items to add as enhancements */
			calendarEventDetailItems: {
				label: 'Calendar event details items'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'Calendar items to add as enhancements'
				isArray: true
				options: {
					schemas: (
						| SpruceSchemas.Local.List.IDefinition
						| SpruceSchemas.Local.Button.IDefinition
						| SpruceSchemas.Local.SplitButton.IDefinition
						| SpruceSchemas.Local.CardBuilder.IDefinition
						| SpruceSchemas.Local.Toast.IDefinition
						| SpruceSchemas.Local.Text.IDefinition
						| SpruceSchemas.Local.Markdown.IDefinition
					)[]
				}
			}
			/** Card builder body items. Card builder items to add as enhancements */
			cardBuilderBodyItems: {
				label: 'Card builder body items'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'Card builder items to add as enhancements'
				isArray: true
				options: {
					schemas: (
						| SpruceSchemas.Local.Button.IDefinition
						| SpruceSchemas.Local.Image.IDefinition
						| SpruceSchemas.Local.Heading.IDefinition
						| SpruceSchemas.Local.Text.IDefinition
						| SpruceSchemas.Local.ScoreCard.IDefinition
						| SpruceSchemas.Local.Toast.IDefinition
						| SpruceSchemas.Local.List.IDefinition
					)[]
				}
			}
			/** Context menu items. Context menu items to add as enhancements */
			contextMenuItems: {
				label: 'Context menu items'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'Context menu items to add as enhancements'
				isArray: true
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.UIEnhancementSection.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** Avatar tied to a core user */
	export interface IUserAvatar {
		/** User. */
		user: SpruceSchemas.Core.IUser
		/** Source. */
		src: string
		/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
		alt: string
		/** Is large. True will show large variation of the avatar */
		isLarge?: boolean | undefined | null
		/** Is large. Align text and name center */
		isVertical?: boolean | undefined | null
		/** Show online indicator. Should I should the status indicator */
		showIndicator?: boolean | undefined | null
		/** Status. */
		status?: ('online' | 'offline') | undefined | null
		/** Name. */
		name?: string | undefined | null
		/** Text. Additional text to show below the name */
		text?: string | undefined | null
		/** Class name. Set the "class" attribute */
		className?: string | undefined | null
		/** Width. */
		width?: number | undefined | null
		/** Height. */
		height?: number | undefined | null
	}
}

export namespace SpruceSchemas.Local.UserAvatar {
	/** The interface for the schema definition for a User avatar */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'userAvatar'
		name: 'User avatar'
		description: 'Avatar tied to a core user'
		fields: {
			/** User. */
			user: {
				label: 'User'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				options: { schemas: SpruceSchemas.Core.User.IDefinition[] }
			}
			/** Source. */
			src: {
				label: 'Source'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
			alt: {
				label: 'Alternate text'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Provides alternative information for an image if a user for some reason cannot view it'
				options: undefined
			}
			/** Is large. True will show large variation of the avatar */
			isLarge: {
				label: 'Is large'
				type: SpruceSchema.FieldType.Boolean
				hint: 'True will show large variation of the avatar'
				options: undefined
			}
			/** Is large. Align text and name center */
			isVertical: {
				label: 'Is large'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Align text and name center'
				options: undefined
			}
			/** Show online indicator. Should I should the status indicator */
			showIndicator: {
				label: 'Show online indicator'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Should I should the status indicator'
				options: undefined
			}
			/** Status. */
			status: {
				label: 'Status'
				type: SpruceSchema.FieldType.Select
				options: {
					choices: [
						{ value: 'online'; label: 'Online' },
						{ value: 'offline'; label: 'Offline' }
					]
				}
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Text. Additional text to show below the name */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Additional text to show below the name'
				options: undefined
			}
			/** Class name. Set the "class" attribute */
			className: {
				label: 'Class name'
				type: SpruceSchema.FieldType.Text
				hint: 'Set the "class" attribute'
				options: undefined
			}
			/** Width. */
			width: {
				label: 'Width'
				type: SpruceSchema.FieldType.Number
				options: undefined
			}
			/** Height. */
			height: {
				label: 'Height'
				type: SpruceSchema.FieldType.Number
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.UserAvatar.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks. */
	export interface ICalendarEventBlock {
		/** Id. An optional identifier for this block */
		id?: string | undefined | null
		/** Title. Any title rendered on the event */
		title?: string | undefined | null
		/** Subtitle. Displayed right under the title */
		subtitle?: string | undefined | null
		/** Duration sec. How long this block is for, in seconds */
		durationSec: SpruceSchema.IDurationFieldValue
		/** Left icons. All the icons show on the left of the calendar event */
		leftIcons: SpruceSchemas.Local.IIcon[]
		/** Right icons. All the icons shown on the right of the calendar event */
		rightIcons: SpruceSchemas.Local.IIcon[]
		/** Is busy. Is the person associated to this event busy during this time (to keep from double booking)? */
		isBusy?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.CalendarEventBlock {
	/** The interface for the schema definition for a Calendar event block */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'calendarEventBlock'
		name: 'Calendar event block'
		description: 'A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks.'
		fields: {
			/** Id. An optional identifier for this block */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				hint: 'An optional identifier for this block'
				options: undefined
			}
			/** Title. Any title rendered on the event */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				hint: 'Any title rendered on the event'
				options: undefined
			}
			/** Subtitle. Displayed right under the title */
			subtitle: {
				label: 'Subtitle'
				type: SpruceSchema.FieldType.Text
				hint: 'Displayed right under the title'
				options: undefined
			}
			/** Duration sec. How long this block is for, in seconds */
			durationSec: {
				label: 'Duration sec'
				type: SpruceSchema.FieldType.Duration
				isRequired: true
				hint: 'How long this block is for, in seconds'
				options: undefined
			}
			/** Left icons. All the icons show on the left of the calendar event */
			leftIcons: {
				label: 'Left icons'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'All the icons show on the left of the calendar event'
				isArray: true
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Right icons. All the icons shown on the right of the calendar event */
			rightIcons: {
				label: 'Right icons'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'All the icons shown on the right of the calendar event'
				isArray: true
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Is busy. Is the person associated to this event busy during this time (to keep from double booking)? */
			isBusy: {
				label: 'Is busy'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is the person associated to this event busy during this time (to keep from double booking)?'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.CalendarEventBlock.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** All the details attached to an event. Shown on click of the event. */
	export interface ICalendarEventDetails {
		/** Id. An optional ID for this item; used to allow association with UI Enhancements */
		id?: string | undefined | null
		/** Loading. Hides everything while loading */
		isLoading?: boolean | undefined | null
		/** Items. The items that make up the event details */
		items: (
			| { schemaId: 'list'; values: SpruceSchemas.Local.IList }
			| { schemaId: 'button'; values: SpruceSchemas.Local.IButton }
			| { schemaId: 'splitButton'; values: SpruceSchemas.Local.ISplitButton }
			| { schemaId: 'cardBuilder'; values: SpruceSchemas.Local.ICardBuilder }
			| { schemaId: 'toast'; values: SpruceSchemas.Local.IToast }
			| { schemaId: 'text'; values: SpruceSchemas.Local.IText }
			| { schemaId: 'markdown'; values: SpruceSchemas.Local.IMarkdown }
		)[]
	}
}

export namespace SpruceSchemas.Local.CalendarEventDetails {
	/** The interface for the schema definition for a Calendar event details */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'calendarEventDetails'
		name: 'Calendar event details'
		description: 'All the details attached to an event. Shown on click of the event.'
		fields: {
			/** Id. An optional ID for this item; used to allow association with UI Enhancements */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Text
				hint: 'An optional ID for this item; used to allow association with UI Enhancements'
				options: undefined
			}
			/** Loading. Hides everything while loading */
			isLoading: {
				label: 'Loading'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Hides everything while loading'
				options: undefined
			}
			/** Items. The items that make up the event details */
			items: {
				label: 'Items'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'The items that make up the event details'
				isArray: true
				options: {
					schemas: (
						| SpruceSchemas.Local.List.IDefinition
						| SpruceSchemas.Local.Button.IDefinition
						| SpruceSchemas.Local.SplitButton.IDefinition
						| SpruceSchemas.Local.CardBuilder.IDefinition
						| SpruceSchemas.Local.Toast.IDefinition
						| SpruceSchemas.Local.Text.IDefinition
						| SpruceSchemas.Local.Markdown.IDefinition
					)[]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.CalendarEventDetails.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** How an event will be rendered in the calendar. Each time represents a standard state of an event. */
	export interface ICalendarEvent {
		/** Id. Id of the calendar event */
		id?: string | undefined | null
		/** Starts at. */
		startAt: SpruceSchema.IDateTimeFieldValue
		/** Collection. A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar */
		collection?: string | undefined | null
		/** Is resizable. Can this event be resized on the calendar? */
		isResizable?: boolean | undefined | null
		/** Kind. The kind on an event impacts it's visual representation */
		kind?:
			| (
					| 'default'
					| 'tentative'
					| 'active'
					| 'unavailable'
					| 'blocked'
					| 'upcoming'
					| 'past'
					| 'warn'
					| 'critical'
			  )
			| undefined
			| null
		/** Blocks. A calendar is comprised of blocks of time. You need at least 1 block to have a valid event. */
		blocks: SpruceSchemas.Local.ICalendarEventBlock[]
		/** Details. Additional details shown after someone taps on an event */
		details?: SpruceSchemas.Local.ICalendarEventDetails | undefined | null
		/** User id. The ID of the user this event will render under */
		userId: string
		/** Is draft. If this is a draft event (meaning it's not booked, but being setup) */
		isDraft?: boolean | undefined | null
		/** Has border. Should I render a border for this event? */
		hasBorder?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.CalendarEvent {
	/** The interface for the schema definition for a CalendarEvent */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'CalendarEvent'
		name: 'CalendarEvent'
		description: 'How an event will be rendered in the calendar. Each time represents a standard state of an event.'
		fields: {
			/** Id. Id of the calendar event */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				hint: 'Id of the calendar event'
				options: undefined
			}
			/** Starts at. */
			startAt: {
				label: 'Starts at'
				type: SpruceSchema.FieldType.DateTime
				isRequired: true
				options: undefined
			}
			/** Collection. A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar */
			collection: {
				label: 'Collection'
				type: SpruceSchema.FieldType.Text
				hint: 'A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar'
				options: undefined
			}
			/** Is resizable. Can this event be resized on the calendar? */
			isResizable: {
				label: 'Is resizable'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Can this event be resized on the calendar?'
				options: undefined
			}
			/** Kind. The kind on an event impacts it's visual representation */
			kind: {
				label: 'Kind'
				type: SpruceSchema.FieldType.Select
				hint: "The kind on an event impacts it's visual representation"
				options: {
					choices: [
						{
							label: 'How a calendar event renders by default.'
							value: 'default'
						},
						{ label: 'If an event is not confirmed.'; value: 'tentative' },
						{ label: 'When an event is happening right now'; value: 'active' },
						{
							label: 'If the event represents a time when the person is not available for additional events (usually matches isBusy)'
							value: 'unavailable'
						},
						{
							label: 'If the event represents a time where the user us unavailable (break or block)'
							value: 'blocked'
						},
						{
							label: "The event is ready to go, everyone has confirmed, it just hasn't happened yet"
							value: 'upcoming'
						},
						{ label: 'If the event is in the past'; value: 'past' },
						{
							label: 'The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)'
							value: 'warn'
						},
						{
							label: 'Renders the event in red (the event could have already started but attendees have not confirmed)'
							value: 'critical'
						}
					]
				}
			}
			/** Blocks. A calendar is comprised of blocks of time. You need at least 1 block to have a valid event. */
			blocks: {
				label: 'Blocks'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.'
				isArray: true
				options: {
					schemas: SpruceSchemas.Local.CalendarEventBlock.IDefinition[]
				}
			}
			/** Details. Additional details shown after someone taps on an event */
			details: {
				label: 'Details'
				type: SpruceSchema.FieldType.Schema
				hint: 'Additional details shown after someone taps on an event'
				options: {
					schemas: SpruceSchemas.Local.CalendarEventDetails.IDefinition[]
				}
			}
			/** User id. The ID of the user this event will render under */
			userId: {
				label: 'User id'
				type: SpruceSchema.FieldType.Id
				isRequired: true
				hint: 'The ID of the user this event will render under'
				options: undefined
			}
			/** Is draft. If this is a draft event (meaning it's not booked, but being setup) */
			isDraft: {
				label: 'Is draft'
				type: SpruceSchema.FieldType.Boolean
				hint: "If this is a draft event (meaning it's not booked, but being setup)"
				options: undefined
			}
			/** Has border. Should I render a border for this event? */
			hasBorder: {
				label: 'Has border'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Should I render a border for this event?'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.CalendarEvent.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** I universal way to hold visual information, use card builder to create cards */
	export interface ICard {
		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Centered. Is all content centered? */
		isCentered?: boolean | undefined | null
		/** Critical. Call attention to this card by making it standout! */
		isCritical?: boolean | undefined | null
		/** Small. A small variation of a card */
		isSmall?: boolean | undefined | null
		/** Class name. */
		className?: string | undefined | null
		/** Expandable. Allows this card to collapse at the header */
		isExpandable?: boolean | undefined | null
		/** Expanded by default. Should this thing start expanded */
		defaultExpanded?: boolean | undefined | null
		/** Header. */
		header?: SpruceSchemas.Local.ICardHeader | undefined | null
	}
}

export namespace SpruceSchemas.Local.Card {
	/** The interface for the schema definition for a Card */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'card'
		name: 'Card'
		description: 'I universal way to hold visual information, use card builder to create cards'
		fields: {
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Centered. Is all content centered? */
			isCentered: {
				label: 'Centered'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is all content centered?'
				defaultValue: false
				options: undefined
			}
			/** Critical. Call attention to this card by making it standout! */
			isCritical: {
				label: 'Critical'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Call attention to this card by making it standout!'
				options: undefined
			}
			/** Small. A small variation of a card */
			isSmall: {
				label: 'Small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'A small variation of a card'
				options: undefined
			}
			/** Class name. */
			className: {
				label: 'Class name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Expandable. Allows this card to collapse at the header */
			isExpandable: {
				label: 'Expandable'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Allows this card to collapse at the header'
				defaultValue: false
				options: undefined
			}
			/** Expanded by default. Should this thing start expanded */
			defaultExpanded: {
				label: 'Expanded by default'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Should this thing start expanded'
				defaultValue: true
				options: undefined
			}
			/** Header. */
			header: {
				label: 'Header'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.CardHeader.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Card.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** The body of a card. */
	export interface ICardBody {
		/** Id. */
		id?: string | undefined | null
		/** Children. Children to show in the Card */
		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Is sectioned. Whether to wrap children in CardSection */
		isSectioned?: boolean | undefined | null
		/** Are section separators visible. Set true to display line separators between CardSection components */
		areSectionSeparatorsVisible?: boolean | undefined | null
		/** Has top padding. Does card include top padding */
		hasTopPadding?: boolean | undefined | null
		/** Has bottom padding. Does card include bottom padding */
		hasBottomPadding?: boolean | undefined | null
		/** Is full bleed. Set to true to remove horizontal padding */
		isFullBleed?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.CardBody {
	/** The interface for the schema definition for a Card body */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'cardBody'
		name: 'Card body'
		description: 'The body of a card.'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Children. Children to show in the Card */
			children: {
				label: 'children'
				type: SpruceSchema.FieldType.Node
				hint: 'Children to show in the Card'
				options: undefined
			}
			/** Is sectioned. Whether to wrap children in CardSection */
			isSectioned: {
				label: 'Is sectioned'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Whether to wrap children in CardSection'
				defaultValue: true
				options: undefined
			}
			/** Are section separators visible. Set true to display line separators between CardSection components */
			areSectionSeparatorsVisible: {
				label: 'Are section separators visible'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to display line separators between CardSection components'
				defaultValue: true
				options: undefined
			}
			/** Has top padding. Does card include top padding */
			hasTopPadding: {
				label: 'Has top padding'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Does card include top padding'
				defaultValue: true
				options: undefined
			}
			/** Has bottom padding. Does card include bottom padding */
			hasBottomPadding: {
				label: 'Has bottom padding'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Does card include bottom padding'
				defaultValue: true
				options: undefined
			}
			/** Is full bleed. Set to true to remove horizontal padding */
			isFullBleed: {
				label: 'Is full bleed'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set to true to remove horizontal padding'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.CardBody.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Header of a card */
	export interface ICardFooter {
		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
	}
}

export namespace SpruceSchemas.Local.CardFooter {
	/** The interface for the schema definition for a cardFooter */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'cardFooter'
		name: 'cardFooter'
		description: 'Header of a card'
		fields: {
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.CardFooter.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A card body is made up of several sections */
	export interface ICardSection {
		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** . Set to true to remove horizontal padding */
		isFullBleed?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.CardSection {
	/** The interface for the schema definition for a card section */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'cardSection'
		name: 'card section'
		description: 'A card body is made up of several sections'
		fields: {
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** . Set to true to remove horizontal padding */
			isFullBleed: {
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set to true to remove horizontal padding'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.CardSection.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Header of a card */
	export interface IScoreCardPanel {
		/** Id. */
		id?: string | undefined | null
		/** Label. The label for this score, e.g. Today's Sales */
		label?: string | undefined | null
		/** Value. The score, e.g. $234.30 */
		value?: string | undefined | null
	}
}

export namespace SpruceSchemas.Local.ScoreCardPanel {
	/** The interface for the schema definition for a ScoreCardPanel */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'ScoreCardPanel'
		name: 'ScoreCardPanel'
		description: 'Header of a card'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Label. The label for this score, e.g. Today's Sales */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Text
				hint: "The label for this score, e.g. Today's Sales"
				options: undefined
			}
			/** Value. The score, e.g. $234.30 */
			value: {
				label: 'Value'
				type: SpruceSchema.FieldType.Text
				hint: 'The score, e.g. $234.30'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ScoreCardPanel.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** An input with autosuggest capabilities! */
	export interface IAutosuggest {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Id. */
		id?: string | undefined | null
		/** Value. */
		value?: string | undefined | null
		/** Suggestion getter. Invoked while person is typing. Is expected to return search results */
		getSuggestions: (
			query: string
		) => Promise<Record<string, any>[]> | Record<string, any>[]
		/** Suggestion value reducer. Takes a suggestion (returned from the suggestion getter) and turns it into a single string value to show in the search input after selection */
		getSuggestionValue: (suggestion: Record<string, any>) => string
		/** Suggestion renderer. Renders a single suggestion, return a React.ReactNode */
		renderSuggestion: (
			suggestion: Record<string, any>,
			params: { query: string; isHighlighted: boolean }
		) => React.ReactNode
		/** Selection handler. Invoked when a person select a suggestion */
		onSuggestionSelected?:
			| ((
					event: React.FormEvent<any>,
					data: {
						suggestion: Record<string, any>
						suggestionValue: string
						suggestionIndex: number
						sectionIndex: number | null
						method: 'click' | 'enter'
					}
			  ) => void)
			| undefined
			| null
		/** Render suggestions. Should I even show the suggestions when typing */
		shouldRenderSuggestions?: boolean | undefined | null
		/** Default suggestions. Suggestions to show before anyone types */
		defaultSuggestions?: Record<string, any>[] | undefined | null
		/** Placeholder. */
		placeholder?: string | undefined | null
		/** Default value. */
		defaultValue?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
		/** Small. Render small variation */
		isSmall?: boolean | undefined | null
		/** Wrapper class name. */
		wrapperClassName?: string | undefined | null

		className?: string | undefined | null
		/** Disable. Disable this field by setting to true */
		isDisabled?: boolean | undefined | null
		/** Icon. */
		icon?: SpruceSchemas.Local.IIcon | undefined | null
	}
}

export namespace SpruceSchemas.Local.Autosuggest {
	/** The interface for the schema definition for a Autosuggest */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'autosuggest'
		name: 'Autosuggest'
		description: 'An input with autosuggest capabilities!'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Value. */
			value: {
				label: 'Value'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Suggestion getter. Invoked while person is typing. Is expected to return search results */
			getSuggestions: {
				label: 'Suggestion getter'
				type: SpruceSchema.FieldType.Raw
				isRequired: true
				hint: 'Invoked while person is typing. Is expected to return search results'
				options: {
					valueType: `(query: string) => Promise<Record<string, any>[]> | Record<string, any>[]`
				}
			}
			/** Suggestion value reducer. Takes a suggestion (returned from the suggestion getter) and turns it into a single string value to show in the search input after selection */
			getSuggestionValue: {
				label: 'Suggestion value reducer'
				type: SpruceSchema.FieldType.Raw
				isRequired: true
				hint: 'Takes a suggestion (returned from the suggestion getter) and turns it into a single string value to show in the search input after selection'
				options: { valueType: `(suggestion: Record<string, any>) => string` }
			}
			/** Suggestion renderer. Renders a single suggestion, return a React.ReactNode */
			renderSuggestion: {
				label: 'Suggestion renderer'
				type: SpruceSchema.FieldType.Raw
				isRequired: true
				hint: 'Renders a single suggestion, return a React.ReactNode'
				options: {
					valueType: `(suggestion: Record<string, any>, params: { query:string, isHighlighted: boolean }) => React.ReactNode`
				}
			}
			/** Selection handler. Invoked when a person select a suggestion */
			onSuggestionSelected: {
				label: 'Selection handler'
				type: SpruceSchema.FieldType.Raw
				hint: 'Invoked when a person select a suggestion'
				options: {
					valueType: `(event: React.FormEvent<any>, data: { suggestion: Record<string, any>, suggestionValue: string, suggestionIndex: number, sectionIndex: number | null, method: 'click' | 'enter' }) => void`
				}
			}
			/** Render suggestions. Should I even show the suggestions when typing */
			shouldRenderSuggestions: {
				label: 'Render suggestions'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Should I even show the suggestions when typing'
				options: undefined
			}
			/** Default suggestions. Suggestions to show before anyone types */
			defaultSuggestions: {
				label: 'Default suggestions'
				type: SpruceSchema.FieldType.Raw
				hint: 'Suggestions to show before anyone types'
				defaultValue: []
				isArray: true
				options: { valueType: `Record<string, any>` }
			}
			/** Placeholder. */
			placeholder: {
				label: 'Placeholder'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Default value. */
			defaultValue: {
				label: 'Default value'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
			/** Small. Render small variation */
			isSmall: {
				label: 'Small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Render small variation'
				options: undefined
			}
			/** Wrapper class name. */
			wrapperClassName: {
				label: 'Wrapper class name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Disable. Disable this field by setting to true */
			isDisabled: {
				label: 'Disable'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Disable this field by setting to true'
				options: undefined
			}
			/** Icon. */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Autosuggest.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Pick a date, any date! wrapper for react-dates */
	export interface IDatePicker {
		kind?: ('singleDate' | 'dateRange') | undefined | null
		/** Date selection callback. */
		onSelectDate?: ((date: Date) => Promise<void> | void) | undefined | null
		/** Date range selection callback. */
		onSelectDateRange?:
			| ((range: { startDate: Date; endDate: Date }) => Promise<void> | void)
			| undefined
			| null
		/** Selected date. Use this when kind is "Single date" */
		date?: SpruceSchema.IDateFieldValue | undefined | null
		/** Start date. Used this when kind is "Date range" */
		startDate?: SpruceSchema.IDateFieldValue | undefined | null
		/** End date. Used when kind is "Date range" */
		endDate?: SpruceSchema.IDateFieldValue | undefined | null
		/** Day size. The size of the cell for each day */
		daySize?: number | undefined | null
		/** Number of months. Number of months to show */
		numberOfMonths?: number | undefined | null
		/** Day blocker. */
		isDayBlocked?: ((day: Date) => boolean) | undefined | null
	}
}

export namespace SpruceSchemas.Local.DatePicker {
	/** The interface for the schema definition for a Date picker */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'datePicker'
		name: 'Date picker'
		description: 'Pick a date, any date! wrapper for react-dates'
		fields: {
			/** . */
			kind: {
				type: SpruceSchema.FieldType.Select
				options: {
					label: `Singe or range`
					defaultValue: `singleDate`
					choices: [
						{ value: 'singleDate'; label: 'Single date' },
						{ value: 'dateRange'; label: 'Date range' }
					]
				}
			}
			/** Date selection callback. */
			onSelectDate: {
				label: 'Date selection callback'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `(date: Date) => Promise<void> | void` }
			}
			/** Date range selection callback. */
			onSelectDateRange: {
				label: 'Date range selection callback'
				type: SpruceSchema.FieldType.Raw
				options: {
					valueType: `(range: { startDate: Date, endDate: Date }) => Promise<void> | void`
				}
			}
			/** Selected date. Use this when kind is "Single date" */
			date: {
				label: 'Selected date'
				type: SpruceSchema.FieldType.Date
				hint: 'Use this when kind is "Single date"'
				options: undefined
			}
			/** Start date. Used this when kind is "Date range" */
			startDate: {
				label: 'Start date'
				type: SpruceSchema.FieldType.Date
				hint: 'Used this when kind is "Date range"'
				options: undefined
			}
			/** End date. Used when kind is "Date range" */
			endDate: {
				label: 'End date'
				type: SpruceSchema.FieldType.Date
				hint: 'Used when kind is "Date range"'
				options: undefined
			}
			/** Day size. The size of the cell for each day */
			daySize: {
				label: 'Day size'
				type: SpruceSchema.FieldType.Number
				hint: 'The size of the cell for each day'
				defaultValue: 40
				options: undefined
			}
			/** Number of months. Number of months to show */
			numberOfMonths: {
				label: 'Number of months'
				type: SpruceSchema.FieldType.Number
				hint: 'Number of months to show'
				options: undefined
			}
			/** Day blocker. */
			isDayBlocked: {
				label: 'Day blocker'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `(day: Date) => boolean` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.DatePicker.IDefinition>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface IFormDialogButtons {
		/** Primary button. */
		primary?: SpruceSchemas.Local.IButton | undefined | null
		/** Secondary button. */
		secondary?: SpruceSchemas.Local.IButton | undefined | null
	}
}

export namespace SpruceSchemas.Local.FormDialogButtons {
	/** The interface for the schema definition for a Form dialog buttons */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'formDialogButtons'
		name: 'Form dialog buttons'
		fields: {
			/** Primary button. */
			primary: {
				label: 'Primary button'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Secondary button. */
			secondary: {
				label: 'Secondary button'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.FormDialogButtons.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** A form with fields */
	export interface IForm {
		/** Submit handler. */
		onSubmit: (e: React.FormEvent<HTMLFormElement>) => void

		className?: string | undefined | null
		/** Reset handler. */
		onReset?: (() => void) | undefined | null
		/** Validate. */
		onValidate?:
			| ((values: Record<string, any>) => Promise<void> | void)
			| undefined
			| null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Initial values. */
		initialValues?: Record<string, any> | undefined | null
		/** Render type. Set this to tell the Form where it'll be rendered */
		renderAs?: ('page' | 'default' | 'dialog') | undefined | null
		/** Dirty. Has this field been edited/updated? */
		isDirty?: boolean | undefined | null
		/** Valid. Is the form valid (will disable submit buttons) */
		isValid?: boolean | undefined | null
		/** Busy. Is the form busy (will show progress over buttons) */
		isBusy?: boolean | undefined | null
		/** Dialog buttons. */
		dialogButtons?: SpruceSchemas.Local.IFormDialogButtons | undefined | null
	}
}

export namespace SpruceSchemas.Local.Form {
	/** The interface for the schema definition for a Form */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'form'
		name: 'Form'
		description: 'A form with fields'
		fields: {
			/** Submit handler. */
			onSubmit: {
				label: 'Submit handler'
				type: SpruceSchema.FieldType.EventCallback
				isRequired: true
				options: { event: `React.FormEvent<...>`; element: `HTMLFormElement` }
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Reset handler. */
			onReset: {
				label: 'Reset handler'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `() => void` }
			}
			/** Validate. */
			onValidate: {
				label: 'Validate'
				type: SpruceSchema.FieldType.Raw
				options: {
					valueType: `(values: Record<string, any>) => Promise<void> | void`
				}
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Initial values. */
			initialValues: {
				label: 'Initial values'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `Record<string, any>` }
			}
			/** Render type. Set this to tell the Form where it'll be rendered */
			renderAs: {
				label: 'Render type'
				type: SpruceSchema.FieldType.Select
				hint: "Set this to tell the Form where it'll be rendered"
				defaultValue: 'default'
				options: {
					choices: [
						{ value: 'page'; label: 'Full page' },
						{ value: 'default'; label: 'Default' },
						{ value: 'dialog'; label: 'Dialog body' }
					]
				}
			}
			/** Dirty. Has this field been edited/updated? */
			isDirty: {
				label: 'Dirty'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Has this field been edited/updated?'
				options: undefined
			}
			/** Valid. Is the form valid (will disable submit buttons) */
			isValid: {
				label: 'Valid'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is the form valid (will disable submit buttons)'
				options: undefined
			}
			/** Busy. Is the form busy (will show progress over buttons) */
			isBusy: {
				label: 'Busy'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is the form busy (will show progress over buttons)'
				options: undefined
			}
			/** Dialog buttons. */
			dialogButtons: {
				label: 'Dialog buttons'
				type: SpruceSchema.FieldType.Schema
				options: {
					schemas: SpruceSchemas.Local.FormDialogButtons.IDefinition[]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Form.IDefinition>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface IFormBuilderSection {
		/** Title. */
		title?: string | undefined | null
		/** Spacing. */
		spacing?: ('tight' | 'base') | undefined | null

		fields?: boolean[] | undefined | null
	}
}

export namespace SpruceSchemas.Local.FormBuilderSection {
	/** The interface for the schema definition for a Form builder section */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'formBuilderSection'
		name: 'Form builder section'
		fields: {
			/** Title. */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Spacing. */
			spacing: {
				label: 'Spacing'
				type: SpruceSchema.FieldType.Select
				options: {
					choices: [
						{ value: 'tight'; label: 'Tight' },
						{ value: 'base'; label: 'Base' }
					]
				}
			}
			/** . */
			fields: {
				type: SpruceSchema.FieldType.Boolean
				isArray: true
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.FormBuilderSection.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** Build a form to collect some deets */
	export interface IFormBuilder {
		/** Submit handler. */
		onSubmit: (e: React.FormEvent<HTMLFormElement>) => void

		className?: string | undefined | null
		/** Reset handler. */
		onReset?: (() => void) | undefined | null
		/** Validate. */
		onValidate?:
			| ((values: Record<string, any>) => Promise<void> | void)
			| undefined
			| null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Initial values. */
		initialValues?: Record<string, any> | undefined | null
		/** Render type. Set this to tell the Form where it'll be rendered */
		renderAs?: ('page' | 'default' | 'dialog') | undefined | null
		/** Dirty. Has this field been edited/updated? */
		isDirty?: boolean | undefined | null
		/** Valid. Is the form valid (will disable submit buttons) */
		isValid?: boolean | undefined | null
		/** Busy. Is the form busy (will show progress over buttons) */
		isBusy?: boolean | undefined | null
		/** Dialog buttons. */
		dialogButtons?: SpruceSchemas.Local.IFormDialogButtons | undefined | null
		/** Schema definition. */
		schema: SpruceSchema.ISchemaDefinition
		/** Sections. */
		sections: SpruceSchemas.Local.IFormBuilderSection[]
	}
}

export namespace SpruceSchemas.Local.FormBuilder {
	/** The interface for the schema definition for a Form builder */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'formBuilder'
		name: 'Form builder'
		description: 'Build a form to collect some deets'
		fields: {
			/** Submit handler. */
			onSubmit: {
				label: 'Submit handler'
				type: SpruceSchema.FieldType.EventCallback
				isRequired: true
				options: { event: `React.FormEvent<...>`; element: `HTMLFormElement` }
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Reset handler. */
			onReset: {
				label: 'Reset handler'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `() => void` }
			}
			/** Validate. */
			onValidate: {
				label: 'Validate'
				type: SpruceSchema.FieldType.Raw
				options: {
					valueType: `(values: Record<string, any>) => Promise<void> | void`
				}
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Initial values. */
			initialValues: {
				label: 'Initial values'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `Record<string, any>` }
			}
			/** Render type. Set this to tell the Form where it'll be rendered */
			renderAs: {
				label: 'Render type'
				type: SpruceSchema.FieldType.Select
				hint: "Set this to tell the Form where it'll be rendered"
				defaultValue: 'default'
				options: {
					choices: [
						{ value: 'page'; label: 'Full page' },
						{ value: 'default'; label: 'Default' },
						{ value: 'dialog'; label: 'Dialog body' }
					]
				}
			}
			/** Dirty. Has this field been edited/updated? */
			isDirty: {
				label: 'Dirty'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Has this field been edited/updated?'
				options: undefined
			}
			/** Valid. Is the form valid (will disable submit buttons) */
			isValid: {
				label: 'Valid'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is the form valid (will disable submit buttons)'
				options: undefined
			}
			/** Busy. Is the form busy (will show progress over buttons) */
			isBusy: {
				label: 'Busy'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is the form busy (will show progress over buttons)'
				options: undefined
			}
			/** Dialog buttons. */
			dialogButtons: {
				label: 'Dialog buttons'
				type: SpruceSchema.FieldType.Schema
				options: {
					schemas: SpruceSchemas.Local.FormDialogButtons.IDefinition[]
				}
			}
			/** Schema definition. */
			schema: {
				label: 'Schema definition'
				type: SpruceSchema.FieldType.Raw
				isRequired: true
				options: { valueType: `SpruceSchema.ISchemaDefinition` }
			}
			/** Sections. */
			sections: {
				label: 'Sections'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				isArray: true
				options: {
					schemas: SpruceSchemas.Local.FormBuilderSection.IDefinition[]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.FormBuilder.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Mixin for inputs that support events */
	export interface IInputEvents {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null
	}
}

export namespace SpruceSchemas.Local.InputEvents {
	/** The interface for the schema definition for a Input events */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'inputEvents'
		name: 'Input events'
		description: 'Mixin for inputs that support events'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.InputEvents.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Collect a phone number with area and country codes */
	export interface IPhoneInput {
		/** Label. */
		label: SpruceSchemas.Local.ILabel
		/** Small. Render a small variation of the phone input */
		isSmall?: boolean | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
		/** Value. */
		value?: string | undefined | null
		/** Placeholder. */
		placeholder?: string | undefined | null
		/** Autofocus. Focus when paid loads */
		autoFocus?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.PhoneInput {
	/** The interface for the schema definition for a Phone input */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'phoneInput'
		name: 'Phone input'
		description: 'Collect a phone number with area and country codes'
		fields: {
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Small. Render a small variation of the phone input */
			isSmall: {
				label: 'Small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Render a small variation of the phone input'
				options: undefined
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
			/** Value. */
			value: {
				label: 'Value'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Placeholder. */
			placeholder: {
				label: 'Placeholder'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Autofocus. Focus when paid loads */
			autoFocus: {
				label: 'Autofocus'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Focus when paid loads'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.PhoneInput.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Show a text input as a search field */
	export interface ISearch {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Id. */
		id?: string | undefined | null
		/** Name. */
		name?: string | undefined | null
		/** Autocomplete. */
		enableAutoComplete?: boolean | undefined | null
		/** Placeholder. */
		placeholder?: string | undefined | null
		/** Type. */
		type: `search`
		/** Before icon. The icon shown before the input */
		iconBefore?: SpruceSchemas.Local.IIcon | undefined | null
		/** Clear button. Drops in a clear button after the field, but requires you to handle the clear. */
		clearButton?: SpruceSchemas.Local.IButton | undefined | null
		/** Appendix. Shown under the input. */
		appendix?: string | undefined | null
		/** Helper. Shows hints or error messages. If both set, error wins. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null

		className?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Small. Render a small variation */
		isSmall?: boolean | undefined | null
		/** Value. */
		value?: string | undefined | null
		/** Read only. */
		isReadOnly?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.Search {
	/** The interface for the schema definition for a Search input */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'search'
		name: 'Search input'
		description: 'Show a text input as a search field'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Autocomplete. */
			enableAutoComplete: {
				label: 'Autocomplete'
				type: SpruceSchema.FieldType.Boolean
				defaultValue: true
				options: undefined
			}
			/** Placeholder. */
			placeholder: {
				label: 'Placeholder'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Type. */
			type: {
				label: 'Type'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				value: 'search'
				defaultValue: 'search'
				options: undefined
			}
			/** Before icon. The icon shown before the input */
			iconBefore: {
				label: 'Before icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'The icon shown before the input'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Clear button. Drops in a clear button after the field, but requires you to handle the clear. */
			clearButton: {
				label: 'Clear button'
				type: SpruceSchema.FieldType.Schema
				hint: 'Drops in a clear button after the field, but requires you to handle the clear.'
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Appendix. Shown under the input. */
			appendix: {
				label: 'Appendix'
				type: SpruceSchema.FieldType.Text
				hint: 'Shown under the input.'
				options: undefined
			}
			/** Helper. Shows hints or error messages. If both set, error wins. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				hint: 'Shows hints or error messages. If both set, error wins.'
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Small. Render a small variation */
			isSmall: {
				label: 'Small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Render a small variation'
				options: undefined
			}
			/** Value. */
			value: {
				label: 'Value'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Read only. */
			isReadOnly: {
				label: 'Read only'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Search.IDefinition>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface ISelectOption {
		/** Value. */
		value: string
		/** Label. */
		label: string
	}
}

export namespace SpruceSchemas.Local.SelectOption {
	/** The interface for the schema definition for a Select option */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'selectOption'
		name: 'Select option'
		fields: {
			/** Value. */
			value: {
				label: 'Value'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SelectOption.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A form select */
	export interface ISelect {
		id?: string | undefined | null
		/** Simple. Render a simpler variation */
		isSimple?: boolean | undefined | null
		/** Disabled. */
		isDisabled?: boolean | undefined | null

		className?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Value. */
		value?: string | undefined | null
		/** Placeholder. */
		placeholder?: string | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
		/** Options. */
		options: SpruceSchemas.Local.ISelectOption
	}
}

export namespace SpruceSchemas.Local.Select {
	/** The interface for the schema definition for a Select */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'select'
		name: 'Select'
		description: 'A form select'
		fields: {
			/** . */
			id: {
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Simple. Render a simpler variation */
			isSimple: {
				label: 'Simple'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Render a simpler variation'
				options: undefined
			}
			/** Disabled. */
			isDisabled: {
				label: 'Disabled'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Value. */
			value: {
				label: 'Value'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Placeholder. */
			placeholder: {
				label: 'Placeholder'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
			/** Options. */
			options: {
				label: 'Options'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				options: { schemas: SpruceSchemas.Local.SelectOption.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Select.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A simple sliding control */
	export interface ISlider {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Id. */
		id?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Name. */
		name?: string | undefined | null
		/** Minimum. The left most value of the slider */
		min: number
		/** Maximum. The right most value of the slider */
		max: number
		/** Value. The value of the slider */
		value: number
		/** Disabled. */
		isDisabled?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.Slider {
	/** The interface for the schema definition for a Slider */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'slider'
		name: 'Slider'
		description: 'A simple sliding control'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Minimum. The left most value of the slider */
			min: {
				label: 'Minimum'
				type: SpruceSchema.FieldType.Number
				isRequired: true
				hint: 'The left most value of the slider'
				options: undefined
			}
			/** Maximum. The right most value of the slider */
			max: {
				label: 'Maximum'
				type: SpruceSchema.FieldType.Number
				isRequired: true
				hint: 'The right most value of the slider'
				options: undefined
			}
			/** Value. The value of the slider */
			value: {
				label: 'Value'
				type: SpruceSchema.FieldType.Number
				isRequired: true
				hint: 'The value of the slider'
				options: undefined
			}
			/** Disabled. */
			isDisabled: {
				label: 'Disabled'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Slider.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Small pill like control with text and onClick functionality */
	export interface ITag {
		/** Id. */
		id?: string | undefined | null

		className?: string | undefined | null
		/** Text. */
		text?: string | undefined | null
		/** Kind. */
		kind?: ('primary' | 'secondary') | undefined | null
		/** Small. Render small variation of the tag */
		isSmall?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.Tag {
	/** The interface for the schema definition for a Tag */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'tag'
		name: 'Tag'
		description: 'Small pill like control with text and onClick functionality'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Text. */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Kind. */
			kind: {
				label: 'Kind'
				type: SpruceSchema.FieldType.Select
				defaultValue: 'primary'
				options: {
					choices: [
						{ value: 'primary'; label: 'Primary' },
						{ value: 'secondary'; label: 'Secondary' }
					]
				}
			}
			/** Small. Render small variation of the tag */
			isSmall: {
				label: 'Small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Render small variation of the tag'
				defaultValue: false
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Tag.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A reusable component that holds an html &lt;input /&gt; element and decorates it. */
	export interface ITextInput {
		/** Change handler. */
		onChange?:
			| ((e: React.ChangeEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Blur handler. */
		onBlur?:
			| ((e: React.FocusEvent<HTMLInputElement>) => void)
			| undefined
			| null
		/** Id. */
		id?: string | undefined | null
		/** Name. */
		name?: string | undefined | null
		/** Autocomplete. */
		enableAutoComplete?: boolean | undefined | null
		/** Placeholder. */
		placeholder?: string | undefined | null
		/** Type. */
		type?:
			| (
					| 'button'
					| 'search'
					| 'checkbox'
					| 'color'
					| 'date'
					| 'datetime-local'
					| 'email'
					| 'file'
					| 'hidden'
					| 'image'
					| 'month'
					| 'number'
					| 'password'
					| 'radio'
					| 'range'
					| 'reset'
					| 'search'
					| 'submit'
					| 'tel'
					| 'text'
					| 'time'
					| 'url'
					| 'week'
			  )
			| undefined
			| null
		/** Before icon. The icon shown before the input */
		iconBefore?: SpruceSchemas.Local.IIcon | undefined | null
		/** Clear button. Drops in a clear button after the field, but requires you to handle the clear. */
		clearButton?: SpruceSchemas.Local.IButton | undefined | null
		/** Appendix. Shown under the input. */
		appendix?: string | undefined | null
		/** Helper. Shows hints or error messages. If both set, error wins. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null

		className?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Small. Render a small variation */
		isSmall?: boolean | undefined | null
		/** Value. */
		value?: string | undefined | null
		/** Read only. */
		isReadOnly?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.TextInput {
	/** The interface for the schema definition for a Input inner */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'textInput'
		name: 'Input inner'
		description: 'A reusable component that holds an html <input /> element and decorates it.'
		fields: {
			/** Change handler. */
			onChange: {
				label: 'Change handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.ChangeEvent<...>`
					element: `HTMLInputElement`
				}
			}
			/** Blur handler. */
			onBlur: {
				label: 'Blur handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.FocusEvent<...>`; element: `HTMLInputElement` }
			}
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Name. */
			name: {
				label: 'Name'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Autocomplete. */
			enableAutoComplete: {
				label: 'Autocomplete'
				type: SpruceSchema.FieldType.Boolean
				defaultValue: true
				options: undefined
			}
			/** Placeholder. */
			placeholder: {
				label: 'Placeholder'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Type. */
			type: {
				label: 'Type'
				type: SpruceSchema.FieldType.Select
				defaultValue: 'text'
				options: {
					choices: [
						{ value: 'button'; label: 'button' },
						{ value: 'search'; label: 'search' },
						{ value: 'checkbox'; label: 'checkbox' },
						{ value: 'color'; label: 'color' },
						{ value: 'date'; label: 'date' },
						{ value: 'datetime-local'; label: 'datetime-local' },
						{ value: 'email'; label: 'email' },
						{ value: 'file'; label: 'file' },
						{ value: 'hidden'; label: 'hidden' },
						{ value: 'image'; label: 'image' },
						{ value: 'month'; label: 'month' },
						{ value: 'number'; label: 'number' },
						{ value: 'password'; label: 'password' },
						{ value: 'radio'; label: 'radio' },
						{ value: 'range'; label: 'range' },
						{ value: 'reset'; label: 'reset' },
						{ value: 'search'; label: 'search' },
						{ value: 'submit'; label: 'submit' },
						{ value: 'tel'; label: 'tel' },
						{ value: 'text'; label: 'text' },
						{ value: 'time'; label: 'time' },
						{ value: 'url'; label: 'url' },
						{ value: 'week'; label: 'week' }
					]
				}
			}
			/** Before icon. The icon shown before the input */
			iconBefore: {
				label: 'Before icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'The icon shown before the input'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Clear button. Drops in a clear button after the field, but requires you to handle the clear. */
			clearButton: {
				label: 'Clear button'
				type: SpruceSchema.FieldType.Schema
				hint: 'Drops in a clear button after the field, but requires you to handle the clear.'
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Appendix. Shown under the input. */
			appendix: {
				label: 'Appendix'
				type: SpruceSchema.FieldType.Text
				hint: 'Shown under the input.'
				options: undefined
			}
			/** Helper. Shows hints or error messages. If both set, error wins. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				hint: 'Shows hints or error messages. If both set, error wins.'
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Small. Render a small variation */
			isSmall: {
				label: 'Small'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Render a small variation'
				options: undefined
			}
			/** Value. */
			value: {
				label: 'Value'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Read only. */
			isReadOnly: {
				label: 'Read only'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.TextInput.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** Big box to type lots of text (with voice support) */
	export interface ITextarea {
		/** Id. */
		id?: string | undefined | null

		className?: string | undefined | null
		/** Label. */
		label?: SpruceSchemas.Local.ILabel | undefined | null
		/** Helper. */
		helper?: SpruceSchemas.Local.IInputHelper | undefined | null
		/** Resize'able. */
		isResizeable?: boolean | undefined | null
		/** Placeholder. */
		placeholder?: string | undefined | null
		/** Rows (height). Number of rows of text that will show before scrolling */
		rows?: number | undefined | null
	}
}

export namespace SpruceSchemas.Local.Textarea {
	/** The interface for the schema definition for a Textarea */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'textarea'
		name: 'Textarea'
		description: 'Big box to type lots of text (with voice support)'
		fields: {
			/** Id. */
			id: {
				label: 'id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Label. */
			label: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Label.IDefinition[] }
			}
			/** Helper. */
			helper: {
				label: 'Helper'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.InputHelper.IDefinition[] }
			}
			/** Resize'able. */
			isResizeable: {
				label: "Resize'able"
				type: SpruceSchema.FieldType.Boolean
				defaultValue: false
				options: undefined
			}
			/** Placeholder. */
			placeholder: {
				label: 'Placeholder'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Rows (height). Number of rows of text that will show before scrolling */
			rows: {
				label: 'Rows (height)'
				type: SpruceSchema.FieldType.Number
				hint: 'Number of rows of text that will show before scrolling'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Textarea.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A layout is the start of it all */
	export interface ILayout {
		/** Children. */
		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Is centered. A hint */
		isCentered?: boolean | undefined | null
		/** Is full bleed. */
		isFullBleed?: boolean | undefined | null
		/** Sections. Layout sections that makeup this layout */
		sections?: SpruceSchemas.Local.ILayoutSection[] | undefined | null

		className?: string | undefined | null
		/** Width. */
		width?: ('base' | 'wide' | 'tight' | 'fullWidth') | undefined | null
	}
}

export namespace SpruceSchemas.Local.Layout {
	/** The interface for the schema definition for a Layout */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'layout'
		name: 'Layout'
		description: 'A layout is the start of it all'
		fields: {
			/** Children. */
			children: {
				label: 'Children'
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Is centered. A hint */
			isCentered: {
				label: 'Is centered'
				type: SpruceSchema.FieldType.Boolean
				hint: 'A hint'
				defaultValue: false
				options: undefined
			}
			/** Is full bleed. */
			isFullBleed: {
				label: 'Is full bleed'
				type: SpruceSchema.FieldType.Boolean
				defaultValue: false
				options: undefined
			}
			/** Sections. Layout sections that makeup this layout */
			sections: {
				label: 'Sections'
				type: SpruceSchema.FieldType.Schema
				hint: 'Layout sections that makeup this layout'
				isArray: true
				options: { schemas: SpruceSchemas.Local.LayoutSection.IDefinition[] }
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Width. */
			width: {
				label: 'Width'
				type: SpruceSchema.FieldType.Select
				defaultValue: 'base'
				options: {
					choices: [
						{ value: 'base'; label: 'Base' },
						{ value: 'wide'; label: 'Wide' },
						{ value: 'tight'; label: 'Tight' },
						{ value: 'fullWidth'; label: 'Full width' }
					]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Layout.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A way to add spacing to your layouts */
	export interface ILayoutSpacing {
		/** Direction. */
		direction?:
			| (
					| 'all'
					| 'horizontal'
					| 'vertical'
					| 'top'
					| 'right'
					| 'bottom'
					| 'left'
			  )
			| undefined
			| null
		/** Spacing amount. The amount of spacing to apply (0-12) */
		amount: number
		/** Layout builder. */
		layoutBuilder?: SpruceSchemas.Local.ILayoutBuilder | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
	}
}

export namespace SpruceSchemas.Local.LayoutSpacing {
	/** The interface for the schema definition for a Layout spacing */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'layoutSpacing'
		name: 'Layout spacing'
		description: 'A way to add spacing to your layouts'
		fields: {
			/** Direction. */
			direction: {
				label: 'Direction'
				type: SpruceSchema.FieldType.Select
				defaultValue: 'all'
				options: {
					choices: [
						{ value: 'all'; label: 'All' },
						{ value: 'horizontal'; label: 'Horizontal' },
						{ value: 'vertical'; label: 'Vertical' },
						{ value: 'top'; label: 'Top' },
						{ value: 'right'; label: 'Right' },
						{ value: 'bottom'; label: 'Bottom' },
						{ value: 'left'; label: 'Left' }
					]
				}
			}
			/** Spacing amount. The amount of spacing to apply (0-12) */
			amount: {
				label: 'Spacing amount'
				type: SpruceSchema.FieldType.Number
				isRequired: true
				hint: 'The amount of spacing to apply (0-12)'
				options: undefined
			}
			/** Layout builder. */
			layoutBuilder: {
				label: 'Layout builder'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.LayoutBuilder.IDefinition[] }
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.LayoutSpacing.IDefinition>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface ISidebarHeader {
		/** Title. */
		title: string
		/** Button. */
		button?: SpruceSchemas.Local.IButton | undefined | null
		/** Close handler. */
		onClose?: (() => void) | undefined | null
		/** Go back handler. */
		onGoBack?: (() => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.SidebarHeader {
	/** The interface for the schema definition for a Sidebar header */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'sidebarHeader'
		name: 'Sidebar header'
		fields: {
			/** Title. */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				options: undefined
			}
			/** Button. */
			button: {
				label: 'Button'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Close handler. */
			onClose: {
				label: 'Close handler'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `() => void` }
			}
			/** Go back handler. */
			onGoBack: {
				label: 'Go back handler'
				type: SpruceSchema.FieldType.Raw
				options: { valueType: `() => void` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SidebarHeader.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** An element that makes up the sidebar */
	export interface ISidebarSection {
		/** Items. */
		items?:
			| (
					| { schemaId: 'button'; values: SpruceSchemas.Local.IButton }
					| {
							schemaId: 'cardBuilder'
							values: SpruceSchemas.Local.ICardBuilder
					  }
					| { schemaId: 'layout'; values: SpruceSchemas.Local.ILayout }
					| {
							schemaId: 'layoutSpacing'
							values: SpruceSchemas.Local.ILayoutSpacing
					  }
					| {
							schemaId: 'sidebarHeader'
							values: SpruceSchemas.Local.ISidebarHeader
					  }
					| {
							schemaId: 'sidebarSection'
							values: SpruceSchemas.Local.ISidebarSection
					  }
			  )[]
			| undefined
			| null

		className?: string | undefined | null
		/** Centered. Center everything horizontally */
		isCentered?: boolean | undefined | null
		/** Mobile only. Will hide on desktop if true */
		isOnlyForMobile?: boolean | undefined | null

		horizontalSpacing?: ('base' | 'loose') | undefined | null

		verticalSpacing?: ('base' | 'loose') | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
	}
}

export namespace SpruceSchemas.Local.SidebarSection {
	/** The interface for the schema definition for a Sidebar item */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'sidebarSection'
		name: 'Sidebar item'
		description: 'An element that makes up the sidebar'
		fields: {
			/** Items. */
			items: {
				label: 'items'
				type: SpruceSchema.FieldType.Schema
				isArray: true
				options: {
					schemas: (
						| SpruceSchemas.Local.Button.IDefinition
						| SpruceSchemas.Local.CardBuilder.IDefinition
						| SpruceSchemas.Local.Layout.IDefinition
						| SpruceSchemas.Local.LayoutSpacing.IDefinition
						| SpruceSchemas.Local.SidebarHeader.IDefinition
						| SpruceSchemas.Local.SidebarSection.IDefinition
					)[]
				}
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Centered. Center everything horizontally */
			isCentered: {
				label: 'Centered'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Center everything horizontally'
				defaultValue: false
				options: undefined
			}
			/** Mobile only. Will hide on desktop if true */
			isOnlyForMobile: {
				label: 'Mobile only'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Will hide on desktop if true'
				defaultValue: false
				options: undefined
			}
			/** . */
			horizontalSpacing: {
				type: SpruceSchema.FieldType.Select
				defaultValue: 'base'
				options: {
					choices: [
						{ value: 'base'; label: 'Base' },
						{ value: 'loose'; label: 'Loose' }
					]
				}
			}
			/** . */
			verticalSpacing: {
				type: SpruceSchema.FieldType.Select
				defaultValue: 'base'
				options: {
					choices: [
						{ value: 'base'; label: 'Base' },
						{ value: 'loose'; label: 'Loose' }
					]
				}
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SidebarSection.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A way to build layouts */
	export interface ILayoutBuilder {
		/** Items. */
		items?:
			| (
					| { schemaId: 'button'; values: SpruceSchemas.Local.IButton }
					| {
							schemaId: 'cardBuilder'
							values: SpruceSchemas.Local.ICardBuilder
					  }
					| { schemaId: 'layout'; values: SpruceSchemas.Local.ILayout }
					| {
							schemaId: 'layoutSpacing'
							values: SpruceSchemas.Local.ILayoutSpacing
					  }
					| {
							schemaId: 'sidebarHeader'
							values: SpruceSchemas.Local.ISidebarHeader
					  }
					| {
							schemaId: 'sidebarSection'
							values: SpruceSchemas.Local.ISidebarSection
					  }
			  )[]
			| undefined
			| null
	}
}

export namespace SpruceSchemas.Local.LayoutBuilder {
	/** The interface for the schema definition for a Layout builder */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'layoutBuilder'
		name: 'Layout builder'
		description: 'A way to build layouts'
		fields: {
			/** Items. */
			items: {
				label: 'items'
				type: SpruceSchema.FieldType.Schema
				isArray: true
				options: {
					schemas: (
						| SpruceSchemas.Local.Button.IDefinition
						| SpruceSchemas.Local.CardBuilder.IDefinition
						| SpruceSchemas.Local.Layout.IDefinition
						| SpruceSchemas.Local.LayoutSpacing.IDefinition
						| SpruceSchemas.Local.SidebarHeader.IDefinition
						| SpruceSchemas.Local.SidebarSection.IDefinition
					)[]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.LayoutBuilder.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A section that makes up a layout */
	export interface ILayoutSection {
		/** Id. */
		id?: string | undefined | null
		/** Children. */
		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null
		/** Classname. */
		className?: string | undefined | null
		/** Is secondary. Makes this section thinner */
		isSecondary?: boolean | undefined | null
		/** Layout builder. */
		layoutBuilder?: SpruceSchemas.Local.ILayoutBuilder | undefined | null
	}
}

export namespace SpruceSchemas.Local.LayoutSection {
	/** The interface for the schema definition for a Layout section */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'layoutSection'
		name: 'Layout section'
		description: 'A section that makes up a layout'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Children. */
			children: {
				label: 'Children'
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Classname. */
			className: {
				label: 'Classname'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Is secondary. Makes this section thinner */
			isSecondary: {
				label: 'Is secondary'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Makes this section thinner'
				options: undefined
			}
			/** Layout builder. */
			layoutBuilder: {
				label: 'Layout builder'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.LayoutBuilder.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.LayoutSection.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A list is comprised of list items (or expandable list items). This is that list item. */
	export interface IListItem {
		/** Id. */
		id?: string | undefined | null
		/** Title. Title text */
		title: string
		/** Subtitle. Optional subtitle text */
		subtitle?: string | undefined | null
		/** Note. Optional note text */
		note?: string | undefined | null
		/** Is expandable. Can render this item as expandable */
		isExpandable?: boolean | undefined | null
		/** Avatar. */
		avatar?: SpruceSchemas.Local.IAvatar | undefined | null
		/** Image. */
		image?: SpruceSchemas.Local.IImage | undefined | null
		/** Icon. Inline svg icon */
		icon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Is icon hidden. Optional; visually hides the icon without removing it */
		isIconHidden?: boolean | undefined | null
		/** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
		isLeftIndented?: boolean | undefined | null
		/** Is draggable. Set true when the list can be reordered */
		isDraggable?: boolean | undefined | null
		/** Is disabled. Set true when the list can be reordered */
		isDisabled?: boolean | undefined | null
		/** Toggle props. Props passed to the toggle if toggleId is set */
		toggle?: SpruceSchemas.Local.IToggle | undefined | null
		/** Primary button. A primary button that turns the entire list item into a clickable button */
		primaryButton?: SpruceSchemas.Local.IButton | undefined | null
		/** Buttons. Additional buttons that get dropped into this item */
		buttons?: SpruceSchemas.Local.IButton[] | undefined | null
		/** Context menu. Context Menu associated with the list it */
		contextMenu?: SpruceSchemas.Local.IContextMenu | undefined | null
		/** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
		isSeparatorVisible?: boolean | undefined | null
		/** Class name. Optional class name for list item */
		className?: string | undefined | null
		/** Loading. Makes the item look like a loading placeholder */
		isLoading?: boolean | undefined | null
		/** Selectable element. Any props you want sent down to the selectable component being rendered */
		selectable?:
			| {
					schemaId: 'listItemRadio'
					values: SpruceSchemas.Local.IListItemRadio
			  }
			| {
					schemaId: 'listItemCheckbox'
					values: SpruceSchemas.Local.IListItemCheckbox
			  }
			| undefined
			| null
		/** Warnings. Highlight title, subtitle, note with warning colors */
		warnings?: SpruceSchemas.Local.IListItemWarning | undefined | null
		/** List. Optional; adds a nested list */
		list?: SpruceSchemas.Local.IList | undefined | null
		/** Lists. Optional; adds multiple lists nested at the same level */
		lists?: SpruceSchemas.Local.IList[] | undefined | null
		/** Click handler. */
		onClick?: ((e: React.MouseEvent<Element>) => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.ListItem {
	/** The interface for the schema definition for a List item */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'listItem'
		name: 'List item'
		description: 'A list is comprised of list items (or expandable list items). This is that list item.'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Title. Title text */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Title text'
				options: undefined
			}
			/** Subtitle. Optional subtitle text */
			subtitle: {
				label: 'Subtitle'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional subtitle text'
				options: undefined
			}
			/** Note. Optional note text */
			note: {
				label: 'Note'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional note text'
				options: undefined
			}
			/** Is expandable. Can render this item as expandable */
			isExpandable: {
				label: 'Is expandable'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Can render this item as expandable'
				options: undefined
			}
			/** Avatar. */
			avatar: {
				label: 'Avatar'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Avatar.IDefinition[] }
			}
			/** Image. */
			image: {
				label: 'Image'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Image.IDefinition[] }
			}
			/** Icon. Inline svg icon */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Schema
				hint: 'Inline svg icon'
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Is icon hidden. Optional; visually hides the icon without removing it */
			isIconHidden: {
				label: 'Is icon hidden'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Optional; visually hides the icon without removing it'
				options: undefined
			}
			/** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
			isLeftIndented: {
				label: 'Is left indented'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to add left spacing. useful in aligning with other list items that have icons or images'
				options: undefined
			}
			/** Is draggable. Set true when the list can be reordered */
			isDraggable: {
				label: 'Is draggable'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true when the list can be reordered'
				options: undefined
			}
			/** Is disabled. Set true when the list can be reordered */
			isDisabled: {
				label: 'Is disabled'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true when the list can be reordered'
				options: undefined
			}
			/** Toggle props. Props passed to the toggle if toggleId is set */
			toggle: {
				label: 'Toggle props'
				type: SpruceSchema.FieldType.Schema
				hint: 'Props passed to the toggle if toggleId is set'
				options: { schemas: SpruceSchemas.Local.Toggle.IDefinition[] }
			}
			/** Primary button. A primary button that turns the entire list item into a clickable button */
			primaryButton: {
				label: 'Primary button'
				type: SpruceSchema.FieldType.Schema
				hint: 'A primary button that turns the entire list item into a clickable button'
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Buttons. Additional buttons that get dropped into this item */
			buttons: {
				label: 'Buttons'
				type: SpruceSchema.FieldType.Schema
				hint: 'Additional buttons that get dropped into this item'
				isArray: true
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Context menu. Context Menu associated with the list it */
			contextMenu: {
				label: 'Context menu'
				type: SpruceSchema.FieldType.Schema
				hint: 'Context Menu associated with the list it'
				options: { schemas: SpruceSchemas.Local.ContextMenu.IDefinition[] }
			}
			/** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
			isSeparatorVisible: {
				label: 'Is separator visible'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set to true to show separator for this list item if followed by another list item.'
				options: undefined
			}
			/** Class name. Optional class name for list item */
			className: {
				label: 'Class name'
				type: SpruceSchema.FieldType.Text
				hint: 'Optional class name for list item'
				options: undefined
			}
			/** Loading. Makes the item look like a loading placeholder */
			isLoading: {
				label: 'Loading'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Makes the item look like a loading placeholder'
				options: undefined
			}
			/** Selectable element. Any props you want sent down to the selectable component being rendered */
			selectable: {
				label: 'Selectable element'
				type: SpruceSchema.FieldType.Schema
				hint: 'Any props you want sent down to the selectable component being rendered'
				options: {
					schemas: (
						| SpruceSchemas.Local.ListItemRadio.IDefinition
						| SpruceSchemas.Local.ListItemCheckbox.IDefinition
					)[]
				}
			}
			/** Warnings. Highlight title, subtitle, note with warning colors */
			warnings: {
				label: 'Warnings'
				type: SpruceSchema.FieldType.Schema
				hint: 'Highlight title, subtitle, note with warning colors'
				options: { schemas: SpruceSchemas.Local.ListItemWarning.IDefinition[] }
			}
			/** List. Optional; adds a nested list */
			list: {
				label: 'List'
				type: SpruceSchema.FieldType.Schema
				hint: 'Optional; adds a nested list'
				options: { schemas: SpruceSchemas.Local.List.IDefinition[] }
			}
			/** Lists. Optional; adds multiple lists nested at the same level */
			lists: {
				label: 'Lists'
				type: SpruceSchema.FieldType.Schema
				hint: 'Optional; adds multiple lists nested at the same level'
				isArray: true
				options: { schemas: SpruceSchemas.Local.List.IDefinition[] }
			}
			/** Click handler. */
			onClick: {
				label: 'Click handler'
				type: SpruceSchema.FieldType.EventCallback
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ListItem.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** An element that makes up the sidebar */
	export interface ISidebarItem {
		/** Subitems. Rendered under the text as subitems */
		items?: SpruceSchemas.Local.ISidebarItem[] | undefined | null
		/** Icon. */
		icon?: SpruceSchemas.Local.IIcon | undefined | null
		/** Button. */
		button?: SpruceSchemas.Local.IButton | undefined | null

		className?: string | undefined | null
		/** Text. Rendered in the body of this item */
		text?: string | undefined | null
		/** Href. */
		href?: string | undefined | null
		/** Current. If this item is the current one, it is rendered differently to call it out */
		isCurrent?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.SidebarItem {
	/** The interface for the schema definition for a Sidebar item */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'sidebarItem'
		name: 'Sidebar item'
		description: 'An element that makes up the sidebar'
		fields: {
			/** Subitems. Rendered under the text as subitems */
			items: {
				label: 'Subitems'
				type: SpruceSchema.FieldType.Schema
				hint: 'Rendered under the text as subitems'
				isArray: true
				options: { schemas: SpruceSchemas.Local.SidebarItem.IDefinition[] }
			}
			/** Icon. */
			icon: {
				label: 'Icon'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Icon.IDefinition[] }
			}
			/** Button. */
			button: {
				label: 'Button'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Text. Rendered in the body of this item */
			text: {
				label: 'Text'
				type: SpruceSchema.FieldType.Text
				hint: 'Rendered in the body of this item'
				options: undefined
			}
			/** Href. */
			href: {
				label: 'href'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Current. If this item is the current one, it is rendered differently to call it out */
			isCurrent: {
				label: 'Current'
				type: SpruceSchema.FieldType.Boolean
				hint: 'If this item is the current one, it is rendered differently to call it out'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SidebarItem.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** On the left or right side of a layout */
	export interface ISidebar {
		/** . Optional header that will only appear on mobile */
		mobileHeader?: SpruceSchemas.Local.ISidebarHeader | undefined | null
		/** Label. Items to display in the sidebar */
		items?: SpruceSchemas.Local.ISidebarItem[] | undefined | null
		/** Sections. Sections to display in the sidebar */
		sections?: SpruceSchemas.Local.ISidebarSection[] | undefined | null
		/** Back link. Back link item to handle navigation back to previous location */
		backLink?: SpruceSchemas.Local.ISidebarItem | undefined | null
		/** Side. Set which side the sidebar is on. Must be either 'left' or 'right' */
		side?: ('left' | 'right') | undefined | null
		/** Large. Set true to make the sidebar larger. Defaults to false. */
		isLarge?: boolean | undefined | null
		/** Collapsed. Enables the user to collapse the sidebar on desktop. Defaults to true. */
		isCollapsible?: boolean | undefined | null
		/** Expanded on desktop. Set true to expand the sidebar (large screens only) */
		isExpanded?: boolean | undefined | null
		/** Expanded on mobile. Set true to expand the sidebar on small screens */
		isMobileExpanded?: boolean | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null

		footerChildren?:
			| generated_import_3.INodeFieldDefinitionValue
			| undefined
			| null
		/** Expander handler. Expected to expand/collapse the sidebar by setting (isExpanded to true/false) */
		onToggleExpanded?: (() => void) | undefined | null
		/** Force close handler. Expect you to collapse the bar no matter what (isExpanded to false) */
		onForceCollapse?: (() => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.Sidebar {
	/** The interface for the schema definition for a Sidebar */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'sidebar'
		name: 'Sidebar'
		description: 'On the left or right side of a layout'
		fields: {
			/** . Optional header that will only appear on mobile */
			mobileHeader: {
				type: SpruceSchema.FieldType.Schema
				hint: 'Optional header that will only appear on mobile'
				options: { schemas: SpruceSchemas.Local.SidebarHeader.IDefinition[] }
			}
			/** Label. Items to display in the sidebar */
			items: {
				label: 'Label'
				type: SpruceSchema.FieldType.Schema
				hint: 'Items to display in the sidebar'
				isArray: true
				options: { schemas: SpruceSchemas.Local.SidebarItem.IDefinition[] }
			}
			/** Sections. Sections to display in the sidebar */
			sections: {
				label: 'Sections'
				type: SpruceSchema.FieldType.Schema
				hint: 'Sections to display in the sidebar'
				isArray: true
				options: { schemas: SpruceSchemas.Local.SidebarSection.IDefinition[] }
			}
			/** Back link. Back link item to handle navigation back to previous location */
			backLink: {
				label: 'Back link'
				type: SpruceSchema.FieldType.Schema
				hint: 'Back link item to handle navigation back to previous location'
				options: { schemas: SpruceSchemas.Local.SidebarItem.IDefinition[] }
			}
			/** Side. Set which side the sidebar is on. Must be either 'left' or 'right' */
			side: {
				label: 'Side'
				type: SpruceSchema.FieldType.Select
				hint: "Set which side the sidebar is on. Must be either 'left' or 'right'"
				options: {
					choices: [
						{ value: 'left'; label: 'Left' },
						{ value: 'right'; label: 'Right' }
					]
				}
			}
			/** Large. Set true to make the sidebar larger. Defaults to false. */
			isLarge: {
				label: 'Large'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to make the sidebar larger. Defaults to false.'
				options: undefined
			}
			/** Collapsed. Enables the user to collapse the sidebar on desktop. Defaults to true. */
			isCollapsible: {
				label: 'Collapsed'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Enables the user to collapse the sidebar on desktop. Defaults to true.'
				options: undefined
			}
			/** Expanded on desktop. Set true to expand the sidebar (large screens only) */
			isExpanded: {
				label: 'Expanded on desktop'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to expand the sidebar (large screens only)'
				defaultValue: true
				options: undefined
			}
			/** Expanded on mobile. Set true to expand the sidebar on small screens */
			isMobileExpanded: {
				label: 'Expanded on mobile'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Set true to expand the sidebar on small screens'
				options: undefined
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** . */
			footerChildren: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Expander handler. Expected to expand/collapse the sidebar by setting (isExpanded to true/false) */
			onToggleExpanded: {
				label: 'Expander handler'
				type: SpruceSchema.FieldType.Callback
				hint: 'Expected to expand/collapse the sidebar by setting (isExpanded to true/false)'
				options: { signature: `() => void` }
			}
			/** Force close handler. Expect you to collapse the bar no matter what (isExpanded to false) */
			onForceCollapse: {
				label: 'Force close handler'
				type: SpruceSchema.FieldType.Callback
				hint: 'Expect you to collapse the bar no matter what (isExpanded to false)'
				options: { signature: `() => void` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.Sidebar.IDefinition>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface ISkillViewHeader {
		/** Title. */
		title?: string | undefined | null
		/** Back link href. */
		backLinkHref?: string | undefined | null
		/** Back link text. */
		backLinkText?: string | undefined | null
		/** Collapsed. */
		isCollapsed?: boolean | undefined | null

		className?: string | undefined | null
		/** Primary button. */
		primaryButton?: SpruceSchemas.Local.IButton | undefined | null
		/** Bottom border. */
		hasBottomBorder?: boolean | undefined | null
		/** Sidebar expander button. The button I'll use to let the person toggle the sidebar's visibility. */
		sidebarExpanderButton?: SpruceSchemas.Local.IButton | undefined | null
		/** Back click handler. */
		onClickBack?:
			| ((e: React.MouseEvent<HTMLButtonElement>) => void)
			| undefined
			| null
		/** Tabs. */
		tabs?: SpruceSchemas.Local.ITab[] | undefined | null
	}
}

export namespace SpruceSchemas.Local.SkillViewHeader {
	/** The interface for the schema definition for a Skill view header */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'skillViewHeader'
		name: 'Skill view header'
		fields: {
			/** Title. */
			title: {
				label: 'Title'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Back link href. */
			backLinkHref: {
				label: 'Back link href'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Back link text. */
			backLinkText: {
				label: 'Back link text'
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Collapsed. */
			isCollapsed: {
				label: 'Collapsed'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** Primary button. */
			primaryButton: {
				label: 'Primary button'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Bottom border. */
			hasBottomBorder: {
				label: 'Bottom border'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Sidebar expander button. The button I'll use to let the person toggle the sidebar's visibility. */
			sidebarExpanderButton: {
				label: 'Sidebar expander button'
				type: SpruceSchema.FieldType.Schema
				hint: "The button I'll use to let the person toggle the sidebar's visibility."
				options: { schemas: SpruceSchemas.Local.Button.IDefinition[] }
			}
			/** Back click handler. */
			onClickBack: {
				label: 'Back click handler'
				type: SpruceSchema.FieldType.EventCallback
				options: {
					event: `React.MouseEvent<...>`
					element: `HTMLButtonElement`
				}
			}
			/** Tabs. */
			tabs: {
				label: 'Tabs'
				type: SpruceSchema.FieldType.Schema
				isArray: true
				options: { schemas: SpruceSchemas.Local.Tab.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SkillViewHeader.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A view you&#x27;re presenting to a person on an unknown set of devices */
	export interface ISkillView {
		/** Centered. Is all content centered? */
		isCentered?: boolean | undefined | null

		className?: string | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null

		sidebarChildren?:
			| generated_import_3.INodeFieldDefinitionValue
			| undefined
			| null
		/** Header. */
		header?: SpruceSchemas.Local.ISkillViewHeader | undefined | null
		/** Collapse sidebar. Will hide the sidebar */
		isSidebarCollapsed?: boolean | undefined | null
		/** Collapse header. Will hide the header */
		isHeaderCollapsed?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.SkillView {
	/** The interface for the schema definition for a Skill view */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'skillView'
		name: 'Skill view'
		description: "A view you're presenting to a person on an unknown set of devices"
		fields: {
			/** Centered. Is all content centered? */
			isCentered: {
				label: 'Centered'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is all content centered?'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** . */
			sidebarChildren: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Header. */
			header: {
				label: 'Header'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.SkillViewHeader.IDefinition[] }
			}
			/** Collapse sidebar. Will hide the sidebar */
			isSidebarCollapsed: {
				label: 'Collapse sidebar'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Will hide the sidebar'
				options: undefined
			}
			/** Collapse header. Will hide the header */
			isHeaderCollapsed: {
				label: 'Collapse header'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Will hide the header'
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SkillView.IDefinition>
}

export namespace SpruceSchemas.Local {
	/** A view you&#x27;re presenting to a person on an unknown set of devices */
	export interface ISkillViewBuilder {
		/** Centered. Is all content centered? */
		isCentered?: boolean | undefined | null

		className?: string | undefined | null

		children?: generated_import_3.INodeFieldDefinitionValue | undefined | null

		sidebarChildren?:
			| generated_import_3.INodeFieldDefinitionValue
			| undefined
			| null
		/** Header. */
		header?: SpruceSchemas.Local.ISkillViewHeader | undefined | null
		/** Collapse sidebar. Will hide the sidebar */
		isSidebarCollapsed?: boolean | undefined | null
		/** Collapse header. Will hide the header */
		isHeaderCollapsed?: boolean | undefined | null
		/** Content layout. */
		contentLayout?: SpruceSchemas.Local.ILayoutBuilder | undefined | null
		/** Content layout. */
		sidebarLayout?: SpruceSchemas.Local.ILayoutBuilder | undefined | null
	}
}

export namespace SpruceSchemas.Local.SkillViewBuilder {
	/** The interface for the schema definition for a Skill view builder */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'skillViewBuilder'
		name: 'Skill view builder'
		description: "A view you're presenting to a person on an unknown set of devices"
		fields: {
			/** Centered. Is all content centered? */
			isCentered: {
				label: 'Centered'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Is all content centered?'
				options: undefined
			}
			/** . */
			className: {
				type: SpruceSchema.FieldType.Text
				options: undefined
			}
			/** . */
			children: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** . */
			sidebarChildren: {
				type: SpruceSchema.FieldType.Node
				options: undefined
			}
			/** Header. */
			header: {
				label: 'Header'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.SkillViewHeader.IDefinition[] }
			}
			/** Collapse sidebar. Will hide the sidebar */
			isSidebarCollapsed: {
				label: 'Collapse sidebar'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Will hide the sidebar'
				options: undefined
			}
			/** Collapse header. Will hide the header */
			isHeaderCollapsed: {
				label: 'Collapse header'
				type: SpruceSchema.FieldType.Boolean
				hint: 'Will hide the header'
				options: undefined
			}
			/** Content layout. */
			contentLayout: {
				label: 'Content layout'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.LayoutBuilder.IDefinition[] }
			}
			/** Content layout. */
			sidebarLayout: {
				label: 'Content layout'
				type: SpruceSchema.FieldType.Schema
				options: { schemas: SpruceSchemas.Local.LayoutBuilder.IDefinition[] }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.SkillViewBuilder.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** Make it great! */
	export interface ISprucebotAvatar {
		/** Id. */
		id?: string | undefined | null
		/** Second Field. A hint */
		stateOfMind: 'chill' | 'contemplative' | 'curious' | 'accomplished'
		/** Size. */
		size: 'small' | 'medium' | 'large'
	}
}

export namespace SpruceSchemas.Local.SprucebotAvatar {
	/** The interface for the schema definition for a SprucebotAvatar */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'sprucebotAvatar'
		name: 'SprucebotAvatar'
		description: 'Make it great!'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Second Field. A hint */
			stateOfMind: {
				label: 'Second Field'
				type: SpruceSchema.FieldType.Select
				isRequired: true
				hint: 'A hint'
				defaultValue: 'medium'
				options: {
					choices: [
						{
							value: 'chill'
							label: 'Chill - Sprucebot is saying something informative or a salutation'
						},
						{
							value: 'contemplative'
							label: 'Contemplative - Sprucebot is loading or sending data'
						},
						{
							value: 'curious'
							label: 'Curious - Sprucebot is asking a question or waiting for input'
						},
						{
							value: 'accomplished'
							label: 'Accomplished - Sprucebot is celebrating because a process has finished'
						}
					]
				}
			}
			/** Size. */
			size: {
				label: 'Size'
				type: SpruceSchema.FieldType.Select
				isRequired: true
				defaultValue: 'medium'
				options: {
					choices: [
						{ value: 'small'; label: 'Small' },
						{ value: 'medium'; label: 'Medium' },
						{ value: 'large'; label: 'Large' }
					]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.SprucebotAvatar.IDefinition>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface ISprucebotTypedMessageSentence {
		/** . A way to override the Sprucebot avatar for this sentence */
		avatar?: SpruceSchemas.Local.ISprucebotAvatar | undefined | null
		/** Words. The words being typed out */
		words: string
		/** End delay. How long should I hold on this sentence after it's typed? */
		endDelay?: SpruceSchema.IDurationFieldValue | undefined | null
	}
}

export namespace SpruceSchemas.Local.SprucebotTypedMessageSentence {
	/** The interface for the schema definition for a Sprucebot Typed sentence */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'sprucebotTypedMessageSentence'
		name: 'Sprucebot Typed sentence'
		fields: {
			/** . A way to override the Sprucebot avatar for this sentence */
			avatar: {
				type: SpruceSchema.FieldType.Schema
				hint: 'A way to override the Sprucebot avatar for this sentence'
				options: { schemas: SpruceSchemas.Local.SprucebotAvatar.IDefinition[] }
			}
			/** Words. The words being typed out */
			words: {
				label: 'Words'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'The words being typed out'
				options: undefined
			}
			/** End delay. How long should I hold on this sentence after it's typed? */
			endDelay: {
				label: 'End delay'
				type: SpruceSchema.FieldType.Duration
				hint: "How long should I hold on this sentence after it's typed?"
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.SprucebotTypedMessageSentence.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/** Avatar that makes size optional for use with the Sprucebot Typed Message component */
	export interface ISprucebotTypedMessageAvatar {
		/** Id. */
		id?: string | undefined | null
		/** Second Field. A hint */
		stateOfMind: 'chill' | 'contemplative' | 'curious' | 'accomplished'
		/** Size. */
		size?: ('small' | 'medium' | 'large') | undefined | null
	}
}

export namespace SpruceSchemas.Local.SprucebotTypedMessageAvatar {
	/** The interface for the schema definition for a Typed message avatar */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'sprucebotTypedMessageAvatar'
		name: 'Typed message avatar'
		description: 'Avatar that makes size optional for use with the Sprucebot Typed Message component'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Second Field. A hint */
			stateOfMind: {
				label: 'Second Field'
				type: SpruceSchema.FieldType.Select
				isRequired: true
				hint: 'A hint'
				defaultValue: 'medium'
				options: {
					choices: [
						{
							value: 'chill'
							label: 'Chill - Sprucebot is saying something informative or a salutation'
						},
						{
							value: 'contemplative'
							label: 'Contemplative - Sprucebot is loading or sending data'
						},
						{
							value: 'curious'
							label: 'Curious - Sprucebot is asking a question or waiting for input'
						},
						{
							value: 'accomplished'
							label: 'Accomplished - Sprucebot is celebrating because a process has finished'
						}
					]
				}
			}
			/** Size. */
			size: {
				label: 'Size'
				type: SpruceSchema.FieldType.Select
				defaultValue: 'medium'
				options: {
					choices: [
						{ value: 'small'; label: 'Small' },
						{ value: 'medium'; label: 'Medium' },
						{ value: 'large'; label: 'Large' }
					]
				}
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.SprucebotTypedMessageAvatar.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface ISprucebotTypedMessage {
		/** Id. */
		id?: string | undefined | null
		/** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
		sentences: SpruceSchemas.Local.ISprucebotTypedMessageSentence[]
		/** Default avatar. How should Sprucebot be rendered by default */
		defaultAvatar?:
			| SpruceSchemas.Local.ISprucebotTypedMessageAvatar
			| undefined
			| null
		/** Start delay. How long should I wait before starting to type? */
		startDelay?: SpruceSchema.IDurationFieldValue | undefined | null
		/** Loop. */
		loop?: boolean | undefined | null
		/** Size. */
		size?: ('small' | 'medium' | 'large') | undefined | null
		/** Paused. */
		paused?: boolean | undefined | null
	}
}

export namespace SpruceSchemas.Local.SprucebotTypedMessage {
	/** The interface for the schema definition for a Sprucebot typed message */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'sprucebotTypedMessage'
		name: 'Sprucebot typed message'
		fields: {
			/** Id. */
			id: {
				label: 'Id'
				type: SpruceSchema.FieldType.Id
				options: undefined
			}
			/** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
			sentences: {
				label: 'Sentences'
				type: SpruceSchema.FieldType.Schema
				isRequired: true
				hint: 'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)'
				isArray: true
				options: {
					schemas: SpruceSchemas.Local.SprucebotTypedMessageSentence.IDefinition[]
				}
			}
			/** Default avatar. How should Sprucebot be rendered by default */
			defaultAvatar: {
				label: 'Default avatar'
				type: SpruceSchema.FieldType.Schema
				hint: 'How should Sprucebot be rendered by default'
				options: {
					schemas: SpruceSchemas.Local.SprucebotTypedMessageAvatar.IDefinition[]
				}
			}
			/** Start delay. How long should I wait before starting to type? */
			startDelay: {
				label: 'Start delay'
				type: SpruceSchema.FieldType.Duration
				hint: 'How long should I wait before starting to type?'
				defaultValue: { ms: 1000 }
				options: undefined
			}
			/** Loop. */
			loop: {
				label: 'Loop'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
			/** Size. */
			size: {
				label: 'Size'
				type: SpruceSchema.FieldType.Select
				defaultValue: 'small'
				options: {
					choices: [
						{ value: 'small'; label: 'Small' },
						{ value: 'medium'; label: 'Medium' },
						{ value: 'large'; label: 'Large' }
					]
				}
			}
			/** Paused. */
			paused: {
				label: 'Paused'
				type: SpruceSchema.FieldType.Boolean
				options: undefined
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<
		SpruceSchemas.Local.SprucebotTypedMessage.IDefinition
	>
}

export namespace SpruceSchemas.Local {
	/**  */
	export interface IToastHeader {
		/** Headline. Headline text */
		headline: string
		/** Remove action. Action to be invoked when hitting the dismiss button */
		onClickDismiss?: ((e: React.MouseEvent<Element>) => void) | undefined | null
	}
}

export namespace SpruceSchemas.Local.ToastHeader {
	/** The interface for the schema definition for a Toast header */
	export interface IDefinition extends SpruceSchema.ISchemaDefinition {
		id: 'toastHeader'
		name: 'Toast header'
		fields: {
			/** Headline. Headline text */
			headline: {
				label: 'Headline'
				type: SpruceSchema.FieldType.Text
				isRequired: true
				hint: 'Headline text'
				options: undefined
			}
			/** Remove action. Action to be invoked when hitting the dismiss button */
			onClickDismiss: {
				label: 'Remove action'
				type: SpruceSchema.FieldType.EventCallback
				hint: 'Action to be invoked when hitting the dismiss button'
				options: { event: `React.MouseEvent<...>`; element: `Element` }
			}
		}
	}

	/** The type of a schema instance built off this definition */
	export type Instance = Schema<SpruceSchemas.Local.ToastHeader.IDefinition>
}
