export const getYearsList = () => {
	const years = []

	let current = new Date().getFullYear()

	for (let index = 0; index < 300; index++) {
		years.push({
			key: String(current),
			label: String(current),
		})
		current--
	}

	return years
}


export const getTimePersent = (startTime: number, maxTimeSecond: number) => {
	if (!maxTimeSecond) return null 
	const time = (new Date().getTime() - startTime) / 1000 
	const persent = Math.round(time / maxTimeSecond * 100)
	return persent > 100 ? 100 : persent
}