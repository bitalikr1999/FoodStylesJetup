export enum GlobalDataKey {
	Token = '-token-',
	RefreshToken = '-refresh-token-',
	StayLogged = '-stay-logged-',
}

const globalData: Partial<Record<GlobalDataKey, any>> = {}

const set = (key: GlobalDataKey, value: any) => {
	globalData[key] = value
}

const get = (key: GlobalDataKey) => globalData[key]

export const globalContainer = {
	set,
	get,
}
