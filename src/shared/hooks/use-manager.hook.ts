import { AppManager } from '@/managers'
import { UserManager } from '@/managers/user.manager'
import { ManagerKey } from '@/typing'
import { IAppManager, IUserManager } from '@/typing/interfaces'

const manages = {
	[ManagerKey.App]: new AppManager() as IAppManager,
	[ManagerKey.User]: UserManager.getInstance() as IUserManager,
}

export const useManager = <K extends ManagerKey>(key: K): typeof manages[K] => {
	return manages[key]
}
