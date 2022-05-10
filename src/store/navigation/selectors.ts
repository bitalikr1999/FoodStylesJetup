import { Store } from '@/typing/interfaces'

export const selectNavGroup = (store: Store.Root) => {
	return store.navigation.activeGroup
}
