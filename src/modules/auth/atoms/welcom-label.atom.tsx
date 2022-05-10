import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Txt } from '@/shared/components/typography'
import { colors } from '@/shared/config'
import { $size } from '@/shared/helpers'
import { FontKey } from '@/typing/enums/fonte-key.enum'

interface WelcomeLabelAtomProps {
	text: string
}

export const WelcomeLabelAtom: React.FC<WelcomeLabelAtomProps> = ({ text }) => {
	return (
		<View style={styles.container}>
			<Txt style={styles.text} font={FontKey.ProximaNovaBold}>
				{text}
			</Txt>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: $size(50, 40),
		width: 300,
		transform: [{ rotate: '-30deg' }],
		backgroundColor: '#f13838',
		flexDirection: 'row',
		// justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: -50,
		top: 0,
		paddingLeft: 60,
	},
	text: {
		fontSize: $size(18, 16),
		color: colors.PRIMARY_TEXT,
	},
})
