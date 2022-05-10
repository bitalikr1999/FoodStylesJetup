import AsyncStorage from '@react-native-async-storage/async-storage'
import _ from 'lodash'

export enum AsyncStorageKey {
	Tokens = '=tokens=',
	Profile = '=profile=',
}

const set = async (key: AsyncStorageKey, data: any) => {
	await AsyncStorage.setItem(key, JSON.stringify(data))
}

const get = async (key: AsyncStorageKey) => {
	const data = await AsyncStorage.getItem(key)
	if (!data) return null

	if (_.isString(data)) return JSON.parse(data)
	else return data
}

const del = async (key: AsyncStorageKey) => {
	await AsyncStorage.removeItem(key)
}

export const storage = {
	set,
	get,
	del,
}
