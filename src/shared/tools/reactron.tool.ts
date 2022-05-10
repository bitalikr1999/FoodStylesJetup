import AsyncStorageLib from '@react-native-async-storage/async-storage'
import Reactotron, { networking } from 'reactotron-react-native'

Reactotron.setAsyncStorageHandler(AsyncStorageLib)
	.configure()
	.useReactNative()
	.use(
		networking({
			ignoreContentTypes: /^(image)\/.*$/i,
			ignoreUrls: /\/(logs|symbolicate)$/,
		}),
	)
	.connect()

const yeOldeConsoleLog = console.log
console.log = (...props) => {
	yeOldeConsoleLog(...props)
	Reactotron.log(...props)
}
console.error = Reactotron.error
console.warn = Reactotron.warn
