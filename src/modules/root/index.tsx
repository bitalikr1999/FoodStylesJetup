import React from 'react'
import { useSelector } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import { selectNavGroup } from '@/store/navigation'

import { navigationRef } from './helpers/navigation.helper'
import { ManagerKey, NavGroup } from '@/typing'
import { GuestNavigationGroup, UserNavigationGroup } from './navigations-groups'
import { NavigationContainer } from '@react-navigation/native'
import { LoadingScreen } from './screens'
import { useManager } from '@/shared/hooks'

const groups = {
	[NavGroup.Guest]: <GuestNavigationGroup />,
	[NavGroup.User]: <UserNavigationGroup />,
	[NavGroup.Loading]: <LoadingScreen />,
}
export const Root = () => {
	const activeGroup = useSelector(selectNavGroup)
	const appManager = useManager(ManagerKey.App)

	const init = () => {
		setTimeout(() => {
			appManager.init()
			SplashScreen.hide()
		}, 300)
	}

	React.useEffect(() => {
		init()
	}, [])

	return (
		<>
			<NavigationContainer key="navigation" ref={navigationRef}>
				{groups[activeGroup]}
			</NavigationContainer>
		</>
	)
}
