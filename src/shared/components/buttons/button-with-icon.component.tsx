import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Button, ButtonProps } from './button.component'

interface ButtonWithIconProps extends ButtonProps {
	iconSource: any
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
	iconSource,
	...props
}) => {
	return (
		<Button
			mod="default"
			icon={
				<Image
					source={iconSource}
					resizeMode="contain"
					style={styles.buttonIcon}
				/>
			}
			{...props}
		/>
	)
}

const styles = StyleSheet.create({
	buttonIcon: {
		height: 20,
		width: 20,
		marginRight: 10,
		marginTop: -2,
	},
})
