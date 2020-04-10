import { IAction, ActionType, IRoute } from './types'

export interface IRedirectActionPayload {
	/** Where are we sending this person */
	route: IRoute
}

export interface IRedirectAction extends IAction<IRedirectActionPayload> {
	/** * .CoreRedirect - Redirect a person to a place */
	type: ActionType.Redirect
}
