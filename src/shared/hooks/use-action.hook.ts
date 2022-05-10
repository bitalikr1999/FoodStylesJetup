import { store } from '@/store'
import { Store } from '@/typing/interfaces'

export const useAction = () => {
	const dispatch = (action: Store.Action) => {
		store.dispatch({
			type: action.type,
			payload: action.payload,
		})
	}

	return dispatch
}
