import { FontKey } from '@/typing/enums/fonte-key.enum'
import React from 'react'
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native'
import { Txt } from '../typography'

export interface ButtonProps {
	mod?: 'default' | 'success' | 'simple' | 'inverted'
	style?: ViewStyle
	text: string
	icon?: JSX.Element
	onPress: () => void
	isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
	mod = 'default',
	style,
	text,
	icon,
	onPress = () => {},
	isLoading,
}) => {
	const renderContent = () => {
		if (isLoading) {
			return <ActivityIndicator color="#fff" />
		}
		return (
			<>
				{icon ? icon : null}
				<Txt
					font={FontKey.ProximaNovaBold}
					style={[styles.text, styles[`text${mod}`]]}>
					{text}
				</Txt>
			</>
		)
	}
	return (
		<TouchableOpacity
			style={[styles.container, styles[mod], style]}
			onPress={onPress}>
			{renderContent()}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 44,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 40,
		flexDirection: 'row',
	},
	default: {
		backgroundColor: '#fff',
	},
	success: {
		backgroundColor: '#11ce90',
	},
	simple: {},
	inverted: {
		// backgroundColor: 'none'
		borderWidth: 1,
		borderColor: '#d9d9d9',
	},
	textRow: {},
	text: {
		fontSize: 16,
		lineHeight: 20,
	},
	textdefault: {},
	textsuccess: {
		color: '#fff',
	},
	textsimple: {
		color: '#fff',
	},
	textinverted: {},
})
