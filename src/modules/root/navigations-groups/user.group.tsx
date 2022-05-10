import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserRouteKey } from '@/typing'
import { Text } from 'react-native'
import { AccountScreen } from '@/modules/account/screens'

const Stack = createNativeStackNavigator()

export const UserNavigationGroup = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false, gestureEnabled: false }}
			initialRouteName={UserRouteKey.Profile}>
			<Stack.Screen
				name={UserRouteKey.Profile}
				component={AccountScreen}
			/>
		</Stack.Navigator>
	)
}
