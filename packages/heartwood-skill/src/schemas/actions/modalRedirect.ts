import { IAction, ActionType, IRoute } from './types'

export interface IModalRedirectPayload {
	/** Where are we sending this person */
	route: IRoute
	/** Title of the dialog */
	title: string
	/** Drop a primary action button into the footer */
	footerPrimaryActionText: string
	/** Drop in a secondary action into the footer, only works if primary action is also set */
	footerSecondaryActionText: string
	/** Does the primary action button start off disabled? */
	isDialogFooterPrimaryActionDisabled: boolean
	/** Does the secondary action button start off disabled? */
	isDialogFooterSecondaryActionDisabled: boolean

	/** How does the dialog size itself width wise? */
	// 	size: modalSize
}

export interface IModalRedirect extends IAction<IModalRedirectPayload> {
	/** * .CoreRedirect - Redirect a person to a place */
	type: ActionType.Redirect
}
