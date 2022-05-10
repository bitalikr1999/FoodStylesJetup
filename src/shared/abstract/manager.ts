import { store } from '@/store'
import { SetNavGroupAction } from '@/store/navigation'
import { NavGroup } from '@/typing'
import { Store } from '@/typing/interfaces'
import { appEvents } from '../events'

export abstract class Manager {
	protected eventEmmiter = appEvents

	protected onInit() {}

	protected dispatch(action: Store.Action) {
		store.dispatch({
			type: action.type,
			payload: action.payload,
		})
	}

	protected getState<T extends keyof Store.Root>(
		key?: T,
	): Store.Root | Store.Root[T] {
		const state = store.getState()
		if (key) return state[key]
		return state
	}

	protected select<T>(selector: (state: Store.Root) => T): T {
		const state = this.getState() as Store.Root
		return selector(state)
	}

	protected navigate(key: NavGroup) {
		this.dispatch(new SetNavGroupAction(key))
	}

	constructor() {
		if (this.onInit) this.onInit()
	}
}
