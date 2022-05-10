declare module 'validatorjs/src/lang/en' {
	var any: any
	export default any
}

declare module 'cachios' {
	var any: any
	export default any

	export const CachiosInstance: any
}

declare module 'react-native-expire-storage' {
	export function setItem(
		key: string,
		value: unknown,
		ttl: number,
	): Promise<void>
	export function getItem(key: string): Promise<unknown>
	export function removeItem(key: string): Promise<void>
}

declare module 'react-native-image-slider-box' {
	var any: {
		SliderBox: any
	}
	export default any

	export const SliderBox: any
}

declare module 'react-native-video-player' {
	var any: any
	export default any
}
