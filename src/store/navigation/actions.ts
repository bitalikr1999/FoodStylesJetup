import { NavGroup, StoreActionKey } from '@/typing'
import { Store } from '@/typing/interfaces/system'

export class SetNavGroupAction implements Store.Action {
	readonly type = StoreActionKey.SET_NAVIGATION_GROUP
	constructor(public readonly payload: NavGroup) {}
}

export type NavActions = SetNavGroupAction
