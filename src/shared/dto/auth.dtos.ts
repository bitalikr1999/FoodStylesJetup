export class SignUpPayloadDto {
	email: string
	password: string
	name: string
}

export class SignUpResultDto {
	user: {
		id: number
		email: string
		name: string
		facebookId: any
		googleId: any
		appleId: any
	}
	accessToken: string
	refreshToken: string
}

export class TokensPairDto {
	accessToken: string
	refreshToken: string
}

export class SignInDto {
	email: string
	password: string
}

export class UpdateAccountPayloadDto {
	name: string
	email: string
}
