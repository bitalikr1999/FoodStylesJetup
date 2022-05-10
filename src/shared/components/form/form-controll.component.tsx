import { FontKey } from '@/typing/enums/fonte-key.enum'
import React from 'react'
import {
	StyleSheet,
	TextInput,
	TextInputProps,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native'
import { Txt } from '../typography'

interface FormControllProps extends TextInputProps {
	label: string
	error?: string
	inputStyle?: TextInputProps['style']
	containerStyle?: ViewStyle
	textStyle?: TextStyle
	mod?: 'primary' | 'secondary'
}

export const FormControll: React.FC<FormControllProps> = ({
	label,
	error,
	inputStyle,
	containerStyle,
	textStyle,
	mod = 'primary',
	...props
}) => {
	return (
		<View
			style={[
				styles.container,
				styles[`container${mod}`],
				containerStyle,
			]}>
			<Txt
				font={FontKey.ProximaNovaSemibold}
				style={[styles.label, styles[`label${mod}`], textStyle]}>
				{label}
			</Txt>
			<TextInput
				style={[styles.input, styles[`input${mod}`]]}
				{...props}
			/>
			{error ? (
				<View style={styles.errorContainer}>
					<Txt
						font={FontKey.ProximaNovaSemibold}
						style={styles.error}>
						{error}
					</Txt>
				</View>
			) : null}
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		marginBottom: 13,
	},
	containerprimary: {},
	containersecondary: {},
	label: {
		color: '#fff',
		fontSize: 16,
		marginBottom: 7,
	},
	labelprimary: {},
	labelsecondary: {
		fontSize: 14,
		color: '#434343',
		lineHeight: 14,
		marginBottom: 5,
	},
	input: {
		height: 35,

		borderRadius: 4,
		paddingLeft: 11,
		fontFamily: FontKey.ProximaNovaSemibold,
		color: '#434343',
	},
	inputprimary: {
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,.4)',
		backgroundColor: '#fff',
	},
	inputsecondary: {
		backgroundColor: '#ececec',
	},
	errorContainer: {
		backgroundColor: '#f13838',
		padding: 5,
		borderRadius: 4,
		marginTop: 5,
	},
	error: {
		color: '#fff',

		fontSize: 14,
	},
})
