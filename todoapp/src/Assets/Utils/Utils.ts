export const timestampToDate = (timestamp: number | string) => {
	const date = new Date(timestamp)
	return date.toLocaleDateString()
}
