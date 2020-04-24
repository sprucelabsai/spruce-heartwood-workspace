import { default as Schema } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'
import * as generated_import_0 from '#spruce/../src/fields/ElementField'
import * as generated_import_1 from '#spruce/../src/fields/NodeField'
import * as generated_import_2 from '#spruce/../src/fields/OnClickField'


	export namespace SpruceSchemas.core {
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

	export namespace SpruceSchemas.core.ProfileImage {
		export const id = 'profileImage'

		/** The interface for the schema definition for a Profile Image Sizes */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'profileImage',
			name: 'Profile Image Sizes',
			description: 'Profile images at various helpful sizes and resolutions.',
			
			
			    fields: {
			            /** 60x60. */
			            'profile60': {
			                label: '60x60',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** 150x150. */
			            'profile150': {
			                label: '150x150',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** 60x60. */
			            'profile60@2x': {
			                label: '60x60',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** 150x150. */
			            'profile150@2x': {
			                label: '150x150',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Profile Image Sizes */
		export const definition: SpruceSchemas.core.ProfileImage.IDefinition = {
			id: 'profileImage',
			name: 'Profile Image Sizes',
			description: 'Profile images at various helpful sizes and resolutions.',
			
			
			    fields: {
			            /** 60x60. */
			            'profile60': {
			                label: '60x60',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** 150x150. */
			            'profile150': {
			                label: '150x150',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** 60x60. */
			            'profile60@2x': {
			                label: '60x60',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** 150x150. */
			            'profile150@2x': {
			                label: '150x150',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.core.ProfileImage.IDefinition>
	}
	

	export namespace SpruceSchemas.core {
		/** A human being. */
		export interface IUser {
			
				/** Id. */
				'id': string
				/** First name. */
				'firstName'?: string| undefined
				/** Last name. */
				'lastName'?: string| undefined
				/** Casual name. Generated name that defaults to Friend! */
				'casualName': string
				/** Phone. The person's phone number! */
				'phoneNumber'?: string| undefined
				/** Profile photos. */
				'profileImages'?: SpruceSchemas.core.IProfileImage| undefined
				/** Default profile photos. */
				'defaultProfileImages': SpruceSchemas.core.IProfileImage
		}
	}	 

	export namespace SpruceSchemas.core.User {
		export const id = 'user'

		/** The interface for the schema definition for a User */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'user',
			name: 'User',
			description: 'A human being.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Casual name. Generated name that defaults to Friend! */
			            'casualName': {
			                label: 'Casual name',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Generated name that defaults to Friend!',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Phone. The person's phone number! */
			            'phoneNumber': {
			                label: 'Phone',
			                type: SpruceSchema.FieldType.Phone,
			                
			                
			                hint: 'The person\'s phone number!',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Profile photos. */
			            'profileImages': {
			                label: 'Profile photos',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.core.ProfileImage.IDefinition[],}
			            },
			            /** Default profile photos. */
			            'defaultProfileImages': {
			                label: 'Default profile photos',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.core.ProfileImage.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a User */
		export const definition: SpruceSchemas.core.User.IDefinition = {
			id: 'user',
			name: 'User',
			description: 'A human being.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Casual name. Generated name that defaults to Friend! */
			            'casualName': {
			                label: 'Casual name',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Generated name that defaults to Friend!',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Phone. The person's phone number! */
			            'phoneNumber': {
			                label: 'Phone',
			                type: SpruceSchema.FieldType.Phone,
			                
			                
			                hint: 'The person\'s phone number!',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Profile photos. */
			            'profileImages': {
			                label: 'Profile photos',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.core.ProfileImage.definition],}
			            },
			            /** Default profile photos. */
			            'defaultProfileImages': {
			                label: 'Default profile photos',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.core.ProfileImage.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.core.User.IDefinition>
	}
	

	export namespace SpruceSchemas.core {
		/** An ability Sprucebot has learned. */
		export interface ISkill {
			
				/** Id. */
				'id': string
				/** Id. */
				'apiKey': string
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string| undefined
				/** Slug. */
				'slug'?: string| undefined
				/** Icon. */
				'icon'?: string| undefined
		}
	}	 

	export namespace SpruceSchemas.core.Skill {
		export const id = 'skill'

		/** The interface for the schema definition for a Skill */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'skill',
			name: 'Skill',
			description: 'An ability Sprucebot has learned.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Id. */
			            'apiKey': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Skill */
		export const definition: SpruceSchemas.core.Skill.IDefinition = {
			id: 'skill',
			name: 'Skill',
			description: 'An ability Sprucebot has learned.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Id. */
			            'apiKey': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.core.Skill.IDefinition>
	}
	

	export namespace SpruceSchemas.core {
		/** A physical location where people meet. An organization has at least one of them. */
		export interface ILocation {
			
				/** Id. */
				'id'?: string| undefined
				/** Name. */
				'name': string
				/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string| undefined
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean| undefined
				/** Main Phone. */
				'phone'?: string| undefined
				/** Timezone. */
				'timezone'?: ("etc/gmt+12" | "pacific/midway" | "pacific/honolulu" | "us/alaska" | "america/los_Angeles" | "america/tijuana" | "us/arizona" | "america/chihuahua" | "us/mountain" | "america/managua" | "us/central" | "america/mexico_City" | "Canada/Saskatchewan" | "america/bogota" | "us/eastern" | "us/east-indiana" | "Canada/atlantic" | "america/caracas" | "america/manaus" | "america/Santiago" | "Canada/Newfoundland" | "america/Sao_Paulo" | "america/argentina/buenos_Aires" | "america/godthab" | "america/montevideo" | "america/Noronha" | "atlantic/cape_Verde" | "atlantic/azores" | "africa/casablanca" | "etc/gmt" | "europe/amsterdam" | "europe/belgrade" | "europe/brussels" | "europe/Sarajevo" | "africa/lagos" | "asia/amman" | "europe/athens" | "asia/beirut" | "africa/cairo" | "africa/Harare" | "europe/Helsinki" | "asia/Jerusalem" | "europe/minsk" | "africa/Windhoek" | "asia/Kuwait" | "europe/moscow" | "africa/Nairobi" | "asia/tbilisi" | "asia/tehran" | "asia/muscat" | "asia/baku" | "asia/Yerevan" | "asia/Kabul" | "asia/Yekaterinburg" | "asia/Karachi" | "asia/calcutta" | "asia/calcutta" | "asia/Katmandu" | "asia/almaty" | "asia/Dhaka" | "asia/Rangoon" | "asia/bangkok" | "asia/Krasnoyarsk" | "asia/Hong_Kong" | "asia/Kuala_Lumpur" | "asia/Irkutsk" | "Australia/Perth" | "asia/taipei" | "asia/tokyo" | "asia/Seoul" | "asia/Yakutsk" | "Australia/adelaide" | "Australia/Darwin" | "Australia/brisbane" | "Australia/canberra" | "Australia/Hobart" | "pacific/guam" | "asia/Vladivostok" | "asia/magadan" | "pacific/auckland" | "pacific/Fiji" | "pacific/tongatapu")| undefined
				/** Address. */
				'address': SpruceSchema.IAddressFieldValue
		}
	}	 

	export namespace SpruceSchemas.core.Location {
		export const id = 'location'

		/** The interface for the schema definition for a Location */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'location',
			name: 'Location',
			description: 'A physical location where people meet. An organization has at least one of them.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			            'num': {
			                label: 'Store number',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Public. Is this location viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is this location viewable by guests?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Main Phone. */
			            'phone': {
			                label: 'Main Phone',
			                type: SpruceSchema.FieldType.Phone,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: SpruceSchema.FieldType.Address,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Location */
		export const definition: SpruceSchemas.core.Location.IDefinition = {
			id: 'location',
			name: 'Location',
			description: 'A physical location where people meet. An organization has at least one of them.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			            'num': {
			                label: 'Store number',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Public. Is this location viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is this location viewable by guests?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Main Phone. */
			            'phone': {
			                label: 'Main Phone',
			                type: SpruceSchema.FieldType.Phone,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: SpruceSchema.FieldType.Address,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.core.Location.IDefinition>
	}
	

	export namespace SpruceSchemas.core {
		/**  */
		export interface IAcl {
				/** Permissions grouped by slug. */
				[slug:string]: string[]
		}
	}	 

	export namespace SpruceSchemas.core.Acl {
		export const id = 'acl'

		/** The interface for the schema definition for a Access control list lookup table */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'acl',
			name: 'Access control list lookup table',
			description: '',
			
			dynamicKeySignature: { 
			    label: 'Permissions grouped by slug',
			    type: SpruceSchema.FieldType.Text,
			    key: 'slug',
			    
			    
			    
			    
			    isArray: true,
			    
			    options: undefined
			}
		}

		/** The schema definition for a Access control list lookup table */
		export const definition: SpruceSchemas.core.Acl.IDefinition = {
			id: 'acl',
			name: 'Access control list lookup table',
			description: '',
			
			dynamicKeySignature: { 
			    label: 'Permissions grouped by slug',
			    type: SpruceSchema.FieldType.Text,
			    key: 'slug',
			    
			    
			    
			    
			    isArray: true,
			    
			    options: undefined
			}
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.core.Acl.IDefinition>
	}
	

	export namespace SpruceSchemas.core {
		/** A position at a company. The answer to the question; What is your job? */
		export interface IJob {
			
				/** Id. */
				'id'?: string| undefined
				/** Is default. Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest). */
				'isDefault': string
				/** Name. */
				'name': string
				/** Role. */
				'role': ("owner" | "groupManager" | "manager" | "teammate" | "guest")
				/** On work permissions. */
				'inStoreAcls'?: SpruceSchemas.core.IAcl| undefined
				/** Off work permissions. */
				'acls'?: SpruceSchemas.core.IAcl| undefined
		}
	}	 

	export namespace SpruceSchemas.core.Job {
		export const id = 'job'

		/** The interface for the schema definition for a Job */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'job',
			name: 'Job',
			description: 'A position at a company. The answer to the question; What is your job?',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is default. Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest). */
			            'isDefault': {
			                label: 'Is default',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest).',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Role. */
			            'role': {
			                label: 'Role',
			                type: SpruceSchema.FieldType.Select,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}],}
			            },
			            /** On work permissions. */
			            'inStoreAcls': {
			                label: 'On work permissions',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.core.Acl.IDefinition[],}
			            },
			            /** Off work permissions. */
			            'acls': {
			                label: 'Off work permissions',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.core.Acl.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a Job */
		export const definition: SpruceSchemas.core.Job.IDefinition = {
			id: 'job',
			name: 'Job',
			description: 'A position at a company. The answer to the question; What is your job?',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is default. Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest). */
			            'isDefault': {
			                label: 'Is default',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Is this job one that comes with every org? Mapped to roles (owner, groupManager, managar, guest).',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Role. */
			            'role': {
			                label: 'Role',
			                type: SpruceSchema.FieldType.Select,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}],}
			            },
			            /** On work permissions. */
			            'inStoreAcls': {
			                label: 'On work permissions',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.core.Acl.definition],}
			            },
			            /** Off work permissions. */
			            'acls': {
			                label: 'Off work permissions',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.core.Acl.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.core.Job.IDefinition>
	}
	

	export namespace SpruceSchemas.core {
		/** A location a person has given access to themselves. */
		export interface IUserLocation {
			
				/** Id. */
				'id'?: string| undefined
				/** Name. */
				'role': ("owner" | "groupManager" | "manager" | "teammate" | "guest")
				/** Status. */
				'status'?: string| undefined
				/** Total visits. */
				'visits': number
				/** Last visit. */
				'lastRecordedVisit'?: SpruceSchema.IDateTimeFieldValue| undefined
				/** Job. */
				'job': SpruceSchemas.core.IJob
				/** Location. */
				'location': SpruceSchemas.core.ILocation
				/** User. */
				'user': SpruceSchemas.core.IUser
		}
	}	 

	export namespace SpruceSchemas.core.UserLocation {
		export const id = 'userLocation'

		/** The interface for the schema definition for a User location */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'userLocation',
			name: 'User location',
			description: 'A location a person has given access to themselves.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. */
			            'role': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Select,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}],}
			            },
			            /** Status. */
			            'status': {
			                label: 'Status',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Total visits. */
			            'visits': {
			                label: 'Total visits',
			                type: SpruceSchema.FieldType.Number,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}],}
			            },
			            /** Last visit. */
			            'lastRecordedVisit': {
			                label: 'Last visit',
			                type: SpruceSchema.FieldType.DateTime,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Job. */
			            'job': {
			                label: 'Job',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.core.Job.IDefinition[],}
			            },
			            /** Location. */
			            'location': {
			                label: 'Location',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.core.Location.IDefinition[],}
			            },
			            /** User. */
			            'user': {
			                label: 'User',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.core.User.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a User location */
		export const definition: SpruceSchemas.core.UserLocation.IDefinition = {
			id: 'userLocation',
			name: 'User location',
			description: 'A location a person has given access to themselves.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. */
			            'role': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Select,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}],}
			            },
			            /** Status. */
			            'status': {
			                label: 'Status',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Total visits. */
			            'visits': {
			                label: 'Total visits',
			                type: SpruceSchema.FieldType.Number,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"owner","label":"Owner"},{"value":"groupManager","label":"District/region manager"},{"value":"manager","label":"Store manager"},{"value":"teammate","label":"Teammate"},{"value":"guest","label":"Guest"}],}
			            },
			            /** Last visit. */
			            'lastRecordedVisit': {
			                label: 'Last visit',
			                type: SpruceSchema.FieldType.DateTime,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Job. */
			            'job': {
			                label: 'Job',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.core.Job.definition],}
			            },
			            /** Location. */
			            'location': {
			                label: 'Location',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.core.Location.definition],}
			            },
			            /** User. */
			            'user': {
			                label: 'User',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.core.User.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.core.UserLocation.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A photo of a person that is generally round */
		export interface IAvatar {
			
				/** Source. */
				'src': string
				/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
				'alt': string
				/** Is large. True will show large variation of the avatar */
				'isLarge'?: boolean| undefined
				/** Is large. Align text and name center */
				'isVertical'?: boolean| undefined
				/** Show online indicator. Should I should the status indicator */
				'showIndicator'?: boolean| undefined
				/** Status. */
				'status'?: ("online" | "offline")| undefined
				/** Name. */
				'name'?: string| undefined
				/** Text. Additional text to show below the name */
				'text'?: string| undefined
				/** Class name. Set the "class" attribute */
				'className'?: string| undefined
				/** Width. */
				'width'?: number| undefined
				/** Height. */
				'height'?: number| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Avatar {
		export const id = 'avatar'

		/** The interface for the schema definition for a Avatar */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'avatar',
			name: 'Avatar',
			description: 'A photo of a person that is generally round',
			
			
			    fields: {
			            /** Source. */
			            'src': {
			                label: 'Source',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
			            'alt': {
			                label: 'Alternate text',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Provides alternative information for an image if a user for some reason cannot view it',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is large. True will show large variation of the avatar */
			            'isLarge': {
			                label: 'Is large',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'True will show large variation of the avatar',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is large. Align text and name center */
			            'isVertical': {
			                label: 'Is large',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Align text and name center',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Show online indicator. Should I should the status indicator */
			            'showIndicator': {
			                label: 'Show online indicator',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Should I should the status indicator',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Status. */
			            'status': {
			                label: 'Status',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}],}
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Additional text to show below the name */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Additional text to show below the name',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. Set the "class" attribute */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Set the "class" attribute',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Width. */
			            'width': {
			                label: 'Width',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Height. */
			            'height': {
			                label: 'Height',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Avatar */
		export const definition: SpruceSchemas.local.Avatar.IDefinition = {
			id: 'avatar',
			name: 'Avatar',
			description: 'A photo of a person that is generally round',
			
			
			    fields: {
			            /** Source. */
			            'src': {
			                label: 'Source',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
			            'alt': {
			                label: 'Alternate text',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Provides alternative information for an image if a user for some reason cannot view it',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is large. True will show large variation of the avatar */
			            'isLarge': {
			                label: 'Is large',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'True will show large variation of the avatar',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is large. Align text and name center */
			            'isVertical': {
			                label: 'Is large',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Align text and name center',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Show online indicator. Should I should the status indicator */
			            'showIndicator': {
			                label: 'Show online indicator',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Should I should the status indicator',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Status. */
			            'status': {
			                label: 'Status',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}],}
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Additional text to show below the name */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Additional text to show below the name',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. Set the "class" attribute */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Set the "class" attribute',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Width. */
			            'width': {
			                label: 'Width',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Height. */
			            'height': {
			                label: 'Height',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Avatar.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** The one, the only, checkbox! */
		export interface ICheckbox {
			
				/** Id. Unique identifier */
				'id': string
				/** Name. A name attached to this checkbox */
				'name'?: string| undefined
				/** Label. Input label and text after checkbox icon */
				'label'?: string| undefined
				/** Post text. Optional text to show below the label */
				'postText'?: string| undefined
				/** Is disabled. is this checkbox disabled */
				'isDisabled'?: boolean| undefined
				/** Is indeterminate. Set true if the checkbox is indeterminate (the half checked thing you've seen in some places) */
				'isIndeterminate': boolean
				/** Is checked. is this checkbox checked? */
				'isChecked'?: boolean| undefined
				/** On click. Optional action to invoke when tapped */
				'onClick'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Checkbox {
		export const id = 'checkbox'

		/** The interface for the schema definition for a Checkbox */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'checkbox',
			name: 'Checkbox',
			description: 'The one, the only, checkbox!',
			
			
			    fields: {
			            /** Id. Unique identifier */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique identifier',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. A name attached to this checkbox */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'A name attached to this checkbox',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label. Input label and text after checkbox icon */
			            'label': {
			                label: 'Label',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Input label and text after checkbox icon',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Post text. Optional text to show below the label */
			            'postText': {
			                label: 'Post text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional text to show below the label',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is disabled. is this checkbox disabled */
			            'isDisabled': {
			                label: 'Is disabled',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'is this checkbox disabled',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is indeterminate. Set true if the checkbox is indeterminate (the half checked thing you've seen in some places) */
			            'isIndeterminate': {
			                label: 'Is indeterminate',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                isRequired: true,
			                hint: 'Set true if the checkbox is indeterminate (the half checked thing you\'ve seen in some places)',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is checked. is this checkbox checked? */
			            'isChecked': {
			                label: 'Is checked',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'is this checkbox checked?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** On click. Optional action to invoke when tapped */
			            'onClick': {
			                label: 'On click',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Optional action to invoke when tapped',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Checkbox */
		export const definition: SpruceSchemas.local.Checkbox.IDefinition = {
			id: 'checkbox',
			name: 'Checkbox',
			description: 'The one, the only, checkbox!',
			
			
			    fields: {
			            /** Id. Unique identifier */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique identifier',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. A name attached to this checkbox */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'A name attached to this checkbox',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label. Input label and text after checkbox icon */
			            'label': {
			                label: 'Label',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Input label and text after checkbox icon',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Post text. Optional text to show below the label */
			            'postText': {
			                label: 'Post text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional text to show below the label',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is disabled. is this checkbox disabled */
			            'isDisabled': {
			                label: 'Is disabled',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'is this checkbox disabled',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is indeterminate. Set true if the checkbox is indeterminate (the half checked thing you've seen in some places) */
			            'isIndeterminate': {
			                label: 'Is indeterminate',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                isRequired: true,
			                hint: 'Set true if the checkbox is indeterminate (the half checked thing you\'ve seen in some places)',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is checked. is this checkbox checked? */
			            'isChecked': {
			                label: 'Is checked',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'is this checkbox checked?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** On click. Optional action to invoke when tapped */
			            'onClick': {
			                label: 'On click',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Optional action to invoke when tapped',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Checkbox.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** a confirmation dialog */
		export interface IConfirmModal {
			
				/** Title. Title of the confirmation dialog */
				'title'?: string| undefined
				/** Text. Text shown in the dialog */
				'text'?: string| undefined
		}
	}	 

	export namespace SpruceSchemas.local.ConfirmModal {
		export const id = 'confirm Modal'

		/** The interface for the schema definition for a ConfirmModal */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'confirm Modal',
			name: 'ConfirmModal',
			description: 'a confirmation dialog',
			
			
			    fields: {
			            /** Title. Title of the confirmation dialog */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Title of the confirmation dialog',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Text shown in the dialog */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text shown in the dialog',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a ConfirmModal */
		export const definition: SpruceSchemas.local.ConfirmModal.IDefinition = {
			id: 'confirm Modal',
			name: 'ConfirmModal',
			description: 'a confirmation dialog',
			
			
			    fields: {
			            /** Title. Title of the confirmation dialog */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Title of the confirmation dialog',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Text shown in the dialog */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text shown in the dialog',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ConfirmModal.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** **missing description** */
		export interface IIcon {
			
				/** Id. Id for ui caching */
				'id': string
				/** Name. The name of the icon to render. If not found, this will return null. */
				'name'?: string| undefined
				/** Is line icon. Set true to render an icon with a stroke, but no fill */
				'isLineIcon'?: boolean| undefined
				/** . */
				'className'?: string| undefined
				/** . Lets you pass an icon node */
				'customIcon'?: generated_import_1.INodeFieldDefinitionValue| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Icon {
		export const id = 'Icon'

		/** The interface for the schema definition for a Icon */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'Icon',
			name: 'Icon',
			description: '**missing description**',
			
			
			    fields: {
			            /** Id. Id for ui caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Id for ui caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. The name of the icon to render. If not found, this will return null. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'The name of the icon to render. If not found, this will return null.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is line icon. Set true to render an icon with a stroke, but no fill */
			            'isLineIcon': {
			                label: 'Is line icon',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to render an icon with a stroke, but no fill',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'className': {
			                label: '',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . Lets you pass an icon node */
			            'customIcon': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                hint: 'Lets you pass an icon node',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Icon */
		export const definition: SpruceSchemas.local.Icon.IDefinition = {
			id: 'Icon',
			name: 'Icon',
			description: '**missing description**',
			
			
			    fields: {
			            /** Id. Id for ui caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Id for ui caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. The name of the icon to render. If not found, this will return null. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'The name of the icon to render. If not found, this will return null.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is line icon. Set true to render an icon with a stroke, but no fill */
			            'isLineIcon': {
			                label: 'Is line icon',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to render an icon with a stroke, but no fill',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'className': {
			                label: '',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . Lets you pass an icon node */
			            'customIcon': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                hint: 'Lets you pass an icon node',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Icon.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A interactive element you can touch or click to invoke an Action */
		export interface IButton {
			
				/** Id. Unique ID for rendering in lists */
				'id': string
				/** Kind. Sets the visual appearance of the button. May be primary, secondary, simple, or caution. */
				'kind'?: ("primary" | "secondary" | "simple" | "caution")| undefined
				/** Is small. Set true to make the button less tall. */
				'isSmall'?: boolean| undefined
				/** Is full width. Set true to make the button fill its parent's width. */
				'isFullWidth'?: boolean| undefined
				/** Is loading. Set true to hide any text or icon in the button and show a loader instead. */
				'isLoading'?: boolean| undefined
				/** Is icon only. Set true to hide any text in the button. Text should still be provided for accessibility. */
				'isIconOnly'?: boolean| undefined
				/** Text. Text for the button. */
				'text'?: string| undefined
				/** Href. Will render a link. May be relative or absolute. */
				'href'?: string| undefined
				/** Icon. Icon for the button. */
				'icon'?: SpruceSchemas.local.IIcon| undefined
				/** Type. Type attribute for HTML button element. Defaults to 'button'. */
				'type'?: ("button" | "submit" | "reset")| undefined
				/** Is disabled. Set true to disable the button */
				'isDisabled'?: boolean| undefined
				/** classname. */
				'className'?: string| undefined
				/** On click handler. */
				'onClick'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
				/** . */
				'children'?: generated_import_1.INodeFieldDefinitionValue| undefined
				/** . Lets you override the element used when rendering a link */
				'AnchorComponent'?: React.ReactElement| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Button {
		export const id = 'button'

		/** The interface for the schema definition for a Button */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'button',
			name: 'Button',
			description: 'A interactive element you can touch or click to invoke an Action',
			
			
			    fields: {
			            /** Id. Unique ID for rendering in lists */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique ID for rendering in lists',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Kind. Sets the visual appearance of the button. May be primary, secondary, simple, or caution. */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Sets the visual appearance of the button. May be primary, secondary, simple, or caution.',
			                
			                
			                
			                
			                options: {choices: [{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}],}
			            },
			            /** Is small. Set true to make the button less tall. */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the button less tall.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is full width. Set true to make the button fill its parent's width. */
			            'isFullWidth': {
			                label: 'Is full width',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the button fill its parent\'s width.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is loading. Set true to hide any text or icon in the button and show a loader instead. */
			            'isLoading': {
			                label: 'Is loading',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to hide any text or icon in the button and show a loader instead.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is icon only. Set true to hide any text in the button. Text should still be provided for accessibility. */
			            'isIconOnly': {
			                label: 'Is icon only',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to hide any text in the button. Text should still be provided for accessibility.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Text for the button. */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text for the button.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Href. Will render a link. May be relative or absolute. */
			            'href': {
			                label: 'Href',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Will render a link. May be relative or absolute.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. Icon for the button. */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Icon for the button.',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Type. Type attribute for HTML button element. Defaults to 'button'. */
			            'type': {
			                label: 'Type',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Type attribute for HTML button element. Defaults to \'button\'.',
			                
			                
			                
			                
			                options: {choices: [{"label":"Button","value":"button"},{"label":"Submit","value":"submit"},{"label":"Reset","value":"reset"}],}
			            },
			            /** Is disabled. Set true to disable the button */
			            'isDisabled': {
			                label: 'Is disabled',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to disable the button',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** classname. */
			            'className': {
			                label: 'classname',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** On click handler. */
			            'onClick': {
			                label: 'On click handler',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'children': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . Lets you override the element used when rendering a link */
			            'AnchorComponent': {
			                label: '',
			                type: SpruceSchema.FieldType.Element,
			                
			                
			                hint: 'Lets you override the element used when rendering a link',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Button */
		export const definition: SpruceSchemas.local.Button.IDefinition = {
			id: 'button',
			name: 'Button',
			description: 'A interactive element you can touch or click to invoke an Action',
			
			
			    fields: {
			            /** Id. Unique ID for rendering in lists */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique ID for rendering in lists',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Kind. Sets the visual appearance of the button. May be primary, secondary, simple, or caution. */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Sets the visual appearance of the button. May be primary, secondary, simple, or caution.',
			                
			                
			                
			                
			                options: {choices: [{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}],}
			            },
			            /** Is small. Set true to make the button less tall. */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the button less tall.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is full width. Set true to make the button fill its parent's width. */
			            'isFullWidth': {
			                label: 'Is full width',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the button fill its parent\'s width.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is loading. Set true to hide any text or icon in the button and show a loader instead. */
			            'isLoading': {
			                label: 'Is loading',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to hide any text or icon in the button and show a loader instead.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is icon only. Set true to hide any text in the button. Text should still be provided for accessibility. */
			            'isIconOnly': {
			                label: 'Is icon only',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to hide any text in the button. Text should still be provided for accessibility.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Text for the button. */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text for the button.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Href. Will render a link. May be relative or absolute. */
			            'href': {
			                label: 'Href',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Will render a link. May be relative or absolute.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. Icon for the button. */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Icon for the button.',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Type. Type attribute for HTML button element. Defaults to 'button'. */
			            'type': {
			                label: 'Type',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Type attribute for HTML button element. Defaults to \'button\'.',
			                
			                
			                
			                
			                options: {choices: [{"label":"Button","value":"button"},{"label":"Submit","value":"submit"},{"label":"Reset","value":"reset"}],}
			            },
			            /** Is disabled. Set true to disable the button */
			            'isDisabled': {
			                label: 'Is disabled',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to disable the button',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** classname. */
			            'className': {
			                label: 'classname',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** On click handler. */
			            'onClick': {
			                label: 'On click handler',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'children': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . Lets you override the element used when rendering a link */
			            'AnchorComponent': {
			                label: '',
			                type: SpruceSchema.FieldType.Element,
			                
			                
			                hint: 'Lets you override the element used when rendering a link',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Button.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A contextual menu comprised of buttons (tip: set the action on each button). */
		export interface IContextMenu {
			
				/** Buttons. */
				'buttons': SpruceSchemas.local.IButton[]
				/** Size. Set the width of the menu. Helpful for longer text in buttons */
				'size'?: ("medium" | "large")| undefined
				/** Text. Adds text to the collapsed menu */
				'text'?: string| undefined
				/** Icon. Overrides the default icon */
				'icon'?: SpruceSchemas.local.IIcon| undefined
				/** Is simple. Set true to make the button blue */
				'isSimple'?: boolean| undefined
				/** Is small. Set true to make the button smaller */
				'isSmall'?: boolean| undefined
				/** Close on select. Set to true makes the menu close when any option is selected */
				'closeOnSelect'?: boolean| undefined
				/** Classname. */
				'className'?: string| undefined
				/** . Invoked when the button is clicked */
				'onClick'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
		}
	}	 

	export namespace SpruceSchemas.local.ContextMenu {
		export const id = 'ContextMenu'

		/** The interface for the schema definition for a ContextMenu */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'ContextMenu',
			name: 'ContextMenu',
			description: 'A contextual menu comprised of buttons (tip: set the action on each button).',
			
			
			    fields: {
			            /** Buttons. */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			            /** Size. Set the width of the menu. Helpful for longer text in buttons */
			            'size': {
			                label: 'Size',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Set the width of the menu. Helpful for longer text in buttons',
			                
			                
			                
			                
			                options: {choices: [{"label":"Medium","value":"medium"},{"label":"Large","value":"large"}],}
			            },
			            /** Text. Adds text to the collapsed menu */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Adds text to the collapsed menu',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. Overrides the default icon */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Overrides the default icon',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Is simple. Set true to make the button blue */
			            'isSimple': {
			                label: 'Is simple',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the button blue',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is small. Set true to make the button smaller */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the button smaller',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Close on select. Set to true makes the menu close when any option is selected */
			            'closeOnSelect': {
			                label: 'Close on select',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set to true makes the menu close when any option is selected',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Classname. */
			            'className': {
			                label: 'Classname',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . Invoked when the button is clicked */
			            'onClick': {
			                label: '',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Invoked when the button is clicked',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a ContextMenu */
		export const definition: SpruceSchemas.local.ContextMenu.IDefinition = {
			id: 'ContextMenu',
			name: 'ContextMenu',
			description: 'A contextual menu comprised of buttons (tip: set the action on each button).',
			
			
			    fields: {
			            /** Buttons. */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			            /** Size. Set the width of the menu. Helpful for longer text in buttons */
			            'size': {
			                label: 'Size',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Set the width of the menu. Helpful for longer text in buttons',
			                
			                
			                
			                
			                options: {choices: [{"label":"Medium","value":"medium"},{"label":"Large","value":"large"}],}
			            },
			            /** Text. Adds text to the collapsed menu */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Adds text to the collapsed menu',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. Overrides the default icon */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Overrides the default icon',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Is simple. Set true to make the button blue */
			            'isSimple': {
			                label: 'Is simple',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the button blue',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is small. Set true to make the button smaller */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the button smaller',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Close on select. Set to true makes the menu close when any option is selected */
			            'closeOnSelect': {
			                label: 'Close on select',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set to true makes the menu close when any option is selected',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Classname. */
			            'className': {
			                label: 'Classname',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . Invoked when the button is clicked */
			            'onClick': {
			                label: '',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Invoked when the button is clicked',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ContextMenu.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Used for the empty state of lists */
		export interface IEmptyState {
			
				/** Heading. */
				'heading': string
				/** Subheading. */
				'subheading'?: string| undefined
				/** Icon. */
				'icon'?: SpruceSchemas.local.IIcon| undefined
				/** Primary button. */
				'primaryButton'?: SpruceSchemas.local.IButton| undefined
		}
	}	 

	export namespace SpruceSchemas.local.EmptyState {
		export const id = 'emptyState'

		/** The interface for the schema definition for a Empty state */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'emptyState',
			name: 'Empty state',
			description: 'Used for the empty state of lists',
			
			
			    fields: {
			            /** Heading. */
			            'heading': {
			                label: 'Heading',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subheading. */
			            'subheading': {
			                label: 'Subheading',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Primary button. */
			            'primaryButton': {
			                label: 'Primary button',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a Empty state */
		export const definition: SpruceSchemas.local.EmptyState.IDefinition = {
			id: 'emptyState',
			name: 'Empty state',
			description: 'Used for the empty state of lists',
			
			
			    fields: {
			            /** Heading. */
			            'heading': {
			                label: 'Heading',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subheading. */
			            'subheading': {
			                label: 'Subheading',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Primary button. */
			            'primaryButton': {
			                label: 'Primary button',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.EmptyState.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** **missing description** */
		export interface IHeading {
			
				/** Id. Id for view caching */
				'id': string
				/** Html. HTML rendered directly */
				'html'?: string| undefined
				/** Text. Text rendered in the header */
				'text'?: string| undefined
				/** . */
				'className'?: string| undefined
				/** . */
				'children'?: generated_import_1.INodeFieldDefinitionValue| undefined
				/** Weight. The weight of the heading, H1 and beyond */
				'weight'?: ("h1" | "h2" | "h3" | "h4" | "h5" | "h6")| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Heading {
		export const id = 'Heading'

		/** The interface for the schema definition for a Heading */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'Heading',
			name: 'Heading',
			description: '**missing description**',
			
			
			    fields: {
			            /** Id. Id for view caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Id for view caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Html. HTML rendered directly */
			            'html': {
			                label: 'Html',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'HTML rendered directly',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Text rendered in the header */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text rendered in the header',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'className': {
			                label: '',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'children': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Weight. The weight of the heading, H1 and beyond */
			            'weight': {
			                label: 'Weight',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'The weight of the heading, H1 and beyond',
			                
			                
			                
			                
			                options: {choices: [{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"}],}
			            },
			    }
		}

		/** The schema definition for a Heading */
		export const definition: SpruceSchemas.local.Heading.IDefinition = {
			id: 'Heading',
			name: 'Heading',
			description: '**missing description**',
			
			
			    fields: {
			            /** Id. Id for view caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Id for view caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Html. HTML rendered directly */
			            'html': {
			                label: 'Html',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'HTML rendered directly',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Text rendered in the header */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text rendered in the header',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'className': {
			                label: '',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'children': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Weight. The weight of the heading, H1 and beyond */
			            'weight': {
			                label: 'Weight',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'The weight of the heading, H1 and beyond',
			                
			                
			                
			                
			                options: {choices: [{"label":"H1","value":"h1"},{"label":"H2","value":"h2"},{"label":"H3","value":"h3"},{"label":"H4","value":"h4"},{"label":"H5","value":"h5"},{"label":"H6","value":"h6"}],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Heading.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A basic image tag */
		export interface IImage {
			
				/** Id. For UI caching */
				'id': string
				/** Src. Where to pull the image from */
				'src': string
				/** Alt. Rendered as the alt tag for hovers */
				'alt'?: string| undefined
				/** . */
				'width'?: number| undefined
				/** . */
				'height'?: number| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Image {
		export const id = 'Image'

		/** The interface for the schema definition for a Image */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'Image',
			name: 'Image',
			description: 'A basic image tag',
			
			
			    fields: {
			            /** Id. For UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'For UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Src. Where to pull the image from */
			            'src': {
			                label: 'Src',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Where to pull the image from',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Alt. Rendered as the alt tag for hovers */
			            'alt': {
			                label: 'Alt',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Rendered as the alt tag for hovers',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'width': {
			                label: '',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'height': {
			                label: '',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Image */
		export const definition: SpruceSchemas.local.Image.IDefinition = {
			id: 'Image',
			name: 'Image',
			description: 'A basic image tag',
			
			
			    fields: {
			            /** Id. For UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'For UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Src. Where to pull the image from */
			            'src': {
			                label: 'Src',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Where to pull the image from',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Alt. Rendered as the alt tag for hovers */
			            'alt': {
			                label: 'Alt',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Rendered as the alt tag for hovers',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'width': {
			                label: '',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'height': {
			                label: '',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Image.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/**  */
		export interface ILayoutSection {
			
				/** Id. */
				'id': string
				/** Children. */
				'children'?: generated_import_1.INodeFieldDefinitionValue| undefined
				/** Classname. */
				'className'?: string| undefined
				/** Is secondary. Makes this section thinner */
				'isSecondary'?: boolean| undefined
		}
	}	 

	export namespace SpruceSchemas.local.LayoutSection {
		export const id = 'layoutSection'

		/** The interface for the schema definition for a Layout section */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'layoutSection',
			name: 'Layout section',
			description: '',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Children. */
			            'children': {
			                label: 'Children',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Classname. */
			            'className': {
			                label: 'Classname',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is secondary. Makes this section thinner */
			            'isSecondary': {
			                label: 'Is secondary',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Makes this section thinner',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Layout section */
		export const definition: SpruceSchemas.local.LayoutSection.IDefinition = {
			id: 'layoutSection',
			name: 'Layout section',
			description: '',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Children. */
			            'children': {
			                label: 'Children',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Classname. */
			            'className': {
			                label: 'Classname',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is secondary. Makes this section thinner */
			            'isSecondary': {
			                label: 'Is secondary',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Makes this section thinner',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.LayoutSection.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Layout  */
		export interface ILayout {
			
				/** Children. */
				'children'?: generated_import_1.INodeFieldDefinitionValue| undefined
				/** Is centered. A hint */
				'isCentered': boolean
				/** Is full bleed. */
				'isFullBleed'?: boolean| undefined
				/** Sections. Layout sections that makeup this layout */
				'sections'?: SpruceSchemas.local.ILayoutSection[]| undefined
				/** . */
				'className'?: string| undefined
				/** Width. */
				'width'?: ("base" | "wide" | "tight" | "fullWidth")| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Layout {
		export const id = 'layout'

		/** The interface for the schema definition for a Layout */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'layout',
			name: 'Layout',
			description: 'Layout ',
			
			
			    fields: {
			            /** Children. */
			            'children': {
			                label: 'Children',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is centered. A hint */
			            'isCentered': {
			                label: 'Is centered',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                isRequired: true,
			                hint: 'A hint',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is full bleed. */
			            'isFullBleed': {
			                label: 'Is full bleed',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Sections. Layout sections that makeup this layout */
			            'sections': {
			                label: 'Sections',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Layout sections that makeup this layout',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.LayoutSection.IDefinition[],}
			            },
			            /** . */
			            'className': {
			                label: '',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Width. */
			            'width': {
			                label: 'Width',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"base","label":"Base"},{"value":"wide","label":"Wide"},{"value":"tight","label":"Tight"},{"value":"fullWidth","label":"Full width"}],}
			            },
			    }
		}

		/** The schema definition for a Layout */
		export const definition: SpruceSchemas.local.Layout.IDefinition = {
			id: 'layout',
			name: 'Layout',
			description: 'Layout ',
			
			
			    fields: {
			            /** Children. */
			            'children': {
			                label: 'Children',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is centered. A hint */
			            'isCentered': {
			                label: 'Is centered',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                isRequired: true,
			                hint: 'A hint',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is full bleed. */
			            'isFullBleed': {
			                label: 'Is full bleed',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Sections. Layout sections that makeup this layout */
			            'sections': {
			                label: 'Sections',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Layout sections that makeup this layout',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.LayoutSection.definition],}
			            },
			            /** . */
			            'className': {
			                label: '',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Width. */
			            'width': {
			                label: 'Width',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"base","label":"Base"},{"value":"wide","label":"Wide"},{"value":"tight","label":"Tight"},{"value":"fullWidth","label":"Full width"}],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Layout.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Render markdown beautifully */
		export interface IMarkdown {
			
				/** Id. Unique ID for view caching. */
				'id': string
				/** Source. Markdown text to be rendered */
				'source': string
		}
	}	 

	export namespace SpruceSchemas.local.Markdown {
		export const id = 'markdown'

		/** The interface for the schema definition for a Markdown */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'markdown',
			name: 'Markdown',
			description: 'Render markdown beautifully',
			
			
			    fields: {
			            /** Id. Unique ID for view caching. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique ID for view caching.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Source. Markdown text to be rendered */
			            'source': {
			                label: 'Source',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Markdown text to be rendered',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Markdown */
		export const definition: SpruceSchemas.local.Markdown.IDefinition = {
			id: 'markdown',
			name: 'Markdown',
			description: 'Render markdown beautifully',
			
			
			    fields: {
			            /** Id. Unique ID for view caching. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique ID for view caching.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Source. Markdown text to be rendered */
			            'source': {
			                label: 'Source',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Markdown text to be rendered',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Markdown.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Make it great! */
		export interface ISprucebotAvatar {
			
				/** Id. */
				'id': string
				/** Second Field. A hint */
				'stateOfMind': ("chill" | "contemplative" | "curious" | "accomplished")
				/** Size. */
				'size': ("small" | "medium" | "large")
		}
	}	 

	export namespace SpruceSchemas.local.SprucebotAvatar {
		export const id = 'sprucebotAvatar'

		/** The interface for the schema definition for a SprucebotAvatar */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'sprucebotAvatar',
			name: 'SprucebotAvatar',
			description: 'Make it great!',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Second Field. A hint */
			            'stateOfMind': {
			                label: 'Second Field',
			                type: SpruceSchema.FieldType.Select,
			                
			                isRequired: true,
			                hint: 'A hint',
			                
			                
			                
			                
			                options: {choices: [{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}],}
			            },
			            /** Size. */
			            'size': {
			                label: 'Size',
			                type: SpruceSchema.FieldType.Select,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
			            },
			    }
		}

		/** The schema definition for a SprucebotAvatar */
		export const definition: SpruceSchemas.local.SprucebotAvatar.IDefinition = {
			id: 'sprucebotAvatar',
			name: 'SprucebotAvatar',
			description: 'Make it great!',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Second Field. A hint */
			            'stateOfMind': {
			                label: 'Second Field',
			                type: SpruceSchema.FieldType.Select,
			                
			                isRequired: true,
			                hint: 'A hint',
			                
			                
			                
			                
			                options: {choices: [{"value":"chill","label":"Chill - Sprucebot is saying something informative or a salutation"},{"value":"contemplative","label":"Contemplative - Sprucebot is loading or sending data"},{"value":"curious","label":"Curious - Sprucebot is asking a question or waiting for input"},{"value":"accomplished","label":"Accomplished - Sprucebot is celebrating because a process has finished"}],}
			            },
			            /** Size. */
			            'size': {
			                label: 'Size',
			                type: SpruceSchema.FieldType.Select,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.SprucebotAvatar.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/**  */
		export interface ISprucebotTypedMessageSentence {
			
				/** . A way to override the Sprucebot avatar for this sentence */
				'avatar'?: SpruceSchemas.local.ISprucebotAvatar| undefined
				/** Words. The words being typed out */
				'words'?: string| undefined
				/** End delay. How long should I hold on this sentence after it's typed? */
				'endDelay'?: SpruceSchema.IDurationFieldValue| undefined
		}
	}	 

	export namespace SpruceSchemas.local.SprucebotTypedMessageSentence {
		export const id = 'sprucebotTypedMessageSentence'

		/** The interface for the schema definition for a Sprucebot Typed sentence */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'sprucebotTypedMessageSentence',
			name: 'Sprucebot Typed sentence',
			description: '',
			
			
			    fields: {
			            /** . A way to override the Sprucebot avatar for this sentence */
			            'avatar': {
			                label: '',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'A way to override the Sprucebot avatar for this sentence',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.SprucebotAvatar.IDefinition[],}
			            },
			            /** Words. The words being typed out */
			            'words': {
			                label: 'Words',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'The words being typed out',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** End delay. How long should I hold on this sentence after it's typed? */
			            'endDelay': {
			                label: 'End delay',
			                type: SpruceSchema.FieldType.Duration,
			                
			                
			                hint: 'How long should I hold on this sentence after it\'s typed?',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Sprucebot Typed sentence */
		export const definition: SpruceSchemas.local.SprucebotTypedMessageSentence.IDefinition = {
			id: 'sprucebotTypedMessageSentence',
			name: 'Sprucebot Typed sentence',
			description: '',
			
			
			    fields: {
			            /** . A way to override the Sprucebot avatar for this sentence */
			            'avatar': {
			                label: '',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'A way to override the Sprucebot avatar for this sentence',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.SprucebotAvatar.definition],}
			            },
			            /** Words. The words being typed out */
			            'words': {
			                label: 'Words',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'The words being typed out',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** End delay. How long should I hold on this sentence after it's typed? */
			            'endDelay': {
			                label: 'End delay',
			                type: SpruceSchema.FieldType.Duration,
			                
			                
			                hint: 'How long should I hold on this sentence after it\'s typed?',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.SprucebotTypedMessageSentence.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/**  */
		export interface ISprucebotTypedMessage {
			
				/** Id. */
				'id': string
				/** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
				'sentences': SpruceSchemas.local.ISprucebotTypedMessageSentence[]
				/** Default avatar. How should Sprucebot be rendered by default */
				'defaultAvatar'?: SpruceSchemas.local.ISprucebotAvatar| undefined
				/** Start delay. How long should I wait before starting to type? */
				'startDelay'?: SpruceSchema.IDurationFieldValue| undefined
				/** Loop. */
				'loop'?: boolean| undefined
				/** Size. */
				'size'?: ("small" | "medium" | "large")| undefined
				/** Paused. */
				'paused'?: boolean| undefined
		}
	}	 

	export namespace SpruceSchemas.local.SprucebotTypedMessage {
		export const id = 'sprucebotTypedMessage'

		/** The interface for the schema definition for a Sprucebot typed message */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'sprucebotTypedMessage',
			name: 'Sprucebot typed message',
			description: '',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
			            'sentences': {
			                label: 'Sentences',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.SprucebotTypedMessageSentence.IDefinition[],}
			            },
			            /** Default avatar. How should Sprucebot be rendered by default */
			            'defaultAvatar': {
			                label: 'Default avatar',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'How should Sprucebot be rendered by default',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.SprucebotAvatar.IDefinition[],}
			            },
			            /** Start delay. How long should I wait before starting to type? */
			            'startDelay': {
			                label: 'Start delay',
			                type: SpruceSchema.FieldType.Duration,
			                
			                
			                hint: 'How long should I wait before starting to type?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Loop. */
			            'loop': {
			                label: 'Loop',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Size. */
			            'size': {
			                label: 'Size',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
			            },
			            /** Paused. */
			            'paused': {
			                label: 'Paused',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Sprucebot typed message */
		export const definition: SpruceSchemas.local.SprucebotTypedMessage.IDefinition = {
			id: 'sprucebotTypedMessage',
			name: 'Sprucebot typed message',
			description: '',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Sentences. Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold) */
			            'sentences': {
			                label: 'Sentences',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Sprucebot will type out these sentences one at a time preserving what is similar between each one (in bold)',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.SprucebotTypedMessageSentence.definition],}
			            },
			            /** Default avatar. How should Sprucebot be rendered by default */
			            'defaultAvatar': {
			                label: 'Default avatar',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'How should Sprucebot be rendered by default',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.SprucebotAvatar.definition],}
			            },
			            /** Start delay. How long should I wait before starting to type? */
			            'startDelay': {
			                label: 'Start delay',
			                type: SpruceSchema.FieldType.Duration,
			                
			                
			                hint: 'How long should I wait before starting to type?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Loop. */
			            'loop': {
			                label: 'Loop',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Size. */
			            'size': {
			                label: 'Size',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"small","label":"Small"},{"value":"medium","label":"Medium"},{"value":"large","label":"Large"}],}
			            },
			            /** Paused. */
			            'paused': {
			                label: 'Paused',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.SprucebotTypedMessage.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Basic text to be rendered */
		export interface IText {
			
				/** Id. Unique id for UI caching */
				'id': string
				/** Text. the text to render */
				'text'?: string| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Text {
		export const id = 'Text'

		/** The interface for the schema definition for a Text */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'Text',
			name: 'Text',
			description: 'Basic text to be rendered',
			
			
			    fields: {
			            /** Id. Unique id for UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Unique id for UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. the text to render */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'the text to render',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Text */
		export const definition: SpruceSchemas.local.Text.IDefinition = {
			id: 'Text',
			name: 'Text',
			description: 'Basic text to be rendered',
			
			
			    fields: {
			            /** Id. Unique id for UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Unique id for UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. the text to render */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'the text to render',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Text.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Call out information so it&#x27;s impossible to miss! */
		export interface IToast {
			
				/** Id. Unique id for UI caching */
				'id': string
				/** Headline. Headline text */
				'headline': string
				/** Text. Optional; Text after the headline */
				'text'?: string| undefined
				/** Can remove. Optional; controls whether the toast can be removed. Defaults to true */
				'canRemove'?: boolean| undefined
				/** Remove action. Action to be invoked when hitting the dismiss button */
				'removeAction'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
				/** Kind. Sets the variation of toast */
				'kind'?: string| undefined
				/** Followup text. Text for the followup action */
				'followupText'?: string| undefined
				/** Followup action. Action to be invoked when hitting the followup CTA */
				'followupAction'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Toast {
		export const id = 'Toast'

		/** The interface for the schema definition for a Toast */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'Toast',
			name: 'Toast',
			description: 'Call out information so it\'s impossible to miss!',
			
			
			    fields: {
			            /** Id. Unique id for UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique id for UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Headline. Headline text */
			            'headline': {
			                label: 'Headline',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Headline text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Optional; Text after the headline */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional; Text after the headline',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Can remove. Optional; controls whether the toast can be removed. Defaults to true */
			            'canRemove': {
			                label: 'Can remove',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Optional; controls whether the toast can be removed. Defaults to true',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Remove action. Action to be invoked when hitting the dismiss button */
			            'removeAction': {
			                label: 'Remove action',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Action to be invoked when hitting the dismiss button',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Kind. Sets the variation of toast */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Sets the variation of toast',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Followup text. Text for the followup action */
			            'followupText': {
			                label: 'Followup text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text for the followup action',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Followup action. Action to be invoked when hitting the followup CTA */
			            'followupAction': {
			                label: 'Followup action',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Action to be invoked when hitting the followup CTA',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Toast */
		export const definition: SpruceSchemas.local.Toast.IDefinition = {
			id: 'Toast',
			name: 'Toast',
			description: 'Call out information so it\'s impossible to miss!',
			
			
			    fields: {
			            /** Id. Unique id for UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique id for UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Headline. Headline text */
			            'headline': {
			                label: 'Headline',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Headline text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Optional; Text after the headline */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional; Text after the headline',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Can remove. Optional; controls whether the toast can be removed. Defaults to true */
			            'canRemove': {
			                label: 'Can remove',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Optional; controls whether the toast can be removed. Defaults to true',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Remove action. Action to be invoked when hitting the dismiss button */
			            'removeAction': {
			                label: 'Remove action',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Action to be invoked when hitting the dismiss button',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Kind. Sets the variation of toast */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Sets the variation of toast',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Followup text. Text for the followup action */
			            'followupText': {
			                label: 'Followup text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text for the followup action',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Followup action. Action to be invoked when hitting the followup CTA */
			            'followupAction': {
			                label: 'Followup action',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Action to be invoked when hitting the followup CTA',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Toast.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** The header of a list */
		export interface IListHeader {
			
				/** Title. Title to render in the header */
				'title': string
				/** Subtitle. Optional subtitle text */
				'subtitle'?: string| undefined
				/** Is small. Set true for small lists */
				'isSmall'?: boolean| undefined
				/** Buttons. Buttons to associate with the list header */
				'buttons': SpruceSchemas.local.IButton[]
		}
	}	 

	export namespace SpruceSchemas.local.ListHeader {
		export const id = 'listHeader'

		/** The interface for the schema definition for a List header */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'listHeader',
			name: 'List header',
			description: 'The header of a list',
			
			
			    fields: {
			            /** Title. Title to render in the header */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Title to render in the header',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subtitle. Optional subtitle text */
			            'subtitle': {
			                label: 'Subtitle',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional subtitle text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is small. Set true for small lists */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true for small lists',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Buttons. Buttons to associate with the list header */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Buttons to associate with the list header',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a List header */
		export const definition: SpruceSchemas.local.ListHeader.IDefinition = {
			id: 'listHeader',
			name: 'List header',
			description: 'The header of a list',
			
			
			    fields: {
			            /** Title. Title to render in the header */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Title to render in the header',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subtitle. Optional subtitle text */
			            'subtitle': {
			                label: 'Subtitle',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional subtitle text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is small. Set true for small lists */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true for small lists',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Buttons. Buttons to associate with the list header */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Buttons to associate with the list header',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ListHeader.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A radio control. Give a bunch the same name to keep them as part of the same group */
		export interface IRadio {
			
				/** Id. Unique identifier */
				'id': string
				/** Name. A name attached to this radio button */
				'name'?: string| undefined
				/** Label. Label and text for the radio */
				'label'?: string| undefined
				/** Post text. Optional text to show after the label */
				'postText'?: string| undefined
				/** Is disabled. is this control disabled? */
				'isDisabled'?: boolean| undefined
				/** Is checked. Is this control checked? */
				'isChecked'?: boolean| undefined
				/** Action. Optional action to invoke when tapped */
				'onClick'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Radio {
		export const id = 'Radio'

		/** The interface for the schema definition for a Radio */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'Radio',
			name: 'Radio',
			description: 'A radio control. Give a bunch the same name to keep them as part of the same group',
			
			
			    fields: {
			            /** Id. Unique identifier */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique identifier',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. A name attached to this radio button */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'A name attached to this radio button',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label. Label and text for the radio */
			            'label': {
			                label: 'Label',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Label and text for the radio',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Post text. Optional text to show after the label */
			            'postText': {
			                label: 'Post text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional text to show after the label',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is disabled. is this control disabled? */
			            'isDisabled': {
			                label: 'Is disabled',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'is this control disabled?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is checked. Is this control checked? */
			            'isChecked': {
			                label: 'Is checked',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is this control checked?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Action. Optional action to invoke when tapped */
			            'onClick': {
			                label: 'Action',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Optional action to invoke when tapped',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Radio */
		export const definition: SpruceSchemas.local.Radio.IDefinition = {
			id: 'Radio',
			name: 'Radio',
			description: 'A radio control. Give a bunch the same name to keep them as part of the same group',
			
			
			    fields: {
			            /** Id. Unique identifier */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique identifier',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Name. A name attached to this radio button */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'A name attached to this radio button',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label. Label and text for the radio */
			            'label': {
			                label: 'Label',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Label and text for the radio',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Post text. Optional text to show after the label */
			            'postText': {
			                label: 'Post text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional text to show after the label',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is disabled. is this control disabled? */
			            'isDisabled': {
			                label: 'Is disabled',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'is this control disabled?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is checked. Is this control checked? */
			            'isChecked': {
			                label: 'Is checked',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is this control checked?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Action. Optional action to invoke when tapped */
			            'onClick': {
			                label: 'Action',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Optional action to invoke when tapped',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Radio.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A list of information or inputs */
		export interface IList {
			
				/** Id. Unique id for UI caching */
				'id': string
				/** Header. List Header */
				'header'?: SpruceSchemas.local.IListHeader| undefined
				/** Items. List items */
				'items': []
				/** Is small. Set true to make the list smaller */
				'isSmall'?: boolean| undefined
				/** Are separators visible. Set to true to show separators between list items */
				'areSeparatorsVisible'?: boolean| undefined
				/** Class name. */
				'className'?: string| undefined
				/** . */
				'children'?: generated_import_1.INodeFieldDefinitionValue| undefined
				/** Is loading. Show loading */
				'isLoading'?: boolean| undefined
				/** Selectable. Optional: set whether to use checkbox or radio for selectable list items */
				'selectable'?: SpruceSchemas.local.ICheckbox | SpruceSchemas.local.IRadio| undefined
		}
	}	 

	export namespace SpruceSchemas.local.List {
		export const id = 'list'

		/** The interface for the schema definition for a List */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'list',
			name: 'List',
			description: 'A list of information or inputs',
			
			
			    fields: {
			            /** Id. Unique id for UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique id for UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Header. List Header */
			            'header': {
			                label: 'Header',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'List Header',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.ListHeader.IDefinition[],}
			            },
			            /** Items. List items */
			            'items': {
			                label: 'Items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'List items',
			                
			                
			                isArray: true,
			                
			                options: {schemasIds: ["listItem","expandableListItem"],schemas: [],}
			            },
			            /** Is small. Set true to make the list smaller */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the list smaller',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Are separators visible. Set to true to show separators between list items */
			            'areSeparatorsVisible': {
			                label: 'Are separators visible',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set to true to show separators between list items',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'children': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is loading. Show loading */
			            'isLoading': {
			                label: 'Is loading',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Show loading',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Selectable. Optional: set whether to use checkbox or radio for selectable list items */
			            'selectable': {
			                label: 'Selectable',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Optional: set whether to use checkbox or radio for selectable list items',
			                
			                
			                
			                
			                options: {schemas: (SpruceSchemas.local.Checkbox.IDefinition | SpruceSchemas.local.Radio.IDefinition)[],}
			            },
			    }
		}

		/** The schema definition for a List */
		export const definition: SpruceSchemas.local.List.IDefinition = {
			id: 'list',
			name: 'List',
			description: 'A list of information or inputs',
			
			
			    fields: {
			            /** Id. Unique id for UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique id for UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Header. List Header */
			            'header': {
			                label: 'Header',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'List Header',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.ListHeader.definition],}
			            },
			            /** Items. List items */
			            'items': {
			                label: 'Items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'List items',
			                
			                
			                isArray: true,
			                
			                options: {schemasIds: ["listItem","expandableListItem"],schemas: [],}
			            },
			            /** Is small. Set true to make the list smaller */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to make the list smaller',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Are separators visible. Set to true to show separators between list items */
			            'areSeparatorsVisible': {
			                label: 'Are separators visible',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set to true to show separators between list items',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'children': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is loading. Show loading */
			            'isLoading': {
			                label: 'Is loading',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Show loading',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Selectable. Optional: set whether to use checkbox or radio for selectable list items */
			            'selectable': {
			                label: 'Selectable',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Optional: set whether to use checkbox or radio for selectable list items',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Checkbox.definition, SpruceSchemas.local.Radio.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.List.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A button with a dropdown of actions on the right */
		export interface ISplitButton {
			
				/** Id. */
				'id': string
				/** Default action. The main action readily surfaced to the user */
				'defaultButton': SpruceSchemas.local.IButton
				/** Actions. All the secondary nested buttons */
				'buttons'?: SpruceSchemas.local.IButton[]| undefined
				/** Kind. Sets the visual hierarchy of the button */
				'kind'?: ("primary" | "secondary" | "simple" | "caution")| undefined
				/** Is full width. Set true to fill the parent's width */
				'isFullWidth'?: boolean| undefined
				/** Is small. Sets the visual hierarchy of the button */
				'isSmall'?: boolean| undefined
		}
	}	 

	export namespace SpruceSchemas.local.SplitButton {
		export const id = 'splitButton'

		/** The interface for the schema definition for a Split button */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'splitButton',
			name: 'Split button',
			description: 'A button with a dropdown of actions on the right',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Default action. The main action readily surfaced to the user */
			            'defaultButton': {
			                label: 'Default action',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'The main action readily surfaced to the user',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			            /** Actions. All the secondary nested buttons */
			            'buttons': {
			                label: 'Actions',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'All the secondary nested buttons',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			            /** Kind. Sets the visual hierarchy of the button */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Sets the visual hierarchy of the button',
			                
			                
			                
			                
			                options: {choices: [{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}],}
			            },
			            /** Is full width. Set true to fill the parent's width */
			            'isFullWidth': {
			                label: 'Is full width',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to fill the parent\'s width',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is small. Sets the visual hierarchy of the button */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Sets the visual hierarchy of the button',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Split button */
		export const definition: SpruceSchemas.local.SplitButton.IDefinition = {
			id: 'splitButton',
			name: 'Split button',
			description: 'A button with a dropdown of actions on the right',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Default action. The main action readily surfaced to the user */
			            'defaultButton': {
			                label: 'Default action',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'The main action readily surfaced to the user',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			            /** Actions. All the secondary nested buttons */
			            'buttons': {
			                label: 'Actions',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'All the secondary nested buttons',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			            /** Kind. Sets the visual hierarchy of the button */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Sets the visual hierarchy of the button',
			                
			                
			                
			                
			                options: {choices: [{"label":"Primary","value":"primary"},{"label":"Secondary","value":"secondary"},{"label":"Simple","value":"simple"},{"label":"Caution","value":"caution"}],}
			            },
			            /** Is full width. Set true to fill the parent's width */
			            'isFullWidth': {
			                label: 'Is full width',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to fill the parent\'s width',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is small. Sets the visual hierarchy of the button */
			            'isSmall': {
			                label: 'Is small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Sets the visual hierarchy of the button',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.SplitButton.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Header of a card */
		export interface ICardHeader {
			
				/** Title. Title for the card */
				'title'?: string| undefined
				/** Label text. Optional label to show above title */
				'labelText'?: string| undefined
				/** Label icon. Optional icon to show above the title and before the label */
				'labelIcon'?: SpruceSchemas.local.IIcon| undefined
				/** Buttons. Render buttons in the Card Header */
				'buttons': SpruceSchemas.local.IButton[]
				/** Context menu. Renders a Context Menu in the Card Header */
				'contextMenu'?: SpruceSchemas.local.IContextMenu| undefined
		}
	}	 

	export namespace SpruceSchemas.local.CardHeader {
		export const id = 'CardHeader'

		/** The interface for the schema definition for a CardHeader */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'CardHeader',
			name: 'CardHeader',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Title. Title for the card */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Title for the card',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label text. Optional label to show above title */
			            'labelText': {
			                label: 'Label text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional label to show above title',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label icon. Optional icon to show above the title and before the label */
			            'labelIcon': {
			                label: 'Label icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Optional icon to show above the title and before the label',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Buttons. Render buttons in the Card Header */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Render buttons in the Card Header',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			            /** Context menu. Renders a Context Menu in the Card Header */
			            'contextMenu': {
			                label: 'Context menu',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Renders a Context Menu in the Card Header',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.ContextMenu.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a CardHeader */
		export const definition: SpruceSchemas.local.CardHeader.IDefinition = {
			id: 'CardHeader',
			name: 'CardHeader',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Title. Title for the card */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Title for the card',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label text. Optional label to show above title */
			            'labelText': {
			                label: 'Label text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional label to show above title',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label icon. Optional icon to show above the title and before the label */
			            'labelIcon': {
			                label: 'Label icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Optional icon to show above the title and before the label',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Buttons. Render buttons in the Card Header */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Render buttons in the Card Header',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			            /** Context menu. Renders a Context Menu in the Card Header */
			            'contextMenu': {
			                label: 'Context menu',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Renders a Context Menu in the Card Header',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.ContextMenu.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.CardHeader.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Header of a card */
		export interface IOnboardingCardStep {
			
				/** Id. Unique identifier */
				'id': string
				/** Tab title. Title that shows in the tab */
				'tabTitle': string
				/** Tab icon. Icon for the tab */
				'tabIcon'?: SpruceSchemas.local.IIcon| undefined
				/** Panel title. Title that shows in the panel */
				'panelTitle': string
				/** Panel copy. Copy describing the step in the card's body */
				'panelCopy': string
				/** Panel c t a. Primary CTA of this step */
				'panelCTA'?: SpruceSchemas.local.IButton| undefined
				/** Is complete. Is this step complete? */
				'isComplete'?: boolean| undefined
		}
	}	 

	export namespace SpruceSchemas.local.OnboardingCardStep {
		export const id = 'OnboardingCardStep'

		/** The interface for the schema definition for a OnboardingCardStep */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'OnboardingCardStep',
			name: 'OnboardingCardStep',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Id. Unique identifier */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique identifier',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Tab title. Title that shows in the tab */
			            'tabTitle': {
			                label: 'Tab title',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Title that shows in the tab',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Tab icon. Icon for the tab */
			            'tabIcon': {
			                label: 'Tab icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Icon for the tab',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Panel title. Title that shows in the panel */
			            'panelTitle': {
			                label: 'Panel title',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Title that shows in the panel',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Panel copy. Copy describing the step in the card's body */
			            'panelCopy': {
			                label: 'Panel copy',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Copy describing the step in the card\'s body',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Panel c t a. Primary CTA of this step */
			            'panelCTA': {
			                label: 'Panel c t a',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Primary CTA of this step',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			            /** Is complete. Is this step complete? */
			            'isComplete': {
			                label: 'Is complete',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is this step complete?',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a OnboardingCardStep */
		export const definition: SpruceSchemas.local.OnboardingCardStep.IDefinition = {
			id: 'OnboardingCardStep',
			name: 'OnboardingCardStep',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Id. Unique identifier */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique identifier',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Tab title. Title that shows in the tab */
			            'tabTitle': {
			                label: 'Tab title',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Title that shows in the tab',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Tab icon. Icon for the tab */
			            'tabIcon': {
			                label: 'Tab icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Icon for the tab',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Panel title. Title that shows in the panel */
			            'panelTitle': {
			                label: 'Panel title',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Title that shows in the panel',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Panel copy. Copy describing the step in the card's body */
			            'panelCopy': {
			                label: 'Panel copy',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Copy describing the step in the card\'s body',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Panel c t a. Primary CTA of this step */
			            'panelCTA': {
			                label: 'Panel c t a',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Primary CTA of this step',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			            /** Is complete. Is this step complete? */
			            'isComplete': {
			                label: 'Is complete',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is this step complete?',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.OnboardingCardStep.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Header of a card */
		export interface IOnboardingCard {
			
				/** Title. Title of the entire card */
				'title'?: string| undefined
				/** Steps. Steps for onboarding */
				'steps': SpruceSchemas.local.IOnboardingCardStep[]
		}
	}	 

	export namespace SpruceSchemas.local.OnboardingCard {
		export const id = 'OnboardingCard'

		/** The interface for the schema definition for a OnboardingCard */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'OnboardingCard',
			name: 'OnboardingCard',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Title. Title of the entire card */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Title of the entire card',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Steps. Steps for onboarding */
			            'steps': {
			                label: 'Steps',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Steps for onboarding',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.OnboardingCardStep.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a OnboardingCard */
		export const definition: SpruceSchemas.local.OnboardingCard.IDefinition = {
			id: 'OnboardingCard',
			name: 'OnboardingCard',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Title. Title of the entire card */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Title of the entire card',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Steps. Steps for onboarding */
			            'steps': {
			                label: 'Steps',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Steps for onboarding',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.OnboardingCardStep.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.OnboardingCard.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Header of a card */
		export interface IScoreCardPanel {
			
				/** Id. Unique id for React loops */
				'id': string
				/** Label. The label for this score, e.g. Today's Sales */
				'label'?: string| undefined
				/** Value. The score, e.g. $234.30 */
				'value'?: string| undefined
		}
	}	 

	export namespace SpruceSchemas.local.ScoreCardPanel {
		export const id = 'ScoreCardPanel'

		/** The interface for the schema definition for a ScoreCardPanel */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'ScoreCardPanel',
			name: 'ScoreCardPanel',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Id. Unique id for React loops */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique id for React loops',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label. The label for this score, e.g. Today's Sales */
			            'label': {
			                label: 'Label',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'The label for this score, e.g. Today\'s Sales',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Value. The score, e.g. $234.30 */
			            'value': {
			                label: 'Value',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'The score, e.g. $234.30',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a ScoreCardPanel */
		export const definition: SpruceSchemas.local.ScoreCardPanel.IDefinition = {
			id: 'ScoreCardPanel',
			name: 'ScoreCardPanel',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Id. Unique id for React loops */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique id for React loops',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Label. The label for this score, e.g. Today's Sales */
			            'label': {
			                label: 'Label',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'The label for this score, e.g. Today\'s Sales',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Value. The score, e.g. $234.30 */
			            'value': {
			                label: 'Value',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'The score, e.g. $234.30',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ScoreCardPanel.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Header of a card */
		export interface IScoreCard {
			
				/** Scores. */
				'scores': SpruceSchemas.local.IScoreCardPanel[]
		}
	}	 

	export namespace SpruceSchemas.local.ScoreCard {
		export const id = 'ScoreCard'

		/** The interface for the schema definition for a ScoreCard */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'ScoreCard',
			name: 'ScoreCard',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Scores. */
			            'scores': {
			                label: 'Scores',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.ScoreCardPanel.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a ScoreCard */
		export const definition: SpruceSchemas.local.ScoreCard.IDefinition = {
			id: 'ScoreCard',
			name: 'ScoreCard',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Scores. */
			            'scores': {
			                label: 'Scores',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.ScoreCardPanel.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ScoreCard.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** The builder of Cards, a fundamental visualization concept pervasive in the Heartwood design system. */
		export interface ICardBody {
			
				/** Items. Children to show in the Card */
				'items': (SpruceSchemas.local.IButton | SpruceSchemas.local.IImage | SpruceSchemas.local.IHeading | SpruceSchemas.local.IText | SpruceSchemas.local.IScoreCard | SpruceSchemas.local.IToast | SpruceSchemas.local.IList)[]
				/** Is sectioned. Whether to wrap children in CardSection */
				'isSectioned'?: boolean| undefined
				/** Are section separators visible. Set true to display line separators between CardSection components */
				'areSectionSeparatorsVisible'?: boolean| undefined
				/** Has top padding. Does card include top padding */
				'hasTopPadding'?: boolean| undefined
				/** Has bottom padding. Does card include bottom padding */
				'hasBottomPadding'?: boolean| undefined
				/** Is full bleed. Set to true to remove horizontal padding */
				'isFullBleed'?: boolean| undefined
		}
	}	 

	export namespace SpruceSchemas.local.CardBody {
		export const id = 'cardBody'

		/** The interface for the schema definition for a Card body */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'cardBody',
			name: 'Card body',
			description: 'The builder of Cards, a fundamental visualization concept pervasive in the Heartwood design system.',
			
			
			    fields: {
			            /** Items. Children to show in the Card */
			            'items': {
			                label: 'Items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Children to show in the Card',
			                
			                
			                isArray: true,
			                
			                options: {schemas: (SpruceSchemas.local.Button.IDefinition | SpruceSchemas.local.Image.IDefinition | SpruceSchemas.local.Heading.IDefinition | SpruceSchemas.local.Text.IDefinition | SpruceSchemas.local.ScoreCard.IDefinition | SpruceSchemas.local.Toast.IDefinition | SpruceSchemas.local.List.IDefinition)[],}
			            },
			            /** Is sectioned. Whether to wrap children in CardSection */
			            'isSectioned': {
			                label: 'Is sectioned',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Whether to wrap children in CardSection',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Are section separators visible. Set true to display line separators between CardSection components */
			            'areSectionSeparatorsVisible': {
			                label: 'Are section separators visible',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to display line separators between CardSection components',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Has top padding. Does card include top padding */
			            'hasTopPadding': {
			                label: 'Has top padding',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Does card include top padding',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Has bottom padding. Does card include bottom padding */
			            'hasBottomPadding': {
			                label: 'Has bottom padding',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Does card include bottom padding',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is full bleed. Set to true to remove horizontal padding */
			            'isFullBleed': {
			                label: 'Is full bleed',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set to true to remove horizontal padding',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Card body */
		export const definition: SpruceSchemas.local.CardBody.IDefinition = {
			id: 'cardBody',
			name: 'Card body',
			description: 'The builder of Cards, a fundamental visualization concept pervasive in the Heartwood design system.',
			
			
			    fields: {
			            /** Items. Children to show in the Card */
			            'items': {
			                label: 'Items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Children to show in the Card',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition, SpruceSchemas.local.Image.definition, SpruceSchemas.local.Heading.definition, SpruceSchemas.local.Text.definition, SpruceSchemas.local.ScoreCard.definition, SpruceSchemas.local.Toast.definition, SpruceSchemas.local.List.definition],}
			            },
			            /** Is sectioned. Whether to wrap children in CardSection */
			            'isSectioned': {
			                label: 'Is sectioned',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Whether to wrap children in CardSection',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Are section separators visible. Set true to display line separators between CardSection components */
			            'areSectionSeparatorsVisible': {
			                label: 'Are section separators visible',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to display line separators between CardSection components',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Has top padding. Does card include top padding */
			            'hasTopPadding': {
			                label: 'Has top padding',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Does card include top padding',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Has bottom padding. Does card include bottom padding */
			            'hasBottomPadding': {
			                label: 'Has bottom padding',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Does card include bottom padding',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is full bleed. Set to true to remove horizontal padding */
			            'isFullBleed': {
			                label: 'Is full bleed',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set to true to remove horizontal padding',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.CardBody.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A group of buttons presented in a few cool ways (see kind) */
		export interface IButtonGroup {
			
				/** Buttons. */
				'buttons': SpruceSchemas.local.IButton[]
				/** Kind. Visual appearance of the group. */
				'kind'?: ("default" | "segmented" | "floating")| undefined
				/** Is full width. Set true to fill parent width */
				'isFullWidth'?: boolean| undefined
				/** Highlighted index. Index of the button that is currently highlighted, e.g. by arrow keys */
				'highlightedIndex'?: number| undefined
				/** . */
				'onClick'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
		}
	}	 

	export namespace SpruceSchemas.local.ButtonGroup {
		export const id = 'buttonGroup'

		/** The interface for the schema definition for a Button group */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'buttonGroup',
			name: 'Button group',
			description: 'A group of buttons presented in a few cool ways (see kind)',
			
			
			    fields: {
			            /** Buttons. */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			            /** Kind. Visual appearance of the group. */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Visual appearance of the group.',
			                
			                
			                
			                
			                options: {choices: [{"label":"Default","value":"default"},{"label":"Segmented","value":"segmented"},{"label":"Floating","value":"floating"}],}
			            },
			            /** Is full width. Set true to fill parent width */
			            'isFullWidth': {
			                label: 'Is full width',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to fill parent width',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Highlighted index. Index of the button that is currently highlighted, e.g. by arrow keys */
			            'highlightedIndex': {
			                label: 'Highlighted index',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                hint: 'Index of the button that is currently highlighted, e.g. by arrow keys',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'onClick': {
			                label: '',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Button group */
		export const definition: SpruceSchemas.local.ButtonGroup.IDefinition = {
			id: 'buttonGroup',
			name: 'Button group',
			description: 'A group of buttons presented in a few cool ways (see kind)',
			
			
			    fields: {
			            /** Buttons. */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			            /** Kind. Visual appearance of the group. */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'Visual appearance of the group.',
			                
			                
			                
			                
			                options: {choices: [{"label":"Default","value":"default"},{"label":"Segmented","value":"segmented"},{"label":"Floating","value":"floating"}],}
			            },
			            /** Is full width. Set true to fill parent width */
			            'isFullWidth': {
			                label: 'Is full width',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to fill parent width',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Highlighted index. Index of the button that is currently highlighted, e.g. by arrow keys */
			            'highlightedIndex': {
			                label: 'Highlighted index',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                hint: 'Index of the button that is currently highlighted, e.g. by arrow keys',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** . */
			            'onClick': {
			                label: '',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ButtonGroup.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Header of a card */
		export interface ICardFooter {
			
				/** Button group. Render buttons in the Card Footer */
				'buttonGroup'?: SpruceSchemas.local.IButtonGroup| undefined
				/** Helper. Helper for the footer */
				'helper'?: string| undefined
		}
	}	 

	export namespace SpruceSchemas.local.CardFooter {
		export const id = 'cardFooter'

		/** The interface for the schema definition for a cardFooter */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'cardFooter',
			name: 'cardFooter',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Button group. Render buttons in the Card Footer */
			            'buttonGroup': {
			                label: 'Button group',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Render buttons in the Card Footer',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.ButtonGroup.IDefinition[],}
			            },
			            /** Helper. Helper for the footer */
			            'helper': {
			                label: 'Helper',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Helper for the footer',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a cardFooter */
		export const definition: SpruceSchemas.local.CardFooter.IDefinition = {
			id: 'cardFooter',
			name: 'cardFooter',
			description: 'Header of a card',
			
			
			    fields: {
			            /** Button group. Render buttons in the Card Footer */
			            'buttonGroup': {
			                label: 'Button group',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Render buttons in the Card Footer',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.ButtonGroup.definition],}
			            },
			            /** Helper. Helper for the footer */
			            'helper': {
			                label: 'Helper',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Helper for the footer',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.CardFooter.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Build a card to show something to the user */
		export interface ICardBuilder {
			
				/** Id. */
				'id': string
				/** Header. Card Header props */
				'header'?: SpruceSchemas.local.ICardHeader| undefined
				/** Header image. optionally pass props to an image tag to be rendered in the header */
				'headerImage'?: SpruceSchemas.local.IImage| undefined
				/** Onboarding. all onboarding props */
				'onboarding'?: SpruceSchemas.local.IOnboardingCard| undefined
				/** Body. Card Body props */
				'body'?: SpruceSchemas.local.ICardBody| undefined
				/** Footer. The footer of the card */
				'footer'?: SpruceSchemas.local.ICardFooter| undefined
		}
	}	 

	export namespace SpruceSchemas.local.CardBuilder {
		export const id = 'cardBuilder'

		/** The interface for the schema definition for a CardBuilder */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'cardBuilder',
			name: 'CardBuilder',
			description: 'Build a card to show something to the user',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Header. Card Header props */
			            'header': {
			                label: 'Header',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Card Header props',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.CardHeader.IDefinition[],}
			            },
			            /** Header image. optionally pass props to an image tag to be rendered in the header */
			            'headerImage': {
			                label: 'Header image',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'optionally pass props to an image tag to be rendered in the header',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Image.IDefinition[],}
			            },
			            /** Onboarding. all onboarding props */
			            'onboarding': {
			                label: 'Onboarding',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'all onboarding props',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.OnboardingCard.IDefinition[],}
			            },
			            /** Body. Card Body props */
			            'body': {
			                label: 'Body',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Card Body props',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.CardBody.IDefinition[],}
			            },
			            /** Footer. The footer of the card */
			            'footer': {
			                label: 'Footer',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'The footer of the card',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.CardFooter.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a CardBuilder */
		export const definition: SpruceSchemas.local.CardBuilder.IDefinition = {
			id: 'cardBuilder',
			name: 'CardBuilder',
			description: 'Build a card to show something to the user',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Header. Card Header props */
			            'header': {
			                label: 'Header',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Card Header props',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.CardHeader.definition],}
			            },
			            /** Header image. optionally pass props to an image tag to be rendered in the header */
			            'headerImage': {
			                label: 'Header image',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'optionally pass props to an image tag to be rendered in the header',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Image.definition],}
			            },
			            /** Onboarding. all onboarding props */
			            'onboarding': {
			                label: 'Onboarding',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'all onboarding props',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.OnboardingCard.definition],}
			            },
			            /** Body. Card Body props */
			            'body': {
			                label: 'Body',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Card Body props',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.CardBody.definition],}
			            },
			            /** Footer. The footer of the card */
			            'footer': {
			                label: 'Footer',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'The footer of the card',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.CardFooter.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.CardBuilder.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Some front end components emit uiEnhancement events to allow skills to enhance them during presentation. */
		export interface IUIEnhancementSection {
			
				/** Id. The ID of the section that is acting as a placeholder for ui enhancements */
				'id': string
				/** Calendar event details items. Calendar items to add as enhancements */
				'calendarEventDetailItems': (SpruceSchemas.local.IList | SpruceSchemas.local.IButton | SpruceSchemas.local.ISplitButton | SpruceSchemas.local.ICardBuilder | SpruceSchemas.local.IToast | SpruceSchemas.local.IText | SpruceSchemas.local.IMarkdown)[]
				/** Card builder body items. Card builder items to add as enhancements */
				'cardBuilderBodyItems': []
				/** Context menu items. Context menu items to add as enhancements */
				'contextMenuItems': SpruceSchemas.local.IButton[]
		}
	}	 

	export namespace SpruceSchemas.local.UIEnhancementSection {
		export const id = 'uIEnhancementSection'

		/** The interface for the schema definition for a User interface enhancement section */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'uIEnhancementSection',
			name: 'User interface enhancement section',
			description: 'Some front end components emit uiEnhancement events to allow skills to enhance them during presentation.',
			
			
			    fields: {
			            /** Id. The ID of the section that is acting as a placeholder for ui enhancements */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'The ID of the section that is acting as a placeholder for ui enhancements',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Calendar event details items. Calendar items to add as enhancements */
			            'calendarEventDetailItems': {
			                label: 'Calendar event details items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Calendar items to add as enhancements',
			                
			                
			                isArray: true,
			                
			                options: {schemas: (SpruceSchemas.local.List.IDefinition | SpruceSchemas.local.Button.IDefinition | SpruceSchemas.local.SplitButton.IDefinition | SpruceSchemas.local.CardBuilder.IDefinition | SpruceSchemas.local.Toast.IDefinition | SpruceSchemas.local.Text.IDefinition | SpruceSchemas.local.Markdown.IDefinition)[],}
			            },
			            /** Card builder body items. Card builder items to add as enhancements */
			            'cardBuilderBodyItems': {
			                label: 'Card builder body items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Card builder items to add as enhancements',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [],}
			            },
			            /** Context menu items. Context menu items to add as enhancements */
			            'contextMenuItems': {
			                label: 'Context menu items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Context menu items to add as enhancements',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a User interface enhancement section */
		export const definition: SpruceSchemas.local.UIEnhancementSection.IDefinition = {
			id: 'uIEnhancementSection',
			name: 'User interface enhancement section',
			description: 'Some front end components emit uiEnhancement events to allow skills to enhance them during presentation.',
			
			
			    fields: {
			            /** Id. The ID of the section that is acting as a placeholder for ui enhancements */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'The ID of the section that is acting as a placeholder for ui enhancements',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Calendar event details items. Calendar items to add as enhancements */
			            'calendarEventDetailItems': {
			                label: 'Calendar event details items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Calendar items to add as enhancements',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.List.definition, SpruceSchemas.local.Button.definition, SpruceSchemas.local.SplitButton.definition, SpruceSchemas.local.CardBuilder.definition, SpruceSchemas.local.Toast.definition, SpruceSchemas.local.Text.definition, SpruceSchemas.local.Markdown.definition],}
			            },
			            /** Card builder body items. Card builder items to add as enhancements */
			            'cardBuilderBodyItems': {
			                label: 'Card builder body items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Card builder items to add as enhancements',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [],}
			            },
			            /** Context menu items. Context menu items to add as enhancements */
			            'contextMenuItems': {
			                label: 'Context menu items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Context menu items to add as enhancements',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.UIEnhancementSection.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** Avatar tied to a core user */
		export interface IUserAvatar {
			
				/** User. */
				'user': SpruceSchemas.core.IUser
				/** Source. */
				'src': string
				/** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
				'alt': string
				/** Is large. True will show large variation of the avatar */
				'isLarge'?: boolean| undefined
				/** Is large. Align text and name center */
				'isVertical'?: boolean| undefined
				/** Show online indicator. Should I should the status indicator */
				'showIndicator'?: boolean| undefined
				/** Status. */
				'status'?: ("online" | "offline")| undefined
				/** Name. */
				'name'?: string| undefined
				/** Text. Additional text to show below the name */
				'text'?: string| undefined
				/** Class name. Set the "class" attribute */
				'className'?: string| undefined
				/** Width. */
				'width'?: number| undefined
				/** Height. */
				'height'?: number| undefined
		}
	}	 

	export namespace SpruceSchemas.local.UserAvatar {
		export const id = 'userAvatar'

		/** The interface for the schema definition for a User avatar */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'userAvatar',
			name: 'User avatar',
			description: 'Avatar tied to a core user',
			
			
			    fields: {
			            /** User. */
			            'user': {
			                label: 'User',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.core.User.IDefinition[],}
			            },
			            /** Source. */
			            'src': {
			                label: 'Source',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
			            'alt': {
			                label: 'Alternate text',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Provides alternative information for an image if a user for some reason cannot view it',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is large. True will show large variation of the avatar */
			            'isLarge': {
			                label: 'Is large',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'True will show large variation of the avatar',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is large. Align text and name center */
			            'isVertical': {
			                label: 'Is large',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Align text and name center',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Show online indicator. Should I should the status indicator */
			            'showIndicator': {
			                label: 'Show online indicator',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Should I should the status indicator',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Status. */
			            'status': {
			                label: 'Status',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}],}
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Additional text to show below the name */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Additional text to show below the name',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. Set the "class" attribute */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Set the "class" attribute',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Width. */
			            'width': {
			                label: 'Width',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Height. */
			            'height': {
			                label: 'Height',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a User avatar */
		export const definition: SpruceSchemas.local.UserAvatar.IDefinition = {
			id: 'userAvatar',
			name: 'User avatar',
			description: 'Avatar tied to a core user',
			
			
			    fields: {
			            /** User. */
			            'user': {
			                label: 'User',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.core.User.definition],}
			            },
			            /** Source. */
			            'src': {
			                label: 'Source',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Alternate text. Provides alternative information for an image if a user for some reason cannot view it */
			            'alt': {
			                label: 'Alternate text',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Provides alternative information for an image if a user for some reason cannot view it',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is large. True will show large variation of the avatar */
			            'isLarge': {
			                label: 'Is large',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'True will show large variation of the avatar',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is large. Align text and name center */
			            'isVertical': {
			                label: 'Is large',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Align text and name center',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Show online indicator. Should I should the status indicator */
			            'showIndicator': {
			                label: 'Show online indicator',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Should I should the status indicator',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Status. */
			            'status': {
			                label: 'Status',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                
			                
			                
			                
			                
			                options: {choices: [{"value":"online","label":"Online"},{"value":"offline","label":"Offline"}],}
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Text. Additional text to show below the name */
			            'text': {
			                label: 'Text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Additional text to show below the name',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. Set the "class" attribute */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Set the "class" attribute',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Width. */
			            'width': {
			                label: 'Width',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Height. */
			            'height': {
			                label: 'Height',
			                type: SpruceSchema.FieldType.Number,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.UserAvatar.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks. */
		export interface ICalendarEventBlock {
			
				/** Id. An optional identifier for this block */
				'id'?: string| undefined
				/** Title. Any title rendered on the event */
				'title'?: string| undefined
				/** Subtitle. Displayed right under the title */
				'subtitle'?: string| undefined
				/** Duration sec. How long this block is for, in seconds */
				'durationSec': SpruceSchema.IDurationFieldValue
				/** Left icons. All the icons show on the left of the calendar event */
				'leftIcons': SpruceSchemas.local.IIcon[]
				/** Right icons. All the icons shown on the right of the calendar event */
				'rightIcons': SpruceSchemas.local.IIcon[]
				/** Is busy. Is the person associated to this event busy during this time (to keep from double booking)? */
				'isBusy'?: boolean| undefined
		}
	}	 

	export namespace SpruceSchemas.local.CalendarEventBlock {
		export const id = 'calendarEventBlock'

		/** The interface for the schema definition for a Calendar event block */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'calendarEventBlock',
			name: 'Calendar event block',
			description: 'A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks.',
			
			
			    fields: {
			            /** Id. An optional identifier for this block */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                
			                hint: 'An optional identifier for this block',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Title. Any title rendered on the event */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Any title rendered on the event',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subtitle. Displayed right under the title */
			            'subtitle': {
			                label: 'Subtitle',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Displayed right under the title',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Duration sec. How long this block is for, in seconds */
			            'durationSec': {
			                label: 'Duration sec',
			                type: SpruceSchema.FieldType.Duration,
			                
			                isRequired: true,
			                hint: 'How long this block is for, in seconds',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Left icons. All the icons show on the left of the calendar event */
			            'leftIcons': {
			                label: 'Left icons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'All the icons show on the left of the calendar event',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Right icons. All the icons shown on the right of the calendar event */
			            'rightIcons': {
			                label: 'Right icons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'All the icons shown on the right of the calendar event',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Is busy. Is the person associated to this event busy during this time (to keep from double booking)? */
			            'isBusy': {
			                label: 'Is busy',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is the person associated to this event busy during this time (to keep from double booking)?',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Calendar event block */
		export const definition: SpruceSchemas.local.CalendarEventBlock.IDefinition = {
			id: 'calendarEventBlock',
			name: 'Calendar event block',
			description: 'A block of time that comprises a calendar event. A calendar event can have an arbitrary number of blocks.',
			
			
			    fields: {
			            /** Id. An optional identifier for this block */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                
			                hint: 'An optional identifier for this block',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Title. Any title rendered on the event */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Any title rendered on the event',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subtitle. Displayed right under the title */
			            'subtitle': {
			                label: 'Subtitle',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Displayed right under the title',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Duration sec. How long this block is for, in seconds */
			            'durationSec': {
			                label: 'Duration sec',
			                type: SpruceSchema.FieldType.Duration,
			                
			                isRequired: true,
			                hint: 'How long this block is for, in seconds',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Left icons. All the icons show on the left of the calendar event */
			            'leftIcons': {
			                label: 'Left icons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'All the icons show on the left of the calendar event',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Right icons. All the icons shown on the right of the calendar event */
			            'rightIcons': {
			                label: 'Right icons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'All the icons shown on the right of the calendar event',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Is busy. Is the person associated to this event busy during this time (to keep from double booking)? */
			            'isBusy': {
			                label: 'Is busy',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is the person associated to this event busy during this time (to keep from double booking)?',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.CalendarEventBlock.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** All the details attached to an event. Shown on click of the event. */
		export interface ICalendarEventDetails {
			
				/** Id. An optional ID for this item; used to allow association with UI Enhancements */
				'id'?: string| undefined
				/** Items. The items that make up the event details */
				'items': (SpruceSchemas.local.IList | SpruceSchemas.local.IButton | SpruceSchemas.local.ISplitButton | SpruceSchemas.local.ICardBuilder | SpruceSchemas.local.IToast | SpruceSchemas.local.IText | SpruceSchemas.local.IMarkdown)[]
		}
	}	 

	export namespace SpruceSchemas.local.CalendarEventDetails {
		export const id = 'calendarEventDetails'

		/** The interface for the schema definition for a Calendar event details */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'calendarEventDetails',
			name: 'Calendar event details',
			description: 'All the details attached to an event. Shown on click of the event.',
			
			
			    fields: {
			            /** Id. An optional ID for this item; used to allow association with UI Enhancements */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'An optional ID for this item; used to allow association with UI Enhancements',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Items. The items that make up the event details */
			            'items': {
			                label: 'Items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'The items that make up the event details',
			                
			                
			                isArray: true,
			                
			                options: {schemas: (SpruceSchemas.local.List.IDefinition | SpruceSchemas.local.Button.IDefinition | SpruceSchemas.local.SplitButton.IDefinition | SpruceSchemas.local.CardBuilder.IDefinition | SpruceSchemas.local.Toast.IDefinition | SpruceSchemas.local.Text.IDefinition | SpruceSchemas.local.Markdown.IDefinition)[],}
			            },
			    }
		}

		/** The schema definition for a Calendar event details */
		export const definition: SpruceSchemas.local.CalendarEventDetails.IDefinition = {
			id: 'calendarEventDetails',
			name: 'Calendar event details',
			description: 'All the details attached to an event. Shown on click of the event.',
			
			
			    fields: {
			            /** Id. An optional ID for this item; used to allow association with UI Enhancements */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'An optional ID for this item; used to allow association with UI Enhancements',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Items. The items that make up the event details */
			            'items': {
			                label: 'Items',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'The items that make up the event details',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.List.definition, SpruceSchemas.local.Button.definition, SpruceSchemas.local.SplitButton.definition, SpruceSchemas.local.CardBuilder.definition, SpruceSchemas.local.Toast.definition, SpruceSchemas.local.Text.definition, SpruceSchemas.local.Markdown.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.CalendarEventDetails.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** How an event will be rendered in the calendar. Each time represents a standard state of an event. */
		export interface ICalendarEvent {
			
				/** Id. Id of the calendar event */
				'id': string
				/** Starts at. */
				'startAt': SpruceSchema.IDateTimeFieldValue
				/** Collection. A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar */
				'collection'?: string| undefined
				/** Is resizable. Can this event be resized on the calendar? */
				'isResizable'?: boolean| undefined
				/** Kind. The kind on an event impacts it's visual representation */
				'kind'?: ("default" | "tentative" | "active" | "unavailable" | "blocked" | "upcoming" | "past" | "warn" | "critical")| undefined
				/** Blocks. A calendar is comprised of blocks of time. You need at least 1 block to have a valid event. */
				'blocks': SpruceSchemas.local.ICalendarEventBlock[]
				/** Details. Additional details shown after someone taps on an event */
				'details'?: SpruceSchemas.local.ICalendarEventDetails| undefined
				/** User id. The ID of the user this event will render under */
				'userId': string
				/** Is draft. If this is a draft event (meaning it's not booked, but being setup) */
				'isDraft'?: boolean| undefined
				/** Has border. Should I render a border for this event? */
				'hasBorder'?: boolean| undefined
		}
	}	 

	export namespace SpruceSchemas.local.CalendarEvent {
		export const id = 'CalendarEvent'

		/** The interface for the schema definition for a CalendarEvent */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'CalendarEvent',
			name: 'CalendarEvent',
			description: 'How an event will be rendered in the calendar. Each time represents a standard state of an event.',
			
			
			    fields: {
			            /** Id. Id of the calendar event */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Id of the calendar event',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Starts at. */
			            'startAt': {
			                label: 'Starts at',
			                type: SpruceSchema.FieldType.DateTime,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Collection. A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar */
			            'collection': {
			                label: 'Collection',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is resizable. Can this event be resized on the calendar? */
			            'isResizable': {
			                label: 'Is resizable',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Can this event be resized on the calendar?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Kind. The kind on an event impacts it's visual representation */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'The kind on an event impacts it\'s visual representation',
			                
			                
			                
			                
			                options: {choices: [{"label":"How a calendar event renders by default.","value":"default"},{"label":"If an event is not confirmed.","value":"tentative"},{"label":"When an event is happening right now","value":"active"},{"label":"If the event represents a time when the person is not available for additional events (usually matches isBusy)","value":"unavailable"},{"label":"If the event represents a time where the user us unavailable (break or block)","value":"blocked"},{"label":"The event is ready to go, everyone has confirmed, it just hasn't happened yet","value":"upcoming"},{"label":"If the event is in the past","value":"past"},{"label":"The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)","value":"warn"},{"label":"Renders the event in red (the event could have already started but attendees have not confirmed)","value":"critical"}],}
			            },
			            /** Blocks. A calendar is comprised of blocks of time. You need at least 1 block to have a valid event. */
			            'blocks': {
			                label: 'Blocks',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.CalendarEventBlock.IDefinition[],}
			            },
			            /** Details. Additional details shown after someone taps on an event */
			            'details': {
			                label: 'Details',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Additional details shown after someone taps on an event',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.CalendarEventDetails.IDefinition[],}
			            },
			            /** User id. The ID of the user this event will render under */
			            'userId': {
			                label: 'User id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'The ID of the user this event will render under',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is draft. If this is a draft event (meaning it's not booked, but being setup) */
			            'isDraft': {
			                label: 'Is draft',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'If this is a draft event (meaning it\'s not booked, but being setup)',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Has border. Should I render a border for this event? */
			            'hasBorder': {
			                label: 'Has border',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Should I render a border for this event?',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a CalendarEvent */
		export const definition: SpruceSchemas.local.CalendarEvent.IDefinition = {
			id: 'CalendarEvent',
			name: 'CalendarEvent',
			description: 'How an event will be rendered in the calendar. Each time represents a standard state of an event.',
			
			
			    fields: {
			            /** Id. Id of the calendar event */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Id of the calendar event',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Starts at. */
			            'startAt': {
			                label: 'Starts at',
			                type: SpruceSchema.FieldType.DateTime,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Collection. A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar */
			            'collection': {
			                label: 'Collection',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'A way to arbitrarily bundle events. Events with the same collection are all highlighted at the same time in the calendar',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is resizable. Can this event be resized on the calendar? */
			            'isResizable': {
			                label: 'Is resizable',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Can this event be resized on the calendar?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Kind. The kind on an event impacts it's visual representation */
			            'kind': {
			                label: 'Kind',
			                type: SpruceSchema.FieldType.Select,
			                
			                
			                hint: 'The kind on an event impacts it\'s visual representation',
			                
			                
			                
			                
			                options: {choices: [{"label":"How a calendar event renders by default.","value":"default"},{"label":"If an event is not confirmed.","value":"tentative"},{"label":"When an event is happening right now","value":"active"},{"label":"If the event represents a time when the person is not available for additional events (usually matches isBusy)","value":"unavailable"},{"label":"If the event represents a time where the user us unavailable (break or block)","value":"blocked"},{"label":"The event is ready to go, everyone has confirmed, it just hasn't happened yet","value":"upcoming"},{"label":"If the event is in the past","value":"past"},{"label":"The user should pay attention to this event (maybe the event is unconfirmed and starting in 30 minutes!)","value":"warn"},{"label":"Renders the event in red (the event could have already started but attendees have not confirmed)","value":"critical"}],}
			            },
			            /** Blocks. A calendar is comprised of blocks of time. You need at least 1 block to have a valid event. */
			            'blocks': {
			                label: 'Blocks',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'A calendar is comprised of blocks of time. You need at least 1 block to have a valid event.',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.CalendarEventBlock.definition],}
			            },
			            /** Details. Additional details shown after someone taps on an event */
			            'details': {
			                label: 'Details',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Additional details shown after someone taps on an event',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.CalendarEventDetails.definition],}
			            },
			            /** User id. The ID of the user this event will render under */
			            'userId': {
			                label: 'User id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'The ID of the user this event will render under',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is draft. If this is a draft event (meaning it's not booked, but being setup) */
			            'isDraft': {
			                label: 'Is draft',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'If this is a draft event (meaning it\'s not booked, but being setup)',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Has border. Should I render a border for this event? */
			            'hasBorder': {
			                label: 'Has border',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Should I render a border for this event?',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.CalendarEvent.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** I universal way to hold visual information, use card builder to create cards */
		export interface ICard {
			
				/** . */
				'children'?: generated_import_1.INodeFieldDefinitionValue| undefined
				/** Centered. Is all content centered? */
				'isCentered'?: boolean| undefined
				/** Critical. Call attention to this card by making it standout! */
				'isCritical'?: boolean| undefined
				/** Small. A small variation of a card */
				'isSmall'?: boolean| undefined
				/** Class name. */
				'className'?: string| undefined
				/** Expandable. Allows this card to collapse at the header */
				'isExpandable'?: boolean| undefined
				/** Expanded by default. Should this thing start expanded */
				'defaultExpanded'?: boolean| undefined
				/** Header. */
				'header'?: SpruceSchemas.local.ICardHeader| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Card {
		export const id = 'card'

		/** The interface for the schema definition for a Card */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'card',
			name: 'Card',
			description: 'I universal way to hold visual information, use card builder to create cards',
			
			
			    fields: {
			            /** . */
			            'children': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Centered. Is all content centered? */
			            'isCentered': {
			                label: 'Centered',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is all content centered?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Critical. Call attention to this card by making it standout! */
			            'isCritical': {
			                label: 'Critical',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Call attention to this card by making it standout!',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Small. A small variation of a card */
			            'isSmall': {
			                label: 'Small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'A small variation of a card',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Expandable. Allows this card to collapse at the header */
			            'isExpandable': {
			                label: 'Expandable',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Allows this card to collapse at the header',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Expanded by default. Should this thing start expanded */
			            'defaultExpanded': {
			                label: 'Expanded by default',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Should this thing start expanded',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Header. */
			            'header': {
			                label: 'Header',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.CardHeader.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a Card */
		export const definition: SpruceSchemas.local.Card.IDefinition = {
			id: 'card',
			name: 'Card',
			description: 'I universal way to hold visual information, use card builder to create cards',
			
			
			    fields: {
			            /** . */
			            'children': {
			                label: '',
			                type: SpruceSchema.FieldType.Node,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Centered. Is all content centered? */
			            'isCentered': {
			                label: 'Centered',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Is all content centered?',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Critical. Call attention to this card by making it standout! */
			            'isCritical': {
			                label: 'Critical',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Call attention to this card by making it standout!',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Small. A small variation of a card */
			            'isSmall': {
			                label: 'Small',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'A small variation of a card',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Expandable. Allows this card to collapse at the header */
			            'isExpandable': {
			                label: 'Expandable',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Allows this card to collapse at the header',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Expanded by default. Should this thing start expanded */
			            'defaultExpanded': {
			                label: 'Expanded by default',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Should this thing start expanded',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Header. */
			            'header': {
			                label: 'Header',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.CardHeader.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Card.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A great way to render a on/off style question or control */
		export interface IToggle {
			
				/** Id. Unique id for UI caching */
				'id': string
				/** Post text. Text after the toggle */
				'postText'?: string| undefined
				/** On click. Optional on click to invoke when tapped */
				'onClick'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
		}
	}	 

	export namespace SpruceSchemas.local.Toggle {
		export const id = 'Toggle'

		/** The interface for the schema definition for a Toggle */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'Toggle',
			name: 'Toggle',
			description: 'A great way to render a on/off style question or control',
			
			
			    fields: {
			            /** Id. Unique id for UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique id for UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Post text. Text after the toggle */
			            'postText': {
			                label: 'Post text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text after the toggle',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** On click. Optional on click to invoke when tapped */
			            'onClick': {
			                label: 'On click',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Optional on click to invoke when tapped',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Toggle */
		export const definition: SpruceSchemas.local.Toggle.IDefinition = {
			id: 'Toggle',
			name: 'Toggle',
			description: 'A great way to render a on/off style question or control',
			
			
			    fields: {
			            /** Id. Unique id for UI caching */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                hint: 'Unique id for UI caching',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Post text. Text after the toggle */
			            'postText': {
			                label: 'Post text',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Text after the toggle',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** On click. Optional on click to invoke when tapped */
			            'onClick': {
			                label: 'On click',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                hint: 'Optional on click to invoke when tapped',
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.Toggle.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A warning message that can go on a list item */
		export interface IListItemWarning {
			
				/** Title. */
				'title'?: boolean| undefined
				/** Subtitle. */
				'subtitle'?: boolean| undefined
				/** Note. */
				'note'?: boolean| undefined
		}
	}	 

	export namespace SpruceSchemas.local.ListItemWarning {
		export const id = 'listItemWarning'

		/** The interface for the schema definition for a List item warning */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'listItemWarning',
			name: 'List item warning',
			description: 'A warning message that can go on a list item',
			
			
			    fields: {
			            /** Title. */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subtitle. */
			            'subtitle': {
			                label: 'Subtitle',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Note. */
			            'note': {
			                label: 'Note',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a List item warning */
		export const definition: SpruceSchemas.local.ListItemWarning.IDefinition = {
			id: 'listItemWarning',
			name: 'List item warning',
			description: 'A warning message that can go on a list item',
			
			
			    fields: {
			            /** Title. */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subtitle. */
			            'subtitle': {
			                label: 'Subtitle',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Note. */
			            'note': {
			                label: 'Note',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ListItemWarning.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/** A list is comprised of list items (or expandable list items). This is that list item. */
		export interface IListItem {
			
				/** Id. */
				'id': string
				/** Title. Title text */
				'title': string
				/** Subtitle. Optional subtitle text */
				'subtitle'?: string| undefined
				/** Note. Optional note text */
				'note'?: string| undefined
				/** Is expandable. Can render this item as expandable */
				'isExpandable'?: boolean| undefined
				/** Avatar. */
				'avatar'?: SpruceSchemas.local.IAvatar| undefined
				/** Image. URL to show an image */
				'image'?: string| undefined
				/** Icon. Inline svg icon */
				'icon'?: SpruceSchemas.local.IIcon| undefined
				/** Is icon hidden. Optional; visually hides the icon without removing it */
				'isIconHidden'?: boolean| undefined
				/** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
				'isLeftIndented'?: boolean| undefined
				/** Is draggable. Set true when the list can be reordered */
				'isDraggable'?: boolean| undefined
				/** Is disabled. Set true when the list can be reordered */
				'isDisabled'?: boolean| undefined
				/** Toggle props. Props passed to the toggle if toggleId is set */
				'toggle'?: SpruceSchemas.local.IToggle| undefined
				/** Primary button. A primary button that turns the entire list item into a clickable button */
				'primaryButton'?: SpruceSchemas.local.IButton| undefined
				/** Buttons. Actions associated with the list item */
				'buttons'?: SpruceSchemas.local.IButton[]| undefined
				/** Context menu. Context Menu associated with the list it */
				'contextMenu'?: SpruceSchemas.local.IContextMenu| undefined
				/** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
				'isSeparatorVisible'?: boolean| undefined
				/** Class name. Optional class name for list item */
				'className'?: string| undefined
				/** Selectable element. Any props you want sent down to the selectable component being rendered */
				'selectable'?: SpruceSchemas.local.IRadio | SpruceSchemas.local.ICheckbox| undefined
				/** Warnings. Highlight title, subtitle, note with warning colors */
				'warnings'?: SpruceSchemas.local.IListItemWarning| undefined
				/** List. Optional; adds a nested list */
				'list'?: SpruceSchemas.local.IList| undefined
				/** Lists. Optional; adds multiple lists nested at the same level */
				'lists': SpruceSchemas.local.IList[]
		}
	}	 

	export namespace SpruceSchemas.local.ListItem {
		export const id = 'listItem'

		/** The interface for the schema definition for a List item */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'listItem',
			name: 'List item',
			description: 'A list is comprised of list items (or expandable list items). This is that list item.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Title. Title text */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Title text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subtitle. Optional subtitle text */
			            'subtitle': {
			                label: 'Subtitle',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional subtitle text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Note. Optional note text */
			            'note': {
			                label: 'Note',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional note text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is expandable. Can render this item as expandable */
			            'isExpandable': {
			                label: 'Is expandable',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Can render this item as expandable',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Avatar. */
			            'avatar': {
			                label: 'Avatar',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Avatar.IDefinition[],}
			            },
			            /** Image. URL to show an image */
			            'image': {
			                label: 'Image',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'URL to show an image',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. Inline svg icon */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Inline svg icon',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Is icon hidden. Optional; visually hides the icon without removing it */
			            'isIconHidden': {
			                label: 'Is icon hidden',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Optional; visually hides the icon without removing it',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
			            'isLeftIndented': {
			                label: 'Is left indented',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to add left spacing. useful in aligning with other list items that have icons or images',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is draggable. Set true when the list can be reordered */
			            'isDraggable': {
			                label: 'Is draggable',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true when the list can be reordered',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is disabled. Set true when the list can be reordered */
			            'isDisabled': {
			                label: 'Is disabled',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true when the list can be reordered',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Toggle props. Props passed to the toggle if toggleId is set */
			            'toggle': {
			                label: 'Toggle props',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Props passed to the toggle if toggleId is set',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Toggle.IDefinition[],}
			            },
			            /** Primary button. A primary button that turns the entire list item into a clickable button */
			            'primaryButton': {
			                label: 'Primary button',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'A primary button that turns the entire list item into a clickable button',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			            /** Buttons. Actions associated with the list item */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Actions associated with the list item',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.Button.IDefinition[],}
			            },
			            /** Context menu. Context Menu associated with the list it */
			            'contextMenu': {
			                label: 'Context menu',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Context Menu associated with the list it',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.ContextMenu.IDefinition[],}
			            },
			            /** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
			            'isSeparatorVisible': {
			                label: 'Is separator visible',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set to true to show separator for this list item if followed by another list item.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. Optional class name for list item */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional class name for list item',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Selectable element. Any props you want sent down to the selectable component being rendered */
			            'selectable': {
			                label: 'Selectable element',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Any props you want sent down to the selectable component being rendered',
			                
			                
			                
			                
			                options: {schemas: (SpruceSchemas.local.Radio.IDefinition | SpruceSchemas.local.Checkbox.IDefinition)[],}
			            },
			            /** Warnings. Highlight title, subtitle, note with warning colors */
			            'warnings': {
			                label: 'Warnings',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Highlight title, subtitle, note with warning colors',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.ListItemWarning.IDefinition[],}
			            },
			            /** List. Optional; adds a nested list */
			            'list': {
			                label: 'List',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Optional; adds a nested list',
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.List.IDefinition[],}
			            },
			            /** Lists. Optional; adds multiple lists nested at the same level */
			            'lists': {
			                label: 'Lists',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Optional; adds multiple lists nested at the same level',
			                
			                
			                isArray: true,
			                
			                options: {schemas: SpruceSchemas.local.List.IDefinition[],}
			            },
			    }
		}

		/** The schema definition for a List item */
		export const definition: SpruceSchemas.local.ListItem.IDefinition = {
			id: 'listItem',
			name: 'List item',
			description: 'A list is comprised of list items (or expandable list items). This is that list item.',
			
			
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: SpruceSchema.FieldType.Id,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Title. Title text */
			            'title': {
			                label: 'Title',
			                type: SpruceSchema.FieldType.Text,
			                
			                isRequired: true,
			                hint: 'Title text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Subtitle. Optional subtitle text */
			            'subtitle': {
			                label: 'Subtitle',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional subtitle text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Note. Optional note text */
			            'note': {
			                label: 'Note',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional note text',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is expandable. Can render this item as expandable */
			            'isExpandable': {
			                label: 'Is expandable',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Can render this item as expandable',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Avatar. */
			            'avatar': {
			                label: 'Avatar',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Avatar.definition],}
			            },
			            /** Image. URL to show an image */
			            'image': {
			                label: 'Image',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'URL to show an image',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Icon. Inline svg icon */
			            'icon': {
			                label: 'Icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Inline svg icon',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Is icon hidden. Optional; visually hides the icon without removing it */
			            'isIconHidden': {
			                label: 'Is icon hidden',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Optional; visually hides the icon without removing it',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is left indented. Set true to add left spacing. useful in aligning with other list items that have icons or images */
			            'isLeftIndented': {
			                label: 'Is left indented',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true to add left spacing. useful in aligning with other list items that have icons or images',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is draggable. Set true when the list can be reordered */
			            'isDraggable': {
			                label: 'Is draggable',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true when the list can be reordered',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Is disabled. Set true when the list can be reordered */
			            'isDisabled': {
			                label: 'Is disabled',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set true when the list can be reordered',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Toggle props. Props passed to the toggle if toggleId is set */
			            'toggle': {
			                label: 'Toggle props',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Props passed to the toggle if toggleId is set',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Toggle.definition],}
			            },
			            /** Primary button. A primary button that turns the entire list item into a clickable button */
			            'primaryButton': {
			                label: 'Primary button',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'A primary button that turns the entire list item into a clickable button',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			            /** Buttons. Actions associated with the list item */
			            'buttons': {
			                label: 'Buttons',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Actions associated with the list item',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.Button.definition],}
			            },
			            /** Context menu. Context Menu associated with the list it */
			            'contextMenu': {
			                label: 'Context menu',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Context Menu associated with the list it',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.ContextMenu.definition],}
			            },
			            /** Is separator visible. Set to true to show separator for this list item if followed by another list item. */
			            'isSeparatorVisible': {
			                label: 'Is separator visible',
			                type: SpruceSchema.FieldType.Boolean,
			                
			                
			                hint: 'Set to true to show separator for this list item if followed by another list item.',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Class name. Optional class name for list item */
			            'className': {
			                label: 'Class name',
			                type: SpruceSchema.FieldType.Text,
			                
			                
			                hint: 'Optional class name for list item',
			                
			                
			                
			                
			                options: undefined
			            },
			            /** Selectable element. Any props you want sent down to the selectable component being rendered */
			            'selectable': {
			                label: 'Selectable element',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Any props you want sent down to the selectable component being rendered',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Radio.definition, SpruceSchemas.local.Checkbox.definition],}
			            },
			            /** Warnings. Highlight title, subtitle, note with warning colors */
			            'warnings': {
			                label: 'Warnings',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Highlight title, subtitle, note with warning colors',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.ListItemWarning.definition],}
			            },
			            /** List. Optional; adds a nested list */
			            'list': {
			                label: 'List',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                hint: 'Optional; adds a nested list',
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.List.definition],}
			            },
			            /** Lists. Optional; adds multiple lists nested at the same level */
			            'lists': {
			                label: 'Lists',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                hint: 'Optional; adds multiple lists nested at the same level',
			                
			                
			                isArray: true,
			                
			                options: {schemas: [SpruceSchemas.local.List.definition],}
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ListItem.IDefinition>
	}
	

	export namespace SpruceSchemas.local {
		/**  */
		export interface IExpandableListItem {
			
				/** List item. */
				'item': SpruceSchemas.local.IListItem
				/** Collapsed icon. */
				'collapsedIcon'?: SpruceSchemas.local.IIcon| undefined
				/** Expanded icon. */
				'expandedIcon'?: SpruceSchemas.local.IIcon| undefined
				/** . */
				'onClick'?: ((e?: React.MouseEvent<Element, MouseEvent> | React.FormEvent<HTMLFormElement>) => void)| undefined
		}
	}	 

	export namespace SpruceSchemas.local.ExpandableListItem {
		export const id = 'expandableListItem'

		/** The interface for the schema definition for a Expandable list item */
		export interface IDefinition extends SpruceSchema.ISchemaDefinition {
			id: 'expandableListItem',
			name: 'Expandable list item',
			description: '',
			
			
			    fields: {
			            /** List item. */
			            'item': {
			                label: 'List item',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.ListItem.IDefinition[],}
			            },
			            /** Collapsed icon. */
			            'collapsedIcon': {
			                label: 'Collapsed icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** Expanded icon. */
			            'expandedIcon': {
			                label: 'Expanded icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: SpruceSchemas.local.Icon.IDefinition[],}
			            },
			            /** . */
			            'onClick': {
			                label: '',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The schema definition for a Expandable list item */
		export const definition: SpruceSchemas.local.ExpandableListItem.IDefinition = {
			id: 'expandableListItem',
			name: 'Expandable list item',
			description: '',
			
			
			    fields: {
			            /** List item. */
			            'item': {
			                label: 'List item',
			                type: SpruceSchema.FieldType.Schema,
			                
			                isRequired: true,
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.ListItem.definition],}
			            },
			            /** Collapsed icon. */
			            'collapsedIcon': {
			                label: 'Collapsed icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** Expanded icon. */
			            'expandedIcon': {
			                label: 'Expanded icon',
			                type: SpruceSchema.FieldType.Schema,
			                
			                
			                
			                
			                
			                
			                
			                options: {schemas: [SpruceSchemas.local.Icon.definition],}
			            },
			            /** . */
			            'onClick': {
			                label: '',
			                type: SpruceSchema.FieldType.OnClick,
			                
			                
			                
			                
			                
			                
			                
			                options: undefined
			            },
			    }
		}

		/** The type of a schema instance built off this definition */
		export type Instance = Schema<SpruceSchemas.local.ExpandableListItem.IDefinition>
	}
	



