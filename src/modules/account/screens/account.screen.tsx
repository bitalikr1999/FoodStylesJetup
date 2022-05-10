import { Button } from '@/shared/components/buttons'
import { FormControll } from '@/shared/components/form'
import { Txt } from '@/shared/components/typography'
import { useManager } from '@/shared/hooks'
import { selectAccount } from '@/store/account/selectors'
import { ManagerKey } from '@/typing'
import { useForm } from 'jet-tools'
import React, { useEffect, useState } from 'react'
import { Alert, Keyboard, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { AccountLayout } from '../components'

interface EditAccountForm {
	name: string
	email: string
}

export const AccountScreen = () => {
	const form = useForm<EditAccountForm>({}, () => null)
	const userManager = useManager(ManagerKey.User)
	const account = useSelector(selectAccount)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		form.set({
			name: account.data.name,
			email: account.data.email,
		})
	}, [account])

	const submit = async () => {
		try {
			Keyboard.dismiss()
			setLoading(true)
			await userManager.updateAccount(form.values)
			Alert.alert('Account data updated successfully')
		} catch (e) {
		} finally {
			setLoading(false)
		}
	}

	return (
		<AccountLayout
			title="Profile"
			footerComponent={
				<Button
					mod="success"
					onPress={() => form.onSubmit(submit)}
					text="DONE"
					style={styles.doneBtn}
					isLoading={isLoading}
				/>
			}>
			<>
				<View style={styles.content}>
					<View>
						<FormControll
							label="Name shown on your shared cards"
							onChangeText={val => form.setField('name', val)}
							value={form.values.name}
							error={form.errors.name}
							mod="secondary"
							containerStyle={{ marginBottom: 20 }}
						/>
						<FormControll
							label="Email"
							onChangeText={val => form.setField('email', val)}
							value={form.values.email}
							error={form.errors.email}
							mod="secondary"
						/>
					</View>
					<View>
						<Button
							mod="inverted"
							onPress={() => userManager.logout()}
							text="LOG OUT"
							style={styles.logoutbtn}
						/>
					</View>
				</View>
			</>
		</AccountLayout>
	)
}

const styles = StyleSheet.create({
	content: {
		justifyContent: 'space-between',
		flex: 1,
	},
	doneBtn: {
		alignSelf: 'center',
		marginTop: -10,
	},
	logoutbtn: {
		alignSelf: 'center',
		marginBottom: 30,
	},
})
