import React from 'react'
import { AppRegistry } from 'react-native'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { globalContainer, GlobalDataKey } from '@/shared/tools'

const httpLink = createHttpLink({
	uri: 'https://api-dev.foodstyles.com/graphql',
})

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = globalContainer.get(GlobalDataKey.Token)
	// return the headers to the context so httpLink can read them
	console.log('token', token)
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

export const apiClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
})
