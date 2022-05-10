import { NavGroup } from '@/typing'
import { Store } from '@/typing/interfaces/system'
import { createReducer } from '@bitalikrty/redux-create-reducer'
import { NavActions } from './actions'

const initialState: Store.States.Nav = {
	activeGroup: NavGroup.Loading,
	isLoading: true,
}

export const navigationReducer = createReducer<Store.States.Nav, NavActions>(
	initialState,
	{
		SET_NAVIGATION_GROUP: (state, { payload }) => {
			return {
				...state,
				activeGroup: payload,
				isLoading: false,
			}
		},
	},
)
