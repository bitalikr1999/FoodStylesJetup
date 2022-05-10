import { FontKey } from '@/typing/enums/fonte-key.enum'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Txt } from './txt.component'

interface ErrorTxtProps {
	text: string
}

export const ErrorTxt: React.FC<ErrorTxtProps> = ({ text }) => {
	return (
		<View style={styles.errorContainer}>
			<Txt font={FontKey.ProximaNovaSemibold} style={styles.error}>
				{text}
			</Txt>
		</View>
	)
}

const styles = StyleSheet.create({
	errorContainer: {
		backgroundColor: '#f13838',
		padding: 5,
		borderRadius: 4,
		marginTop: 5,
	},
	error: {
		color: '#fff',

		fontSize: 16,
	},
})
