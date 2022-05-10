import React, { useEffect, useState } from 'react'
import { ScreenLayout } from '@/shared/components'
import { ErrorTxt, Txt } from '@/shared/components/typography'
import { AuthHead } from '../components'
import { StyleSheet, View } from 'react-native'
import { FormControll } from '@/shared/components/form'
import { $size } from '@/shared/helpers'
import { Button } from '@/shared/components/buttons'
import { useForm } from 'jet-tools'
import { validateSignUp } from '../validators'
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { apiClient } from '@/api/api.client'
import { checkExistEmailReq, SignUpReq } from '@/api/groups'
import { useManager } from '@/shared/hooks'
import { ManagerKey } from '@/typing'
import { GraphExeption } from '@/shared/exeptions'

interface SignUpForm {
	name: string
	email: string
	password: string
}

export const SignUpScreen = () => {
	const form = useForm<SignUpForm>({}, validateSignUp)
	const userManager = useManager(ManagerKey.User)
	const [error, setError] = useState(null)
	const [isLoading, setLoading] = useState(false)

	const checkExist = async () => {
		const exist = await checkExistEmailReq(form.values.email)
		if (exist) {
			form.setError('email', 'This email already exist')
			return true
		}
		return false
	}

	const submit = async () => {
		try {
			setLoading(true)
			const exist = await checkExist()
			if (exist) return
			userManager.signUp(form.values)
		} catch (e) {
			if (e instanceof GraphExeption) {
				setError('Email or password is not correct')
			} else {
				setError(
					'An unknown error has occurred, please try again later',
				)
			}
		} finally {
			setLoading(false)
		}
	}
	return (
		<ScreenLayout>
			<AuthHead title="Sign up with Email" style={styles.head} />

			<View style={styles.content}>
				<FormControll
					label="Your name"
					onChangeText={val => form.setField('name', val)}
					value={form.values.name}
					error={form.errors.name}
					textContentType="name"
					autoCapitalize="none"
				/>
				<FormControll
					label="Email"
					onChangeText={val => form.setField('email', val)}
					value={form.values.email}
					error={form.errors.email}
					keyboardType="email-address"
					textContentType="emailAddress"
					autoCapitalize="none"
				/>
				<FormControll
					label="Password (min 6 characters)"
					onChangeText={val => form.setField('password', val)}
					value={form.values.password}
					secureTextEntry={true}
					error={form.errors.password}
					textContentType="newPassword"
				/>

				{error ? <ErrorTxt text={error} /> : null}

				<Button
					onPress={() => form.onSubmit(submit)}
					mod="success"
					text="SIGN UP"
					isLoading={isLoading}
					style={styles.confirmBtn}
				/>
			</View>
		</ScreenLayout>
	)
}

const styles = StyleSheet.create({
	content: {
		width: $size(300, 280),
		alignSelf: 'center',
	},
	head: {
		marginBottom: 18,
	},
	confirmBtn: {
		alignSelf: 'center',
		marginTop: 20,
	},
})
