import React, { FC } from 'react'
import { Text, StyleSheet, TextStyle, TextProps } from 'react-native'

import { $size } from '@/shared/helpers'
import { FontKey } from '@/typing/enums/fonte-key.enum'

const sizes = {
	es: $size(14, 12),
	sm: $size(16, 12),
	md: $size(20, 14),
	lg: $size(24, 18),
	xl: $size(36, 28),
}

const lineHeights = {
	es: $size(16, 12),
	sm: $size(18, 14),
	md: $size(22, 16),
	lg: $size(26, 20),
	xl: $size(38, 30),
}

export interface TxtProps extends TextProps {
	children: any
	font?: FontKey
	style?: TextStyle | TextStyle[]
	mod?: keyof typeof sizes
	hide?: Boolean
}

export const Txt: FC<TxtProps> = ({
	children,
	font = FontKey.ProximaNovaRgular,
	style = {},
	mod = 'md',
	hide,
	...props
}) => {
	if (hide === true) return null

	return (
		<Text
			{...props}
			style={[
				{
					...styles.text,
					fontFamily: font,
					fontSize: sizes[mod],
					lineHeight: lineHeights[mod],
				},
				style,
			]}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	text: {},
})
