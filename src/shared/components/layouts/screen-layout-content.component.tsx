import React, { FC, ReactElement, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native'
import { $size } from '@/shared/helpers'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface ScreenLayoutContentProps {
	children: JSX.Element | JSX.Element[]
	horizontalPadding?: number
	needScroll?: Boolean
	scrollStyle?: ViewStyle
	viewStyle?: ViewStyle
	leftBottomRound?: boolean
	background?: string
	keyboardSpacerOn?: boolean
	scrollRef?: React.MutableRefObject<KeyboardAwareScrollView>
	extraHeight?: number
	pointerEvents?: any
}

export const ScreenLayoutContent: FC<ScreenLayoutContentProps> = ({
	children,

	horizontalPadding = 16,
	needScroll,
	scrollStyle,
	viewStyle,
	scrollRef,
	extraHeight = 160,
	pointerEvents = undefined,
}) => {
	if (needScroll) {
		return (
			<SafeAreaView style={[styles.view]}>
				<KeyboardAwareScrollView
					// enableOnAndroid
					ref={scrollRef}
					keyboardShouldPersistTaps="handled"
					extraHeight={extraHeight}
					scrollEventThrottle={20}
					pointerEvents={pointerEvents}
					contentContainerStyle={[
						{
							paddingHorizontal: $size(horizontalPadding),
						},
						scrollStyle,
					]}>
					{children}
					{/* {keyboardSpacerOn && <KeyboardSpacer />} */}
				</KeyboardAwareScrollView>
			</SafeAreaView>
		)
	} else {
		return (
			<SafeAreaView style={styles.view}>
				<View
					style={[
						viewStyle,
						{
							flex: 1,
						},
					]}
					pointerEvents={pointerEvents}>
					{children}
				</View>
				{/* {keyboardSpacerOn && <KeyboardSpacer />} */}
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		zIndex: 2,
	},
})
