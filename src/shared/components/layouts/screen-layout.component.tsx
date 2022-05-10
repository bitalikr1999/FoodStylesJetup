import React, { ReactElement } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, ViewStyle } from 'react-native'
import { ScreenLayoutContent } from './screen-layout-content.component'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { colors } from '@/shared/config'
import LinearGradient from 'react-native-linear-gradient'

export interface ScreenLayoutProps {
	children: JSX.Element | JSX.Element[]
	needScroll?: Boolean
	scrollStyle?: ViewStyle
	viewStyle?: ViewStyle
	leftBottomRound?: boolean
	horizontalPadding?: number
	keyboardSpacerOn?: boolean
	scrollRef?: React.MutableRefObject<KeyboardAwareScrollView>
	extraHeight?: number

	pointerEvents?: any
}

export const ScreenLayout = ({ ...props }: ScreenLayoutProps) => {
	return (
		<LinearGradient
			colors={colors.PRIMARY_GRADIENT}
			style={styles.wrap}
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 0.5 }}>
			{/* <SafeAreaView style={[styles.container]}> */}
			<StatusBar barStyle="dark-content" />

			<ScreenLayoutContent {...props} />
			{/* </SafeAreaView> */}
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
})
