import { Txt } from '@/shared/components/typography'
import { useNav } from '@/shared/hooks'
import { FontKey } from '@/typing/enums/fonte-key.enum'
import React from 'react'
import {
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native'

interface AuthHeadProps {
	title: string
	style?: ViewStyle
}

export const AuthHead: React.FC<AuthHeadProps> = ({ title, style }) => {
	const nav = useNav()
	return (
		<View style={[styles.container, style]}>
			<View style={styles.path}>
				<TouchableOpacity
					style={styles.back}
					onPress={() => nav.goBack()}>
					<Image
						source={require('@/assets/images/back.png')}
						resizeMode="contain"
						style={styles.backIcon}
					/>
				</TouchableOpacity>
			</View>
			<Txt font={FontKey.ProximaNovaBold} style={styles.title}>
				{title}
			</Txt>
			<View style={styles.path}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingTop: 10,
	},
	path: {
		width: 50,
	},
	title: {
		flex: 1,
		textAlign: 'center',
		color: '#fff',
	},
	back: {
		width: 41,
		height: 41,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#efefef',
		paddingLeft: 5,
	},
	backIcon: {
		height: 20,
		width: 20,
	},
})
