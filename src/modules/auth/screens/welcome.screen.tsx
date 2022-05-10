import { ScreenLayout } from '@/shared/components'
import { Button, ButtonWithIcon } from '@/shared/components/buttons'
import { Txt } from '@/shared/components/typography'
import { colors } from '@/shared/config'
import { $size, notAviable } from '@/shared/helpers'
import { useNav } from '@/shared/hooks'
import { GuestRouteKey } from '@/typing'
import { FontKey } from '@/typing/enums/fonte-key.enum'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WelcomeLabelAtom } from '../atoms'

export const WelcomeScreen: React.FC<void> = () => {
	const navigation = useNav()
	return (
		<ScreenLayout>
			<WelcomeLabelAtom text="BETA VERSION" />
			<View style={styles.container}>
				<View style={styles.head}></View>
				<View style={styles.content}>
					<Image
						source={require('@/assets/images/logo.png')}
						resizeMode="contain"
						style={styles.logo}
					/>
					<Txt style={styles.subtitle}>
						Sign in to be able to save your preferences and
						settings.
					</Txt>
					<ButtonWithIcon
						mod="default"
						iconSource={require('@/assets/images/applelogo.png')}
						text="Sign in with Apple"
						onPress={notAviable}
						style={styles.button}
					/>
					<ButtonWithIcon
						mod="default"
						iconSource={require('@/assets/images/fbicon.png')}
						text="Sign in with Facebook"
						onPress={notAviable}
						style={styles.button}
					/>
					<ButtonWithIcon
						mod="default"
						iconSource={require('@/assets/images/googleicon.png')}
						text="Sign in with Google"
						onPress={notAviable}
						style={styles.button}
					/>
					<Button
						mod="default"
						text="Sign up with Email"
						onPress={() =>
							navigation.navigate(GuestRouteKey.SignUp)
						}
						style={styles.button}
					/>
					<Button
						mod="simple"
						text="Sign in with Email"
						onPress={() =>
							navigation.navigate(GuestRouteKey.SignIn)
						}
						style={styles.button}
					/>
				</View>
				<View style={styles.footer}>
					<Text style={styles.footerTextWrap}>
						<Txt
							style={styles.footerText}
							font={FontKey.ProximaNovaSemibold}>
							By signin is you accept the {'\n'}
						</Txt>
						<Txt
							style={[styles.footerText, styles.footerLink]}
							onPress={() => {}}
							font={FontKey.ProximaNovaSemibold}>
							General Terms
						</Txt>

						<Txt style={styles.footerText}> and </Txt>

						<Txt
							style={[styles.footerText, styles.footerLink]}
							font={FontKey.ProximaNovaSemibold}
							onPress={() => {}}>
							Privacy Policy
						</Txt>
					</Text>
				</View>
			</View>
		</ScreenLayout>
	)
}

const styles = StyleSheet.create({
	logo: {
		height: $size(130, 100),
		width: $size(130, 100),
		marginBottom: $size(20, 16),
	},
	container: {
		// backgroundColor: '#000',
		flex: 1,
		alignItems: 'center',
	},
	head: {
		height: 55,
	},
	footer: {
		height: 55,
		width: $size(240, 230),
		justifyContent: 'center',
		alignItems: 'center',
	},
	subtitle: {
		color: colors.PRIMARY_TEXT,
		marginBottom: $size(30, 22),
		fontSize: $size(17, 16),
		textAlign: 'center',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: $size(240, 230),
	},

	button: {
		marginBottom: $size(15, 10),
		width: '100%',
		paddingHorizontal: 0,
	},
	footerTextWrap: {
		textAlign: 'center',
	},
	footerText: {
		color: '#fff',
		fontSize: 14,
		opacity: 0.8,
	},
	footerLink: {
		textDecorationLine: 'underline',
	},
})
