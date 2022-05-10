import { SignUpResultDto } from '@/shared/dto'
import { GraphExeption } from '@/shared/exeptions'
import { IUser } from '@/typing/interfaces'
import { gql } from '@apollo/client'
import { apiClient } from '../api.client'

const CheckExistEmailQ = gql`
	query isExistingUserByEmail($email: EmailAddress!) {
		isExistingUserByEmail(email: $email)
	}
`

export const checkExistEmailReq = async (email: string) => {
	const result: any = await apiClient.query({
		query: CheckExistEmailQ,
		variables: { email },
	})
	return result.isExistingUserByEmail
}

const SignUpQ = gql`
	mutation signUpWithEmail(
		$name: NonEmptyString!
		$email: EmailAddress!
		$password: Password!
	) {
		signUpWithEmail(name: $name, email: $email, password: $password) {
			user {
				id
				email
				name
				facebookId
				googleId
				appleId
			}
			accessToken
			refreshToken
		}
	}
`

export const SignUpReq = async (data: any): Promise<SignUpResultDto> => {
	try {
		const result = await apiClient.mutate({
			mutation: SignUpQ,
			variables: {
				email: data.email,
				name: data.name,
				password: data.password,
			},
		})
		apiClient.resetStore()

		return result.data.signUpWithEmail
	} catch (e) {
		throw new GraphExeption(e.graphQLErrors)
	}
}

const SignInMutationQ = gql`
	mutation loginWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
		loginWithEmail(email: $email, password: $password) {
			user {
				id
				email
				name
				facebookId
				googleId
				appleId
			}
			accessToken
			refreshToken
		}
	}
`

export const SignInReq = async (data: any): Promise<SignUpResultDto> => {
	try {
		const result: any = await apiClient.mutate({
			mutation: SignInMutationQ,
			variables: {
				email: data.email,
				password: data.password,
			},
		})
		return result.data.loginWithEmail
	} catch (e) {
		throw new GraphExeption(e.graphQLErrors)
	}
}

const UpdateProfileMutationQ = gql`
	mutation updateUser($email: EmailAddress!, $name: NonEmptyString!) {
		updateUser(name: $name, email: $email) {
			id
			name
			email
			facebookId
			googleId
			appleId
		}
	}
`

export const updateAccountReq = async (data: any): Promise<IUser> => {
	try {
		const result: any = await apiClient.mutate({
			mutation: UpdateProfileMutationQ,
			variables: {
				email: data.email,
				name: data.name,
			},
		})

		return result.data.updateUser
	} catch (e) {}
}
