import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { Root } from './src/modules/root'
import './src/shared/tools/reactron.tool'
import SplashScreen from 'react-native-splash-screen'
import { ApolloProvider } from '@apollo/client'
import { apiClient } from '@/api/api.client'

const App = () => {
	useEffect(() => {
		SplashScreen.hide()
	}, [])

	return (
		<ApolloProvider client={apiClient}>
			<Provider store={store}>
				<Root />
			</Provider>
		</ApolloProvider>
	)
}

export default App
