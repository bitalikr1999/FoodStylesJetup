import { Store } from '@/typing/interfaces'

export const selectAccount = (store: Store.Root) => {
	return store.account.info
}
