import { Button } from '@/shared/components/buttons'
import { Txt } from '@/shared/components/typography'
import { FontKey } from '@/typing/enums/fonte-key.enum'
import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

interface AccountLayoutProps {
	title: string
	footerComponent?: JSX.Element
}

export const AccountLayout: React.FC<AccountLayoutProps> = ({
	children,
	title,
	footerComponent,
}) => {
	const insets = useSafeAreaInsets()
	return (
		<>
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="dark-content" />

				<View style={styles.content}>
					<Txt style={styles.title} font={FontKey.ProximaNovaBold}>
						{title}
					</Txt>

					{children}
				</View>
			</SafeAreaView>
			<View
				style={[
					styles.footer,
					{ paddingBottom: Math.max(insets.bottom, 12) },
				]}>
				{footerComponent}
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f8f8',
	},
	content: {
		flex: 1,
		paddingHorizontal: 18,
	},
	title: {
		color: '#434343',
		fontSize: 15,
		opacity: 0.9,
		letterSpacing: 0.75,
		textTransform: 'uppercase',
		marginBottom: 20,
	},
	footer: {
		// height: 48,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.1,
		shadowRadius: 15,

		elevation: 5,
	},
})
