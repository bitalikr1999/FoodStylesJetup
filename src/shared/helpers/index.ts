import { Alert } from 'react-native'

export * from './render.helper'
export * from './style.helper'

export * from './date.helper'

export const notAviable = () => {
	Alert.alert('This feature is not available at the moment')
}
