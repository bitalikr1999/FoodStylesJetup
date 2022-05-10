import React from 'react'
import { Dimensions, Image, View } from 'react-native'

export const LoadingScreen = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#F3C742' }}>
			<Image
				source={require('@/assets/images/splash.png')}
				resizeMode="cover"
				style={{
					width: Dimensions.get('screen').width,
					height: Dimensions.get('screen').height,
				}}
			/>
		</View>
	)
}
