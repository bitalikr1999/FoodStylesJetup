import { apiClient } from '@/api/api.client'
import { SignInReq, SignUpReq, updateAccountReq } from '@/api/groups'
import { Manager } from '@/shared/abstract'
import {
	SignInDto,
	SignUpPayloadDto,
	SignUpResultDto,
	TokensPairDto,
	UpdateAccountPayloadDto,
} from '@/shared/dto'
import { NonAuthExeption } from '@/shared/exeptions'
import {
	AsyncStorageKey,
	globalContainer,
	GlobalDataKey,
	storage,
} from '@/shared/tools'
import { SetAccountAction } from '@/store/account/actions'
import { SetNavGroupAction } from '@/store/navigation'
import { NavGroup } from '@/typing'
import { IUserManager } from '@/typing/interfaces'

export class UserManager extends Manager implements IUserManager {
	static instance: UserManager

	public async loadAccount() {
		const user = await storage.get(AsyncStorageKey.Profile)
		if (!user) throw new NonAuthExeption()
		this.dispatch(new SetAccountAction(user))
	}

	public async updateAccount(dto: UpdateAccountPayloadDto) {
		const user = await updateAccountReq(dto)
		this.dispatch(new SetAccountAction(user))
		storage.set(AsyncStorageKey.Profile, user)
	}

	public async signUp(dto: SignUpPayloadDto) {
		const result = await SignUpReq(dto)
		await this.handleSuccessAuth(result)
	}

	public async signIn(dto: SignInDto) {
		const result = await SignInReq(dto)
		await this.handleSuccessAuth(result)
	}

	public async logout() {
		this.dispatch(new SetNavGroupAction(NavGroup.Guest))
		this.dispatch(new SetAccountAction(null))
		storage.del(AsyncStorageKey.Profile)
		storage.del(AsyncStorageKey.Tokens)
		apiClient.resetStore()
	}

	public async loadTokens() {
		const tokens = await storage.get(AsyncStorageKey.Tokens)
		if (!tokens) throw new NonAuthExeption()
		globalContainer.set(GlobalDataKey.Token, tokens.accessToken)
	}

	private async handleSuccessAuth(dto: SignUpResultDto) {
		this.dispatch(new SetAccountAction(dto.user))
		await this.saveTokens({
			accessToken: dto.accessToken,
			refreshToken: dto.refreshToken,
		})
		storage.set(AsyncStorageKey.Profile, dto.user)
		this.dispatch(new SetNavGroupAction(NavGroup.User))
	}

	private async saveTokens(dto: TokensPairDto) {
		globalContainer.set(GlobalDataKey.Token, dto.accessToken)
		globalContainer.set(GlobalDataKey.RefreshToken, dto.refreshToken)
		await storage.set(AsyncStorageKey.Tokens, dto)
	}

	static getInstance() {
		if (!UserManager.instance) UserManager.instance = new UserManager()
		return UserManager.instance
	}
}
