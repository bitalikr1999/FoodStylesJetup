import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GuestRouteKey } from '@/typing'
import {
	SignInScreen,
	SignUpScreen,
	WelcomeScreen,
} from '@/modules/auth/screens'

const Stack = createNativeStackNavigator()

export const GuestNavigationGroup = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false, gestureEnabled: false }}
			initialRouteName={GuestRouteKey.Welcome}>
			<Stack.Screen
				name={GuestRouteKey.Welcome}
				component={WelcomeScreen}
			/>
			<Stack.Screen
				name={GuestRouteKey.SignUp}
				component={SignUpScreen}
			/>
			<Stack.Screen
				name={GuestRouteKey.SignIn}
				component={SignInScreen}
			/>
		</Stack.Navigator>
	)
}
