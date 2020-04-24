import { IBigSearchAction } from './bigSearch'
import { IRedirectAction } from './redirect'

/** The types of actions we support */
export enum ActionType {
	Redirect = 'CoreRedirect',
	Confirm = 'Confirm',
	ShowModal = 'ShowModal',
	EmitEvent = 'EmitEvent',
	BigSearch = 'BigSearch',
	QuickEditUser = 'QuickEditUser',
	DismissComponent = 'DismissComponent',
	CalendarJumpTo = 'CalendarJumpTo'
}

/** A route in the platform */
export interface IRoute {
	/** The name of the route */
	name: string
	/** Any params sent */
	params?: Record<string, any>
}

/** Union of any action */
export type Action = IBigSearchAction | IRedirectAction

/** The base action interface all actions implement */
export interface IAction<P = Record<string, any>> {
	/** The type of action */
	type: ActionType

	/** The payload related to the type of action */
	payload: P

	/** Action that will be executed when an error occurs */
	onComplete?: Action

	/** Action to be executed when an error occurred, will be sent an instance of SpruceError */
	onError?: Action

	/** Action to be executed when the user cancels an action */
	onCancel?: Action
}
