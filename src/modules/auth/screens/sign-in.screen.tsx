import React, { useEffect, useState } from 'react'
import { ScreenLayout } from '@/shared/components'
import { AuthHead } from '../components'
import { StyleSheet, View } from 'react-native'
import { FormControll } from '@/shared/components/form'
import { $size, notAviable } from '@/shared/helpers'
import { Button } from '@/shared/components/buttons'
import { useForm } from 'jet-tools'
import { validateSignIn, validateSignUp } from '../validators'

import { useManager } from '@/shared/hooks'
import { ManagerKey } from '@/typing'
import { GraphExeption } from '@/shared/exeptions'
import { ErrorTxt } from '@/shared/components/typography'

interface SignInForm {
	email: string
	password: string
}

export const SignInScreen = () => {
	const form = useForm<SignInForm>({}, validateSignIn)
	const userManager = useManager(ManagerKey.User)
	const [error, setError] = useState(null)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setError(null)
	}, [form.values])

	const submit = async () => {
		try {
			setLoading(true)
			await userManager.signIn(form.values)
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
			<AuthHead title="Log in" style={styles.head} />

			<View style={styles.content}>
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
					label="Password"
					onChangeText={val => form.setField('password', val)}
					value={form.values.password}
					secureTextEntry={true}
					error={form.errors.password}
				/>

				{error ? <ErrorTxt text={error} /> : null}
				<Button
					onPress={() => form.onSubmit(submit)}
					mod="success"
					text="LOG IN"
					isLoading={isLoading}
					style={styles.confirmBtn}
				/>

				{error ? (
					<Button
						mod="simple"
						onPress={notAviable}
						text="Forgot my password"
					/>
				) : null}
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
		width: 140,
	},
})
