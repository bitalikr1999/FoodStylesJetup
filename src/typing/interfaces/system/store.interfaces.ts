import { NavGroup, StoreActionKey } from '@/typing/enums'
import { IUser } from '../entities'

export namespace Store {
	type StoreData<T> = {
		data: T
		isLoading: Boolean
	}
	export interface Action {
		type: StoreActionKey
		payload?: any
	}

	export interface Root {
		navigation: States.Nav
		account: States.Account
	}

	export namespace States {
		export interface Nav {
			activeGroup: NavGroup
			isLoading: boolean
		}

		export interface Account {
			info: StoreData<IUser>
		}
	}
}
