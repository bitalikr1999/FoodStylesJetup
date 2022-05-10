import { Manager } from '@/shared/abstract'
import { NavGroup } from '@/typing'
import { UserManager } from './user.manager'

export class AppManager extends Manager {
	private userManager = UserManager.getInstance()

	public async init() {
		try {
			await this.userManager.loadTokens()
			await this.userManager.loadAccount()

			this.navigate(NavGroup.User)
		} catch (e) {
			this.navigate(NavGroup.Guest)
		}
	}
}
