import { StoreActionKey } from '@/typing'
import { IUser } from '@/typing/interfaces'
import { Store } from '@/typing/interfaces/system'

export class SetAccountAction implements Store.Action {
	readonly type = StoreActionKey.SET_ACCOUNT
	constructor(public readonly payload: IUser) {}
}

export type AccountActions = SetAccountAction
