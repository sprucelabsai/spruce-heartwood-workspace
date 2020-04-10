import { IAction, ActionType } from './types'

export interface IBigSearchActionPayload {
	types?: ('person' | 'location' | 'organization')[]
	roles?: ('guest' | 'teammate' | 'manager' | 'groupManager' | 'owner')[]
}

export interface IBigSearchAction extends IAction<IBigSearchActionPayload> {
	/** * .BigSearch - Search for a person, place, or thing */
	type: ActionType.BigSearch
}
