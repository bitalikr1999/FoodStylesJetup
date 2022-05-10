import {
	SignInDto,
	SignUpPayloadDto,
	UpdateAccountPayloadDto,
} from '@/shared/dto'

export interface IUserManager {
	loadAccount(): Promise<void>
	updateAccount(dto: UpdateAccountPayloadDto): Promise<void>

	signUp(dto: SignUpPayloadDto): Promise<void>
	signIn(dto: SignInDto): Promise<void>
	logout(): Promise<void>
}
